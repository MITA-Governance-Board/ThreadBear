# A validation that can be performed to adjudicate server compliance with a given requirement

# TODO: Rename to requirement execution

class RequirementInstance
    include Mongoid::Document
    include Mongoid::Timestamps

    belongs_to :requirement

    has_many :validation_instances
  end
  