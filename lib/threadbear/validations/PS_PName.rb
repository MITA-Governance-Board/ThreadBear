# PS_PName: Provider names are appropriately stored in Provider Screening applications
require_relative '../ValidationSuiteBase'
class PS_PName_Validation < ValidationSuiteBase
  def initialize(url)
    super(url)
    @validation_id = 'PS_PName'
  end
  validation 'Load Tasks' do
    response = @client.search(FHIR::Task)
    assert_response_ok response do 
      failure(
        name: "The server responded with #{response.code} instead of 200 or 201", 
        description: "The server either didn't respond or didn't respond correctly, this could be caused by the incorrect URL, or that the server is misconfugured. \n It could also be an issue with authentication." ,
        mitigation: "Ensure that your server is accessible at #{@url}"
      )
    end
    entries = response.resource.entry
    foundPrac = false
    entries.map do |entry|
      entry.resource.contained.map do |applicant|
        if applicant.resourceType == "Practitioner" then 
          # TODO: We don't have any Orgs in our sample data, don't know where Name is supposed to sit

          
          names = applicant.identifier.map{|i| i.name}
          foundPrac = true
          assert names.length > 0 do 
            failure(
              name: "Valid practitioner identifier not found.", 
              description: "We found an Practitioner that did not have the required identifier of '2.16.840.1.113883.4.4'. Found instead: #{systems.join(', ')}" ,
              mitigation: "Ensure that your system properly identifies practitioners."
            )
          end
        end
      end
    end
  assert foundPrac do 
    failure(
      name: "Unable to verify", 
      description: "An practitioner was not found, could not verify proper identifiers." ,
      mitigation: "Ensure that you have an Practitioner that appears in the response to #{@url}/Task",
      severity: "warning"
    )
  end
end
