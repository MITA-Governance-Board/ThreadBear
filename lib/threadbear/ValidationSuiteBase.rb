require_relative './assertions'

class ValidationSuiteBase
  include Assertions
  attr_reader :results, :url, :validation_id, :validation_instance_id
  def initialize(url, validation_instance_id)
    @client = FHIR::Client.new(url)
    @url = url
    @results = []
    FHIR::Model.client = @client
    @validation_id = nil
    @validation_instance_id = validation_instance_id
  end

  def self.validation(id, &block)
    define_method("#{id}_test") do
      instance_eval &block
    end
  end

  def failure(name: nil, description: nil, mitigation: nil, severity: 'failure')
    Failure.create( name: name, description: description, mitigation: mitigation, severity: severity, validation_instance_id: @validation_instance_id)
  end

  def run()
    methods = self.methods.grep(/_test$/).sort

    # instance = Validation.find(validation_instance_id)
    methods.each do |method|
      begin
        self.method(method).call
      rescue AssertionException => e
        Failure.create( name: method.to_s, description: e.to_s, mitigation: nil, severity: 'failure', validation_instance_id: @validation_instance_id) 
      # rescue TodoAssertion => e 
      #   Failure.create( name: method.to_s, description: e.to_s, mitigation: nil, severity: 'skip', validation_instance_id: @validation_instance_id)
      end      
    end
    validation_instance = ValidationInstance.find(validation_instance_id)
    validation_instance.state = 'complete'
    validation_instance.save
  end
end
