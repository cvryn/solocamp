import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";


function About() {
  return (
    <div id="container-developers-footer">
      <div className="container-developers-columns">
        <h4>Caryn W.</h4>
        <Link to="https://www.linkedin.com/in/caryn-w-280b6729b/"
          target="_blank"
        >
          <FaLinkedin /> linkedin.com/in/caryn-w-280b6729b
        </Link>
        <Link to="https://github.com/cvryn"
          target="_blank"
        >
          <FaGithubSquare /> github.com/cvryn
        </Link>
        <span><IoLogoDiscord /> woohoobear</span>
      </div>

      <div className="container-developers-columns">
        <h4>Mengxuan L.</h4>
        <Link to="https://www.linkedin.com/in/mengxuan-liang-a53615119/"
          target="_blank"
        >
          <FaLinkedin /> linkedin.com/in/mengxuan-liang-a53615119
        </Link>
        <Link to="https://github.com/Mengxuan-Liang"
          target="_blank"
        >
          <FaGithubSquare /> github.com/Mengxuan-Liang
        </Link>
        <span><IoLogoDiscord /> mengxuan_83070</span>
      </div>

      <div className="container-developers-columns">
        <h4>Alan C.</h4>
        <Link to="https://www.linkedin.com/in/alan-c-373746251/"
          target="_blank"
        >
          <FaLinkedin /> linkedin.com/in/alan-c-373746251
        </Link>
        <Link to="https://github.com/ac091322"
          target="_blank"
        >
          <FaGithubSquare /> github.com/ac091322
        </Link>
        <span><IoLogoDiscord /> ac091322</span>
      </div>
    </div>
  );
}


export default About;
