import Navbar from './components/Navbar.jsx'
import Test from './components/Test.jsx'
import Greating from './components/Greating.jsx';
import Statistics from './components/Statistics.jsx'
import Login from './pages/Login.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <>
        <Router>

            <div className="min-h-screen">
            {/* Навбар сверху */}
                <Navbar />

                {/* Основной контент */}
                <main className="flex-grow px-4 py-4 bg-base-100">
                <Routes>
                <Route
                    path="/"
                    element={
                        <div className="gap-2 main-grid">
                            <Greating />
                            <Statistics />
                            <Test />
                        </div>
                        // <div className="flex flex-row flex-wrap">

                        // </div>
                    }/>
                    <Route path="/login" element={<Login />} />
                </Routes>
                </main>
            </div>
            </Router>
        </>
    );
}

export default App