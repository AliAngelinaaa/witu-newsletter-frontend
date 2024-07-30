import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../css/listingnewsletters.css';

export default function ListingNewsletters() {
  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsletters = async () => {
      try {
        const response = await axios.get("http://localhost:8080/posts");
        console.log("API Response Data:", response.data);

        // Access the array from the `data` property
        if (response.data && Array.isArray(response.data.data)) {
          setNewsletters(response.data.data);
        } else {
          console.error("Unexpected data format:", response.data);
          setNewsletters([]);
        }
      } catch (err) {
        console.error("Error fetching newsletters:", err);
        setError("Failed to fetch newsletters");
      } finally {
        setLoading(false);
      }
    };

    fetchNewsletters();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <ul className="newsletter-list-container">
        {newsletters.length > 0 ? (
          newsletters.map((newsletter) => (
            <li className ="newsletter-item" key={newsletter.id}>
              <Link to={`posts/${newsletter.id}`}>
                {newsletter.title}
              </Link>
            </li>
          ))
        ) : (
          <li>No newsletters created</li>
        )}
      </ul>
    </div>
  );
}
