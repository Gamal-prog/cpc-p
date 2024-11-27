import Navbar from './Navbar.jsx'
import Test from './Test.jsx'
import Greating from './Greating.jsx';
import Statistics from './Statistics.jsx'
import Login from './Login.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <>
        <Router>

            <div className="relative flex flex-col min-h-screen">
            {/* Навбар сверху */}
                <Navbar />

                {/* Основной контент */}
                <main className="flex-grow px-4 py-4 bg-base-100">
                <Routes>
                <Route
                    path="/"
                    element={
                        <div className="grid grid-cols-7 gap-2">
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