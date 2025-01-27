import Card from "../Components/Card";
import React from "react";
import { useEffect } from "react";
import ScrollReveal from 'scrollreveal';

const Services = () => {
  const projects = [
    {
      id: "1",
      title: "Student living",
      description: `Developed students accommodation web application for 
                        one landlord where students can apply and landlord can review Applications and
                        send feedback to students`,
      techStack: `HTML,CSS, Javascripts, Bootstrap, Python (Django)
`,
      projectType: "Web App",
      sourceCodes:
        "https://github.com/Robotic-hub/Students-Accommodation-website.git",
      Url: "http://13.60.173.161:8000/",
    },
    {
      id: "2",
      title: "Accomate",
      description: `This is a mobile application
                            allowing Landlords to uploads
                            their properties like accomodation
                            name and etc. then on the site of
                            the students the can view all the
                            approved accomodation and apply
                            and also get feedbacks from the
                            landlords via the app`,
      techStack: "Dart(Flutter) & Firebase",
      projectType: "Mobile App",
      sourceCodes: "https://github.com/ICTPass2002kgao/ACCOMATE.git",
      Url: "",
    },
    {
      id: "3",
      title: "Furnishop",
      description: `This is an e-commerce website for
                            users to buy furnitures like
                            Cotches`,
      techStack: `HTML,
                                CSS,
                                JS,
                                Python(Django)`,
      projectType: "Web App",
      sourceCodes: "https://github.com/ICTPass2002kgao/E-commmerce.git",
      Url: "",
    },
    {
      id: "4",
      title: "Image2Pdf",
      description: `This is a mobile application for
                          both android and IOS user to
                          convert Images to PDF `,
      techStack: `Dart(Flutter)`,
      projectType: "Mobile App",
      sourceCodes: "https://github.com/ICTPass2002kgao/Image-to-pdf.git",
      Url: "",
    },
    {
      id: "5",
      title: "Recruitment System",
      description: `This is a recruitment system
                        programmed for MICTSETA
                        company so allow job seekers
                        apply for available jobs Posted by
                        the HR of MICTSETA`,
      techStack: `HTML,
                                CSS,
                                JS,
                                Python(Django),
                                Dart(Flutter)`,
      projectType: "Web App and Mobile App",
      sourceCodes:
        "https://github.com/mictseta-recruitment-system/mictseta_recruitment_system.git",
      Url: "",
    },
    {
      id: "6",
      title: "Cyborg Certifier",
      description: `An online system for South African citizens to certify
                        documents by uploading and verifying identity.`,
      techStack: `HTML, Bootstrap, Python (Django),Dart`,
      projectType: "Web App and Mobile App",
      sourceCodes: "https://github.com/Robotic-hub/Robotic-hub.git",
      Url: "https://cyborgcertifier-production.up.railway.app/",
    },
  ];
   useEffect(() => { 
    const sr = ScrollReveal({
      origin: "bottom",  
      distance: "50px",  
      duration: 1000, 
      delay: 200, 
      reset: false,  
    });
 
    sr.reveal(".service-section", { interval: 200 }); 
    sr.reveal(".header-title",{origin : 'left'})
  }, []);
  return (
    <div id="services" className="service-section">
      <header className="services-header">
        <h1 className="header-title">Our services</h1>
      </header>
      <div className="service-content-section">
        {projects.map((data) => (
          <Card
            key={data.id}
            title={data.title}
            description={data.description}
            projectType={data.projectType}
            techStack={data.techStack}
            sourceCodes={data.sourceCodes}
            Url = {data.Url}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
