import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Logo_animation } from './Logo_animation.jsx'

function Navbar() {
  const isAuthenticated = true; // Используйте состояние для управления аутентификацией
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  const userImage =
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";

    const navigate = useNavigate();

    const handleLogin = () => {
      navigate('/login'); // Переход на страницу логина
    };

  return (
    <>
      <div className="navbar shadow px-4 flex flex-row z-50">
      {/* Логотип */}
        {/* <a className="btn btn-ghost normal-case pl-1 pr-1">
          <img className="w-11" src="/favicon.svg" alt="Logo" />
        </a> */}
        <Link to="/" className="btn btn-ghost normal-case px-1">
          {/* <img className="w-11" src="/favicon.svg" alt="Logo" /> */}
          <Logo_animation />
        </Link>
      
      {/* Строка поиска */}
      <div className="flex-1 px-1">
        <div className="dropdown w-5/6">

        <div 
          className={`relative flex items-center w-full max-w-2xl border rounded-full ${isFocused ? "bg-base-100" : "bg-zinc-200"}`}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {/* Иконка лупы */}
          <span className="pl-3 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>

          {/* Поле ввода */}
          <input
                type="text"
                placeholder="Search photos and illustrations"
                className={`w-full rounded-full h-9 pl-3 pr-12 border-none focus:outline-none ${isFocused ? "bg-base-100" : "bg-zinc-200"}`}
              />
            
        </div>
        <div tabIndex={0} role="button"></div>
            <ul 
              tabIndex={0}
              className="menu dropdown-content bg-base-100 rounded-box max-w-2xl w-full mt-4 p-2 shadow"
            >
                <div className="flex justify-between items-center mt-2">
                  <h3 className="text-gray-700"><strong>Category</strong></h3>
                </div>
                <div className="flex gap-2 mt-2 flex-wrap">
                  <button className="btn btn-sm">Add</button>
                  <button className="btn btn-sm">del</button>
                </div>
              <div className="flex justify-between items-center flex-wrap mt-2">
                  <h3 className="text-gray-700"><strong>Tranding</strong></h3>
                </div>
                <div className="flex gap-2 mt-2 mb-2 flex-wrap">
                  <button className="btn btn-sm">Add</button>
                  <button className="btn btn-sm">del</button>
                </div>
            </ul>
        </div>

      </div>

      {/* Кнопки справа */}
      <div className="basis-0.5">
        {!isAuthenticated ? (
          /* Если пользователь не аутентифицирован */
          // <div className="tooltip tooltip-bottom" data-tip="Login">
            <button className="btn btn-sm" onClick={handleLogin}>Log in</button>
          /* </div> */
        
        ) : (
          /* Если пользователь аутентифицирован */
          <div className="flex gap-2 items-center pr-1">
            {/* Уведомления */}
            {/* <button className="btn btn-ghost">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                {/* <span className="badge badge-xs badge-primary indicator-item"></span> при появлении уведомлений показ колич уведом*/}
              {/*</div>
            </button> */}
            {/* Аватар пользователя */}
            {/* <div className="avatar">
              <div className="w-9 h-9 rounded-full">
                <img src={userImage} alt="User Avatar" />
              </div>
            </div> */}
            <div className="dropdown dropdown-end">
              <button className="btn btn-ghost" tabIndex={0} role="button">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  {/* <span className="badge badge-xs badge-primary indicator-item"></span> при появлении уведомлений показ колич уведом*/}
                </div>
              </button>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow border mt-3">
                <li><a>Some info</a></li>
              </ul>
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="avatar">
                <div className="w-9 h-9 rounded-full">
                  <img src={userImage} alt="User Avatar" />
                </div>
              </div> 
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box mt-4 w-52 p-2 shadow border">
                <li>
                  <ul>
                    <li><a>View profile</a></li>
                    <li><a>Logout</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Бургер-меню */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul 
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-48 border"
          >
            <div className="flex flex-row px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <h5 className="pl-2 mt-1 mb-1"><strong>Company</strong></h5>
              </div>
            <li>
              
              <ul>
                <li><a href="">About</a></li>
                <li><a href="">Contact us</a></li>
                <li><a href="">Help center</a></li>
                <div className="flex flex-row">
                  <li>
                    <a href="https://web.whatsapp.com">
                      <img className="w-5 h-5" src="/whatsapp.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com">
                      <img className="w-5 h-5" src="/facebook.png" alt="Facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com">
                      <img className="w-5 h-5" src="/instagram.png" alt="Instagram" />
                    </a>
                  </li>
                </div>
              </ul>
            </li> 
          </ul>
        </div>

      </div>
    </div>
    </>
  )
}

export default Navbar
