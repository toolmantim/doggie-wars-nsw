# jQuery plugin to render the given given mustache template into the element.
# Template can either be a string of the template or a DOM node whose innerHTML
# contains the template.
# 
# For example:
#
# <!-- set up a template -->
# <script type="text/mustache" id="template"> <h1>Hello! {{name}}</h1> </script>
#
# <!-- render the template into document.body -->
# <script>$("body").mustache $("#template"), {name:"Foo"}</script>
#
$.fn.mustache = (template, view) ->
  templateContent = if typeof template == "String" then template else $(template).html()
  $(this).each -> $(this).html Mustache.to_html(templateContent, view)

# Same as setTimeout but with arg order switched
window.delay = (time, callback) -> setTimeout(callback, time)

# Kick off!
$ ->
  app = new DoggieWars.AppView()
  app.render()
  $("body").append app.el
