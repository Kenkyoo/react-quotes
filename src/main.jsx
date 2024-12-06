import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'

createRoot(document.getElementById('root')).render(
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Header />
      <main className="px-3">
        <h1>Quotes</h1>
        <App />
      </main>  
      <Footer />
    </div>  
)
