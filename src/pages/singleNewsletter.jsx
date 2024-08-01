import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import '../css/singleNewsletter.css'; // Import your CSS file for styling

const SingleNewsletter = () => {
  const { id } = useParams(); // Get the ID from URL parameters
  const [newsletter, setNewsletter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(null);

  useEffect(() => {
    const fetchNewsletter = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/posts/${id}`);
        console.log("API Response Data:", response.data); // Inspect the data

        setNewsletter(response.data); // Update state
      } catch (err) {
        console.error("Error fetching newsletter:", err);
        setError("Failed to fetch newsletter");
      } finally {
        setLoading(false);
      }
    };

    fetchNewsletter();
  }, [id]);

  const sendingEmail = async () => {
    if (!newsletter) return;

    setSending(true);
    setSendError(null);

    try {
      await axios.post('http://localhost:8080/sendingnewsletter', {
        to: "nafisa.4.star@gmail.com", // Replace with the recipient email address
        title: newsletter.data.title,
        content: newsletter.data.content
      });

      alert("Email sent successfully!");
    } catch (err) {
      console.error("Error sending email:", err);
      setSendError("Failed to send email");
    } finally {
      setSending(false);
    }
  }

  console.log("Rendering with newsletter:", newsletter); // Ensure state is set

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  if (!newsletter) return <div>No newsletter found</div>;

  return (
    <>
      <div className="single-newsletter-container">
        {console.log(newsletter)}

        <h2>{newsletter.data.title || 'No Title Available'}</h2>
        <p><strong>Title:</strong> {newsletter.data.title}</p>
        <p><strong>Content:</strong> {newsletter.data.content}</p>
      </div>
      <button onClick={sendingEmail} disabled={sending}>
        {sending ? 'Sending...' : 'Click to Send Email'}
      </button>
      {sendError && <div className="error">{sendError}</div>}
    </>
  );
};

export default SingleNewsletter;
