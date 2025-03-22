
import './App.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/layout'
import { ThemeProvider } from './components/context/theme-provider'
import WeatherDashboard from './pages/weather-dashboard'
import CityPage from './pages/city-page'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>

  )
}

export default App
