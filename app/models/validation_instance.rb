# An individual run of one of the available validations on a given server
class ValidationInstance
  include Mongoid::Document
  field :id,              type: String
  field :state,           type: String
  field :actual_result,   type: String
  field :created_at,      type: Time

  belongs_to :validation
  belongs_to :user
  has_many :failures
end
