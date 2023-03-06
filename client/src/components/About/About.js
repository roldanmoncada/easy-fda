import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "animate.css";

const MySwal = withReactContent(Swal);

const About = () => {
  MySwal.fire({
    title: "About Easy-FDA",
    text: "Easy-FDA is a cool project!!!",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};

export default About;
