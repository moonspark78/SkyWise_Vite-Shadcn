
import './App.css'

import { BrowserRouter } from 'react-router-dom'
import Layout from './components/layout'
import { ThemeProvider } from './components/context/theme-provider'

function App() {
  

  return (
    <BrowserRouter>
    <ThemeProvider>
      <Layout>Hello</Layout>
    </ThemeProvider>
    </BrowserRouter>

  )
}

export default App
