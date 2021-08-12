import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store';
import Landing from './pages/Landing';
import Login from './pages/Login';
import SingUp from './pages/SingUp';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import ProductDetail from "./pages/ProductDetail";
import CreateProduct from "./pages/CreateProduct";


function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/singup" component={SingUp}/>
            <Route exact path="/products" component={Products}/>
            <Route exact path="/products/:id" component={ProductDetail}/>
            <Route exact path="/products/add" component={CreateProduct}/>
            <Route exact path="*" component={NotFound}/>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
