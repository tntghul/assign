import React from 'react'

const Section = () => {
  return (
    <>
    <div className="container my-5">
        <div className="row">
            <div className="col-lg-6 mt-5">
                <h5 className='mt-5'><b>Welcome to MediCare+Clinic</b></h5>
                <h1 className='mt-4 text-primary'><b>Best Specialists</b></h1>
                <p className='mt-4'>We are on the leading edge of cancer care. Providing the full continuum of cancer treatments and supportive care services in a single convenient location.</p>
               
               <input type="submit" className='btn btn-primary px-2 m-5' value="Make an Appoinment" />
               <input type="submit" className='btn btn-white border px-4 m-5' value="Departments" />
              
            </div>
            <div className="col-lg-6">
              <img src="https://tse3.mm.bing.net/th?id=OIP.7C0flefo1oSXUNMbrzZnHAHaE8&pid=Api&P=0&h=220" className='rounded shadow my-5 object-fit' height="350px" alt="" />
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Section