import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Header from "./components/Header"
import Home from "./pages/Home"
import ApartmentIndex from "./pages/ApartmentIndex"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import ApartmentEdit from "./pages/ApartmentEdit"
import MyApartments from "./pages/MyApartments"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentShow from "./pages/ApartmentShow"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer"
import { Container } from "reactstrap"

const App = () => {

  const url = "http://localhost:3000"
  const [currentuser, setCurrentUser] = useState(null)
  const [apartments, setApartments] = useState([])

  const readApartment = () => {
    fetch(`${url}/apartments`)
      .then((response) => response.json())
      .then((payload) => {
        setApartments(payload)
      })
      .catch((error) => console.log(error))
  }

  const login = (userInfo) => {
    fetch(`${url}/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": 'application/json',
       "Accept": 'application/json'
      },
      method: 'POST'
    })
    .then (response => {
      // this is to store  the token into local storage... which is like a bag of holding or something along those lines
      localStorage.setItem('token', response.headers.get("Authorization"))
      return response.json()
    })
    .then(payload => {
      setCurrentUser(payload)

    })
    .catch(error => console.log('login errors: ', error))
  }
  
  const logout = () => {
    fetch(`${url}/logout`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localstorage.getItem('token')
      },
      method: 'DELETE'
    })
    .then (payload => {
      localStorage.removeItem('token')
      setCurrentUser(null)
    })
    .catch(error => console.log('log out errors: ', error))
  }

  const createApartment = (apartment) => {
    fetch("http://localhost:3000/apartments", {
      body: JSON.stringify(apartment),
      headers: { "Content-Type": "application/json" },
      metohd: "POST",
    })
      .then((response) => response.json())
      .then(() => readApartment())
      .catch((error) => console.log("cat create error:", error))
  }

  return (
    <>
      <BrowserRouter>
        <Header current_user={currentUser} logout={logout}/>
        <div className="bg-gray-500">
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login login={login}/>} />
              <Route path="/signup" element={<SignUp signup={signup}/>} />
              <Route path="/index" element={<ApartmentIndex />} />
              <Route path="/myapartments" element={<MyApartments />} />
              <Route
                path="/apartmentshow/:id"
                element={<ApartmentShow apartments={apartments} />}
              />
              <Route
                path="/apartmentnew"
                element={<ApartmentNew createApartment={createApartment} />}
              />
              <Route path="/apartmentedit/:id" element={<ApartmentEdit />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
