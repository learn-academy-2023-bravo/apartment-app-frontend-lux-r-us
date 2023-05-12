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
import mockUsers from "./mockUsers"
import mockApartments from "./mockApartments"

const App = () => {
  const [currentuser, setCurrentUser] = useState(null)
  const [apartments, setApartments] = useState(mockApartments)

  const readApartment = () => {
    fetch("http://localhost:3000/cats")
      .then((response) => response.json())
      .then((payload) => {
        setApartments(payload)
      })
      .catch((error) => console.log(error))
  }

  const signup = (email, password) => {
    setCurrentUser({ email: email, password: password })
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
        <Header />
        <div className="bg-gray-500">
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
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
