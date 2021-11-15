import React , {useState , useEffect} from 'react';
import { Link, Route , Switch , useRouteMatch} from 'react-router-dom';
import MyOrders from './../MyOrders/MyOrders';
import MakeAdmin from './../MakeAdmin/MakeAdmin';
import ManageProducts from './../ManageProducts/ManageProducts';
import AddNewProducts from './../AddNewProducts/AddNewProducts';
import Pay from './../Pay/Pay';
import './Dashboard.css'
import useFirebase from './../../Hooks/useFirebase';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddReview from '../AddReview/AddReview';

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { user } = useFirebase();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`https://guarded-inlet-45451.herokuapp.com/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role == "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
    const {logOut} = useFirebase();
    return (
        <div>
            <div className="dashboard-container ">
            <div className="row">
             <div className="col-md-3 py-5" style={{"background" : "white" }}>
            <div className="dashboard">
              <h5>Dashboard</h5>
          {
            !isAdmin ? (
              <>
                      <Link className="link" to={`${url}/pay`}>
                <li className=" mt-3">Pay</li>
              </Link>

              <Link to={`${url}/myOrders`}>
                <li className=" mt-3">My Orders</li>
              </Link>

              <Link to={`${url}/review`}>
                <li className=" my-3">Review</li>
              </Link>
              <button onClick = {logOut}>Log out</button>

               </>
            ) : (
              <>
              <Link to={`${url}/products`}>
                    <li className=" mt-3">Add new products</li>
                  </Link>
                        <Link to={`${url}/makeAdmin`}>
                        <li className=" mt-3">Make Admin</li>
                      </Link>
                      <Link to={`${url}/manageAllOrders`}>
                        <li className=" mt-3">Manage All Orders</li>
                      </Link>
                      <Link to={`${url}/manageServices`}>
                        <li className=" my-3">Manage Products</li>
                      </Link>
                      <button onClick = {logOut}>Log out</button>
               </>
            )
          }
            </div>
          </div>
          <div className="col-md-9">
            <Switch>
              <Route exact path={`${path}/pay`}>
                <Pay></Pay>
              </Route>
              <Route exact path={path}>
                <MyOrders></MyOrders>
              </Route>
              <Route exact path={`${path}/review`}>
                <AddReview></AddReview>
              </Route>
              <Route exact path={`${path}/myOrders`}>
                <MyOrders></MyOrders>
              </Route>
              <Route exact path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route exact path={`${path}/products`}>
                <AddNewProducts></AddNewProducts>
              </Route>
              <Route exact path={`${path}/manageServices`}>
                <ManageProducts></ManageProducts>
              </Route>
              <Route exact path={`${path}/manageAllOrders`}>
                <ManageAllOrders/>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Dashboard;