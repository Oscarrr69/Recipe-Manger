class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :origin, :comment, :user_id, :recipe_id
  
  belongs_to :user 
  belongs_to :recipe 
end
