import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ApplicationModal from "../components/ApplicationModal"

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const values = [
    {
      icon: "fas fa-bullseye",
      title: "Excellence",
      description: "Striving for the highest standards in education and research",
    },
    {
      icon: "fas fa-users",
      title: "Innovation",
      description: "Fostering creativity and cutting-edge thinking",
    },
    {
      icon: "fas fa-globe",
      title: "Global Perspective",
      description: "Preparing students for a connected world",
    },
    {
      icon: "fas fa-award",
      title: "Integrity",
      description: "Upholding ethical values in all our endeavors",
    },
  ]

  const milestones = [
    { year: "2009", event: "University Established" },
    { year: "2012", event: "First Graduation Ceremony" },
    { year: "2015", event: "Research Center Inaugurated" },
    { year: "2018", event: "International Partnerships" },
    { year: "2020", event: "Digital Campus Initiative" },
    { year: "2023", event: "10,000+ Alumni Network" },
  ]

  return (
    <div className="min-vh-100">
      <Header />

      {/* Hero Section */}
      <section className="py-5 bg-gradient-danger text-white">
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold mb-4">About P P Savani University</h1>
          <p className="fs-5 mx-auto" style={{ maxWidth: "600px" }}>
            A premier institution dedicated to academic excellence, innovation, and holistic development of students
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="card h-100 p-4 border-0 shadow-sm">
                <div className="d-flex align-items-center mb-4">
                  <i className="fas fa-bullseye text-danger me-3 fs-3"></i>
                  <h3 className="fw-bold mb-0">Our Mission</h3>
                </div>
                <p className="text-muted lh-lg">
                  To provide world-class education that empowers students with knowledge, skills, and values necessary
                  to excel in their chosen fields and contribute meaningfully to society. We are committed to fostering
                  innovation, critical thinking, and ethical leadership.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card h-100 p-4 border-0 shadow-sm">
                <div className="d-flex align-items-center mb-4">
                  <i className="fas fa-eye text-danger me-3 fs-3"></i>
                  <h3 className="fw-bold mb-0">Our Vision</h3>
                </div>
                <p className="text-muted lh-lg">
                  To be a globally recognized university that transforms lives through quality education, cutting-edge
                  research, and community engagement. We envision creating leaders who will shape the future and make a
                  positive impact on the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">Our Core Values</h2>
            <p className="fs-5 text-muted">The principles that guide everything we do</p>
          </div>
          <div className="row g-4">
            {values.map((value, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card h-100 text-center p-4 border-0 shadow-sm">
                  <i className={`${value.icon} text-danger mb-3`} style={{ fontSize: "3rem" }}></i>
                  <h5 className="fw-semibold mb-3">{value.title}</h5>
                  <p className="text-muted">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">Our Journey</h2>
            <p className="fs-5 text-muted">Key milestones in our growth and development</p>
          </div>
          <div className="row g-4">
            {milestones.map((milestone, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card p-4 border-0 shadow-sm">
                  <div className="display-6 fw-bold text-danger mb-2">{milestone.year}</div>
                  <p className="text-dark mb-0">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">Leadership</h2>
            <p className="fs-5 text-muted">Meet the visionaries leading our institution</p>
          </div>
          <div className="row g-4">
            {[
              { name: "Dr. P P Savani", role: "Chancellor" },
              { name: "Dr. Rajesh Kumar", role: "Vice Chancellor" },
              { name: "Prof. Anita Sharma", role: "Registrar" },
            ].map((leader, index) => (
              <div key={index} className="col-md-4">
                <div className="card text-center p-4 border-0 shadow-sm">
                  <div
                    className="bg-light rounded-circle mx-auto mb-3"
                    style={{ width: "128px", height: "128px" }}
                  ></div>
                  <h5 className="fw-semibold mb-2">{leader.name}</h5>
                  <p className="text-danger fw-medium">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
