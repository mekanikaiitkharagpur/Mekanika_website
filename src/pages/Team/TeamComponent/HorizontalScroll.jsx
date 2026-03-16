import React, { useRef, useState } from "react";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

const HorizontalScroll = () => {
  const containerRef = useRef(null);

  const fallbackImage =
    "https://media.istockphoto.com/id/1432561113/photo/contact-icon-3d-render-illustration.jpg?s=612x612&w=0&k=20&c=DnbTbyt9K8sxNF_Nb-PsEG1EaCDIgxB4_SyFe9Mblys=";

  const themeColors = {
    primary: "#ffc107",
    secondary: "#0a0f1a",
    accent: "#f8f9fa",
    dark: "#121212",
  };

  const styles = {
    container: {
      position: "relative",
      color: themeColors.accent,
      width: "100%",
      maxWidth: "100%",
      overflowX: "hidden",
    },
    facultySection: {
      minHeight: "100vh",
      width: "100%",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: themeColors.secondary,
      padding: "2rem",
    },
    facultyCard: {
      position: "relative",
      background: "rgba(25, 25, 35, 0.8)",
      borderRadius: "16px",
      width: "300px",
      height: "380px",
      overflow: "hidden",
      border: `2px solid ${themeColors.primary}`,
      boxShadow: `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px ${themeColors.primary}40`,
      cursor: "pointer",
    },
    facultyImageContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
    },
    facultyImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "brightness(0.6) contrast(1.1)",
    },
    facultyInfoContainer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      zIndex: 2,
    },
    facultyInfoGradient: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "150px",
      background: `linear-gradient(to top, rgba(10, 15, 26, 0.95) 0%, rgba(10, 15, 26, 0.8) 50%, rgba(10, 15, 26, 0) 100%)`,
      zIndex: 1,
    },
    facultyInfo: {
      padding: "1.2rem",
      textAlign: "center",
      position: "relative",
      bottom: 0,
      left: 0,
      width: "100%",
      zIndex: 2,
    },
    facultyName: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      lineHeight: "1.3",
      marginBottom: "0.25rem",
      color: themeColors.primary,
      textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
    },
    facultyRole: {
      fontSize: "0.95rem",
      color: themeColors.accent,
      opacity: 0.9,
    },
    teamSection: {
      position: "relative",
      width: "100%",
      maxWidth: "100%",
      background: themeColors.dark,
      color: themeColors.accent,
      padding: "4rem 2rem 5rem",
      minHeight: "auto",
      overflowX: "hidden",
    },
    sectionHeading: {
      color: themeColors.primary,
      fontSize: "clamp(1.5rem, 4vw, 2rem)",
      fontWeight: "bold",
      textShadow: `0 4px 12px rgba(0, 0, 0, 0.5), 0 0 20px ${themeColors.primary}60`,
      letterSpacing: "1px",
      textTransform: "uppercase",
      textAlign: "center",
      marginBottom: "0.5rem",
    },
    teamProfile: {
      position: "relative",
      background: "rgba(25, 25, 35, 0.7)",
      borderRadius: "16px",
      width: "280px",
      flexShrink: 0,
      height: "380px",
      overflow: "hidden",
      transition: "all 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      border: "1px solid yellow",
      boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
      cursor: "pointer",
      willChange: "transform, box-shadow",
      backfaceVisibility: "hidden",
      WebkitBackfaceVisibility: "hidden",
    },
    teamProfileSmall: {
      width: "220px",
      height: "300px",
      borderRadius: "12px",
    },
    profileInfoGradientSmall: {
      height: "100px",
    },
    profileInfoSmall: {
      padding: "0.85rem",
    },
    profileNameSmall: {
      fontSize: "1rem",
    },
    profileRoleSmall: {
      fontSize: "0.8rem",
    },
    socialOverlaySmall: {
      padding: "0.75rem",
    },
    socialIconSmall: {
      padding: "0.5rem",
    },
    profileImageContainer: {
      position: "absolute",
      width: "100%",
      height: "100%",
      overflow: "hidden",
    },
    profileImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.5s ease",
      willChange: "transform",
      backfaceVisibility: "hidden",
    },
    profileInfo: {
      padding: "1.2rem",
      textAlign: "center",
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      zIndex: 2,
    },
    profileInfoGradient: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "150px",
      background: `linear-gradient(to top, rgba(10, 15, 26, 0.95) 0%, rgba(10, 15, 26, 0.7) 70%, rgba(10, 15, 26, 0) 100%)`,
      zIndex: 1,
    },
    profileName: {
      fontSize: "1.3rem",
      fontWeight: "bold",
      marginBottom: "0.25rem",
      color: themeColors.primary,
    },
    profileRole: {
      fontSize: "0.95rem",
      color: themeColors.accent,
      opacity: 0.9,
    },
    socialOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(10, 15, 26, 0.7)",
      backdropFilter: "blur(5px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      opacity: 0,
      transform: "translateY(20px)",
      transition: "opacity 0.3s ease, transform 0.3s ease",
      zIndex: 3,
      padding: "1.5rem",
    },
    socialIcons: {
      display: "flex",
      justifyContent: "center",
      marginTop: "2rem",
      gap: "1rem",
    },
    socialIcon: {
      padding: "0.8rem",
      background: themeColors.primary,
      color: themeColors.dark,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    },
    cardHighlight: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "5px",
      background: themeColors.primary,
      zIndex: 3,
    },
    tooltip: {
      position: "absolute",
      bottom: "-40px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(0, 0, 0, 0.8)",
      color: "white",
      padding: "5px 10px",
      borderRadius: "4px",
      fontSize: "0.8rem",
      opacity: 0,
      transition: "opacity 0.3s, bottom 0.3s",
      pointerEvents: "none",
      whiteSpace: "nowrap",
      zIndex: 1000,
    },
  };

  // Faculty data
  const facultyData = {
    name: "Prof. Jeevanjyoti Chakraborty",
    role: "Faculty Incharge",
    image: "/TeamImages/JC.png",
  };

  // Advisor Team (previous executive team)
  const advisorTeam = [
    {
      name: "Sarthak Modanwal",
      role: "",
      image: "",
      socials: {
        linkedin: "https://linkedin.com/in/",
        mail: "sarthak@example.com",
        phone: "+91",
        instagram: "https://instagram.com/",
      },
    },
    {
      name: "Aman Kumar",
      role: "",
      image: "/api/placeholder/400/500",
      socials: {
        linkedin: "https://linkedin.com/in",
        mail: "aman@example.com",
        instagram: "https://instagram.com",
        phone: "+91 ",
      },
    },
    {
      name: "Yasaswini Pakala",
      role: "",
      image: "/api/placeholder/400/500",
      socials: {
        linkedin: "https://linkedin.com/in/",
        mail: "yasaswini@example.com",
        instagram: "https://instagram.com/",
        phone: "+91 ",
      },
    },
    {
      name: "Surjya Shankar Roy",
      role: "",
      image: "/api/placeholder/400/500",
      socials: {
        linkedin: "https://linkedin.com/in/",
        mail: "surjya@example.com",
        instagram: "https://instagram.com/",
        phone: "+91 ",
      },
    },
    {
      name: "Monisha",
      role: "",
      image: "/api/placeholder/400/500",
      socials: {
        linkedin: "https://linkedin.com/in/",
        mail: "monisha@example.com",
        instagram: "https://instagram.com/",
        phone: "+91 ",
      },
    },
    {
      name: "Jeevan Kumar Korra",
      role: "",
      socials: {
        linkedin: "https://www.linkedin.com/in/jeevan-kumar-korra-068726252/",
        mail: "jeevankumarkorra2005@gmail.com",
        instagram: "https://www.instagram.com/jeevankumarkorra/",
        phone: "+91 ",
      },
    },
  ];

  // Executive Team (new)
  const executiveTeam = [
    {
      name: "Vinay Agrahari",
      role: "Executive Member",
      image: "",
      socials: {
        linkedin: "https://linkedin.com/in/",
        mail: "",
        instagram: "https://instagram.com/",
        phone: "",
      },
    },
    {
      name: "Hardik Mahawar",
      role: "Executive Member",
      image: "",
      socials: {
        linkedin: "https://linkedin.com/in/",
        mail: "",
        instagram: "https://instagram.com/",
        phone: "",
      },
    },
    {
      name: "Akankshaa Padhi",
      role: "Executive Member",
      image: "",
      socials: {
        linkedin: "https://linkedin.com/in/",
        mail: "",
        instagram: "https://instagram.com/",
        phone: "",
      },
    },
    {
      name: "Krishna Ashrai Chochipatla",
      role: "Executive Member",
      image: "",
      socials: {
        linkedin: "https://linkedin.com/in/",
        mail: "",
        instagram: "https://instagram.com/",
        phone: "",
      },
    },
    {
      name: "Mayank Nagar",
      role: "Executive Member",
      image: "",
      socials: {
        linkedin: "https://linkedin.com/in/",
        mail: "",
        instagram: "https://instagram.com/",
        phone: "",
      },
    },
    {
      name: "Atharv Salodkar",
      role: "Executive Member",
      image: "",
      socials: {
        linkedin: "https://linkedin.com/in/",
        mail: "",
        instagram: "https://instagram.com/",
        phone: "",
      },
    },
    {
      name: "Mauryavardhan Singh",
      role: "Executive Member",
      image: "",
      socials: {
        linkedin: "https://linkedin.com/in/",
        mail: "",
        instagram: "https://instagram.com/",
        phone: "",
      },
    },
    {
      name: "Yayavaram Vivekadithya",
      role: "Executive Member",
      image: "",
      socials: {
        linkedin: "https://linkedin.com/in/",
        mail: "",
        instagram: "https://instagram.com/",
        phone: "",
      },
    },
  ];

  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };

  const handlePhoneClick = (phoneNumber) => {
    // Check if device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Try to open WhatsApp if on mobile
      window.location.href = `https://wa.me/${phoneNumber.replace(/\D/g, "")}`;
    } else {
      // On desktop, just copy to clipboard
      navigator.clipboard
        .writeText(phoneNumber)
        .then(() => {
          alert(`Phone number ${phoneNumber} copied to clipboard!`);
        })
        .catch((err) => {
          console.error("Failed to copy phone number: ", err);
        });
    }
  };

  const handleMailClick = (email) => {
    // Open default mail client with the email address
    window.location.href = `mailto:${email}`;

    // Also try to copy to clipboard as a fallback
    navigator.clipboard
      .writeText(email)
      .then(() => {
        console.log("Email copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  const SocialIcon = ({
    type,
    link,
    showTooltip,
    setShowTooltip,
    iconStyle,
  }) => {
    const isContact = type === "phone" || type === "mail";
    const tooltipRef = useRef(null);
    const style = iconStyle || styles.socialIcon;

    const handleClick = (e) => {
      e.preventDefault();
      if (type === "phone") {
        handlePhoneClick(link);
      } else if (type === "mail") {
        handleMailClick(link);
      } else {
        window.open(link, "_blank", "noopener,noreferrer");
      }
    };

    return (
      <div
        style={{
          ...style,
          position: "relative",
          transform: showTooltip && isContact ? "scale(1.1)" : "scale(1)",
        }}
        onClick={handleClick}
        onMouseEnter={() => isContact && setShowTooltip(true)}
        onMouseLeave={() => isContact && setShowTooltip(false)}
      >
        {type === "linkedin" && <Linkedin size={20} />}
        {type === "instagram" && <Instagram size={20} />}
        {type === "phone" && <Phone size={20} />}
        {type === "mail" && <Mail size={20} />}
        {isContact && (
          <div
            ref={tooltipRef}
            style={{
              ...styles.tooltip,
              opacity: showTooltip ? 1 : 0,
              bottom: showTooltip ? "-40px" : "-30px",
            }}
          >
            {link}
          </div>
        )}
      </div>
    );
  };

  const FacultyCard = ({ name, role, image }) => {
    return (
      <div style={styles.facultyCard}>
        <div style={styles.cardHighlight}></div>
        <div style={styles.facultyImageContainer}>
          <img
            src={image}
            alt={name}
            style={styles.facultyImage}
            onError={handleImageError}
            loading="eager"
          />
        </div>
        <div style={styles.facultyInfoGradient}></div>
        <div style={styles.facultyInfoContainer}>
          <div style={styles.facultyInfo}>
            <h2 style={styles.facultyName}>{name}</h2>
            <p style={styles.facultyRole}>{role}</p>
          </div>
        </div>
      </div>
    );
  };

  // Custom team profile card with hover effect and social links
  const TeamProfileCard = ({ name, role, image, socials, size }) => {
    const isSmall = size === "small";
    const [isHovered, setIsHovered] = useState(false);
    const [showContactTooltip, setShowContactTooltip] = useState({
      phone: false,
      mail: false,
    });

    const cardStyle = {
      ...styles.teamProfile,
      ...(isSmall ? styles.teamProfileSmall : {}),
      transform: isHovered ? "translateY(-10px) scale(1.03)" : "none",
      boxShadow: isHovered
        ? `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px ${themeColors.primary}30`
        : styles.teamProfile.boxShadow,
    };
    const gradientStyle = isSmall
      ? { ...styles.profileInfoGradient, ...styles.profileInfoGradientSmall }
      : styles.profileInfoGradient;
    const infoStyle = isSmall
      ? { ...styles.profileInfo, ...styles.profileInfoSmall }
      : styles.profileInfo;
    const nameStyle = isSmall
      ? { ...styles.profileName, ...styles.profileNameSmall }
      : styles.profileName;
    const roleStyle = isSmall
      ? { ...styles.profileRole, ...styles.profileRoleSmall }
      : styles.profileRole;
    const overlayStyle = isSmall
      ? { ...styles.socialOverlay, ...styles.socialOverlaySmall }
      : styles.socialOverlay;
    const iconStyle = isSmall
      ? { ...styles.socialIcon, ...styles.socialIconSmall }
      : styles.socialIcon;

    return (
      <div
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setShowContactTooltip({ phone: false, mail: false });
        }}
      >
        <div style={styles.cardHighlight}></div>
        <div style={styles.profileImageContainer}>
          <img
            src={image || fallbackImage}
            alt={name}
            style={{
              ...styles.profileImage,
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
            onError={handleImageError}
            loading="eager"
          />
        </div>

        {/* Added gradient overlay for text */}
        <div style={gradientStyle}></div>

        <div style={infoStyle}>
          <h3 style={nameStyle}>{name}</h3>
          <p style={roleStyle}>{role}</p>
        </div>

        <div
          style={{
            ...overlayStyle,
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <h3 style={{ ...nameStyle, fontSize: isSmall ? "1.1rem" : "1.4rem" }}>
            {name}
          </h3>
          <p style={{ ...roleStyle, marginBottom: "1rem" }}>{role}</p>
          <div style={styles.socialIcons}>
            <SocialIcon
              type="linkedin"
              link={socials.linkedin}
              showTooltip={false}
              setShowTooltip={() => {}}
              iconStyle={iconStyle}
            />
            <SocialIcon
              type="mail"
              link={socials.mail}
              showTooltip={showContactTooltip.mail}
              setShowTooltip={(show) =>
                setShowContactTooltip((prev) => ({ ...prev, mail: show }))
              }
              iconStyle={iconStyle}
            />
            <SocialIcon
              type="instagram"
              link={socials.instagram}
              showTooltip={false}
              setShowTooltip={() => {}}
              iconStyle={iconStyle}
            />
            <SocialIcon
              type="phone"
              link={socials.phone}
              showTooltip={showContactTooltip.phone}
              setShowTooltip={(show) =>
                setShowContactTooltip((prev) => ({ ...prev, phone: show }))
              }
              iconStyle={iconStyle}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="team-members-container"
      ref={containerRef}
      style={styles.container}
    >
      {/* Faculty Section */}
      <section className="faculty-card-section" style={styles.facultySection}><FacultyCard
          name={facultyData.name}
          role={facultyData.role}
          image={facultyData.image}
        />
      </section>

      {/* Advisor Team */}
      <section className="team-members-section" style={styles.teamSection}>
        <h1 style={styles.sectionHeading}>Advisor Team</h1>
        <div className="team-grid-responsive">
          {advisorTeam.map((member, index) => (
            <div key={`advisor-${index}`} className="team-card-wrapper">
              <TeamProfileCard
                name={member.name}
                role={member.role}
                image={member.image}
                socials={member.socials}
                size="small"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Executive Team */}
      <section className="team-members-section" style={styles.teamSection}>
        <h1 style={styles.sectionHeading}>Executive Team</h1>
        <div className="team-grid-responsive">
          {executiveTeam.map((member, index) => (
            <div key={`exec-${index}`} className="team-card-wrapper">
              <TeamProfileCard
                name={member.name}
                role={member.role}
                image={member.image}
                socials={member.socials}
                size="small"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HorizontalScroll;
