class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.integer :user_id
      t.string :name
      t.string :description
      t.string :image_url
      t.string :category
      t.string :size
      t.integer :price
      t.boolean :sold

      t.timestamps
    end
  end
end
