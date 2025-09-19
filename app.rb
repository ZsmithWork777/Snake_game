require 'sinatra'
set :views, File.join(__dir__, "snake_web")
set  :public_folder, File.join(__dir__, "snake_web")

get '/' do
    erb :index
end 

get '/quote' do
  uri = URI('https://api.quotable.io/random')
  res = Net::HTTP.get(uri)
  data = JSON.parse(res)
  @quote = data["content"]
  erb :index
end