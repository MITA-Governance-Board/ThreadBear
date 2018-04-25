# The source of a requirement that drives a validation
class Source
  include Mongoid::Document
  field :id,    type: String
  field :name,  type: String
  field :type,  type: String
  field :url,   type: String

  has_and_belongs_to_many :requirements
end
