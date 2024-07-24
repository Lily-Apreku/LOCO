import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import styles from "./Content.module.css";

const Content = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <FrameComponent1 />
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
