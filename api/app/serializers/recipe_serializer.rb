class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :instructions, :minutes_to_complete
  has_many :users
end
