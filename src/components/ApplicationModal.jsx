import { useState } from "react";
import ApplicationForm from "./ApplicationForm";

export default function ApplicationModal({ isOpen, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Application submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset and close modal after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  if (isSubmitted) {
    return (
      <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center py-5">
              <div
                className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                style={{ width: "64px", height: "64px" }}
              >
                <i className="fas fa-check text-white fs-4"></i>
              </div>
              <h4 className="mb-3">Application Submitted!</h4>
              <p className="text-muted mb-3">
                Thank you for your interest in P P Savani University. We have received your application and will contact
                you soon.
              </p>
              <p className="small text-muted">You will receive a confirmation email shortly with next steps.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header bg-danger text-white">
            <div>
              <h5 className="modal-title fw-bold">Apply to P P Savani University</h5>
              <p className="small mb-0 opacity-75">Admission 2025-26 - Start your journey with us</p>
            </div>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>

          <div className="modal-body p-4">
            <ApplicationForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
          </div>
        </div>
      </div>
    </div>
  );
}
