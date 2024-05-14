import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.scss'

// definition du conteneur "root" dans le html, ou le contenu sera injecté
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Le contenu general avec toutes les routes est dans App.jsx */}
    <App />
  </React.StrictMode>,
)
