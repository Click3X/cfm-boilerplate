define([
  'backbone',
  'models/page_model',
  'modules/slider/views/slider_view',
  'modules/videoplayer/views/videoplayer_view'
], function(Backbone, PageModel, SliderView, VideoPlayerView){
	var PageView = Backbone.View.extend({
		el: "#page-container",
		initialize:function( options ){
			var _t = this;

			if(options.session) _t.session = options.session;

			_t.model = new PageModel( { id:_t.id } );
			_t.collection.push( _t.model );

			_t.model.on( "change:active", function( _model ){
				if( _model.get("active") == true )
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
			this.buildsliders();
			this.buildvideos();

			this.$el.fadeIn(400);

			this.onready();
		},
		buildsliders:function(){
			console.log("PageView: ", this.id, " :buildsliders");

			var _t = this;

			_t.sliders = [];

			this.$el.find(".cfm-slider" ).each( function( i, _el ){
				var slider = new SliderView({
					id:_el.getAttribute( "id" ), 
					el:_el
				} );

				_t.sliders.push( slider );				
			});
		},
		buildvideos:function(){
			var _t = this;

			_t.videos = [];

			$(".cfm-videoplayer").each( function( i, _el ){
				var video = new VideoPlayerView( {
				  id:_el.getAttribute("id"), el:_el, page_collection:_t.page_collection
				} );

				_t.videos.push( video );
			});
		},
		onready:function(){/*overridden*/},
		onready:function(){/*overridden*/},
		close:function(){
			this.onclose();
		}
	});
	return PageView;
});