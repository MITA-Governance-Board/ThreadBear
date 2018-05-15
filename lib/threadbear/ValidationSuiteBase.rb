require_relative './assertions'

class ValidationSuiteBase
  include Assertions
  attr_reader :results, :url, :validation_id
  def initialize(url)
    @client = FHIR::Client.new(url)
    @url = url
    @results = []
    FHIR::Model.client = @client
    @validation_id = nil
  end

  def self.validation(id, &block)
    define_method("#{id}_test") do
      instance_eval &block
    end
  end

  def run
    instances = []
    methods = self.methods.grep(/_test$/).sort
    methods.each do |method|
      begin
        result = 'PASS'
        self.method(method).call
      rescue AssertionException => e
        result = 'FAIL'
      end
      validation = Validation.find(@validation_id)
      instance = ValidationInstance.new(
        state: result,
        url: @url,
        validation: validation
      )
      instance.save
      instances << instance
      
    end
    return instances
  end
end
