# PS_OName: Provider organization names are appropriately stored in Provider Screening applications
require_relative '../ValidationSuiteBase'
class PS_OName_Validation < ValidationSuiteBase
  def initialize(url)
    super(url)
    @validation_id = 'PS_OName'
  end
  validation 'Load Tasks' do
    response = @client.search(FHIR::Task)
    assert_response_ok(response)
    assert_equal(2,3, "Apparently, you need to change the value of 2...")
  end
end
