import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CheckRegistration from "../pages/CheckRegistration";
import Error from "../pages/Error";
import Landing from "../pages/Landing";
import UserContext from '../context/userContext';
import NewPosts from "../pages/NewPosts";
import Editor from "../components/editor/Editor";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      // errorElement:<Error/>,
      children: [
        {index: true,
          element: <Landing />,
        },
        {path:"new-posts",
          element: <NewPosts />,
          children: [
            {  path:"new-posts" ,element:<NewPosts /> },
            {  path:"createpost", element:<Editor /> },
            
          ]
        },
        
      ],
    },
    {
      path: "/login",
      element: <UserContext><CheckRegistration/></UserContext>,
    },
  ]);