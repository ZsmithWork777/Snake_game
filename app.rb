require 'sinatra'
set :views, File.join(__dir__, "snake_web")
set  :public_folder, File.join(__dir__, "snake_web")

get '/' do
    erb :index
end 