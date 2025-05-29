import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationModal from "../components/ApplicationModal";

export default function CoursesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const programs = [
    {
      category: "Engineering",
      courses: [
        {
          name: "B.Tech Computer Science",
          duration: "4 Years",
          seats: "120",
          description:
            "Comprehensive program covering software development, AI, and emerging technologies",
        },
        {
          name: "B.Tech Mechanical",
          duration: "4 Years",
          seats: "60",
          description: "Focus on design, manufacturing, and mechanical systems",
        },
        {
          name: "B.Tech Civil",
          duration: "4 Years",
          seats: "60",
          description:
            "Infrastructure development and construction engineering",
        },
      ],
    },
    {
      category: "Management",
      courses: [
        {
          name: "MBA",
          duration: "2 Years",
          seats: "120",
          description: "Master of Business Administration with specializations",
        },
        {
          name: "BBA",
          duration: "3 Years",
          seats: "60",
          description: "Bachelor of Business Administration",
        },
      ],
    },
    {
      category: "Pharmacy",
      courses: [
        {
          name: "B.Pharma",
          duration: "4 Years",
          seats: "60",
          description: "Bachelor of Pharmacy with practical training",
        },
        {
          name: "M.Pharma",
          duration: "2 Years",
          seats: "30",
          description: "Master of Pharmacy with research focus",
        },
      ],
    },
    {
      category: "Computer Applications",
      courses: [
        {
          name: "BCA",
          duration: "3 Years",
          seats: "60",
          description: "Bachelor of Computer Applications",
        },
        {
          name: "MCA",
          duration: "2 Years",
          seats: "30",
          description: "Master of Computer Applications",
        },
      ],
    },
  ];

  return (
    <div className="min-vh-100">
      <Header />

      {/* Hero Section */}
      <section className="py-5 bg-gradient-danger text-white">
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold mb-4">Our Programs</h1>
          <p className="fs-5 mx-auto" style={{ maxWidth: "700px" }}>
            Discover our comprehensive range of undergraduate and postgraduate
            programs designed to shape future leaders
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-5">
        <div className="container">
          {programs.map((program, index) => (
            <div key={index} className="mb-5">
              <h2 className="display-6 fw-bold text-dark mb-4 text-center">
                {program.category}
              </h2>
              <div className="row g-4">
                {program.courses.map((course, courseIndex) => (
                  <div key={courseIndex} className="col-md-6 col-lg-4">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-header bg-white border-0 pt-4">
                        <h5 className="fw-semibold text-dark">{course.name}</h5>
                      </div>
                      <div className="card-body">
                        <p className="text-muted mb-3">{course.description}</p>
                        <div className="mb-3">
                          <div className="d-flex align-items-center text-muted small mb-2">
                            <i className="fas fa-clock me-2"></i>
                            Duration: {course.duration}
                          </div>
                          <div className="d-flex align-items-center text-muted small">
                            <i className="fas fa-users me-2"></i>
                            Seats: {course.seats}
                          </div>
                        </div>
                        <button
                          className="btn btn-danger w-100"
                          onClick={() => setIsModalOpen(true)}
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">
              Program Features
            </h2>
            <p className="fs-5 text-muted">
              What makes our programs exceptional
            </p>
          </div>
          <div className="row g-4">
            {[
              {
                icon: "fas fa-book-open",
                title: "Industry-Relevant Curriculum",
                description: "Updated curriculum aligned with industry needs",
              },
              {
                icon: "fas fa-users",
                title: "Expert Faculty",
                description:
                  "Learn from experienced professionals and academicians",
              },
              {
                icon: "fas fa-award",
                title: "Practical Learning",
                description: "Hands-on experience through labs and projects",
              },
              {
                icon: "fas fa-clock",
                title: "Flexible Schedules",
                description: "Multiple learning formats to suit your needs",
              },
            ].map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card text-center p-4 border-0 shadow-sm h-100">
                  <i
                    className={`${feature.icon} text-danger mb-3`}
                    style={{ fontSize: "3rem" }}
                  ></i>
                  <h5 className="fw-semibold mb-3">{feature.title}</h5>
                  <p className="text-muted small">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
