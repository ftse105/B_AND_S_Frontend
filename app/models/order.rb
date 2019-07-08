class Order < ApplicationRecord
  belongs_to :user
  has_many :products_orders

  after_save :check_if_processed

  # order.update(bought: true)
  # make all the products sold to true
  def check_if_processed
    if self.active == true
      # If you just got rid of your old order, grab a new one
      Order.create(user_id: self.user_id)
    end
  end
end
