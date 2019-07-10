class User < ApplicationRecord
  has_secure_password
  validates :username, uniqueness: { case_sensitive: false }

  has_many :orders
  has_many :products_orders, through: :orders

  has_many :products
  has_many :products_orders, through: :products

  def current_order
    # user.orders.last
    user.orders.where(active: false)
  end

end
