import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Header from "./components/Header";
import Home from "./pages/home";
import ApartmentIndex from "./pages/ApartmentIndex";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ApartmentEdit from "./pages/ApartmentEdit";
import ApartmentProtectedIndex from "./pages/ApartmentProtectedIndex";
import ApartmentNew from "./pages/ApartmentNew";
import ApartmentShow from "./pages/ApartmentShow";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import { Container } from 'reactstrap';

const App = () => {

return (
  <>
    <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />}/>
          {/* <Route path='/index' element={<} */}

        </Routes>
      </Container>
    <Footer />
  </>
)

}
export default App;
