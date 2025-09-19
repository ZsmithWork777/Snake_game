require 'sinatra'
require 'net/http'
require 'json'

set :views, File.join(__dir__, "snake_web")
set :public_folder, File.join(__dir__, "snake_web")

# Root route
get '/' do
  erb :index
end

# JSON endpoint for random quote
get '/quote' do
  uri = URI('https://zenquotes.io/api/random')
  res = Net::HTTP.get_response(uri)

  if res.is_a?(Net::HTTPSuccess)
    data = JSON.parse(res.body)[0]
    content_type :json
    { quote: data["q"], author: data["a"] }.to_json
  else
    status res.code.to_i
    content_type :json
    { error: res.body }.to_json
  end
end