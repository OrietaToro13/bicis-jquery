function validateForm(v){
	/* Escribe tú código aquí */
	var letras= ("a", "b", "c", "d","e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
	//verificar que no este vacio el campo y que sea solo letras//
	$(document).ready(function(){
		var name = $("#name").val();
		var name = $("#lastname").val();
		var name = $("#input-email").val();
		var name = $("#input-password").val();

		$('#name').click(function()
	if($('#name').val().trim() === ''){
		alert("Ingrese su Nombre");
	}
	else{#name

	}	
	})
	
};

