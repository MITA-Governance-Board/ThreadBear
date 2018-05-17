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
    methods = self.methods.grep(/_test$/).sort
    validation = Validation.find(@validation_id)
    instance = ValidationInstance.new(
        url: @url,
        validation: validation
      )
    methods.each do |method|
      begin
        self.method(method).call
      rescue AssertionException => e
        Failure.create( name: method.to_s, description: e.to_s, mitigation: nil, severity: 'failure', validation_instance: instance) 
      rescue TodoAssertion => e 
        Failure.create( name: method.to_s, description: e.to_s, mitigation: nil, severity: 'failure', validation_instance: instance)
      end
      instance.save     
    end
    return instance
  end
end
