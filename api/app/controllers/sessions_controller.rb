class SessionsController < ApplicationController
    wrap_parameters format: []

     # Login endpoint
    def login
        user = User.find_by(username: params[:username])
        if user &.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, message: 'Login successfully', status: :ok
        else
            render json: { invalid: 'Invalid username or password' }, status: :unauthorized
        end
    end
    
    # Logout
    def destroy
        session.delete(:user_id)
        render json: {message: 'Logged out'}, status: :ok
    end
        
end
