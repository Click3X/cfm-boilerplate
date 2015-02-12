define([
  'backbone'
], function(Backbone){
	var SliderSlideView = Backbone.View.extend({
		initialize:function(options){
			var _t = this;

			_t.el.style.width = options.slideWidth;
			
			_t.model = new Backbone.Model({ id:_t.id });
		},
		toactivestate:function(){
			if(this.model){
				var current = this.model.collection.findWhere({active:true});
				if(current && current != this.model){
					current.set("active", false);
				}

				this.model.set("active", true);
			}
		}
	});
	return SliderSlideView;
});