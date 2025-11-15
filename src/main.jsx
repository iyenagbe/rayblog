// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { IKContext } from 'imagekitio-react'

// Load env variables
const urlEndpoint = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT
const publicKey = import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IKContext urlEndpoint={urlEndpoint} publicKey={publicKey}>
      <App />
    </IKContext>
  </StrictMode>
)
