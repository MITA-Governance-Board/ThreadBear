# PS_EFT: Provider Screening applications contain an indicator for EFT acceptance
require_relative '../ValidationSuiteBase'
class PS_EFT_Validation < ValidationSuiteBase
  def initialize(url)
    super(url)
    @validation_id = 'PS_EFT'
  end
  validation 'main' do
    response = @client.search(FHIR::Task)
    assert_response_ok(response)

    # TODO: Failure: no response from the FHIR server
    # TODO: Failure: no provider screening applications exist
    # TODO: Failure: a PS app is missing the EFT indicator

    response.resource.entry.each do |app|
      app.resource.input.each do |input|
        # TODO: When PSM implements the EFT indicator, review this label and value
        next unless input.type.text == 'EFT Indicator'
        input.value.present? ? 'yay' : 'no'
      end
    end
  end
end
