import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router/router'
import { RouterProvider } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <Container className="pt-5">
      <div className="row justify-content-center"><RouterProvider router={router}/></div>
    </Container>
  )
}

export default App
