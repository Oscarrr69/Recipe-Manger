class UsersController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorized, only: :create 

    # GET /users/1
  def show
    current_user = User.find(session[:user_id])
    render json: current_user, status: :ok
  end
  # POST /users
  def create
    user = User.create(user_params)
    if user.valid?
      render json: user, status: :created
    else
      render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_user
    #   user = User.find(params[:id])
    # end
    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:username, :email, :password, :password_confirmation)
    end
    
end
