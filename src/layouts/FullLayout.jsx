import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function FullLayout({ children }) {
    
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow px-6 py-8 bg-base-100">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default FullLayout