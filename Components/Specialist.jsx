import React from 'react';

// Reusable Doctor Card Component
const DoctorCard = ({ image, name, specialty }) => {
    return (
        <div className="col-lg-3 my-5">
            <div className="card">
                <img className="card-img-top" src={image} height="300px" alt="Doctor" />
                <div className="card-body text-center">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{specialty}</p>
                </div>
            </div>
        </div>
    );
};

const Specialist = () => {
    // Doctors Data
    const doctors = [
        { image: "https://st.depositphotos.com/2702761/3304/i/950/depositphotos_33044395-stock-photo-doctor-smiling.jpg", name: "Dr. Awaatif AI", specialty: "Dental Care" },
        { image: "https://i.pinimg.com/736x/c5/a3/90/c5a3904b38eb241dd03dd30889599dc4.jpg", name: "Dr. Filipa Gaspar", specialty: "Cardiology" },
        { image: "https://wallpapers.com/images/hd/doctor-pictures-l5y1qs2998u7rf0x.jpg", name: "Dr. Sukhmeet Gorae", specialty: "Neurological" },
        { image: "https://s.libertaddigital.com/2016/02/03/700/700/327x51/doctor-mike.jpg", name: "Dr. Siri Jakobsson", specialty: "Pediatrics" }
    ];

    return (
        <div className="container my-5">
            <h1 className='text-primary my-2 text-center'>We Have The Best Specialists</h1>
            <p className='text-center mt-5'>We have a wide experience in design and strategy, with locally-rooted knowledge.</p>
            
            <div className="row">
                {doctors.map((doctor, index) => (
                    <DoctorCard key={index} {...doctor} />
                ))}
            </div>
        </div>
    );
};

export default Specialist;