import React from "react";

const About = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-white text-gray-900 px-10">
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-600">About Me</h2>
        <p className="text-lg text-gray-700">
          I completed my{" "}
          <span className="font-semibold">
            Bachelor of Computer Science (BCS)
          </span>{" "}
          in 2022. Currently, I have{" "}
          <span className="font-semibold">
            1 year of experience in Java Testing
          </span>
          , where I have worked with automation and manual testing
          methodologies.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          I am now expanding my skills in{" "}
          <span className="text-blue-600">.NET development</span> and building
          high-performance web applications. Passionate about learning new
          technologies and solving real-world problems.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition">
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default About;
