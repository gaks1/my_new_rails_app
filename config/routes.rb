Rails.application.routes.draw do
  root 'static#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get 'api/greetings/hello', to: 'api/greetings#hello'
end
