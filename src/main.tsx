import { BrowserRouter } from "react-router-dom";
import ReactDom from 'react-dom/client'
import App from './components/App/App.tsx'
import '../src/components/styles/index.scss';


ReactDom.createRoot(document.getElementById('root')!).render(
  
    <BrowserRouter>
    <App />
    </BrowserRouter>
  
)
