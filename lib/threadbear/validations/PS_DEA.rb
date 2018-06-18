# PS_DEA: Provider Screening applications contain DEA numbers
require_relative '../ValidationSuiteBase'
class PS_DEA_Validation < ValidationSuiteBase
  def initialize(url)
    super(url)
    @validation_id = 'PS_DEA'
  end
  validation 'main' do
    response = @client.search(FHIR::Task)
    assert_response_ok(response)

    # TODO: Failure: no response from the FHIR server
    # TODO: Failure: no provider screening applications exist
    # TODO: Failure: no PS apps have the DEA number

    response.resource.entry.each do |app|
      app.resource.input.each do |input|
        # TODO: When PSM implements the DEA number, review this label and value
        next unless input.type.text == 'DEA number'
        input.value.present? ? 'yay' : 'no'
      end
    end
  end
end
