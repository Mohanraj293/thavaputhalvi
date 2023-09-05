import React from "react";
import "../css/Niruvanar.css";
import image1 from "../assets/nivagam-images/image3.png";
// import image2 from "../assets/niruvanar-images/image2.png";
// import image3 from "../assets/niruvanar-images/image3.png";
// import image4 from "../assets/niruvanar-images/image4.png";
// import image5 from "../assets/niruvanar-images/image5.png";

const Niruvanar = ({ title }) => {
  const frameStyles = {
    borderStyle: "solid",
    padding: "7px",
    borderColor: "#ff2e99",
  };
  document.title = title;
  return (
    <div className="niruvanar">
      <h4 style={{ color: "#ff2e99", fontWeight: "bold" }}>
        <strong>நிறுவனர்</strong>
      </h4>
      <div>
        <img style={frameStyles} src={image1} alt="niruvanar" />
      </div>
      <div>
        <h4 style={{ color: "#ff2e99", fontWeight: "bold" }}>
          முனைவர். சுபத்ரா செல்லத்துரை
        </h4>
      </div>
      {/* <div style={{ marginTop: "20px" }}>
        <img src={image2} alt="" height={100} width={100} />
        <img src={image3} alt="" height={100} width={100} />
        <img src={image4} alt="" height={100} width={100} />
        <img src={image5} alt="" height={100} width={100} />
      </div> */}
      <p style={{ color: "#0B0B45" }}>
        M.Com., M.Phil., PGDHRM, M. A (Soc.), M.Sc (Psy.), UGC-NET, Ph.D.
      </p>
      <p style={{ color: "#0B0B45" }}>
        இதழாசிரியர் மற்றும் தொகுப்பாசிரியர், தவப்புதல்வி, (தமிழ் காலாண்டிதழ்)
      </p>
      <div style={{ maxWidth: "800px", margin: "auto", textAlign: "justify" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#0B0B45" }}>
            நிறுவனர் , நீயே உன்னால் உனக்காக அறக்கட்டளை
          </p>
          <p style={{ color: "#0B0B45" }}>
            அமைப்பாளர், ஐந்திணை தென் தமிழியல் ஆய்வு மன்றம், தமிழ்நாடு
          </p>
          <p style={{ color: "#0B0B45" }}>
            இயக்குனர், பெண்கள் அதிகாரம் மற்றும் குழந்தைகள் மேம்பாட்டுச் சங்கம்,
            தமிழ்நாடு
          </p>

          <p style={{ color: "#0B0B45" }}>
            பதிப்பாசிரியர், OF BY AND FOR YOU PUBLICATIONS
          </p>

          <p style={{ color: "#0B0B45" }}>
            Email: thavaputhalviyoutrust@gmail.com,
            {"  "}
            drcsubathra@gmail.com
          </p>

          <div className="contact-info">
            <p style={{ color: "#0B0B45" }}>
              Website:{" "}
              <a
                style={{ color: "#0B0B45" }}
                href="https://subathrachelladurai.in"
              >
                https://subathrachelladurai.in
              </a>
            </p>
          </div>
          <div className="contact-info">
            <p style={{ color: "#0B0B45" }}>
              Call / Whatsapp : +91-86103 11546
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Niruvanar;
