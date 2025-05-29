import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import CoursesPage from "./pages/CoursesPage"
import AdmissionsPage from "./pages/AdmissionsPage"
import CampusLifePage from "./pages/CampusLifePage"
import ContactPage from "./pages/ContactPage"
import WhatsAppFloat from "./components/WhatsAppFloat"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/campus-life" element={<CampusLifePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <WhatsAppFloat />
      </div>
    </Router>
  )
}

export default App
