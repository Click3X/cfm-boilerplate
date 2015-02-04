define([
  'pages/page_view',
  'text!template/work.php'
], function(PageView, Template){
	var WorkView = PageView.extend({
		template: _.template( Template ),
		id:"work",
		onready:function(){
		},
		onclose:function(){
		},
	});
	return WorkView;
});