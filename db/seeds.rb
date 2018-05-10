# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

sources = JSON.parse(File.read('lib/threadbear/sources.json'))
sources.each do |source|
  Source.create!(source)
end

requirements = JSON.parse(File.read('lib/threadbear/requirements.json'))
requirements.each do |requirement|
  requirement['id'] = requirement['id'].gsub(/[^a-zA-Z\d\s:]/, '_')
  Requirement.create!(requirement)
end

validations = JSON.parse(File.read('lib/threadbear/validations.json'))
validations.each do |validation|
  validation['requirement_ids'] = validation['requirement_ids'].map { |id| id.gsub(/[^a-zA-Z\d\s:]/, '_') }
  Validation.create!(validation)
end
