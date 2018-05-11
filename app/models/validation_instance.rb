# An individual run of one of the available validations on a given server
class ValidationInstance
  include Mongoid::Document
  field :state,           type: String
  field :actual_result,   type: String
  field :created_at,      type: Time
  field :url,             type: String

  belongs_to :validation
  # belongs_to :user
  has_many :failures

  belongs_to :requirement_instance
end
