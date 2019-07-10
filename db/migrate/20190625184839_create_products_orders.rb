class CreateProductsOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :products_orders do |t|
      t.integer :order_id
      t.integer :product_id

      t.timestamps
    end
  end
end
