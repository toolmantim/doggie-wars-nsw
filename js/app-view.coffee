class DoggieWars.AppView extends Backbone.View
  id: "app-view"

  render: ->
    $(@el).mustache $("#app-template")
    
    @loadingInterval = setInterval(=>
      dots = @loadingParagraph().find("span.dots")
      if dots.text().length == 3 then dots.text("") else dots.text((dots.text() + "."))
    , 300)

    $.getJSON "http://nsw-pet-register.heroku.com/dogs/breeds.json?callback=?", (data) =>
      clearInterval(@loadingInterval)
      $(@el).addClass "choose"
      
  loadingParagraph: ->
    $(@el).find("p.loading")
