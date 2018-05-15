# A validation that can be performed to adjudicate server compliance with a given requirement

# TODO: Rename to requirement execution

class RequirementInstance
    include Mongoid::Document
    include Mongoid::Timestamps

    #TODO Maybe have an array of requirements
    belongs_to :requirement

    #TODO: Array of tags
    

    has_many :validation_instances
  end
  