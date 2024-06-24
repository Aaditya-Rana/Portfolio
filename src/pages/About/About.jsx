import "./about.css";
import manCoding from "../../assets/images/manCoding.jpg";

const About = () => {
    return (
        <>
            <div className="main-about">
                <div className="container-fluid about">
                    <div className="container a-description">
                        <div>
                            <h1 className="a-d-heading">About Me</h1>
                            <div className="a-d-para">
                                <p>Hi Everyone, I am Aaditya Rana from Dehradun, India.</p>
                                <p>I am an aspiring Full Stack Developer passionate about using JavaScript and animation libraries to create awesome user experiences.</p>
                                <p>Skilled in HTML, CSS, React.js, Node.js, SQL, and MongoDB, I thrive on solving complex problems and building innovative web applications. I am currently pursuing a B.Tech in Computer Science and Engineering at Dev Bhoomi Uttarakhand University with an SGPA of 9.5.</p>
                                <p>My projects include developing a real-time code editor with face calling using React and Socket.io, implementing a self-driving car model in JavaScript, and creating a feature-rich e-commerce website using React.js and Node.js.</p>
                                <p>Apart from coding, some other activities that I love to do include participating in hackathons and contributing to the coding community.</p>
                            </div>
                        </div>
                        <img src={manCoding} alt="coding_image" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
