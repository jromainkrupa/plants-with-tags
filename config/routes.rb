Rails.application.routes.draw do
  resources :gardens do
    resources :plants, only: [:create]
  end

  # plants/23/plant_tags/new
  resources :plants, only: [] do 
    resources :plant_tags, only: [:new, :create]
  end

  resources :plants, only: :destroy
end
