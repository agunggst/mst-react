import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { QueryClientProvider, QueryClient } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import LandingPage from './pages/LandingPage'
import Header from './components/Header'
import MovieDetail from './pages/MovieDetail'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App bg-zinc-700 min-h-screen">
          <Header />
          <Routes>
            <Route path='/' element={<LandingPage />}/>
            <Route path='/:id' element={<MovieDetail /> }/>
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  )
}

export default App
