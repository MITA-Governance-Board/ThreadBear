# PS_OName: Provider organization names are appropriately stored in Provider Screening applications
require_relative '../ValidationSuiteBase'
class PS_EIN_Validation < ValidationSuiteBase
  def initialize(url, validation_instance_id)
    super(url, validation_instance_id)
    @validation_id = 'PS_EIN'
  end
  validation 'Load Tasks' do
    # response = @client.search(FHIR::Task)
    
    failure(
        name: "Invalid Response Code",
        description: "The server responded with an invalid code, expected a 200 or a 201." ,
        mitigation: "Ensure that your server is accessible at #{@url}"
    )
    
    
  end

  # validation 'Load Tasks' do
  #   assert_equal(2,3, "Apparently, you need to change the value of 2...")
  # end
end
