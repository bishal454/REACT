import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
// import React from  "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from './components/ErrorMessage';


function App() {

  // use of map 
  let foodItems=["dal","Green Vegetable","Roti","Salad","Milk","Ghee"];
  // let foodItems=[]
  // let displayMessage= foodItems.length==0?<h3>I am still Hungry.</h3> :null;


  return( <>
  {/* <React.Fragment> */}
         <h1> HEALTHY FOODS</h1>  
         {/* {displayMessage} */}
       
         {/* falsy valuse are : null, undefined , empty ,zero ,not a member  */}

         {/* this is a jsx code dont use curly braces.. */}
         <ErrorMessage  items={foodItems}></ErrorMessage>
         <FoodItems  items={foodItems}></FoodItems>



</>
  );

  {/* </React.Fragment> */}
 
    
 

}

export default App;
