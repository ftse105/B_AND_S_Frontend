class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :orders, :products, :products_orders

end
