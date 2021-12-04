class ApplicationController < ActionController::Base
  def index
  end

  protect_from_forgery with: :null_session
end
