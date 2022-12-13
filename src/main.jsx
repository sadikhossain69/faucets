import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

/**
 * client id 923294815787-k48riq10scqktlfopdh7a4qse20n816t.apps.googleusercontent.com
 * 
 * client secret key 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
 */

const clientID = "923294815787-k48riq10scqktlfopdh7a4qse20n816t.apps.googleusercontent.com"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="923294815787-k48riq10scqktlfopdh7a4qse20n816t.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
