$(function(){
	$("#shouye").click(function(){
		$("#rightContentBody").load("pages/shouye.html");
	});
	$("#lanmu").click(function(){
		$("#rightContentBody").load("pages/lanmu.html");
	});
	$("#zixun").click(function(){
		$("#rightContentBody").load("pages/zixun.html");
	});
	$("#user").click(function(){
		$("#rightContentBody").load("pages/user.html");
	});

	//默认点击首页
	$(".leftNavBody li:first").trigger('click');
});