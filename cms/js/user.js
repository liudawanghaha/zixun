$(function(){
	//模态框
	$("#modal").click(function(event) {
		$(".modal").modal({
			backdrop:true,
			keyboard:true
		});
	});

	$(".myClose").click(function(event) {
		$(".modal").modal("hide");
	});
	$(".myConfirm").click(function(event) {
		$(".modal").modal("hide");
	});
});