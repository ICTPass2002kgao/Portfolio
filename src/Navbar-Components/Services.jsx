import Card from "../Components/Card";
import React from "react";
import { useEffect } from "react";
import ScrollReveal from 'scrollreveal';

const Services = () => {
  const projects = [
    {
      id: "1",
      title: "Dankie Mobile App",
      description: `A mobile application that allows all the TACT church members to
                        connect and sell/buy products and listen to church music and assist matric students with applications to the university`,
      techStack: `Dart(Flutter) & Firebase & django`,
      projectType: "Website and Mobile App",
      sourceCodes: "https://github.com/ICTPass2002kgao/DANKIE-SYSTEM.git",
      Url: "https://tact-3c612.web.app/",
      storeLinks: {
        apple: "https://apps.apple.com/za/app/dankie-mobile/id6767526580",
        android: "https://play.google.com/store/apps/details?id=com.thetact.ttact&pli=1",
        huawei: "http://appgallery.huawei.com/app/C115359927",
      }, 
    }, 
    {
      id: "2",
      title: "Memberssistant",
      description: `Memberssistant is an enterprise-grade Smart Residence Management System engineered to modernize student accommodation. By replacing manual paperwork with automated student applications, intelligent room allocations, and secure QR-code gate passes, Memberssistant delivers a seamless, secure, and digitized living experience for both administrators and residents.`,
      techStack: "Dart(Flutter) & Firebase, Nextjs, Python(Django)",
      projectType: "Mobile App and Web App",
      sourceCodes: "https://github.com/ICTPass2002kgao/MEMBERSSISTANT.git",
      Url: "https://mst.mktechcloud.co.za/",
      storeLinks: {
        apple: "",
        android: "",
        huawei: "",
      },
      // 👇 Added demo credentials here (since this is a live web URL too)
      demoCredentials: {
        username: "kgaogelojoseph33@gmail.com",
        password: "password123",
      }
    }, 
    {
      id: "3",
      title: "Image2Pdf",
      description: `This is a mobile application for
                          both android and IOS user to
                          convert Images to PDF `,
      techStack: `Dart(Flutter)`,
      projectType: "Mobile App",
      sourceCodes: "https://github.com/ICTPass2002kgao/Image-to-pdf.git",
      Url: "",
      storeLinks: {
        apple: "",
        android: "",
        huawei: "",
      },
    },
    {
      id: "4",
      title: "Recruitment System",
      description: `This is a recruitment system
                        programmed for MICTSETA
                        company so allow job seekers
                        apply for available jobs Posted by
                        the HR of MICTSETA`,
      techStack: `HTML, CSS, JS, Python(Django), Dart(Flutter)`,
      projectType: "Web App and Mobile App",
      sourceCodes:
        "https://github.com/mictseta-recruitment-system/mictseta_recruitment_system.git",
      Url: "",
      storeLinks: {
        apple: "",
        android: "",
        huawei: "",
      },
    },
  ];

  useEffect(() => { 
    const sr = ScrollReveal({
      origin: "bottom",  
      distance: "50px",  
      duration: 2000, 
      delay: 200, 
      reset: false,  
    });
    sr.reveal(".header-title", { origin: 'left' });
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
            Url={data.Url}
            storeLinks={data.storeLinks}   
            demoCredentials={data.demoCredentials} // 👈 Pass the new prop
          />
        ))}
      </div>
    </div>
  );
};

export default Services;