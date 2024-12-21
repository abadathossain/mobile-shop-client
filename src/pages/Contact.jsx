
const Contact = () => {
    return (
        <div className="text text-center">
            <h1 className="text-4xl mb-3 mt-3 font-bold text-blue-700 text-center">Contact Us</h1>
            <p>Feel free to get in touch with us for any inquiries or assistance.</p>

            <h2>Contact Information</h2>
            <p>
                <strong>Phone:</strong> +1 (123) 456-7890 <br />
                <strong>Email:</strong> support@mobileshop.com <br />
                <strong>Address:</strong> 123 Mobile Street, Tech City, USA
            </p>

            <h2 className="text-2xl mb-3 mt-3 font-bold text-blue-700 text-center">Send Us a Message</h2>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-primary w-full max-w-xs" />

                </div>
                <br />


                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-primary w-full max-w-xs" />

                </div>
                <br />
                <div>
                    <label htmlFor="message">Message:</label>


                    <textarea
                        type="text"
                        placeholder="Type here"
                        name="message" rows="10"
                        className="input input-bordered input-primary w-full max-w-xs" />

                </div>
                <br />
                <button className="btn btn-primary">Submit Your Message</button>
            </form>
        </div>
    );
};

export default Contact;
