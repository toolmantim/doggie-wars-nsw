require 'sinatra'
require 'pathname'
require 'json'

class DoggieWars < Sinatra::Application

  set :views, root

  configure :development do
    require 'sinatra/reloader'
  end

  helpers do
    def templates
      Pathname(root).join("templates").children
    end
  end

  get '/' do
    haml :layout, :layout => false
  end
  
end
