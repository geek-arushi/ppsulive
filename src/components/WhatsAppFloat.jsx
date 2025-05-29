import { useState } from "react"

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappNumber = "+918485929697"
  const defaultMessage = "Hi! I'm interested in learning more about P P Savani University admissions and programs."

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
    setIsOpen(false)
  }

  return (
    <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
      {/* Chat bubble */}
      {isOpen && (
        <div className="bg-white rounded shadow-lg border mb-3 p-3 animate-slide-up" style={{ width: "320px" }}>
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div className="d-flex align-items-center">
              <div
                className="bg-success rounded-circle d-flex align-items-center justify-content-center me-2"
                style={{ width: "32px", height: "32px" }}
              >
                <i className="fab fa-whatsapp text-white"></i>
              </div>
              <div>
                <h6 className="mb-0 fw-semibold">PPSU Admissions</h6>
                <small className="text-success">Online</small>
              </div>
            </div>
            <button className="btn btn-sm btn-outline-secondary border-0" onClick={() => setIsOpen(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="bg-light rounded p-2 mb-3">
            <small className="text-dark">
              👋 Hi there! Need help with admissions or have questions about our programs?
            </small>
          </div>

          <div className="bg-light rounded p-2 mb-3">
            <small className="text-dark">
              We're here to assist you with:
              <br />• Course information
              <br />• Admission process
              <br />• Campus facilities
              <br />• Scholarships
            </small>
          </div>

          <button
            onClick={handleWhatsAppClick}
            className="btn btn-success w-100 d-flex align-items-center justify-content-center"
          >
            <i className="fab fa-whatsapp me-2"></i>
            Start Chat
          </button>

          <p className="text-center text-muted small mt-2 mb-0">Typically replies within minutes</p>
        </div>
      )}

      {/* Floating WhatsApp button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`btn btn-success rounded-circle position-relative shadow-lg ${!isOpen ? 'animate-pulse' : ''}`}
        style={{ width: "56px", height: "56px" }}
      >
        {isOpen ? (
          <i className="fas fa-times fs-5"></i>
        ) : (
          <>
            <i className="fab fa-whatsapp fs-5"></i>
            {/* Notification dot */}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ fontSize: "10px" }}
            >
              1
            </span>
          </>
        )}
      </button>
    </div>
  )
}
