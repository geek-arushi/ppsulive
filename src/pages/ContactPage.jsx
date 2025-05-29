import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationModal from "../components/ApplicationModal";

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Address",
      details: [
        "P P Savani University",
        "Kosamba, Surat",
        "Gujarat, India - 394125",
      ],
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      details: ["+91-8485929697"],
    },
    {
      icon: "fas fa-clock",
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
      ],
    },
  ];

  return (
    <div className="min-vh-100">
      <Header />

      {/* Hero Section */}
      <section className="py-5 bg-gradient-danger text-white">
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold mb-4">Contact Us</h1>
          <p className="fs-5 mx-auto" style={{ maxWidth: "700px" }}>
            Get in touch with us for any inquiries about admissions, programs,
            or campus life
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card text-center p-4 border-0 shadow-sm h-100">
                  <i
                    className={`${info.icon} text-danger mb-3`}
                    style={{ fontSize: "3rem" }}
                  ></i>
                  <h5 className="fw-semibold mb-3">{info.title}</h5>
                  <div>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted small mb-1">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">
              Frequently Asked Questions
            </h2>
            <p className="fs-5 text-muted">Quick answers to common questions</p>
          </div>
          <div className="row g-4">
            {[
              {
                question: "What are the admission requirements?",
                answer:
                  "Admission requirements vary by program. Generally, you need to have completed 12th grade for undergraduate programs and a bachelor's degree for postgraduate programs.",
              },
              {
                question: "When do classes start?",
                answer:
                  "Classes typically begin in August for the new academic year. Please check our academic calendar for specific dates.",
              },
              {
                question: "Is financial aid available?",
                answer:
                  "Yes, we offer various scholarships and financial aid options based on merit and need. Contact our financial aid office for more information.",
              },
              {
                question: "Can I visit the campus?",
                answer:
                  "We encourage prospective students to visit our campus. You can schedule a campus tour by contacting our admissions office.",
              },
            ].map((faq, index) => (
              <div key={index} className="col-md-6">
                <div className="card p-4 border-0 shadow-sm">
                  <h5 className="fw-semibold text-dark mb-3">{faq.question}</h5>
                  <p className="text-muted">{faq.answer}</p>
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
