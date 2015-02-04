define([
  'pages/page_view',
  'text!template/people.php'
], function(PageView, Template){
	var PeopleView = PageView.extend({
		template: _.template( Template ),
		id:"people",
		onready:function(){
		},
		onclose:function(){
		},
	});
	return PeopleView;
});