function input_msg(){
  morse_size1=document.fofo.input_message.value.length;
  morse_content1=document.fofo.input_message.value;
  morse_content2=document.fofo.output_message.value;


  input_valide = new RegExp("^[a-zA-Z0-9]");
  if (morse_size1>0){
      var message1 = 'N';
      var message2 = [];
      for ( var j = 0 ; j<morse_size1 ; j++){

           j=morse_content1;
           message2 += j;

           for(var i=0 ; i<morse_size1 ; i++){
             if(input_valide.test(message2)){
               document.getElementsByTagName('textarea').item(0).className='txttwo';
               document.getElementsByTagName('textarea').item(1).className='txttwo';


               if(message2[i] =='N'){

                   message2[i]='KHALIL';
                   document.fofo.output_message.value = message2;
                   alert("there s N")
     }
               else {
                    document.fofo.output_message.value = message2;}
         }
   }

    }
  }
   else{
    document.getElementsByTagName('textarea').item(0).className='txt3';
    document.getElementsByTagName('textarea').item(1).className='txt3';

    }
  }




/*function morse() {

  morse_size=document.fofo.input_message.value.length;
  morse_content=document.fofo.input_message.value;
    /*biblo={ 'A':'.-', 'B':'-...',
                        'C':'-.-.', 'D':'-..', 'E':'.',
                        'F':'..-.', 'G':'--.', 'H':'....',
                        'I':'..', 'J':'.---', 'K':'-.-',
                        'L':'.-..', 'M':'--', 'N':'-.',
                        'O':'---', 'P':'.--.', 'Q':'--.-',
                        'R':'.-.', 'S':'...', 'T':'-',
                        'U':'..-', 'V':'...-', 'W':'.--',
                        'X':'-..-', 'Y':'-.--', 'Z':'--..',
                        '1':'.----', '2':'..---', '3':'...--',
                        '4':'....-', '5':'.....', '6':'-....',
                        '7':'--...', '8':'---..', '9':'----.',
                        '0':'-----', ', ':'--..--', '.':'.-.-.-',
                        '?':'..--..', '/':'-..-.', '-':'-....-',
                        '(':'-.--.', ')':'-.--.-'}
   var message1 = 'N';
   var message2 = [];
   for ( var j = 0 ; j<morse_size ; j++){

        j=morse_content;
        message2 += j;

        for(var i=0 ; i<morse_size ; i++){

            if(message2[i] =='N'){

                message2[i]='KHALIL';
                document.fofo.output_message.value = morse_content;
                alert("there s N")
  }
            else {
                 document.fofo.output_message.value = morse_content;}
      }
}
}*/
function init(){
  input_msg();
  //morse();
}

/*function output(){
  morse_content2=document.fofo.output_message.value;
  morse_size2=document.fofo.output_message.value.length;
  if(morse_size2>0){
    document.getElementsByTagName('textarea').item(1).className='txttwo';

  }
  else{
    document.getElementsByTagName('textarea').item(1).className='txt3';

  }
*/

      //message=document.getElementsByTagName('textarea').item(0)
      //sii = message.size( )
  /*    for (var i=0 ; i<morse_size ; i++){
        if (morse_content == message1 ) {
          alert("test");



           }
      }

    }*/
