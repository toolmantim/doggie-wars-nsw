# Doggie Wars

[http://doggie-wars-nsw.heroku.com/](http://doggie-wars-nsw.heroku.com/)

This is the Doggie Wars application that team Puppie Power ([@toolmantim](http://twitter.com/toolmantim),
[@lisakate](http://twitter.com/lisakate), [@brettgoulder](http://twitter.com/brettgoulder) and [@cjwoodward](http://twitter.com/cjwoodward)) built for the [apps4nsw hack day](http://apps4nsw.webdirections.org/). The app is incomplete, and doesn't really do much, as we spent most of the day
working on the API:

[http://github.com/toolmantim/nsw-pet-register](http://github.com/toolmantim/nsw-pet-register)

## Running

To run Doggie Wars use a web server that speaks Rack, such as thin:

    $ thin start

## Developing

For dev there's a rake task to autocompile scss, coffee and start the web server:

    $ rake

but first you'll need to:

    $ brew install node
    $ npm install coffee-script
    $ bundle install

and that's it!

## License

See LICENSE for details.
