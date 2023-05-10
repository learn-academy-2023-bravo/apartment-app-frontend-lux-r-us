import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Header from "./components/Header"
import Home from "./pages/Home"
import ApartmentIndex from "./pages/ApartmentIndex"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentProtectedIndex from "./pages/ApartmentProtectedIndex"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentShow from "./pages/ApartmentShow"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer"
import { Container } from "reactstrap"
import mockUsers from "./mockUsers"
import apartments from "./mockApartments"

const App = () => {
  const [currentuser, setCurrentUser] = useState(null)
  const [currentapartment, setApartmentUser] = useState(apartments)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/index" element={<ApartmentIndex />} />
            <Route
              path="/apartmentprotectedindex"
              element={<ApartmentProtectedIndex />}
            />
            <Route path="/apartmentshow" element={<ApartmentShow />} />
            <Route path="/apartmentnew" element={<ApartmentNew />} />
            <Route path="/apartmentedit" element={<ApartmentEdit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
