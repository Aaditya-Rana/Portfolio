import React, { useEffect, useState } from "react";
import "./home.css"; // Custom CSS file
import profileImage from "../../assets/images/AadityaProfile.jpg"; // Replace with your image path

const Home = () => {
  const [roleText, setRoleText] = useState("");
  const roles = ["Full Stack Developer"]; // Add more roles as needed
  const [roleIndex, setRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typeTimer = setTimeout(() => {
      setIsTyping(false); // Stop typing animation
      const role = roles[roleIndex];
      let currentText = "";
      let currentIndex = 0;

      const typeInterval = setInterval(() => {
        currentText += role[currentIndex];
        setRoleText(currentText);
        currentIndex++;
        if (currentIndex > role.length - 1) {
          clearInterval(typeInterval);
          setTimeout(() => {
            setIsTyping(true); // Restart typing animation
          }, 2000); // Delay before starting next role typing
        }
      }, 100); // Adjust typing speed (100ms = 0.1 second)

      return () => clearInterval(typeInterval);
    }, 2000); // Delay before starting typing first role

    return () => clearTimeout(typeTimer); // Cleanup
  }, [roleIndex, roles]);

  useEffect(() => {
    const nextRoleIndex = (roleIndex + 1) % roles.length;
    setRoleIndex(nextRoleIndex);
  }, [isTyping]); // Cycle roles when typing animation stops

  return (
    <div className="main-body">
      <div className="container-fluid vh-100 d-flex align-items-center gradient-background">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center mt-5 pt-5">
            <div className="mb-4 mb-lg-0 text-left">
              <h1 className="big-bold-text">Hi There! <span role="img" aria-label="wave">👋🏻</span></h1>
              <h2 className="name-heading">I'M <span>Aaditya Rana</span></h2>
              <p className="about-text">
                Aspiring Full Stack Developer passionate about using JavaScript and animation libraries to create awesome user experiences. Skilled in HTML, CSS, React.js, and Node.js, with a strong foundation in SQL and MongoDB. Solution-oriented with strong problem-solving abilities and a commitment to continuous learning. Highly skilled in communication, collaboration, and technical documentation.
              </p>
              <h3 className="role-heading">
                <span className="typewriter">
                  {roleText}<span className="cursor">|</span>
                </span>
              </h3>
            </div>
            <div className="image-container">
              <img
                src={profileImage}
                alt="Profile"
                className="img-fluid rounded-circle profile-image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid secondary">
        <div className="container">
          <div className="secondary-content">
            <h1 className="s-content-heading">
              Get in Touch
            </h1>
            <p className="s-content-para">
              Whether you want to get in touch, or talk about a project collaboration.
            </p>
            <p className="s-content-para-bold">
              Feel free to connect with me
            </p>
            <div className="s-content-links">
              <a href="https://www.linkedin.com/in/aadityarana" target="_blank"><i className="fab fa-linkedin"></i></a>
              <a href="https://www.github.com/aaditya-rana" target="_blank"><i className="fab fa-github"></i></a>
              <a href="mailto:aadityarana460@gmail.com"><i className="fas fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;