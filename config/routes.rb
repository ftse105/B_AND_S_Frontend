Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      resources :products
      resources :products_orders
      resources :orders
      post "/login", to: "auth#create"
      get "/profile", to: "users#profile"
      get "/auto_login", to: "auth#auto_login"
    end
  end
end
