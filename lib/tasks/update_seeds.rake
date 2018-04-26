# Run `rake seeds:update` to update the json seed files in /lib/threadbear
namespace :seeds do
  collections = %w[Source Requirement Validation]
  task update: :environment do
    collections.each do |collection|
      table = collection.downcase.pluralize
      model = collection.constantize
      filename = '/lib/threadbear/' + table + '.json'
      objects = model.all.to_ary
      File.open(File.join(Rails.root, filename), 'w') do |f|
        f.puts('[')
        objects.each_with_index do |object, index|
          if index == objects.size - 1
            f.puts(object.to_json)
          else
            f.puts(object.to_json + ',')
          end
        end
        f.puts(']')
      end
    end
  end
end
desc 'Export current database data as seed files'
task update: 'seeds:update'
