import Button  from "./component/button";
import Hello from "./component/Hello";
import Random from "./component/Random";
function App(){ //functional component  and this component is used elsewhere.
   return   <div>
<h1> Hello world</h1>
<h2 > this is for knowing the css file </h2>
{/* <button > like my code </button>   */}

 {/* this is the default like component  using of html tag    */}
  <Button></Button>
 {/* custom component */}
 <Hello></Hello>
<Random></Random>
<Random></Random>
<Random> </Random>
<Random></Random>
<Random></Random>
<Random />

    </div>
  
  
}
 export default App;