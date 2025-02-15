function Contact() {
  return (
    <div className="min-h-screen w-full relative bg-gradient-to-r from-white via-sky-300 to-white flex items-center justify-center text-center flex-col gap-10 pt-10">
      <h1 className="text-4xl font-semibold">Contact Me</h1>

      {/* Contact Form */}
      <form className="flex flex-col gap-6 bg-black/60 backdrop-blur-md text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Name Input */}
        <input
          type="text"
          placeholder="Enter your name"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
          required
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
          required
        />

        {/* Message Input */}
        <textarea
          placeholder="Enter your message"
          rows="5"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-gray-800  text-white py-3 rounded-md font-semibold hover:bg-gray-700 transition-all cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
