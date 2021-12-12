Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :admin, defaults: { format: :json } do
    resources :suggestions, only: %i[index show destroy]
    resources :images, except: :update
  end

  devise_for :admins,
    defaults: { format: :json },
    path: '',
    path_names: {
      sign_in: 'admin/login',
      sign_out: 'admin/logout',
      registration: 'admin/signup'
    },
    controllers: {
      sessions: 'sessions',
      registrations: 'registrations'
    }

  root to: 'application#index'
  resources :suggestions, only: :create
  resources :images, only: :index
end
