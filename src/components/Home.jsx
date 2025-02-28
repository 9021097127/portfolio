import React from "react";
import myImg from "../images/myimg.jpeg"; // Ensure the image is in the correct directory

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#DCF3F4] text-gray-900 px-4 md:px-10">
      {/* Left Side - Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Hi, I'm Kiran</h1>
        <p className="text-base sm:text-lg text-gray-700">
          I am a passionate{" "}
          <span className="text-blue-600">.NET Developer</span>
          specializing in building high-performance web applications and
          microservices. Let's build something amazing together!
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition">
          View My Work
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={myImg} // Use the imported image
          alt="Profile"
          className="w-64 sm:w-80 h-auto object-cover rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Home;
