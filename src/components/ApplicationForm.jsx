import { useState } from "react";

export default function ApplicationForm({ onSubmit, isSubmitting }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    course: "",
    previousEducation: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
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
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label fw-medium">First Name*</label>
          <input
            type="text"
            className="form-control"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label fw-medium">Last Name*</label>
          <input
            type="text"
            className="form-control"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            required
          />
        </div>
      </div>

      <div className="row g-3 mt-2">
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

      <div className="mt-3">
        <label className="form-label fw-medium">Previous Education*</label>
        <input
          type="text"
          className="form-control"
          value={formData.previousEducation}
          onChange={(e) =>
            setFormData({ ...formData, previousEducation: e.target.value })
          }
          required
        />
      </div>

      <div className="mt-3">
        <label className="form-label fw-medium">Additional Message</label>
        <textarea
          className="form-control"
          rows="3"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        ></textarea>
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
    </form>
  );
}
