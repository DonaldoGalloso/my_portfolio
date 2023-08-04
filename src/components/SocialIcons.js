const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a
        target="_blank"
        className="icon"
        style={styles.icon}
        href="https://github.com/DonaldoGalloso"
        rel="noreferrer"
      >
        <i
          className="fa-brands fa-github"
          aria-hidden="true"
          title="Donaldo Galloso' GitHub Profile"
        ></i>
      </a>
      <a
        target="_blank"
        className="icon"
        style={styles.icon}
        href="https://www.linkedin.com/in/donaldo-galloso/"
        rel="noreferrer"
      >
        <i
          className="fa-brands fa-linkedin"
          aria-hidden="true"
          title="Donaldo Galloso' LinkedIn Profile"
        ></i>
      </a>
      <a
        target="_blank"
        className="icon"
        style={styles.icon}
        href="https://www.instagram.com/donald_reac/"
        rel="noreferrer"
      >
        <i
          className="fa-brands fa-instagram"
          aria-hidden="true"
          title="Donaldo Galloso' Instagram Profile"
        ></i>
      </a>
      <a
        target="_blank"
        className="icon"
        style={styles.icon}
        href="https://twitter.com/DonaldReac"
        rel="noreferrer"
      >
        <i
          className="fa-brands fa-twitter"
          aria-hidden="true"
          title="Donaldo Galloso' Twitter Profile"
        ></i>
      </a>
    </div>
  );
};

export default SocialIcons;
