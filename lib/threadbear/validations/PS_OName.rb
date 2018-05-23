# PS_OName: Provider organization names are appropriately stored in Provider Screening applications
require_relative '../ValidationSuiteBase'
class PS_OName_Validation < ValidationSuiteBase
  def initialize(url)
    super(url)
    @validation_id = 'PS_OName'
  end
  validation 'Load Tasks' do
    response = @client.search(FHIR::Task)
    
    # TODO refactor so tests look like this
    # assert_response_ok response do 
    #   failure "The server didn't respond correctly", "mitigation instructions"
    # end

    assert_response_ok(response)
  end

  validation 'Load Tasks' do
    assert_equal(2,3, "Apparently, you need to change the value of 2...")
  end
end
