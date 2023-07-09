import './App.css'
import { Container } from 'reactstrap'
import { Landing } from './pages/Landing'
import { Home } from './pages/Home'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { MyWorks } from './pages/MyWorks';
import { TechStacks } from './pages/TechStacks';

function App() {

  return (
    <Container fluid className='w-100 px-0 mx-0'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/my-works" element={<MyWorks />} />
          <Route exact path="/tech-stacks" element={<TechStacks />} />
        </Routes>
      </Router>
    </Container >
  )
}

export default App
