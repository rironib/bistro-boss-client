import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";
import router from "./routes/Routes.jsx";
import './index.css';
import AuthProvider from "./provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <HelmetProvider>
                    <RouterProvider router={router} />
            </HelmetProvider>
        </AuthProvider>
    </React.StrictMode>,
)
