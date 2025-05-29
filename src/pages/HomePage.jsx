import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationModal from "../components/ApplicationModal";
import HomePageForm from "../components/HomePageForm";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (formData) => {
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const stats = [
    { icon: "fas fa-graduation-cap", label: "Students", value: "10,000+" },
    { icon: "fas fa-users", label: "Faculty", value: "500+" },
    { icon: "fas fa-award", label: "Programs", value: "50+" },
    { icon: "fas fa-book-open", label: "Research Projects", value: "200+" },
  ];

  const features = [
    {
      title: "World-Class Faculty",
      description: "Learn from industry experts and renowned academicians",
      icon: "fas fa-users",
    },
    {
      title: "Modern Infrastructure",
      description: "State-of-the-art facilities and cutting-edge technology",
      icon: "fas fa-award",
    },
    {
      title: "Industry Partnerships",
      description: "Strong connections with leading companies for placements",
      icon: "fas fa-book-open",
    },
  ];

  return (
    <div className="min-vh-100">
      <Header />

      {/* Hero Section */}
      <section className="position-relative min-vh-100 overflow-hidden">
        {/* Video Background */}
        <video 
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover" 
          autoPlay 
          muted 
          loop 
          style={{ zIndex: -1 }}
        >
          <source src="/drone-view.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        ></div>

        <div className="position-relative d-flex align-items-center min-vh-100" style={{ zIndex: 10 }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 text-center text-lg-start mb-5 mb-lg-0">
                <h1 className="display-3 fw-bold text-white mb-4">
                  Welcome to P P Savani
                  <br />
                  University
                </h1>
                <p className="fs-5 text-white mb-4" style={{ opacity: 0.9 }}>
                  Empowering minds, shaping futures. Join us in our journey of academic excellence and innovation.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                  <button className="btn btn-danger btn-lg" onClick={() => setIsModalOpen(true)}>
                    Apply Now
                  </button>
                  <button className="btn btn-outline-light btn-lg">Virtual Tour</button>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="card shadow-lg">
                  <div className="card-header bg-danger text-white text-center py-3">
                    <h4 className="fw-bold mb-1">Admission 2025-26</h4>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="btn btn-link text-white text-decoration-underline p-0"
                    >
                      Apply Now
                    </button>
                  </div>
                  <div className="card-body p-4">
                    <HomePageForm onSubmit={handleSubmit} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {stats.map((stat, index) => (
              <div key={index} className="col-6 col-lg-3 text-center">
                <i className={`${stat.icon} text-danger mb-3`} style={{ fontSize: "3rem" }}></i>
                <div className="display-6 fw-bold text-dark mb-2">{stat.value}</div>
                <div className="text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">Why Choose PPSU?</h2>
            <p className="fs-5 text-muted">
              Discover what makes P P Savani University the perfect choice for your academic journey
            </p>
          </div>
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 text-center p-4 border-0 shadow-sm">
                  <i className={`${feature.icon} text-danger mb-3`} style={{ fontSize: "4rem" }}></i>
                  <h5 className="fw-semibold mb-3">{feature.title}</h5>
                  <p className="text-muted">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-gradient-danger text-white">
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-3">Ready to Start Your Journey?</h2>
          <p className="fs-5 mb-4">Join thousands of students who have chosen PPSU for their academic excellence</p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button className="btn btn-light btn-lg text-danger fw-semibold" onClick={() => setIsModalOpen(true)}>
              Apply Now
            </button>
            <button className="btn btn-outline-light btn-lg">Download Brochure</button>
          </div>
        </div>
      </section>

      <Footer />
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
