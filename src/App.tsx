import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, { Container } from './styles'
import Home from './pages/Home'
import Register from './pages/Register'
import { Provider } from 'react-redux'
import store from './store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/register',
    element: <Register />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={router} />
      </Container>
    </Provider>
  )
}

export default App
