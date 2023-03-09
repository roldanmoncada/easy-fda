import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "animate.css";

const MySwal = withReactContent(Swal);

const About = () => {
  MySwal.fire({
    title: "About Easy-USDA",
    text: "Easy-USDA This app allows users to query the official USDA API",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};

export default About;
