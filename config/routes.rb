Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :admin do
    resources :gallery
    resources :suggestions, only: %i[index show destroy]
  end

  get '/', to: 'application#index'
  resources :gallery, only: :index
  resources :suggestions, only: :create
end
