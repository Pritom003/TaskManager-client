import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authenticate/Login";
import Registration from "../Pages/Authenticate/Registration";
import Privaterout from "./Privaterout";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../Dashboard/UserHome";
import Todo from "../Dashboard/Todo";
import Completed from "../Dashboard/Completed";
import Addtask from "../Dashboard/Addtask";
import Dash from "./Dash";
import Alltasks from "../Pages/Alltasks/Alltasks";


const Mainrout = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/regi',
        element:<Registration></Registration>
      },
      {
        path:'/All',
        element:<Privaterout><Alltasks></Alltasks></Privaterout>
      }
    ]
  },
  
    {
      path: '/dashboard',
      element:<Privaterout><Dashboard></Dashboard></Privaterout>,
      children:[
        {
        path:'',
        element:<Dash></Dash>
      },
        {
        path:'userHome',
        element:<UserHome></UserHome>
      },
        {
        path:'todo',
        element:<Todo></Todo>
      },
        {
        path:'complete',
        element:<Completed></Completed>
      },
        {
        path:'add',
        element:<Addtask></Addtask>
      },

    
    ]
  
   
  }
]);

export default Mainrout;