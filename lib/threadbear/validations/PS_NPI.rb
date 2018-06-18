# PS_NPI: Provider Screening applications contain an NPI
require_relative '../ValidationSuiteBase'
class PS_NPI_Validation < ValidationSuiteBase
  def initialize(url)
    super(url)
    @validation_id = 'PS_NPI'
  end
  validation 'main' do
    response = @client.search(FHIR::Task)
    assert_response_ok(response)

    # TODO: Failure: no response from the FHIR server
    # TODO: Failure: no provider screening applications exist
    # TODO: Failure: no PS apps with an NPI exist

    response.resource.entry.each do |app|
      app.resource.contained.each do |provider|
        provider.identifier.each do |id|
          id.system == 'http://hl7.org/fhir/sid/us-npi' && id.value.present? ? 'yay' : 'no'
        end
      end
    end
  end
end
