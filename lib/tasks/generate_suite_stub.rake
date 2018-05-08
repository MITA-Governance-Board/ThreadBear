namespace :threadbear do
  desc 'Create the stub of a ValidationSuite from a Requirement id.'
  task :stub, [:validation_id] => [:environment] do |t, args|

    validation = Validation.find(args[:validation_id])
    puts "require_relative './ValidationSuiteBase'"
    puts "class #{validation._id.gsub('.', '_')}_Validation < ValidationSuiteBase"
      puts "\tdef initialize(url)"
      puts "\t\tsuper(url)"
      puts "\t\t@validation_id=#{validation.id}"
      puts "\tend"
      puts "\tvalidation 'main' do"
      puts "\t\traise TodoException.new 'Not implemented'"
      puts "\tend"
    puts "end"

  end
end

desc 'Start development server'
task :start => 'start:development'
