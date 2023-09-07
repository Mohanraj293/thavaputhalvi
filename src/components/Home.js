import React from "react";
import "../css/Home.css";
import image from "../assets/home-images/THAVAPUTHALVI  LOGO.png";
import thavaputhalvi from "../assets/home-images/THAVAPPUTHALVI-TEXT.png";

const Home = ({ title }) => {
  document.title = title;
  const txtWeignt = {
    fontWeight: "bold",
  };
  return (
    <div className="homediv">
      <img src={image} height={200} width={200} alt="home logo" />
      <div>
        <h1>
          <img height={60} width={200} src={thavaputhalvi} alt="" />
        </h1>
        <h4 style={{ color: "#ff2e99" }}>(தமிழ் காலாண்டிதழ்)</h4>
      </div>

      <div style={{ margin: "auto", maxWidth: 800, textIndent: "20px" }}>
        <p
          style={{ marginTop: "20px", textAlign: "justify", color: "#00008B" }}
        >
          தவப்புதல்வி காலாண்டிதழ் ஆண்கள், பெண்கள், இளைஞர்கள், தொழில் முனைவோர்,
          குழந்தைகள் என அனைவருக்கும் பயன்படும் வகையில் அமைவதோடு மட்டுமில்லாமல்
          மாற்றத்தை உருவாக்கும் ஒரு கருவியாகவும் செயல்படும். இவ்விதழில்
          வெளிவரும் கட்டுரைகள், படைப்புகள், குறிப்புகள் அனைத்தும் அறிவுசார்
          மற்றும் விழிப்புணர்வு ஏற்படுத்தும் பதிவுகளாவே அமையும். இதழில்
          படைப்பாளர்களின் கட்டுரைகள், அறிஞர்கள் மற்றும் எழுத்தாளர்களின் வரலாறு,
          நேர்காணல்கள், நடப்பு நிகழ்வுகளின் அறிக்கைகள், சிறுவர்களின் படைப்புகள்
          மற்றும் சிந்தனைத் துளிகள் இடம் பெறும். கலை, இலக்கியம், கலாச்சாரம்,
          பண்பாடு, நாகரீகம் மற்றும் ஆராய்ச்சி படைப்புகளும் முக்கியத்துவம்
          வகிக்கும்.
        </p>
        <p style={{ textAlign: "justify", color: "#00008B" }}>
          தமிழில் இவ்வனைத்தையும் தொகுத்து வாசகர்களுக்கு இணைய வழியும்,
          புத்தகமாகவும் வருடத்திற்கு 4 இதழ்கள் வெளியிடப்படும்.
        </p>

        <div>
          <p style={{ fontSize: "17px", color: "#00008B" }}>
            <i style={txtWeignt}>
              முற்போக்கு நோக்கில்
              <br />
              முரண்பாடு இல்லாத கருத்துக்களுடன்
              <br />
              தெளிவான சிந்தனை கொண்டு
              <br />
              உண்மையின் உருவாய்
              <br />
              மாற்றத்தை நோக்கிய பயணத்தில்
              <br />
              வலம் வருவாள்{" "}
              <p
                style={{
                  color: "#ff2e99",
                  fontSize: "17px",

                  marginLeft: "-25px",
                }}
              >
                தவப்புதல்வி
              </p>
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
