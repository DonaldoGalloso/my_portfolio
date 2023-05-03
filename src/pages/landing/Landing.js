import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import landingImage from "../../images/me.png";
import SocialIcons from "../../components/SocialIcons";

const Landing = ({ name }) => {
  const styles = {
    landing: {
      height: "calc(100% - 120px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    landingImage: {
      position: "absolute",
      bottom: "0",
      opacity: "0.7",
      mixBlendMode: "lighten",
      height: "100%",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
      with: "200px",
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },
    paragraft: {
      marginTop: "20px",
    },
  };

  return (
    <section className="landing" style={styles.landing}>
      <div className="textContainer" style={styles.textContainer}>
        <h1 className="name" style={styles.name}>
          {name}
        </h1>
        <div className="description">
          <Typewriter
            className="description"
            onInit={(typewriter) => {
              typewriter
                .typeString("I'm software engineer")
                .pauseFor(3000)
                .deleteAll()
                .typeString("Web and mobile development enthusiast")
                .pauseFor(3500)
                .deleteAll()
                .typeString(
                  "lover of agile methodologies, learning and teamwork."
                )
                .start();
            }}
          />
        </div>
        {/* <div className="image-container">
          <motion.img
            className="landingImage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={styles.landingImage}
            src={landingImage}
            alt="Michael Yeates"
          />
        </div> */}
      </div>
      <SocialIcons />
    </section>
  );
};

export default Landing;
