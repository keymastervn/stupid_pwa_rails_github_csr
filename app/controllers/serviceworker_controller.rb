class ServiceworkerController < ApplicationController
  protect_from_forgery except: [:service_worker, :manifest]
  layout false

  def service_worker
  end

  def manifest
  end
end
