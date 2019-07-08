class Api::V1::OrdersController < ApplicationController
  skip_before_action :authorized, only: [:index, :create]

  def index
    @orders = Order.all
    render json: @orders
  end

  def create
    @order = Order.create(order_params)
    render json: @order
  end

  private
  def order_params
    # byebug
    params.require(:order).permit(:user_id, :active)
  end
end
