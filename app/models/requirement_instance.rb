# A validation that can be performed to adjudicate server compliance with a given requirement
# TODO: Rename to requirement execution
class RequirementInstance
  include Mongoid::Document
  include Mongoid::Timestamps

  # has_many :requirements
  field :server_name, type: String
  field :server_url, type: String
  has_many :validation_instances
end
