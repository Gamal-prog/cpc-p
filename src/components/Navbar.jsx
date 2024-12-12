import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Logo_animation } from './Logo_animation.jsx'
import { PhotoContext } from '../api/PhotoContext.jsx'

function Navbar({/*{ onSearch }*/}) {
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

    //f
    const { handleSearch } = useContext(PhotoContext);
    const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const onSearch = () => {
    if (query.trim()) {
      handleSearch(query);
    }

    setRecentSearches((prevSearches) => {
      if (!prevSearches.includes(query)) {
        // Добавляем новый запрос и ограничиваем список до 9 последних
        return [query, ...prevSearches].slice(0, 9);
      }
      return prevSearches;
    });
  };

  const [trendingSearch, setTrendingSearch] = useState(['animals', 'nature']);
  const [trendingTopics, setTrendingTopics] = useState(['Wallpapers', '3D Renders']);

  const handleDropdownClick = (option) => {
    setQuery(option); // Устанавливаем выбранное значение в поле ввода
    onSearch(option); // Вызываем поиск по выбранному значению

    // setRecentSearches((prevSearches) => {
    //   if (!prevSearches.includes(query)) {
    //     // Добавляем новый запрос и ограничиваем список до 9 последних
    //     return [query, ...prevSearches].slice(0, 9);
    //   }
    //   return prevSearches;
    // });
  };

  const [recentSearches, setRecentSearches] = useState([]);



  return (
    <>
      <div className="navbar shadow px-4 flex flex-row z-50">
      {/* Логотип */}
        
        <Link to="/" className="btn btn-ghost normal-case px-1">
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
          <span className="pl-3 text-gray-500" onClick={onSearch}>
          
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
                value={query}
                onChange={handleInputChange}
              />
            
        </div>
        <div tabIndex={0} role="button"></div>
            <ul 
              tabIndex={0}
              className="menu dropdown-content bg-base-100 rounded-lg max-w-2xl w-full mt-4 p-2 shadow border"
            >
              <div className="flex flex-col py-2 px-2 gap-x-2 gap-y-2">
                {recentSearches.length > 0 && (
                  <>
                    <h5><strong>Recent Searches</strong></h5> 
                    <div className="flex flex-row gap-3">
                      {recentSearches.map((option) => (
                        <button 
                          className="btn btn-sm btn-outline btn-accent"
                          key={option}
                          onClick={() => handleDropdownClick(option)}  
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                            <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z"/>
                            <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z"/>
                            <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5"/>
                          </svg>
                          {option}
                        </button>
                      ))}
                    </div>
                  </>
                )}
                <h5><strong>Trending Searches</strong></h5> 
                <div className="flex flex-row gap-3">
                  {trendingSearch.map((option) => (
                    <button 
                      className="btn btn-sm btn-outline btn-accent"
                      key={option}
                      onClick={() => handleDropdownClick(option)}  
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/>
                      </svg>
                      {option}
                    </button>
                  ))}
                </div>
                <h5><strong>Trending Topics</strong></h5>
                <div className="flex flex-row gap-3">
                {trendingTopics.map((option) => (
                    <button 
                      className="btn btn-sm btn-outline btn-accent"
                      key={option}
                      onClick={() => handleDropdownClick(option)}  
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                        <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"/>
                      </svg>
                      {option}
                    </button>
                  ))}
                </div>
              </div>
                
            </ul>
        </div>

      </div>

      {/* Кнопки справа */}
      <div className="basis-0.5">
        {!isAuthenticated ? (
          /* Если пользователь не аутентифицирован */
          // <div className="tooltip tooltip-bottom" data-tip="Login">
          <div className="flex gap-2 pr-1">
            <button className="btn btn-sm mr-4" onClick={handleLogin}>Log in</button>
          </div>
            
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
                    <li><Link to='/profile'>View profile</Link></li>
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
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact-us">Contact us</Link></li>
                <li><Link to="/help-center">Help center</Link></li>
                <div className="flex flex-row">
                  <li>
                    <a href="https://web.whatsapp.com">
                      <img className="w-5 h-5" src="/whatsapp.png" alt="Whatsapp" />
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
