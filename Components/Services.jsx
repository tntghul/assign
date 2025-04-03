import React from 'react'
import "./App.css"

const Services = () => {
return (
<>
    <div className="container my-5">
        <div className="row">
            <h2 className='text-primary d-flex justify-content-center'><b>Our Services</b></h2>
            <p className='text-center mt-4'>We provide the most full medical services, so every person could have the
                opportunity to receive qualitative medical help.</p>

                <div className="col-lg-3 my-5 ">
                            <div className="card shadow">
                                <img className="card-img-top" src="https://media.istockphoto.com/vectors/icons-of-tooth-in-thin-line-style-vector-id675931360?k=6&m=675931360&s=612x612&w=0&h=vRn3mnKQxT7sRyJ_Pn-H5A1X1MxRK-x9sfgUkONlUy0=" height="300px" alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title text-center">Dental Care</h4>
                                </div>
                            </div>
                </div>
                <div className="col-lg-3 my-5">
                            <div className="card shadow">
                                <img className="card-img-top" src="https://media.istockphoto.com/vectors/human-lungs-anatomy-medical-science-vector-illustration-vector-id1195787697?k=6&m=1195787697&s=612x612&w=0&h=vAImUtovSolfws_1pk0L3gf_xZYBVBLw53ogLrzw3ao=" height="300px" alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title text-center">Pulmonary</h4>
                                </div>
                            </div>
                </div>
                <div className="col-lg-3 my-5">
                            <div className="card shadow">
                                <img className="card-img-top" src="https://static.vecteezy.com/system/resources/previews/017/038/543/original/brain-outline-detailed-medical-graphic-drawing-free-vector.jpg" height="300px" alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title text-center">Neurological</h4>
                                </div>
                            </div>
                </div>
                <div className="col-lg-3 my-5">
                            <div className="card shadow">
                                <img className="card-img-top " src="https://i.pinimg.com/736x/a7/c1/70/a7c170f88bbd75881fa1a6c4bbacb5b9.jpg" height="300px" alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title text-center">Prediatrics</h4>
                                </div>
                            </div>
                </div>

            
          
          

        </div>

    </div>

    

</>

)
}


export default Services