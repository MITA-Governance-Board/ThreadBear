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
    puts "Created #{id}_test"
    define_method("#{id}_test") do
      instance_eval &block
    end
  end

  def run
    methods = self.methods.grep(/_test$/).sort
    methods.each do |method|
      begin
        result = 'PASS'
        self.method(method).call
      rescue AssertionException => e
        result = 'FAIL'
      end
      validation = Validation.find(@validation_id)
      ValidationInstance.new(
        :state => result,
        :url => @url,
        :validation => validation)
      .save
    end
  end
end
