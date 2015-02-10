define([
  'backbone'
], function(Backbone){
	var SliderSlideView = Backbone.View.extend({
		initialize:function(options){
			var _t = this;

			_t.el.style.width = options.slideWidth;
			_t.$el.find("a")[0].style.paddingBottom = 100*options.ar + "%";
			
			_t.model = new Backbone.Model({ id:_t.id });
		}
	});
	return SliderSlideView;
});