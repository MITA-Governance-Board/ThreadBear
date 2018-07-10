# PS_OName: Provider organization names are appropriately stored in Provider Screening applications
require_relative '../ValidationSuiteBase'
class PS_EIN_Validation < ValidationSuiteBase
  def initialize(url, validation_instance_id)
    super(url, validation_instance_id)
    @validation_id = 'PS_EIN'
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
    foundOrg = false
    entries.map do |entry|
      entry.resource.contained.map do |applicant|
        if applicant.resourceType == "Organization" then 
          systems = applicant.identifier.map{|i| i.system}
          foundOrg = true
          assert systems.includes("2.16.840.1.113883.4.4") do 
            failure(
              name: "Valid organization identifier not found.", 
              description: "We found an Organization that did not have the required identifier of '2.16.840.1.113883.4.4'. Found instead: #{systems.join(', ')}" ,
              mitigation: "Ensure that your system properly identifies organizations."
            )
          end
        end
      end
    end
  assert foundOrg do 
    failure(
      name: "Unable to verify", 
      description: "An organization was not found, could not verify proper identifiers." ,
      mitigation: "Ensure that you have an Organization that appears in the response to #{@url}/Task",
      severity: "warning"
    )
  end

    
    
    
  end

  # validation 'Load Tasks' do
  #   assert_equal(2,3, "Apparently, you need to change the value of 2...")
  # end
end
