
$(init);

function init() {
	var title = $('#title');
	var description = $('#description');
	var addBtn = $('#addBtn');
	var todos = $('#todos');

	addBtn.click(addBtnHandler);

	function addBtnHandler() {
		// console.log('addBtnHandler');
		var newTitle = title.val();
		var newDesc = description.val();
		var note = $("<li>").append($("<b>").append(newTitle));
		note.append(" " + newDesc + " ");
		var button = $("<button>X</button>").click(deleteNote);
		note.append(button);
		todos.append(note);
	}	

	function deleteNote(event) {
		var todo = $(event.currentTarget).parent();
		todo.remove();
	}
}

// function init() {
// 	// $('h1').draggable();
// 	// $('ul').sortable().draggable();
// }

// function init() {
// 	$('#p1').click(p1Clicked);
// 	// $('#add').hover(addClicked);
// 	$('#A').keyup(addClicked);
// }
// .change()
// function p1Clicked(){
// 	$("body").append("<p>New Paragraph</p>")
// }

// function addClicked() {
// 	var a = $('#A').val();
// 	var b = $('#B').val();

// 	a = parseInt(a);
// 	b = parseInt(b);
// 	var c = a + b;
// 	$('#result').val(c);
// }
	// $('h1').hide();

	// $('h1#heading1').hide();
	// $('h1.heading2').hide();
	// $(".heading2").hide();
	// $('p, span').css({"color": "red"});
	// $('ul#list li:first').css('color', 'red');
	// $('ul#list li:last').css('color', 'purple');
	// $('ul#list li:even').css('background-color', 'grey');
	// $('ul#list li:odd').css('background-color', 'orange');
	// $('ul#list li:nth-child(4)').css('list-style', 'none');
	// $(':submit').hide();
	// $("*").hide()
	// console.log("hello from js");
	// var h1 = document.querySelector("h1")
	// h1.style.backgroundColor = "red"; 
	// h1.style.color = "blue";

	// h1.style.display="none";
	$("h1").css({
	    color: 'black',
    });

	// $("p").css({
	//     backgroundColor: "none"
 //    });

// jQuery('p').hide();

	$(".p1").css({
		color: 'red',	
	});

	// $("h1").html("Changing html");

	// $("h1").append('append from jQuery');

	// $("body").append('<ul><li>item1</li><li>item2</li></ul>')

	// $('body').css({
	// 	 "background-image": 'url(https://www.w3schools.com/w3images/fjords.jpg)'
	// });
		// document.querySelector('body').style.backgroundColor = "white";
	
