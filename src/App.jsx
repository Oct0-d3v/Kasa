import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UseDataFetch from './components/UseDataFetch/UseDataFetch'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import FicheLogement from './pages/FicheLogement/FicheLogement'
import About from './pages/About/About'
import Error from './pages/Error/Error'

const App = () => {

    const { logements } = UseDataFetch()

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home logements={logements} />} />
                <Route path="/fiche-logement/:id" element={<FicheLogement logements={logements} />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App