import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

// import Colors from "./Sidebar/Colors/Colors";
// import Price from "./Sidebar/Price/Price";




function App() {
  return (
    <>
    <Sidebar/>
      <Nav/>
      <Recommended/>
      <Products/>
     
  
      {/* <Colors/>
      <Price/> */}
     
      
      
      </>
    
   
  );
}

export default App;
