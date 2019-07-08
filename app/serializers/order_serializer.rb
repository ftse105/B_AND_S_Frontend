class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :active
  belongs_to :user
end
