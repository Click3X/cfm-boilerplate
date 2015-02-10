define([
  'backbone',
  'modules/slider/views/slider-slide-list_view',
  'modules/slider/views/slider-thumb-list_view'
], function(Backbone, SliderSlideListView, SliderThumbListView){
	var SliderView = Backbone.View.extend({
		initialize:function(){
			var _t = this;

			_t.collection = new Backbone.Collection();

			//initiate slides view
			if( _t.$el.children("div.cfm-slider-slides").length > 0 ){
				_t.slides_view = new SliderSlideListView( { 
					el:_t.$el.children("div.cfm-slider-slides").eq(0).children("ul")[0], 
					collection:_t.collection });
			}

			//initiate the thumbs view
			if( _t.$el.children("div.cfm-slider-thumbs").length > 0 ){
				_t.thumbs_view = new SliderThumbListView( {
					el:_t.$el.children("div.cfm-slider-thumbs").eq(0).children("ul")[0], 
					collection:_t.collection});
			}
		}	
	});

	return SliderView;
});