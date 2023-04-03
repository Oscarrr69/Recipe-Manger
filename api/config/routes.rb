Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # Post route for creating a new user
  post '/create', to: 'users#create'

  # Post route for login endpoint
  post 'login', to: 'sessions#create'

  # Delete route for Logout
  delete 'logout', to: 'sessions#destroy'

  # route for viewing specific user
  get 'users/:id', to: 'users#show'

  # route for viewing recipe
  get "/recipes", to: "recipes#index"

  # route for viewing a specific recipe
  get "/recipes/:id", to: "recipes#show"

  # route for creating a recipe
  post "/recipes", to: "recipes#create"

  # route for creating favorite
  post "/favorites/create", to: "favorites#create"

  # route for viewing all favorite
  get "/favorites/index", to: "favorites#index"

  # route for viewing a specific favorite
  get "/favorites/:id", to: "favorites#show"
  
end
