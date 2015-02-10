define([
  'backbone',
  'modules/slider/views/slider-thumb_view',
  'modules/slider/views/slider-nav_view'
], function(Backbone, SliderThumbView, SliderNavView){
	var SliderTumbListView = Backbone.View.extend({
		initialize:function(){
			var _t = this;

			_t.views = [];
			_t.collection = new Backbone.Collection();

			_t.thumb_els = this.$el.children("li");
			_t.ar = _t.el.getAttribute("data-aspectratio");
			_t.thumbs_shown = _t.el.getAttribute("data-thumbs-shown");

			_t.thumb_els.each(function(i, _el){
				var thumb = new SliderThumbView({
					id: i, el: _el, ar: _t.ar,
					thumbWidth: (100/_t.thumb_els.length) + "%"
				});

				_t.views.push(thumb);
				_t.collection.push(thumb.model);
			});

			this.el.style.width =  _t.thumb_els.length*(100/_t.thumbs_shown) + "%";
		}
	});
	return SliderTumbListView;
});