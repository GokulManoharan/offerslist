import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home'
import Details from '../components/Details'

const AppRouter = _ => {

    return (
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="details">
            <Route path=":id" element={<Details />} />
          </Route>
        </Routes>
    )
}

export default AppRouter