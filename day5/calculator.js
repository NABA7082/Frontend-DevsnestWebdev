function sinclicked(){
  cal.display.value=Math.sin(cal.display.value);
  
}
function cosclicked(){
  cal.display.value=Math.cos(cal.display.value);
  
}
function tanclicked(){
  cal.display.value=Math.tan(cal.display.value);
  
}function power(){
  cal.display.value=Math.pow(cal.display.value,2);
  
}
function back(){
  cal.display.value=cal.display.value.slice(0,cal.display.value.length-1);
  
}