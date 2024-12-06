import { createBrowserRouter } from "react-router-dom";
import Combinations from "./pages/Combinations";
import Facts from "./pages/Facts";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Recipes from "./pages/Recipes";
import HistoryPage from "./pages/History";
import Beans from "./pages/Beans";
import BeanPage from "./pages/Bean";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import Review from "./pages/Review";
import About from "./pages/About";


const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      loader: Loader,
      children: [
        { index: true, element: <Home /> },
        { path: 'facts', element: <Facts /> },
        { path: 'history', element: <HistoryPage /> },
        { path: 'beans', element: <Beans /> },
        { path: 'bean/:beanId', element: <BeanPage /> },
        { path: 'recipes', element: <Recipes /> },
        { path: 'combinations', element: <Combinations /> },
        { path: 'about', element: <About /> },
        { path: 'review', element: <Review /> },
        { path: "*", element: <NotFound /> },
      ],
    },
]);

export default router;