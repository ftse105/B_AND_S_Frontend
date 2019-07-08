class ProductsOrderSerializer < ActiveModel::Serializer
  attributes :id, :order_id, :product_id
  belongs_to :product
  belongs_to :order
end
