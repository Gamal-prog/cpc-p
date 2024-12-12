import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer className="footer footer-center bg-base-100 text-base-content rounded p-10 border">
            {/* <nav className="grid grid-flow-col gap-4">
                <img 
                    src="/image.png" 
                    alt="named-logo" 
                    className="h-10 w-auto"
                />
            </nav> */}
            <nav className="grid grid-flow-col gap-4 text-gray-400">
                <Link to="/about" className="link link-hover">About us</Link>
                <Link to="/contact-us" className="link link-hover">Contact</Link>
                <Link to="/help-center" className="link link-hover">Help Center</Link>
                <Link to="/" className="link link-hover">Jobs</Link>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                <a href="https://web.whatsapp.com">
                      <img className="w-5 h-5 contrast-50" src="/whatsapp.png" alt="Whatsapp" />
                    </a>
                    <a href="https://www.facebook.com">
                      <img className="w-5 h-5 contrast-50" src="/facebook.png" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com">
                      <img className="w-5 h-5 contrast-50" src="/instagram.png" alt="Instagram" />
                    </a>
                </div>
            </nav>
            <aside>
                <p className="text text-gray-400 text-sm">Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside>
        </footer>
        </>
    ); 
}

export default Footer