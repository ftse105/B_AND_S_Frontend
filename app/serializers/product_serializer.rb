class ProductSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :description, :category, :image_url, :size, :price, :sold
  belongs_to :user
end
