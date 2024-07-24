import FrameComponent2 from "../components/FrameComponent2";
import Content from "../components/Content";
import FrameComponent from "../components/FrameComponent";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <FrameComponent2 />
      <Content />
      <FrameComponent
        whatsAppImage20240625At54="/whatsapp-image-20240625-at-54421-pmremovebgpreview-1-1@2x.png"
        primetwitter="/primetwitter@2x.png"
        uiwfacebook="/uiwfacebook.svg"
        bilinkedin="/bilinkedin.svg"
        iconInstagramSquareIcon="/-icon-instagram-square-icon.svg"
      />
    </div>
  );
};

export default Login;
