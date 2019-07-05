function logger (){ //logger is the funtion name
  console.log( 'in logger');
} // end logger
function returner (){
console.log( ' in returner ');
return true;
} // end returner;

logger();
returner();
console.log( 'running returner', returner() );
