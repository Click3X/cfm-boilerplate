define([
  'backbone',
  'modules/slider/views/slider-slide_view',
  'modules/slider/views/slider-nav_view'
], function(Backbone, SliderSlideView, SliderNavView){
	var SliderSlideListView = Backbone.View.extend({
		initialize:function(){
			var _t = this;
			_t.views = [];

			_t.ul_el = this.$el.children("ul")[0];

			_t.slide_els = $(_t.ul_el).children("li");
			_t.ar = _t.ul_el.getAttribute("data-aspectratio");

			_t.slide_els.each(function(i, _el){
				var slide = new SliderSlideView({
					id: i, el: _el, ar: _t.ar,
					slideWidth: (100/_t.slide_els.length) + "%"
				});

				_t.views.push(slide);
				_t.collection.push(slide.model);
			});

			_t.numslides = _t.views.length;

			_t.ul_el.style.width =  _t.slide_els.length*100 + "%";

			_t.collection.on("change:active", function(_m){
				if(_m.get("active") == true) _t.scrolltoslide(_m.id);
			});

			_t.nav = new SliderNavView({
				el:_t.$el.find(".cfm-slider-nav")
			})
			_t.nav.on("backclicked", function(){
				_t.scrolltopreviousslide();
			});
			_t.nav.on("nextclicked", function(){
				_t.scrolltonextslide();
			});
		},
		scrolltoslide:function(_i){
			this.currentslide = _i;
			this.scrolltocurrentslide();
		},
		scrolltonextslide:function(){
			this.currentslide = Math.min( this.currentslide+1, this.numslides-1 );
			this.scrolltocurrentslide();
		},	
		scrolltopreviousslide:function(){
			this.currentslide = Math.max( this.currentslide-1, 0 );
			this.scrolltocurrentslide();
		},
		scrolltocurrentslide:function(){
			this.ul_el.style.marginLeft =  -(this.currentslide*100) + "%";
		}
	});

	return SliderSlideListView;
});