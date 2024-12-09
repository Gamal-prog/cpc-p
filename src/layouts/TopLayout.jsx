import Navbar from "../components/Navbar"

function TopLayout({ children }) {

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow px-6 py-8 bg-base-100">
                {children}
            </main>
      </div>
    );
  };
  
export default TopLayout