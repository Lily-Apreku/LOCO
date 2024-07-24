import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <form className={[styles.topContentParent, className].join(" ")}>
      <div className={styles.topContent}>
        <h1 className={styles.login}>Login</h1>
        <div className={styles.loginInputBackground} />
      </div>
      <div className={styles.loginForm}>
        <div className={styles.inputFields}>
          <div className={styles.inputLabels}>
            <div className={styles.email}>Email:</div>
          </div>
          <div className={styles.inputLabels}>
            <div className={styles.password}>Password:</div>
          </div>
        </div>
      </div>
      <div className={styles.actionButtons}>
        <div className={styles.buttonContainers}>
          <div className={styles.largeButtons}>
            <div className={styles.buttonWrapper}>
              <div className={styles.button}>Login</div>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainers}>
          <div className={styles.largeButtons}>
            <div className={styles.buttonWrapper}>
              <div className={styles.button1}>Social Login</div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
