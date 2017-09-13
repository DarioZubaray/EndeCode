$(function(){
	$("#encodeBtn").click(function(){
		var entrada = $("#urlInput").val();
		var caracter = $("#caracteresEspeciales").is(":checked");
		var resultado;
		if(caracter){
			resultado = encodeURIComponent(entrada);
		}else{
			resultado = encodeURI(entrada);
		}
		$("#urlOutput").val(resultado);
	});
	$("#decodeBtn").click(function(){
		var entrada = $("#urlOutput").val();
		var caracter = $("#caracteresEspeciales").is(":checked");
		var resultado;
		if(caracter){
			resultado = decodeURIComponent(entrada);
		}else{
			resultado = decodeURI(entrada);
		}
		$("#urlInput").val(resultado);
	});
});	