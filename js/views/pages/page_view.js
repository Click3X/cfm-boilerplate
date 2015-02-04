define([
  'backbone',
  'models/page_model'
], function(Backbone, PageModel){
	var PageView = Backbone.View.extend({
		el: "#page-container",
		initialize:function(options){
			var _t = this;

			if(options.session) _t.session = options.session;

			_t.model = new PageModel({id:_t.id});
			_t.collection.push(_t.model);

			_t.model.on("change:active", function(_model){
				if(_model.get("active") == true)
				_t.render();
			});
		},
		render:function(){
			if(!firstpage){
				console.log("Render page html");

				this.$el.fadeOut(0);
				
				this.$el.html( this.template() );
				ga('send', 'pageview', "/" + this.id);
			} else {
				console.log("first page: not rendering html");
			}

			this.ready();
		},
		ready:function(){
			this.$el.fadeIn(400);

			this.onready();
		},
		close:function(){
			this.onclose();
		}
	});
	return PageView;
});