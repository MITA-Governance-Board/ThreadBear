# Create ValidationSuite stubs using `rake threadbear:stub[validation_id]``
namespace :threadbear do
  desc 'Create the stub of a ValidationSuite from a Validation id.'
  task :stub, [:validation_id] => [:environment] do |_t, args|
    validation = Validation.find(args[:validation_id])
    stub_file = File.new("lib/threadbear/validations/#{validation.id}.rb", 'w')
    stub_file_text = %(# #{validation.id}: #{validation.name}
require_relative '../ValidationSuiteBase'
class #{validation._id.tr('.', '_')}_Validation < ValidationSuiteBase
  def initialize(url)
    super(url)
    @validation_id = '#{validation.id}'
  end
  validation 'main' do
    raise TodoException.new 'Not implemented'
  end
end
)
    stub_file.puts(stub_file_text)
    stub_file.close
  end
end

desc 'Start development server'
task start: 'start:development'
