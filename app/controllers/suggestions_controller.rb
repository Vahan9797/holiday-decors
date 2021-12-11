class SuggestionsController < ApplicationController
  before_action :authenticate_user!, except: :create

  def index
    Suggestion.all
  end

  def show
    render json: { suggestion: Suggestion.find(params.require(:id)) }, status: :ok
  end

  def create
    render json: { suggestion: Suggestion.create!(create_params) }, status: :ok
  rescue ActiveRecord::RecordInvalid
    render json: { message: 'Invalid parameters for create function.' }, status: :bad_request
  end

  def destroy
    Suggestion.destroy!(params.require(:id))
    render json: { message: 'Suggestion successfully deleted.' }, status: :ok
  rescue ActiveRecord::RecordNotDestroyed
    render json: { message: 'Failed to delete given suggestion.' }, status: :not_found
  end

  private

  def create_params
    params.permit(%i[first_name last_name email tel_number message]).tap do |params|
      params.require(:first_name)
      params.require(:last_name)
      params.require(:email)
      params.require(:tel_number)
      params.require(:message)
    end
  end
end
