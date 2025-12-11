import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
          <textarea placeholder="Message" className="w-full p-3 border rounded h-32"></textarea>
          <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">Send</button>
        </form>
        <div className="mt-6">
          <a href="https://github.com/yourusername" className="mr-4 text-blue-600">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" className="text-blue-600">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
