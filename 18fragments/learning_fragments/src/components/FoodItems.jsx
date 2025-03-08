  import items from "./items";
  const FoodItems =({items})=>{

    return (
        <ul className="list-group">
        {items.map((item)=>(
            <items key ={items} foodItems={item}></items>       
         ))}
   </ul>
// if use are using jsx then the js code must be in curly braces .

    );
};

export default  FoodItems;