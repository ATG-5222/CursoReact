import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,Navigate,RouterProvider} from 'react-router-dom';
import { CounterApp } from './01-useState/CounterApp';
import { CounterWithCustomsHooks } from './01-useState/CounterWithCustomsHooks';
import { FormWithCH } from './02-useEffect/FormWithCH';
import { SimpleForm } from './02-useEffect/SimpleForm';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
import { FocusScreen } from './04-useRef/FocusScreen';
import { Layout } from './05-useLayoutEffect/Layout';
import { CallbackHook } from './06-memos/CallbackHook';
import { MemoHooks } from './06-memos/MemoHooks';
import { Memorize } from './06-memos/Memorize';
import { Padre } from './07-tarea-memo/Padre';
import { HooksApp } from './HooksApp';
import './index.css';
import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';
import { HomePage } from './09-useContext/HomePage';
import { AboutPage } from './09-useContext/AboutPage';
import { LoginPage } from './09-useContext/LoginPage';

const router = createBrowserRouter([
  {
    path:"/",
    element: <MainApp/>,
    children:[
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "about",
        element: <AboutPage/>,
      },
      {
        path: "login",
        element: <LoginPage/>,
      },
      {
        path: "*",
        element: <Navigate to="/" replace/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
