import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const Rutas = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    }
])

export default Rutas