# Failures (errors, warnings, etc.) that could be encountered during a test run
class Failure
  include Mongoid::Document
  field :id,                    type: String
  field :name,                  type: String
  field :description,           type: String
  field :mitigation,            type: String
  field :severity,              type: String

  belongs_to :validation_instance
end
