// src/index.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from '@contexts/AuthContext'; // Import AuthProvider
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);