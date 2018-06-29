var rows, cols;

$( '#sizePicker' ).submit( function( evt ) {

 evt.preventDefault();

 makeGrid();

})

function makeGrid() {

 rows = $( '#inputHeight' ).val();

 cols = $( '#inputWeight' ).val();

 $('#pixelCanvas').children().remove();

 for ( var i = 0; i < rows; i++ ){

     $('#pixelCanvas').append( '<tr></tr>' );

 }  for ( var j = 0; j < cols; j++ ){

     $( 'tr' ).append( '<td></td>' );

 } 
 var cell =   $('#pixelCanvas').find( 'td' );  
 		cell.click( function () { 

 var paint = $( '#colorPicker' ).val();

 if ( $( this ).attr('style') ){

       $( this ).removeAttr('style');

     }else{

       $( this ).css('background-color', paint);

     }

 });
}
