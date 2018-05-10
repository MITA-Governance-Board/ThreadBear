Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :requirements do
    member do 
      get 'execute'
    end
  end
  resources :sources
  resources :validations 
end
