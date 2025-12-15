import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import faviconImg from './assets/favicon.jpg'

// Set favicon 
const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
if (link) {
  link.href = faviconImg;
} else {
  const newLink = document.createElement('link');
  newLink.rel = 'icon';
  newLink.type = 'image/jpg';
  newLink.href = faviconImg;
  document.getElementsByTagName('head')[0].appendChild(newLink);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
