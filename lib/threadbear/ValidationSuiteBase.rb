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

  def run(validation_instance_id)
    methods = self.methods.grep(/_test$/).sort
    # instance = Validation.find(validation_instance_id)
    methods.each do |method|
      begin
        self.method(method).call
      rescue AssertionException => e
        Failure.create( name: method.to_s, description: e.to_s, mitigation: nil, severity: 'failure', validation_instance_id: validation_instance_id) 
      rescue TodoAssertion => e 
        Failure.create( name: method.to_s, description: e.to_s, mitigation: nil, severity: 'skip', validation_instance_id: validation_instance_id)
      end      
    end

    validation_instance = ValidationInstance.find(validation_instance_id)
    validation_instance.state = 'complete'
    validation_instance.save

  end
end
