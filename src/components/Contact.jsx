import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen w-full bg-transparent px-4 sm:px-6 md:px-10 py-8 md:py-10 text-white scroll-mt-32">
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-12 py-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-violet-400 tracking-wide mb-3 md:mb-4 my-6">
          Get in Touch
        </h1>
        <p className="text-base sm:text-lg font-medium text-gray-300 px-2">
          I'd love to hear from you! Reach out using the options below.
        </p>
      </div>

      {/* Main Content Container - Transparent Background */}
      <div
        className="max-w-4xl mx-auto space-y-12 bg-transparent"
        style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 1)" }}
      >
        {/* Contact Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Email",
              detail: "kiranbhosale4105@gmail.com",
              link: "mailto:kiranbhosale4105@gmail.com",
              icon: "https://raw.githubusercontent.com/SomnathBansode/Somnathsportfolio/1b4db38cdecae48fc0799d8d50ccf8f74bda02e8/public/images/icons8-gmail.svg",
              alt: "Email Icon",
            },
            {
              title: "LinkedIn",
              detail: "Kiran Bhosale",
              link: "https://www.linkedin.com/in/kiran-bhosale-7bb373224/",
              icon: "https://raw.githubusercontent.com/SomnathBansode/Somnathsportfolio/1b4db38cdecae48fc0799d8d50ccf8f74bda02e8/public/images/icons8-linkedin.svg",
              alt: "LinkedIn Icon",
            },
            {
              title: "GitHub",
              detail: "KiranBhosale",
              link: "https://github.com/9021097127",
              icon: "https://raw.githubusercontent.com/SomnathBansode/Somnathsportfolio/1b4db38cdecae48fc0799d8d50ccf8f74bda02e8/public/images/icons8-github.svg",
              alt: "GitHub Icon",
            },
            {
              title: "Phone",
              detail: "+91 9021097127",
              link: "tel:+919021097127",
              icon: "https://static.vecteezy.com/system/resources/previews/002/261/151/original/phone-icon-symbol-sign-isolate-on-white-background-illustration-free-vector.jpg",
              alt: "Phone Icon",
            },
            {
              title: "Location",
              detail: "Pune, Maharashtra",
              link: "#",
              icon: "https://png.pngtree.com/png-clipart/20230427/original/pngtree-3d-pin-map-location-icon-transparent-psd-png-image_9116189.png",
              alt: "Location Icon",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-700 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center space-y-4 border border-gray-700"
            >
              {/* Icon with background, rounded borders, and padding */}
              <div className="bg-white rounded-full p-3">
                <img
                  src={item.icon}
                  alt={item.alt}
                  className="w-12 h-12" // Adjust size as needed
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-300">{item.detail}</p>
                {item.link !== "#" && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-400 hover:text-violet-500 font-medium mt-2 inline-block"
                  >
                    {`Go to ${item.title}`}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
