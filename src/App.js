import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
//import data
import products from './db/data'
// import Category from "./Sidebar/Category/Category";
import Card from "./components/Card";
import './index.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState("")
  //----------input Filter-------------
  const handleInputChange = (event) =>{
    setQuery(event.target.value)
  };

  const filteredItems = products.filter((product)=>
     product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==-1
    );

     //----------Radio Filter-------------
     const handleChange = event =>{
      setSelectedCategory(event.target.value)

     }
    //  ----------Button Filter-------------
     const handleClick = event =>{
      setSelectedCategory(event.target.value)
     }

     function filteredData(products, selected, query){
      let filterProducts = products
      //filtering input items
      if(query){
        filterProducts = filteredItems
      }
      //Selected filter
          
      if(selected){
        filterProducts = filterProducts.filter(
          ({ category, color, company, newPrice, title }) => 
           category === selected || 
           color === selected || 
           company === selected ||
           newPrice === selected || 
           title ===selected
          );
        }

        return filterProducts.map(({img, title, star, reviews, prevPrice, newPrice})=>(
          <Card 
          key = {Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
          />
        )
      );
      }

       const result = filteredData(products,selectedCategory, query)
     

  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Nav query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Products result={result}/> 
      </>
    
   
  );
}

export default App;
