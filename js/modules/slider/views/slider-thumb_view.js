define([
  'backbone',
], function(Backbone){
	var SliderThumbView = Backbone.View.extend({
		a_el:null,
		events:{
			"click a":"onclick"
		},
		initialize:function(options){
			var _t = this;

			_t.el.style.width = options.thumbWidth;
			_t.a_el = _t.$el.find("a")[0];

			_t.a_el.style.paddingBottom = 100*options.ar + "%";

			_t.model.on("change:active", function(){
				if( _t.model.get("active") == true ){ _t.toactivestate() }else{ _t.toinactivestate(); }
			});

			if(_t.id == 0) _t.onclick();
		},
		onclick:function(e){
			if(e) e.preventDefault();

			//deactivate current
			var current = this.model.collection.findWhere({active:true});
			if(current) current.set("active", false);

			//activate me
			this.model.set("active", true);
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