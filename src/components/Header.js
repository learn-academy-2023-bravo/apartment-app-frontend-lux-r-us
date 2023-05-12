import { NavLink } from "react-router-dom"


const Header = () => {

  const handleClick = () => {
    logout()
  }

  return (
    <header class="bg-gray-900 text-white">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" class="text-xl font-semibold">
          LUX-R-US
        </a>
        <nav class="flex items-center">
          <NavLink to="/" class="text-gray-400 hover:text-white mx-3">
            Home
          </NavLink>

          <NavLink to="/login" class="text-gray-400 hover:text-white mx-3">
            Log In
          </NavLink>
          <a href="#" class="text-gray-400 hover:text-white mx-3">
            Contact
          </a>
          <NavLink
            to="/signup"
            class="bg-white text-gray-900 rounded-md py-2 px-4 hover:bg-gray-200 ml-3"
          >
            Sign Up
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
