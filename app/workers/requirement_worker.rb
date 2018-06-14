# Worker for async test runs in the background
class RequirementWorker
  include Sidekiq::Worker

  def perform(requirement_instance_id)
    @instance = RequirementInstance.find(requirement_instance_id)

    @instance.validation_instances.each do |v| 
      begin
        "#{v.validation._id}_Validation".constantize.new(@instance.server_url, v._id).run()  
      rescue => exception
        v.state =  'error'
        v.save
      end  

    end
    @instance.set_state()
    @instance.save
  end
end
