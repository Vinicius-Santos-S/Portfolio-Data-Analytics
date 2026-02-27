import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Home'
import {Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar/>
        <main>
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </main>
      </QueryClientProvider>
    </>
  )
}

export default App
