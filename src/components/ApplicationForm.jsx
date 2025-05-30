import { useState } from "react";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    course: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const API_URL =
    "https://script.google.com/macros/s/AKfycbzH7G9cnI-LJYOJ3d_wLggkD3E9XZ8w5C9XfPSJi616W59pNlHSI9DqQDtg393tRwDY/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status === "success") {
        setMessage("Application submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          state: "",
          course: "",
        });
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Error submitting form. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const courses = [
    "B.Tech Computer Science",
    "B.Tech Mechanical",
    "B.Tech Civil",
    "B.Tech Electrical",
    "MBA",
    "BBA",
    "B.Pharma",
    "M.Pharma",
    "BCA",
    "MCA",
    "B.Com",
    "M.Com",
    "B.Sc",
    "M.Sc",
    "BA",
    "MA",
    "LLB",
    "LLM",
  ];

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label fw-medium">Name*</label>
        <input
          type="text"
          className="form-control"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label fw-medium">Email Address*</label>
          <input
            type="email"
            className="form-control"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label fw-medium">Phone Number*</label>
          <input
            type="tel"
            className="form-control"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
          />
        </div>
      </div>

      <div className="mt-3">
        <label className="form-label fw-medium">Address*</label>
        <textarea
          className="form-control"
          rows="2"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          required
        ></textarea>
      </div>

      <div className="row g-3 mt-2">
        <div className="col-md-6">
          <label className="form-label fw-medium">State*</label>
          <select
            className="form-select"
            value={formData.state}
            onChange={(e) =>
              setFormData({ ...formData, state: e.target.value })
            }
            required
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label fw-medium">Course*</label>
          <select
            className="form-select"
            value={formData.course}
            onChange={(e) =>
              setFormData({ ...formData, course: e.target.value })
            }
            required
          >
            <option value="">Select Course</option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 d-grid">
        <button
          type="submit"
          className="btn btn-danger py-2 fw-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </button>
      </div>

      {message && (
        <div className="alert alert-info mt-3 text-center" role="alert">
          {message}
        </div>
      )}
    </form>
  );
}
