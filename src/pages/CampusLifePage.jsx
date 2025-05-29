import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ApplicationModal from "../components/ApplicationModal"

export default function CampusLifePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const facilities = [
    {
      icon: "fas fa-book-open",
      title: "Modern Library",
      description: "State-of-the-art library with digital resources and study spaces",
    },
    {
      icon: "fas fa-trophy",
      title: "Sports Complex",
      description: "Comprehensive sports facilities including gym, courts, and fields",
    },
    {
      icon: "fas fa-utensils",
      title: "Dining Facilities",
      description: "Multiple dining options with diverse cuisine choices",
    },
    {
      icon: "fas fa-heart",
      title: "Health Center",
      description: "On-campus medical facilities and wellness programs",
    },
    {
      icon: "fas fa-users",
      title: "Student Clubs",
      description: "Over 50 student organizations and clubs to join",
    },
    {
      icon: "fas fa-music",
      title: "Cultural Center",
      description: "Venues for performances, events, and cultural activities",
    },
  ]

  const clubs = [
    "Technical Club",
    "Cultural Society",
    "Sports Club",
    "Photography Club",
    "Drama Society",
    "Music Club",
    "Dance Group",
    "Literary Society",
    "Environmental Club",
    "Social Service Club",
    "Entrepreneurship Cell",
    "Debate Society",
  ]

  const events = [
    {
      title: "Annual Tech Fest",
      description: "Three-day technology festival with competitions and exhibitions",
    },
    {
      title: "Cultural Festival",
      description: "Celebration of arts, music, and cultural diversity",
    },
    {
      title: "Sports Week",
      description: "Inter-college sports competitions and tournaments",
    },
  ]

  return (
    <div className="min-vh-100">
      <Header />

      {/* Hero Section */}
      <section className="py-5 bg-gradient-danger text-white">
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold mb-4">Campus Life</h1>
          <p className="fs-5 mx-auto" style={{ maxWidth: "700px" }}>
            Experience a vibrant campus life with endless opportunities for growth, learning, and fun
          </p>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">Campus Facilities</h2>
            <p className="fs-5 text-muted">World-class facilities to support your academic and personal growth</p>
          </div>
          <div className="row g-4">
            {facilities.map((facility, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card text-center p-4 border-0 shadow-sm h-100">
                  <i className={`${facility.icon} text-danger mb-3`} style={{ fontSize: "4rem" }}></i>
                  <h5 className="fw-semibold mb-3">{facility.title}</h5>
                  <p className="text-muted">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold text-dark mb-4">Student Life</h2>
              <p className="fs-6 text-muted mb-4">
                At PPSU, student life extends far beyond the classroom. Our vibrant campus community offers countless
                opportunities to explore your interests, develop new skills, and build lifelong friendships.
              </p>
              <p className="fs-6 text-muted mb-4">
                From academic clubs to cultural societies, sports teams to volunteer organizations, there's something
                for everyone. Our students actively participate in organizing events, leading initiatives, and making a
                positive impact on campus and in the community.
              </p>
              <div className="row g-4">
                <div className="col-6 text-center">
                  <div className="display-6 fw-bold text-danger">50+</div>
                  <div className="text-muted">Student Clubs</div>
                </div>
                <div className="col-6 text-center">
                  <div className="display-6 fw-bold text-danger">100+</div>
                  <div className="text-muted">Annual Events</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="bg-light rounded d-flex align-items-center justify-content-center"
                style={{ height: "384px" }}
              >
                <span className="text-muted">Student Life Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clubs & Organizations */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">Clubs & Organizations</h2>
            <p className="fs-5 text-muted">Join like-minded peers and pursue your passions</p>
          </div>
          <div className="row g-3">
            {clubs.map((club, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-3">
                <div className="card p-3 text-center border-0 shadow-sm">
                  <p className="fw-medium text-dark mb-0">{club}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">Major Events</h2>
            <p className="fs-5 text-muted">Annual celebrations that bring our community together</p>
          </div>
          <div className="row g-4">
            {events.map((event, index) => (
              <div key={index} className="col-md-4">
                <div className="card border-0 shadow-sm overflow-hidden">
                  <div
                    className="bg-light d-flex align-items-center justify-content-center"
                    style={{ height: "192px" }}
                  >
                    <span className="text-muted">Event Image</span>
                  </div>
                  <div className="card-body p-4">
                    <h5 className="fw-semibold mb-3">{event.title}</h5>
                    <p className="text-muted">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">Accommodation</h2>
            <p className="fs-5 text-muted">Comfortable and safe housing options for students</p>
          </div>
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div
                className="bg-light rounded d-flex align-items-center justify-content-center"
                style={{ height: "256px" }}
              >
                <span className="text-muted">Hostel Image</span>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="fw-bold text-dark mb-4">Modern Hostel Facilities</h3>
              <ul className="list-unstyled">
                <li className="mb-3 text-muted">• Fully furnished rooms with modern amenities</li>
                <li className="mb-3 text-muted">• 24/7 security and Wi-Fi connectivity</li>
                <li className="mb-3 text-muted">• Common areas for recreation and study</li>
                <li className="mb-3 text-muted">• Mess facilities with nutritious meals</li>
                <li className="mb-3 text-muted">• Laundry and housekeeping services</li>
                <li className="mb-3 text-muted">• Medical facilities on campus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
