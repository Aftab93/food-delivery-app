import React from 'react'
import Home from './Pages/Home'
import { SearchProvider } from './context/SearchContext'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Cart from './components/Cart/Cart'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const App = () => {

  return (
    <Provider store={store}>
      <SearchProvider>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <Home />
          <Cart />
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
            theme="light"
          />
        </div>
      </SearchProvider>
    </Provider>
  )
}

export default App