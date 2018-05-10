require_relative '../ValidationSuiteBase'
class PS_PName_Validation < ValidationSuiteBase
	def initialize(url)
		super(url)
		@validation_id='PS_PName'
	end
	validation 'main' do
		assert_equal(2,3)
	end
end
