import { useEffect, useState } from "react";

import { createRoot } from "react-dom/client";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch,useSelector } from "react-redux";
import { setReduxUser } from "./redux/slice/userSlice";

import axios from "axios";
import Cookies from 'js-cookie';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import {
  LandingPageContent,
  Login,
  Signup,
  LandingPage,
  CodeEditorPage,
  PageNotFound,
  Protected,
} from "./components";
import { apiUrl } from "./constant/variables";

const router = createBrowserRouter([
  {
    path: "",
    element: <LandingPage />,
    children: [
      { path: "", element: <LandingPageContent /> },
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },
      { path: "/login", element: <Login /> },
      { path: "*", element: <PageNotFound /> },
      { path: "/protected", element: <Protected/> },
      
    ],
  },
  {
    path: "/pen",
    element: <CodeEditorPage />,
  },
  { path:"/:username/pen/:projectId?", element: <CodeEditorPage/> },
]);

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const cookie = Cookies.get('jwt')
  const dispatch = useDispatch()

 

  useEffect(() => {
    if (cookie){
      axios.get(`${apiUrl}/api/user/getUser`,{withCredentials: true})
   .then(response=>{
    console.log("appjsx resonse",response.data)
    dispatch(setReduxUser(response.data))
    setIsLoading(false)
   })
   .catch(error=>{
    console.log("appjsx response error",error)
    setIsLoading(false)
   })

   
    }

  else{
    setIsLoading(false)
  }
   
  }, [])
  
  let user = useSelector((store) => store.user.value);
  console.log("user from app",user)

  return (
    <div className="font-lato ">
      {isLoading ? <div>Loading......</div> :  <RouterProvider router={router} />}
       
      <ToastContainer />
    </div>
  );
}

export default App;
