// Check off specific todos by clicking.
$("ul").on("click","li", function(){
	$(this).toggleClass("done")
	// $(this).remove();
})

// Delete a ToDo by hitting X
$("ul").on("click","span",function(e){
	$(this).parent().fadeOut("500", function(){
		$(this).remove();
	})
	e.stopPropagation();
})

// entering new ToDo
$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		// grabbing new todo text from input
		var todoText = $(this).val();
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>" + todoText + "</li>")
		$(this).val("");
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})

