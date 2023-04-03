class Recipe < ApplicationRecord
    has_many :favorites
    has_many :users, through: :favorites


    validates :title, presence: true
    validates :instructions, presence: true, length: {minimum: 50}
end
