# A validation that can be performed to adjudicate server compliance with a given requirement
# TODO: Rename to requirement execution
class RequirementInstance
  include Mongoid::Document
  include Mongoid::Timestamps

  # has_many :requirements
  field :server_name, type: String
  field :server_url, type: String
  field :state, type: String
  has_many :validation_instances

  def set_state
    unless validation_instances
      update_attribute(:state, 'Not Assessed')
      return
    end
    instance_states = validation_instances.map do |instance|
      instance.state
    end
    # byebug
    if instance_states.include? 'running'
      update_attribute(:state, 'In Progress')
      return
    elsif !instance_states.include? 'passed'
      update_attribute(:state, "Doesn't Meet")
      return
    elsif instance_states.include? 'failed'
      update_attribute(:state, 'Partially Meets')
      return
    elsif self.requirement.additional_manual_testing.present?
      update_attribute(:state, 'Manual Testing Required')
      return
    else
      update_attribute(:state, 'Meets')
    end
  end
end
