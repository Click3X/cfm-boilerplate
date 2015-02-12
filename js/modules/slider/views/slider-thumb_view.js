define([
  'backbone'
], function(Backbone){
	var SliderThumbView = Backbone.View.extend({
		a_el:null,
		events:{
			"click a":"onclick"
		},
		initialize:function(options){
			var _t = this;

			_t.group = options.group;
			_t.el.style.width = options.thumbWidth;
			_t.a_el = _t.$el.find("a")[0];

			_t.a_el.style.paddingBottom = 100*options.ar + "%";

			console.log(_t.id, _t.group);
		},
		onclick:function(e){
			if(e) e.preventDefault();

			if(this.model){
				var current = this.model.collection.findWhere({active:true});
				if(current && current != this.model) current.set("active", false);

				this.model.set("active", true);
			}
		},
		toactivestate:function(){
			if( !this.$el.hasClass("active") ) this.$el.addClass("active");
		},
		toinactivestate:function(){
			this.$el.removeClass("active");
		}
	});
	return SliderThumbView;
});