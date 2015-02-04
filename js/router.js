define([
  'backbone',
  'collections/page_collection',
  'pages/home_view',
  'pages/work_view',
  'pages/about_view',
  'pages/people_view',
  'pages/project_view'
], function (Backbone, PageCollection, HomeView, WorkView, AboutView, PeopleView, ProjectView){
  var Router   = Backbone.Router.extend({
    initialize:function(){
      var _t = this;

      _t.page_collection = new PageCollection();
      
      _t.page_views = [   
        new HomeView({collection:_t.page_collection}),
        new WorkView({collection:_t.page_collection}),
        new AboutView({collection:_t.page_collection}),
        new PeopleView({collection:_t.page_collection}),
        new ProjectView({collection:_t.page_collection})
      ];

      //TODO: CREATE NAV MODULE
      $("a[data-navigate-to]").click(function(event){
        event.preventDefault();
        
        router.navigate( $(this).attr("data-navigate-to"), true );
      });

      this.start();
    },
    start:function(){
      Backbone.history.start( {pushState: pushstate ? true : false, hashChange:true, silent:false, root:root_dir} );
    },
    routes: {
      ':pageid'   : 'onchangepage',
      '*actions'  : 'onchangepage'
    },
    onchangepage:function(_pageid){
      !_pageid ? _pageid = "home" : null;

      this.page_collection.activatePageById( _pageid );

      if( firstpage ) firstpage = false;
    }
  });

  return Router;
});