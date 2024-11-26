import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";


function About() {
  return (
    <div id="container-developers-footer">
      <div className="container-developers-columns">
        <h3 style={{ fontSize: "1.5rem" }}>Caryn W.</h3>
        <span style={{ color: "gray", fontSize: "0.75rem" }}>Full-Stack Developer</span>
        <Link
          to="https://www.linkedin.com/in/caryn-w-280b6729b"
          target="_blank"
          style={{ display: "flex", alignItems: "center", gap: "3px" }}
        >
          <FaLinkedin /> linkedin.com/in/caryn-w-280b6729b
        </Link>
        <Link
          to="https://github.com/cvryn"
          target="_blank"
          style={{ display: "flex", alignItems: "center", gap: "3px" }}
        >
          <FaGithubSquare /> github.com/cvryn
        </Link>
      </div>

      <div className="container-developers-columns">
        <h3 style={{ fontSize: "1.5rem" }}>Mengxuan  L.</h3>
        <span style={{ color: "gray", fontSize: "0.75rem" }}>Full-Stack Developer</span>
        <Link
          to="https://www.linkedin.com/in/mengxuan-liang-a53615119"
          target="_blank"
          style={{ display: "flex", alignItems: "center", gap: "3px" }}
        >
          <FaLinkedin /> linkedin.com/in/mengxuan-liang-a53615119
        </Link>
        <Link to="https://github.com/Mengxuan-Liang"
          target="_blank"
          style={{ display: "flex", alignItems: "center", gap: "3px" }}
        >
          <FaGithubSquare /> github.com/Mengxuan-Liang
        </Link>
      </div>

      <div className="container-developers-columns">
        <h3 style={{ fontSize: "1.5rem" }}>Alan C.</h3>
        <span style={{ color: "gray", fontSize: "0.75rem" }}>Full-Stack Developer</span>
        <Link
          to="https://www.linkedin.com/in/alanchang091322"
          target="_blank"
          style={{ display: "flex", alignItems: "center", gap: "3px" }}
        >
          <FaLinkedin /> linkedin.com/in/alan-c-373746251
        </Link>
        <Link to="https://github.com/ac091322"
          target="_blank"
          style={{ display: "flex", alignItems: "center", gap: "3px" }}
        >
          <FaGithubSquare /> github.com/ac091322
        </Link>
      </div>
    </div>
  );
}


export default About;
