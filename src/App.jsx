import Navbar from './Components/Especific Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation, Navigate } from "react-router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './_style.scss'

const queryClient = new QueryClient();

function App() {
  const location = useLocation();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar currentPage={location.pathname} />
        <main className='main-app'>
          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/projects" element={<Projects/>} />
            </Routes>
          </AnimatePresence>
        </main>
      </QueryClientProvider>
    </>
  )
}

export default App
