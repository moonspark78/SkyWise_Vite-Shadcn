
import './App.css'

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/layout'
import { ThemeProvider } from './components/context/theme-provider'
import WeatherDashboard from './pages/weather-dashboard'
import CityPage from './pages/city-page'


function App() {
  

  return (
    <BrowserRouter>
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path='/'  element={<WeatherDashboard/>} />
          <Route path='/city/:cityName' element={<CityPage/>} />
        </Routes>
      </Layout>
    </ThemeProvider>
    </BrowserRouter>

  )
}

export default App
