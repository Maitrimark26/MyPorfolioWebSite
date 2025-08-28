

// export default Contact;
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const VITE_APP_EMAILJS_SERVICE_ID="service_51cdmyz";
const VITE_APP_EMAILJS_TEMPLATE_ID="template_dwty4d3";
const VITE_APP_EMAILJS_PUBLIC_KEY="XCLzu5ueGSzQ-IL4T";
const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    await emailjs.sendForm(
      VITE_APP_EMAILJS_SERVICE_ID,
      VITE_APP_EMAILJS_TEMPLATE_ID,
      formRef.current,
      VITE_APP_EMAILJS_PUBLIC_KEY
    );

    // Reset form after success
    setForm({ from_name: "", from_email: "", message: "" });
    formRef.current.reset();
    
    toast.success("✅ Message sent successfully!"); // ✅ Toast success
  } catch (error) {
    console.error("EmailJS Error:", error);
    toast.error("❌ Failed to send message. Please try again."); // ❌ Toast error
  } finally {
    setLoading(false);
  }
};

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     await emailjs.sendForm(
  //       VITE_APP_EMAILJS_SERVICE_ID,
  //       VITE_APP_EMAILJS_TEMPLATE_ID,
  //       formRef.current,
  //      VITE_APP_EMAILJS_PUBLIC_KEY,
    
  //     );

  //     // Reset form after success
  //     setForm({ from_name: "", from_email: "", message: "" });
  //     formRef.current.reset();
  //     alert("✅ Message sent successfully!");
  //   } catch (error) {
  //     console.error("EmailJS Error:", error);
  //     alert("❌ Failed to send message. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <section id="contact" className="flex-center section-padding">
        <ToastContainer 
      position="top-right" // you can change position
      autoClose={3000}     // closes after 3 seconds
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="from_name">Your Name</label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={form.from_name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="from_email">Your Email</label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    value={form.from_email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
