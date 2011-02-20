(function() {
  $.fn.mustache = function(template, view) {
    var templateContent;
    templateContent = typeof template === "String" ? template : $(template).html();
    return $(this).each(function() {
      return $(this).html(Mustache.to_html(templateContent, view));
    });
  };
  window.delay = function(time, callback) {
    return setTimeout(callback, time);
  };
  $(function() {
    var app;
    app = new DoggieWars.AppView();
    app.render();
    return $("body").append(app.el);
  });
}).call(this);
