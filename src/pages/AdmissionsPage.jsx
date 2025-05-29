import Header from "../components/Header"
import Footer from "../components/Footer"
import AdmissionsForm from "../components/AdmissionsForm"

export default function AdmissionsPage() {
  const handleSubmit = (formData) => {
    console.log("Application submitted:", formData)
  }

  const admissionSteps = [
    {
      icon: "fas fa-file-text",
      title: "Submit Application",
      description: "Fill out the online application form with required documents",
    },
    {
      icon: "fas fa-credit-card",
      title: "Pay Application Fee",
      description: "Complete the payment process for application fee",
    },
    {
      icon: "fas fa-calendar",
      title: "Entrance Exam",
      description: "Appear for the entrance examination (if applicable)",
    },
    {
      icon: "fas fa-check-circle",
      title: "Admission Confirmation",
      description: "Receive admission confirmation and complete enrollment",
    },
  ]

  const importantDates = [
    { event: "Application Start Date", date: "January 15, 2025" },
    { event: "Application Deadline", date: "May 30, 2025" },
    { event: "Entrance Exam", date: "June 15, 2025" },
    { event: "Result Declaration", date: "June 30, 2025" },
    { event: "Admission Confirmation", date: "July 15, 2025" },
    { event: "Classes Begin", date: "August 1, 2025" },
  ]

  return (
    <div className="min-vh-100">
      <Header />

      {/* Hero Section */}
      <section className="py-5 bg-gradient-danger text-white">
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold mb-4">Admissions 2025-26</h1>
          <p className="fs-5 mx-auto" style={{ maxWidth: "600px" }}>
            Begin your journey towards academic excellence. Apply now for our undergraduate and postgraduate programs.
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">Admission Process</h2>
            <p className="fs-5 text-muted">Simple steps to secure your admission</p>
          </div>
          <div className="row g-4">
            {admissionSteps.map((step, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card text-center p-4 border-0 shadow-sm h-100">
                  <div
                    className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <i className={`${step.icon} text-danger fs-4`}></i>
                  </div>
                  <h5 className="fw-semibold mb-3">{step.title}</h5>
                  <p className="text-muted small">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold text-dark mb-3">Apply Online</h2>
                <p className="fs-5 text-muted">Fill out the application form to get started</p>
              </div>
              <div className="card border-0 shadow">
                <div className="card-header bg-danger text-white text-center py-4">
                  <h4 className="fw-bold mb-0">Application Form</h4>
                </div>
                <div className="card-body p-4">
                  <AdmissionsForm onSubmit={handleSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">Important Dates</h2>
            <p className="fs-5 text-muted">Mark your calendar with these key dates</p>
          </div>
          <div className="row g-4">
            {importantDates.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card p-4 border-0 shadow-sm">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="fw-semibold text-dark mb-1">{item.event}</h6>
                      <p className="text-danger fw-medium mb-0">{item.date}</p>
                    </div>
                    <i className="fas fa-calendar text-danger fs-4"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
