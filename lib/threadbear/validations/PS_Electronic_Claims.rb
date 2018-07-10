# PS_Electronic_Claims: Provider Screening applications contain an indicator for electronic claims acceptance
require_relative '../ValidationSuiteBase'
class PS_Electronic_Claims_Validation < ValidationSuiteBase
  def initialize(url)
    super(url)
    @validation_id = 'PS_Electronic_Claims'
  end
  validation 'main' do
    response = @client.search(FHIR::Task)
    assert_response_ok(response)

    # TODO: Failure: no response from the FHIR server
    # TODO: Failure: no provider screening applications exist
    # TODO: Failure: a PS app is missing the Electronic Claims indicator

    response.resource.entry.each do |app|
      app.resource.input.each do |input|
        # TODO: When PSM implements the Electronic Claims indicator, review this label and value
        next unless input.type.text == 'Electronic Claims Indicator'
        input.value.present? ? 'yay' : 'no'
      end
    end
  end
end
