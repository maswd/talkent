import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CheckRegistration from "../pages/CheckRegistration";
import Error from "../pages/Error";
import Landing from "../pages/Landing";
import UserContext from '../context/userContext';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement:<Error/>,
      children: [
        {index: true,
          element: <Landing />,
        },
        
      ],
    },
    {
      path: "/login",
      element: <UserContext><CheckRegistration/></UserContext>,
    },
  ]);