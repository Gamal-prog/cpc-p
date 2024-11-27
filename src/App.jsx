import Navbar from './Navbar.jsx'
import Test from './Test.jsx'
import Greating from './Greating.jsx';
import Statistics from './Statistics.jsx'


function App() {
    return (
        <>
            <div className="relative flex flex-col min-h-screen">
            {/* Навбар сверху */}
                <Navbar />

                {/* Основной контент */}
                <main className="flex-grow px-4 py-4 bg-base-100">
                    <div className="grid gap-2 grid-cols-7">
                        <Greating />
                        <Statistics />
                        <Test />
                    </div>
                    <div className="flex flex-row flex-wrap">
                        <Greating />
                    </div>
                </main>
            </div>
        </>
    );
}

export default App