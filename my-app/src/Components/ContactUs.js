import React from 'react';

const ContactUs = () => {
  return (
    <div className="container-fluid bg-purple text-white py-5" style={{ backgroundColor: '#4B2E83' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <h2 className="mb-4 fw-bold">Contact me</h2>

        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
          </div>

          <div className="mb-3">
            <label htmlFor="enquiryType" className="form-label">Type of enquiry</label>
            <select className="form-select" id="enquiryType">
              <option>Freelance project proposal</option>
              <option>Job opportunity</option>
              <option>Collaboration request</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Your message</label>
            <textarea className="form-control" id="message" rows="5" placeholder="Type your message here..."></textarea>
          </div>

          <button type="submit" className="btn btn-light w-100 mt-3">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
