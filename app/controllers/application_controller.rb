class ApplicationController < ActionController::Base
  def index
    render 'layouts/application.html'
  end

  protect_from_forgery with: :null_session
end
