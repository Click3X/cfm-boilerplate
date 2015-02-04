define([
  'pages/page_view',
  'text!template/home.php'
], function(PageView, Template){
	var HomeView = PageView.extend({
		template: _.template( Template ),
		id:"home",
		onready:function(){
		},
		onclose:function(){
		},
	});
	return HomeView;
});