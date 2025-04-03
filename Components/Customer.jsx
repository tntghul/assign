import React, { useEffect, useState } from "react";
import axios from "axios";

const Customer = () => {
  const [reviews, setReviews] = useState([]); // State to store reviews
  const [page, setPage] = useState(1); // Track current page

  // Function to fetch reviews from API
  const fetchReviews = () => {
    axios.get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
      .then(response => {
        let allReviews = response.data.data;
        let shuffled = allReviews.sort(() => 0.5 - Math.random()); // Reviews shuffle
        setReviews(shuffled.slice(0, 2)); // Random 2 reviews show karna
      })
      .catch(error => console.error("Error fetching reviews:", error));
  };

  useEffect(() => {
    fetchReviews(); // Pehli baar API call karna
    const interval = setInterval(() => {
        setPage(prevPage => prevPage + 1); // Har 10 sec me next page load karo
      }, 10000);
  
    return () => clearInterval(interval); // Cleanup function
  }, [page]);

  return (
    <div className="container my-5">
      <div className="row">
        <h1 className='my-2 text-primary text-center'>What Our Customers Say</h1>

        {reviews.map((review, index) => (
          <div className="col-lg-6 my-5" key={index}>
            <div className="card p-3 shadow-sm">
              <div className="card-body d-flex align-items-center">
                
                {/* Customer Image */}
                <img 
                  src={review.ImageUrl || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} // API Image or Default Profile
                  alt={review.Reviewer} 
                  className="rounded-circle me-3" 
                  width="80" 
                  height="80"
                />

                {/* Review Content */}
                <div>
                  <p className="card-text">"{review.Reviews}"</p>
                  <p className="mb-0 fw-bold">{review.Name || "Anonymous"}</p>
                  <span className="text-muted">{review.Company || "Unknown"}</span>
                </div>

              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Customer;
