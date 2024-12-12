import Navbar from "../components/Navbar"

function TopLayout({ children }) {

    return (
        <div className="max-h-full size-full flex flex-col">
            <Navbar />

                {children}
        </div>
    );
}

export default TopLayout