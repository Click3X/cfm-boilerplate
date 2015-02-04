define([
  'pages/page_view',
  'text!template/about.php'
], function(PageView, Template){
	var AboutView = PageView.extend({
		template: _.template( Template ),
		id:"about",
		onready:function(){
		},
		onclose:function(){
		},
	});
	return AboutView;
});