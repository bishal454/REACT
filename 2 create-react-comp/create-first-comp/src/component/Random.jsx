
// this is the component of the react .
function Random(){
  let number = Math.random()*10;

  return  <h4 style={{color:'#0000FF'}}> Random number is :{Math.round(number)}</h4>

}
export default Random;
