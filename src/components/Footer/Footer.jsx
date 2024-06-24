import "./footer.css";

const Footer = () => {

    return (
        <>
            <footer className="main-footer">
                <div>Developed by Aaditya Rana</div>
                <div>copyright &copy; 2024</div>
                <div className="links">
                    <a href="https://www.linkedin.com/in/aadityarana" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a href="https://www.github.com/aaditya-rana" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="mailto:aadityarana460@gmail.com"><i className="fas fa-envelope"></i></a>
                </div>
            </footer>
        </>
    );
}
export default Footer;