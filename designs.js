// Select color input
var colorInput= $("#colorPicker");
// Select size input
var height=$( "input#inputHeight" )
var width=$( "input#inputWeight" )

// When size is submitted by the user, call makeGrid()
$('#sizePicker').click(function(event) {
  makeGrid();
  event.preventDefault();
});

function makeGrid() {
	
   var row=height.val();
   var col=width.val();
 
// Your code goes here!
    $('tr').remove();
  for(var r=1;r<=row;r++){
   var rowId='row'+r;	  
   $('#pixelCanvas').append( "<tr id='"+rowId+"'></tr>" );
     for(var c=1;c<=col;c++){
		 var id='#'+rowId;
		 $(id).append('<td></td>');
	 }
  }
	
	 $('td').click( function() {
	var color=colorInput.val();	 
    $(this).css('background', color )
  } );
}




