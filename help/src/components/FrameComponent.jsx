import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({
  className = "",
  whatsAppImage20240625At54,
  primetwitter,
  uiwfacebook,
  bilinkedin,
  iconInstagramSquareIcon,
}) => {
  return (
    <footer className={[styles.lineParent, className].join(" ")}>
      <div className={styles.instanceChild} />
      <div className={styles.description}>
        <div className={styles.whatsappImage20240625At5Parent}>
          <img
            className={styles.whatsappImage20240625At5Icon}
            loading="lazy"
            alt=""
            src={whatsAppImage20240625At54}
          />
          <div className={styles.weBridgeThe}>
            We bridge the mentorship gap by creating a platform that connects
            members, peer mentors, and experts across diverse fields and
            countries.
          </div>
        </div>
        <div className={styles.resourcesAndSocial}>
          <div className={styles.resourceLinks}>
            <div className={styles.resourcesParent}>
              <h3 className={styles.resources}>Resources</h3>
              <div className={styles.mentorLabels}>
                <div className={styles.becomeAMentor}>
                  <div className={styles.allRightsReserved}>
                    Become a Mentor
                  </div>
                </div>
                <div className={styles.becomeAMentor2}>
                  <div className={styles.becomeAMentor3}>Consulting</div>
                </div>
                <div className={styles.becomeAMentor4}>
                  <div className={styles.becomeAMentor5}>Courses</div>
                </div>
                <div className={styles.becomeAMentor2}>
                  <div className={styles.becomeAMentor3}>
                    Mentoring for Teams
                  </div>
                </div>
                <div className={styles.becomeAMentor4}>
                  <div className={styles.becomeAMentor9}>Topics/Blog</div>
                </div>
              </div>
            </div>
            <div className={styles.resourcesParent}>
              <h3 className={styles.resources1}>Support</h3>
              <div className={styles.mentorLabels}>
                <div className={styles.becomeAMentor4}>
                  <div className={styles.becomeAMentor11}>Contact Us</div>
                </div>
                <div className={styles.becomeAMentor4}>
                  <div className={styles.becomeAMentor13}>Pricing</div>
                </div>
                <div className={styles.becomeAMentor4}>
                  <div className={styles.becomeAMentor15}>My Account</div>
                </div>
                <div className={styles.becomeAMentor2}>
                  <div className={styles.becomeAMentor3}>
                    Mentoring for Teams
                  </div>
                </div>
                <div className={styles.becomeAMentor2}>
                  <div className={styles.becomeAMentor3}>Topics/Blog</div>
                </div>
              </div>
            </div>
            <div className={styles.resourcesContainer}>
              <h3 className={styles.resources2}>Company</h3>
              <div className={styles.mentorLabels}>
                <div className={styles.becomeAMentor4}>
                  <div className={styles.becomeAMentor21}>About</div>
                </div>
                <div className={styles.becomeAMentor22}>
                  <div className={styles.becomeAMentor23}>
                    Efficient University
                  </div>
                </div>
                <div className={styles.becomeAMentor24}>
                  <div className={styles.becomeAMentor25}>Privacy Policy</div>
                </div>
                <div className={styles.becomeAMentor4}>
                  <div className={styles.becomeAMentor27}>Terms of Use</div>
                </div>
                <div className={styles.becomeAMentor4}>
                  <div className={styles.becomeAMentor29}>Credits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyrightSocial}>
        <div className={styles.copyright}>
          <div className={styles.allRightsReserved}>
            © 2024 – All Rights Reserved. Nurture Mentorship Inc.
          </div>
        </div>
        <div className={styles.socialIcons}>
          <img
            className={styles.primetwitterIcon}
            loading="lazy"
            alt=""
            src={primetwitter}
          />
          <img
            className={styles.uiwfacebookIcon}
            loading="lazy"
            alt=""
            src={uiwfacebook}
          />
          <img
            className={styles.uiwfacebookIcon}
            loading="lazy"
            alt=""
            src={bilinkedin}
          />
          <img
            className={styles.uiwfacebookIcon}
            loading="lazy"
            alt=""
            src={iconInstagramSquareIcon}
          />
        </div>
      </div>
    </footer>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  whatsAppImage20240625At54: PropTypes.string,
  primetwitter: PropTypes.string,
  uiwfacebook: PropTypes.string,
  bilinkedin: PropTypes.string,
  iconInstagramSquareIcon: PropTypes.string,
};

export default FrameComponent;
