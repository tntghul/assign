import React from 'react'

const Subscribe = () => {
  return (
    <>
    
    <div className="container my-5">
        <div className="row">
            <div className="col-lg-12 bg-primary p-5 rounded">
                <h1  className='text-white text-center'>Subscribe to Newsletter</h1>
                <p className='text-center text-white'>We have a wide experience in experience design and strategy.</p>

                <div className="input-group mt-5">
  <input
    type="text"
    className="bg-white rounded p-3 form-control"
    placeholder="Enter your email address"
  />
  <button className="btn btn-primary">Subscribe</button>
</div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Subscribe