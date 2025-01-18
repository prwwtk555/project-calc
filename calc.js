const displays = document.getElementById("display-btn");

function Display(input){
  displays.value += input;
  console.log('displayed');
}

function clearDisplay(){
 displays.value = "";
} 

function calculate(){
  try{
    displays.value = eval(displays.value);
  }
  catch(error){
    displays.value="Error";
  }
}
