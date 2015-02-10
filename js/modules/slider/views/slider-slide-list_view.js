define([
  'backbone',
  'modules/slider/views/slider-slide_view',
  'modules/slider/views/slider-nav_view'
], function(Backbone, SliderSlideView, SliderNavView){
	var SliderSlideListView = Backbone.View.extend({
		initialize:function(){
			var _t = this;
			_t.views = [];

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

			_t.el.style.width =  _t.slide_els.length*100 + "%";

			_t.collection.on("change:active", function(_m){
				if(_m.get("active") == true) _t.scrolltoslide(_m.id);
			});
		},
		scrolltoslide:function(_i){
			var _t = this;

			_t.el.style.marginLeft =  -(_i*100) + "%";
		}
	});

	return SliderSlideListView;
});