import React from "react";

const Home = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-[#DCF3F4] text-gray-900 px-10">
      {/* Left Side - Text Content */}
      <div className="w-1/2">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Kiran</h1>
        <p className="text-lg text-gray-700">
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
      <div className="w-1/2 flex justify-center">
        <img
          src="./public/myimg.jpeg"
          alt="Profile"
          className="w-80 h-90 object-cover rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Home;
