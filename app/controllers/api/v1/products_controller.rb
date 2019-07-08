class Api::V1::ProductsController < ApplicationController
  skip_before_action :authorized, only: [:index]

  def index
    @products = Product.all
    render json: @products
  end

  def create
    @product = Product.create(product_params)
    @user = User.find_by(id: product_params[:user_id])
    render json: @product
  end

  def show
    @product = Product.find(params[:id])
    render json: @product
  end

  def destroy
    @product = Product.find(params[:id])
    @product.destroy
  end

  private
  def product_params
		params.require(:product).permit(:user_id, :name, :description, :category, :image_url, :size, :price, :sold)
	end

end
