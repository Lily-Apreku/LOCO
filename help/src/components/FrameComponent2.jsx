import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <header
      className={[styles.whatsappImage20240625At5Wrapper, className].join(" ")}
    >
      <img
        className={styles.whatsappImage20240625At5Icon}
        loading="lazy"
        alt=""
        src="/whatsapp-image-20240625-at-54421-pmremovebgpreview-1@2x.png"
      />
    </header>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
