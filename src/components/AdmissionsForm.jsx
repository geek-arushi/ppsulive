import { useState } from "react"

export default function AdmissionsForm({ onSubmit }) {
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
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

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
  ]

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
  ]

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="First Name*"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Last Name*"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="row g-3 mt-2">
        <div className="col-md-6">
          <input
            type="email"
            className="form-control"
            placeholder="Email Address*"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="tel"
            className="form-control"
            placeholder="Phone Number*"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="mt-3">
        <textarea
          className="form-control"
          placeholder="Address*"
          rows="3"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          required
        ></textarea>
      </div>

      <div className="row g-3 mt-2">
        <div className="col-md-6">
          <select
            className="form-select"
            value={formData.state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
            required
          >
            <option value="">Select State*</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <select
            className="form-select"
            value={formData.course}
            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
            required
          >
            <option value="">Select Course*</option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Previous Education*"
          value={formData.previousEducation}
          onChange={(e) => setFormData({ ...formData, previousEducation: e.target.value })}
          required
        />
      </div>

      <div className="mt-3">
        <textarea
          className="form-control"
          placeholder="Additional Message (Optional)"
          rows="3"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>
      </div>

      <div className="mt-4">
        <button type="submit" className="btn btn-danger w-100 py-2 fw-medium">
          Submit Application
        </button>
      </div>
    </form>
  )
}