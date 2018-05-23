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

  # validation 'Load Tasks' do
  #   assert_equal(2,3, "Apparently, you need to change the value of 2...")
  # end
end
