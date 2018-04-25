# Baseline requirements for testing that may come from various sources
class Requirement
  include Mongoid::Document
  field :id,                          type: String
  field :description,                 type: String
  field :version,                     type: String
  field :checklist,                   type: String
  field :checklist_type,              type: String
  field :checklist_id,                type: String
  field :checklist_category,          type: String
  field :additional_manual_testing,   type: String
  field :critical,                    type: Boolean

  has_and_belongs_to_many :validations
  has_and_belongs_to_many :sources
end
