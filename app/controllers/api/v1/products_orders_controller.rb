class Api::V1::ProductsOrdersController < ApplicationController
  def index
    @product_orders = Products_Order.all
    render json: @product_orders
  end

end
