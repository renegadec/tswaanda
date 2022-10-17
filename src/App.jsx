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
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { ThemeSettings } from "./components/Dashboard/components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./components/Dashboard/pages";

import { useStateContext } from "./components/Dashboard/contexts/ContextProvider";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/#home" element={<Hero></Hero>}></Route>
      <Route path="/#about" element={<About></About>}></Route>
      <Route path="/#services" element={<Services></Services>}></Route>
      <Route path="/#testimony" element={<Testimonials></Testimonials>}></Route>
      <Route path="/#cta" element={<CTA></CTA>}></Route>
      <Route path="/#contact" element={<Contact></Contact>}></Route>
      {/* dashboard */}
      {/* dashboard  */}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Ecommerce />} />

        {/* pages  */}
        <Route path="/dashboard/orders" element={<Orders />} />
        <Route path="/dashboard/employees" element={<Employees />} />
        <Route path="/dashboard/customers" element={<Customers />} />

        {/* apps  */}
        <Route path="/dashboard/kanban" element={<Kanban />} />
        <Route path="/dashboard/editor" element={<Editor />} />
        <Route path="/dashboard/calendar" element={<Calendar />} />
        <Route path="/dashboard/color-picker" element={<ColorPicker />} />

        {/* charts  */}
        <Route path="/dashboard/line" element={<Line />} />
        <Route path="/dashboard/area" element={<Area />} />
        <Route path="/dashboard/bar" element={<Bar />} />
        <Route path="/dashboard/pie" element={<Pie />} />
        <Route path="/dashboard/financial" element={<Financial />} />
        <Route path="/dashboard/color-mapping" element={<ColorMapping />} />
        <Route path="/dashboard/pyramid" element={<Pyramid />} />
        <Route path="/dashboard/stacked" element={<Stacked />} />
      </Route>

      {/* login route */}
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
    </Routes>
  </div>
);

export default App;
