import { useState } from "react"
import { Link } from "react-router-dom"
import ApplicationModal from "./ApplicationModal"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Admissions", href: "/admissions" },
    { name: "Campus Life", href: "/campus-life" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-white shadow-lg sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light py-3">
          {/* Logo */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img 
              src="/PPSUNAACALogo.png" 
              alt="PPSU Logo" 
              className="me-3" 
              style={{ height: "60px" }} 
            />
          </Link>

          {/* Contact & Apply Button - Desktop */}
          <div className="d-none d-lg-flex align-items-center ms-auto me-3">
            <div className="d-flex align-items-center text-danger me-4">
              <i className="fas fa-phone me-2"></i>
              <span className="fw-semibold">+91-8485929697</span>
            </div>
            <button className="btn btn-danger" onClick={() => setIsModalOpen(true)}>
              Apply Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="navbar-toggler border-0" type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>

          {/* Navigation */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
            <ul className="navbar-nav mx-auto">
              {navigation.map((item) => (
                <li key={item.name} className="nav-item">
                  <Link to={item.href} className="nav-link fw-medium text-dark" onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Contact & Apply */}
            <div className="d-lg-none mt-3 pt-3 border-top">
              <div className="d-flex align-items-center text-danger mb-3">
                <i className="fas fa-phone me-2"></i>
                <span className="fw-semibold">+91-8485929697</span>
              </div>
              <button className="btn btn-danger w-100" onClick={() => setIsModalOpen(true)}>
                Apply Now
              </button>
            </div>
          </div>
        </nav>
      </div>
      
      {isModalOpen && <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </header>
  )
}
