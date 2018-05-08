require_relative './ValidationSuiteBase'
class PS_OName_Validation < ValidationSuiteBase
	validation 'main' do
		response = @client.search(FHIR::Task)
		assert_response_ok(response)
	end
end
