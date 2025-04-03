import React from "react";

const Innovation = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left Side Text Section */}
          <div className="col-lg-6 my-5">
            <h1 className="fw-bold">Clinic With Innovation</h1>
            <p className="pt-4">
              We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.
            </p>
            <button className="btn btn-primary mt-5 px-4 py-2">Learn More</button>
          </div>

          {/* Right Side Services Section */}
          <div className="col-lg-3">
            
            <div className="p-3 rounded shadow-sm mb-5 mt-5 text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Qualified Doctors" width="150" height="200" className="d-block mx-auto" />
              <h3 className="mb-0 mt-2">Qualified Doctors</h3>
            </div>
            
            <div className="p-3  rounded shadow-sm mb-3 text-center mt-5">
              <img src="https://cdn-icons-png.flaticon.com/512/2887/2887395.png" alt="24 Hours Service" width="150" height="200" className="d-block mx-auto" />
              <h3 className="mb-0 mt-2">24 Hours Service</h3>
            </div>
          </div>
          <div className="col-lg-3">
          <div className="p-3 rounded shadow-sm mb-3 mt-5 text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/3448/3448610.png" alt="Emergency Care" width="150" height="200" className="d-block mx-auto " />
              <h3 className="mb-0 mt-2">Emergency Care</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Innovation;
