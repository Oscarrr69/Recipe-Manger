class CreateFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.string :origin
      t.string :comment
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :recipe, null: false, foreign_key: true

      t.timestamps
    end
  end
end
