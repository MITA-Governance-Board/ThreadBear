# PS_OName: Provider organization names are appropriately stored in Provider Screening applications
require_relative '../ValidationSuiteBase'
class PS_OName_Validation < ValidationSuiteBase
  def initialize(url, validation_instance_id)
    super(url, validation_instance_id)
    @validation_id = 'PS_OName'
  end
  validation 'Load Tasks' do
    response = @client.search(FHIR::Task)
    
    assert_response_ok response do 
      failure(
        name: "The server responded with #{response.code} instead of 200 or 201", 
        mitigation: "Ensure that your server is accessible at #{@url}"
      )
    end
    
  end
    # TODO: Failure: no response from the FHIR server
    # TODO: Failure: no provider screening applications exist
    # TODO: Failure: no PS apps for Organizations exist
    # TODO: Failure: a PS app for an Organization exists with no name

    response.resource.entry.each do |app|
      next unless app.resource.contained.first.resourceType == 'Organization'
      app.resource.contained.first.name.present? ? 'yay' : 'no'
    end
  end
end
