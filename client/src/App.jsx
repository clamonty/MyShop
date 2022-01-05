import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from './pages/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


const App = () => {
  const user = false;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/products">
          <ProductList/>
        </Route>
        <Route path="/product/:id">
          <Product/>
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/"/> : <Login/>}
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/"/> : <Register/>}
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;