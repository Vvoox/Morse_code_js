function txt() {
    //tt = document.fofo.fo1.value;
    //alert("javascript is working")
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
                        '(':'-.--.', ')':'-.--.-'}*/
   var message1 = 'N';
   var message2 = '-.';
   var cipher='';
   document.fofo.output_morse.value= "message2";


    if(morse_size>0){
      //message=document.getElementsByTagName('textarea').item(0)
      //sii = message.size( )
      for (var i=0 ; i<morse_size ; i++){
        if (morse_content == message1 ) {


          //message2='-.';
           }
      }

    }


}
function init(){
  txt();
}
