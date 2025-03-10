import React from 'react';

const Contact = () => {

  const handleFormSubmit = (formData)=>{
    console.log(formData.entries());
    const formInputData=object.fromEntries(formData.entries());
  }
  return (
    <div className="max-w-[1040px] m-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      
      <form action={handleFormSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <input
            type="text"
            required
            autoComplete="off"
            placeholder="Enter Your Name"
            name="username"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
          />
        </div>

        {/* Email Input */}
        <div>
          <input
            type="email"
            required
            autoComplete="off"
            placeholder="Enter Your Email ID"
            name="email"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
          />
        </div>

        {/* Message Textarea */}
        <div>
          <textarea
            rows="6"
            placeholder="Enter your message"
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            value="send"
            className="w-full py-3 px-6 bg-blue-400 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
