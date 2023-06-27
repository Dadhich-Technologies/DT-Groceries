const Getintouch = () => {
  return (
    <div className="w-full flex flex-col p-4">
      <h4 className="text-primary-green font-medium my-2">Get in Touch</h4>
      <p>Your email address will not be published. Required fields are marked *</p>
      <form action="post" className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6 sm:max-w-[600px] lg:max-w-[640px]">
        <div className="flex gap-5 flex-col">
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            type="text"
            id="name"
            className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-primary-green"
            placeholder="Name"
            aria-label="Name"
            aria-describedby="name-desc"
          />
          <div id="name-desc" className="sr-only">
            Please enter your name.
          </div>
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            type="text"
            id="email"
            className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-primary-green"
            placeholder="Email"
            aria-label="Email"
            aria-describedby="email-desc"
          />
          <div id="email-desc" className="sr-only">
            Please enter your email address.
          </div>
        </div>
        <div className="flex gap-5 flex-col">
          <label htmlFor="phone" className="sr-only">Phone</label>
          <input
            type="text"
            id="phone"
            className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-primary-green"
            placeholder="Phone"
            aria-label="Phone"
            aria-describedby="phone-desc"
          />
          <div id="phone-desc" className="sr-only">
            Please enter your phone number.
          </div>
          <label htmlFor="subject" className="sr-only">Subject</label>
          <input
            type="text"
            id="subject"
            className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-primary-green"
            placeholder="Subject"
            aria-label="Subject"
            aria-describedby="subject-desc"
          />
          <div id="subject-desc" className="sr-only">
            Please enter the subject.
          </div>
        </div>
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          cols={10}
          rows={7}
          className="lg:col-span-2 border-gray-500 px-4 py-2 border focus:outline-none focus:border-primary-green"
          placeholder="Message"
          aria-label="Message"
          aria-describedby="message-desc"
        />
        <div id="message-desc" className="sr-only">
          Please enter your message.
        </div>
      </form>
    </div>
  );
};

export default Getintouch;
