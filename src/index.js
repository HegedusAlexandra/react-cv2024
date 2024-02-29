import React from 'react';
import ReactDOM from 'react-dom/client';
import { Amplify } from 'aws-amplify'
import './index.css';
import reportWebVitals from './reportWebVitals';
import config from './aws-exports';
import { LanguageProvider } from './contexts/LanguageContext';
import './utils/i18n';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Navigator';
import { HelmetProvider } from 'react-helmet-async';

Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </HelmetProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
