Rails.application.routes.draw do
  root 'home#index'
  get 'home/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/service-worker.js' => "serviceworker#service_worker"
  get '/manifest.json' => "serviceworker#manifest"
end
