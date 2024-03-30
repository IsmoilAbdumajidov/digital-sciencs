import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import PageNotFound from './pages/pageNotFound/PageNotFound'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Kafedra from './pages/kafedra/Kafedra'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:nameKafedra' element={<Kafedra />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
        <Footer />
    </div>
  )
}

export default App