# PS_Type: Provider Screening applications contain the provider type
require_relative '../ValidationSuiteBase'
class PS_Type_Validation < ValidationSuiteBase
  def initialize(url)
    super(url)
    @validation_id = 'PS_Type'
  end
  validation 'main' do
    response = @client.search(FHIR::Task)
    assert_response_ok(response)

    # TODO: Failure: no response from the FHIR server
    # TODO: Failure: no provider screening applications exist
    # TODO: Failure: a PS app is missing the provider type

    response.resource.entry.each do |app|
      app.resource.input.each do |input|
        next unless input.type.text == 'Provider Type'
        input.value.present? ? 'yay' : 'no'
      end
    end
  end
end
