(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  }, __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  DoggieWars.AppView = (function() {
    function AppView() {
      AppView.__super__.constructor.apply(this, arguments);
    }
    __extends(AppView, Backbone.View);
    AppView.prototype.id = "app-view";
    AppView.prototype.render = function() {
      $(this.el).mustache($("#app-template"));
      this.loadingInterval = setInterval(__bind(function() {
        var dots;
        dots = this.loadingParagraph().find("span.dots");
        if (dots.text().length === 3) {
          return dots.text("");
        } else {
          return dots.text(dots.text() + ".");
        }
      }, this), 300);
      return $.getJSON("http://nsw-pet-register.heroku.com/dogs/breeds.json?callback=?", __bind(function(data) {
        clearInterval(this.loadingInterval);
        return $(this.el).addClass("choose");
      }, this));
    };
    AppView.prototype.loadingParagraph = function() {
      return $(this.el).find("p.loading");
    };
    return AppView;
  })();
}).call(this);
