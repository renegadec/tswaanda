import styles from "./style";
import {
  Navbar,
  Hero,
  Stats,
  About,
  Services,
  AppFeatures,
  Testimonials,
  CTA,
  Footer,
  Contact,
} from "./components";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/#home' element={<Hero></Hero>}></Route>
      <Route path="/#about" element={<About></About>}></Route>
      <Route path="/#services" element={<Services></Services>}></Route>
      <Route path="/#testimony" element={<Testimonials></Testimonials>}></Route>
      <Route path="/#cta" element={<CTA></CTA>}></Route>
      <Route path="/#contact" element={<Contact></Contact>}></Route>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
    </Routes>
  </div>
);

export default App;
