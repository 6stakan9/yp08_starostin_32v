import App from '../App.jsx';
import { createBrowserRouter } from 'react-router-dom';
import AboutPage from '../pages/AboutPage.jsx';
import ShowcaseGoods from '../pages/ShowcaseGoods.jsx';
import AboutUs from '../pages/AboutUs.jsx';
import Kontacts from '../pages/Kontacts.jsx';


export const router = createBrowserRouter([
    {
        path: '/AboutPage',
        element: <AboutPage />
    },
    {
        path: '/App',
        element: <App />
    },
    {
        path: '/ShowcaseGoods',
        element: <ShowcaseGoods />
    },
    {
        path: '/AboutUs',
        element: <AboutUs />
    },
    {
        path: '/Kontacts',
        element: <Kontacts />
    }
]);