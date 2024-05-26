import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";
import router from "./routes/Routes.jsx";
import './index.css';
import AuthProvider from "./provider/AuthProvider.jsx";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <HelmetProvider>
                    <RouterProvider router={router} />
                </HelmetProvider>
            </QueryClientProvider>
        </AuthProvider>
    </React.StrictMode>,
)
