 $(document).foundation();

 $('.ui.modal').modal('show');

 $('.context.example .ui.sidebar')
 .sidebar({
 	context: $('.context.example .bottom.segment')
 })
 .sidebar('attach events', '.context.example .menu .item')
 ;
 $(".entre").on("click",function(){
 	$("body").html();
 })