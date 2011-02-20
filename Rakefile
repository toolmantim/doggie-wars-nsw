task :default => :dev

desc "Start all the dev processes"
task :dev do
  %w( web coffee scss ).each do |task|
    fork { Rake::Task[task].invoke }
  end
  Process.waitall
end

desc "Start the web app"
task :web do
  exec "bundle exec thin start"
end

desc "Compile the coffee"
task :coffee do
  exec "coffee --watch --compile --output public/js js"
end

desc "Compile the CSS"
task :scss do
  exec "sass --no-cache --watch css:public"
end

desc "Give us a console"
task :console do
  exec "irb -r ./doggie_wars"
end
