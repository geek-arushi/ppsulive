import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">
        <div className="row g-4">
          {/* University Info */}
          <div className="col-lg-3 col-md-6">
            <div className="d-flex align-items-center mb-3">
              <img 
                src="/PPSUNAACALogo.png" 
                alt="PPSU Logo" 
                className="me-3" 
                style={{ height: "50px" }} 
              />
            </div>
            <p className="text-light mb-3">
              Empowering minds, shaping futures. Join us in our journey of academic excellence and innovation.
            </p>
            <div className="d-flex gap-3">
              <i className="fab fa-facebook text-secondary"></i>
              <i className="fab fa-twitter text-secondary"></i>
              <i className="fab fa-instagram text-secondary"></i>
              <i className="fab fa-linkedin text-secondary"></i>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-semibold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/about" className="text-light text-decoration-none">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/courses" className="text-light text-decoration-none">
                  Courses
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/admissions" className="text-light text-decoration-none">
                  Admissions
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/campus-life" className="text-light text-decoration-none">
                  Campus Life
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-light text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-semibold mb-3">Programs</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/courses#engineering" className="text-light text-decoration-none">
                  Engineering
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/courses#management" className="text-light text-decoration-none">
                  Management
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/courses#pharmacy" className="text-light text-decoration-none">
                  Pharmacy
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/courses#computer-science" className="text-light text-decoration-none">
                  Computer Science
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/courses#commerce" className="text-light text-decoration-none">
                  Commerce
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-semibold mb-3">Contact Info</h5>
            <div className="mb-3">
              <div className="d-flex align-items-start">
                <i className="fas fa-map-marker-alt text-danger me-3 mt-1"></i>
                <div className="text-light">
                  <p className="mb-1">P P Savani University</p>
                  <p className="mb-1">Kosamba, Surat</p>
                  <p className="mb-0">Gujarat, India</p>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <i className="fas fa-phone text-danger me-3"></i>
              <span className="text-light">+91-8485929697</span>
            </div>
          </div>
        </div>
        <hr className="border-secondary my-4" />
        <div className="text-center">
          <p className="text-secondary mb-0">© 2025 Eternity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
