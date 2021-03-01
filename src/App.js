import React from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from './pages/Home'
import About from "./pages/About"
import Contact from "./pages/Contact"
import Shop from "./pages/Shop"
import Cart from "./components/Cart"
import ShopList from "./components/ShopList"
import TodayDeals from "./pages/TodayDeals"
import { DataProvider } from "./components/DataProvider"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


function App() {

  return (
 
   <DataProvider>
     <div className="App">
   <Router>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home}  />
        <Route exact path="/about" component={About}  />
        <Route exact path="/contact" component={Contact}  />
        <Route path="/shop/:id" component={Shop}/>
        <Route exact path="/shoplist" component={ShopList} />
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/todaydeals" component={TodayDeals}/>
      </Switch>
    <Footer />
    </Router>
    </div>
  </DataProvider>

  );
}

export default App;
