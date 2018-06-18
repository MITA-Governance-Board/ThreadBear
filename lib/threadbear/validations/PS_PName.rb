# PS_PName: Provider names are appropriately stored in Provider Screening applications
require_relative '../ValidationSuiteBase'
class PS_PName_Validation < ValidationSuiteBase
  def initialize(url)
    super(url)
    @validation_id = 'PS_PName'
  end
  validation 'main' do
    assert_equal(2, 3)
  end

  # TODO: Failure: no response from the FHIR server
  # TODO: Failure: no provider screening applications exist
  # TODO: Failure: no PS apps for Practitioners exist
  # TODO: Failure: a PS app for an Practitioner exists without a name

  response.resource.entry.each do |app|
    next unless app.resource.contained.first.resourceType == 'Practitioner'
    app.resource.contained.each do |prac|
      prac.name.first.family.present? && prac.name.first.given.first.present? ? 'yay' : 'no'
    end
  end
end
