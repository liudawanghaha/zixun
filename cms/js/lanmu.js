$(function(){
	//页面加载时加载数据
	$(document).ready(function(){
		$.get("http://120.78.164.247:8099/manager/category/findAllCategory",function(results){
			console.log(results.data);
			for(var index in results.data){
				var tr=document.createElement("tr");
				var td=document.createElement("td");
				var input=document.createElement("input");
				input.type="checkbox";
				input.name="checkbox";
				td.appendChild(input);
				tr.appendChild(td);
				var td=document.createElement("td");
				// console.log(results.data[index][i]);
				td.textContent=results.data[index].name;
				tr.appendChild(td);
				var td=document.createElement("td");
				// console.log(results.data[index][i]);
				td.textContent=results.data[index].parent;
				tr.appendChild(td);
				var td=document.createElement("td");
				// console.log(results.data[index][i]);
				td.textContent=results.data[index].comment;
				tr.appendChild(td);
				var td=document.createElement("td");
				tr.appendChild(td);
				$("table")[0].appendChild(tr);
				// console.log(1);
			}
		});
	});


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


	//新增功能
	$(".myConfirm").click(function(event) {
		// console.log($(".addLanmuName").children()[1].value);
		var obj={
			name:$(".addLanmuName").children()[1].value,
			parent:$(".parentLanmu").children()[1].value,
			comment:$(".lanmuDescription").children()[1].value
		}
		// console.log(obj);
		$.post("http://120.78.164.247:8099/manager/category/saveOrUpdateCategory",obj,function(results){
			console.log(results);
		});
		// $.get("http://120.78.164.247:8099/manager/category/findAllCategory",function(results){
		// 	console.log(results);
		// });
		$("#rightContentBody").load("pages/lanmu.html");
	});//父栏目功能未实现


	//删除功能
	$(".batchDelete").click(function(event){
		// console.log($("input"));
		// console.log($("tbody"));
		console.log($("input").checked);
		if ($("input").checked) {
			alert("1");
		}
		// $.post("http://120.78.164.247:8099/manager/category/batchDeleteCategory",obj,function(results){
		// 	console.log(results);
		// });
	});
	
	
});