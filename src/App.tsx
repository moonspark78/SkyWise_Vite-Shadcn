
import './App.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/layout'
import { ThemeProvider } from './components/context/theme-provider'
import WeatherDashboard from './pages/weather-dashboard'
import CityPage from './pages/city-page'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    }
  }
})

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
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  )
}

export default App
