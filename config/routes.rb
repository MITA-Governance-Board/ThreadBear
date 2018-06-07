


Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :requirements do
    member do 
      post 'execute'
    end
  end
  resources :sources
  resources :test_executions, only: [:show, :index]
  resources :validations 
  resources :validation_instances, only: [:show]
  resources :requirement_instances, only: [:index, :show, :create] 
  require 'sidekiq/web'
  mount Sidekiq::Web => '/sidekiq'
end
