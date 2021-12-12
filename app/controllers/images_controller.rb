class ImagesController < ApplicationController
  before_action :authenticate_user!, except: :index

  def index
    # Try kolxoz pagination for sending 30 pics per page
    images = Image.order(created_at: :desc).limit(30).offset((params.require(:page).to_i - 1) * 30)
    render json: { images: images }, status: :ok
  end
end
