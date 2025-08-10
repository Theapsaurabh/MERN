import { Form } from "react-router-dom";

// Action function stays the same
// eslint-disable-next-line react-refresh/only-export-components
export async function contactData({ request }) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log("Form Submitted:", data);
    return null;
  } catch (error) {
    console.error("Form submission error:", error.message);
  }
}

export function Contact() {
  return (
    <section className="container mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">Contact Us</h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Get in touch with us. We’re always here to help you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <Form method="POST" className="space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="username"
                  className="block font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  required
                  autoComplete="off"
                  placeholder="Enter full name"
                  className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  autoComplete="off"
                  placeholder="abc@example.com"
                  className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-300"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="We’re always here to help you."
                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </Form>
        </div>

        {/* Contact Image */}
        <div className="flex justify-center">
          <img
            src="/public/contact (1).png"
            alt="Contact illustration"
            className="max-w-md w-full rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
