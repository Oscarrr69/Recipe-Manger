class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email
  
  has_many :favorites 
  has_many :recipes, through: :favorites
end
