import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch , Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Products from './Components/Products/Products/Products';
import AddNewProducts from './Components/AddNewProducts/AddNewProducts';
import Header from './Components/Header/Header';
import AuthProvider from './Components/Contexts/AuthProvider';
import Review from './Components/Review/Review';
import Dashboard from './Components/Dashboard/Dashboard';
import MyOrders from './Components/MyOrders/MyOrders';
import Footer from './Components/Footer/Footer';
import Pay from './Components/Pay/Pay';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Privacy from './Components/Privacy/Privacy';
import AddReview from './Components/AddReview/AddReview';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
            <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route path="/home">
                  <Home></Home>
                </Route>
                <Route path="/register">
                  <Register/>
                </Route>
                <Route path="/login">
                  <Login/>
                </Route>
                <PrivateRoute path="/about">
                  <About></About>
                </PrivateRoute>
                <Route path="/products">
                  <Products/>
                  </Route>
              <PrivateRoute exact path="/allProducts/:productId">
              <ProductDetail/>
              </PrivateRoute>
              <Route path="/addreview">
                    <AddReview/>
            </Route>
            <Route path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
                <Route path="/review">
                  <Review/>
                </Route>
                <Route path="/pay">
                    <Pay></Pay>
                </Route>
                <Route path="/privacy">
                    <Privacy></Privacy>
                </Route>
                <Route path="/addnewproducts">
                  <AddNewProducts/>
                </Route>
                <Route path="/dashboard">
                  <Dashboard/>
                </Route>
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
