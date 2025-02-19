import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Signup from "./views/Signup";
import SurveyPublicView from "./views/SurveyPublicView";
import Surveys from "./views/Surveys";
import SurveyView from "./views/SurveyView";
import Chatbots from "./views/features/chatbot/Chatbots";
import ChatbotView from "./views/features/chatbot/ChatbotView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Navigate to="/" />
      },
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/surveys",
        element: <Surveys />,
      },
      {
        path: "/surveys/create",
        element: <SurveyView />,
      },
      {
        path: "/surveys/:id",
        element: <SurveyView />,
      },
      {
        path: "/chatbots",
        element: <Chatbots />,
      },
      {
        path: "/chatbots/create",
        element: <ChatbotView />,
      },
      {
        path: "/chatbots/:id",
        element: <ChatbotView />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/survey/public/:slug",
    element: <SurveyPublicView />,
  },
]);

export default router;
