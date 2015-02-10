define([
  'backbone',
  'modules/slider/views/slider-slide_view',
  'modules/slider/views/slider-nav_view'
], function(Backbone, SliderSlideView, SliderNavView){
	var SliderSlideListView = Backbone.View.extend({
		initialize:function(){
			var _t = this;

			_t.views = [];
			_t.collection = new Backbone.Collection();

			_t.slide_els = this.$el.children("li");
			_t.ar = _t.el.getAttribute("data-aspectratio");

			_t.slide_els.each(function(i, _el){
				var slide = new SliderSlideView({
					id: i, el: _el, ar: _t.ar,
					slideWidth: (100/_t.slide_els.length) + "%"
				});

				_t.views.push(slide);
				_t.collection.push(slide.model);
			});

			this.el.style.width =  _t.slide_els.length*100 + "%";
		}
	});

	return SliderSlideListView;
});