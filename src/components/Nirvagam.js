import React from "react";
import "../css/Nirvagam.css";
import image1 from "../assets/nivagam-images/image1.png";
import image2 from "../assets/nivagam-images/image3.png";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

const Nirvagam = ({ title }) => {
  document.title = title;

  const frameStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const frameStyles = {
    borderStyle: "solid",
    padding: "7px",
    borderColor: "#ff2e99",
  };

  return (
    <div className="nirvagam" style={{ marginTop: "70px" }}>
      <img src={image1} alt="nirvagam" />
      <h1>
        <strong>தவப்புதல்வி காலாண்டிதழ்</strong>
      </h1>
      <h5>
        <i>நீயே உன்னால் உனக்காக அறக்கட்டளையின் கீழ் செயல்படும் ஒரு அமைப்பு</i>
      </h5>
      <h5>
        <i>நீயே உன்னால் உனக்காக அறக்கட்டளை</i>
      </h5>
      <MDBRow
        style={{
          margin: "auto",
          marginTop: "30px",
          textAlign: "justify",
          textIndent: "20px",
        }}
      >
        <MDBCol>
          <p>
            நீயே உன்னால் உனக்காக அறக்கட்டளை, இந்திய அறக்கட்டளை சட்டம் 1882ன்
            கீழ் பதிவு செய்யப்பட்டுள்ளது, இந்த அறக்கட்டளையின் நோக்கத்தை
            முன்னிறுத்திய செயல்பாடுகளை கலை, இலக்கியம், மருத்துவம், அறிவியல்,
            சமூகவியல், எழுத்து துறை போன்ற பல்வேறு துறைகளைச் சார்ந்த வல்லுநர்கள்
            கொண்டு பெண்கள், தொழில்முனைவோர், மாணவர்கள் மற்றும் ஆராய்ச்சியாளர்கள்
            போன்றோருக்கு லாப நோக்கமற்ற சேவைகளை வழங்கி வருகிறது. கருத்தரங்குகள்,
            மாநாடுகள், பயிற்சி பட்டறைகள் நடத்துவது மற்றும் ஆராய்ச்சி
            வெளியீடுகளுக்கு உதவுவது போன்றவைகளையும் செய்து வருகிறது.
          </p>
          <p>
            கலை, இலக்கியம், சமூக அறிவியல், மனிதநேயம், வணிகம், மேலாண்மை மற்றும்
            அதனுடன் தொடர்புடைய துறைகளில் ஆராய்ச்சியில் ஈடுபட்டுள்ள மாணவர்கள்,
            மற்றும் ஆசிரியர்களுக்கு ஆலோசனைகள் வழங்குவதும், உதவி செய்வதும்,
            ஆராய்ச்சிப் பணிகளின் தரத்தை மேம்படுத்துவதும், இந்திய மற்றும்
            சர்வேதேச அளவில் ஆராய்ச்சிகளை வெளியிடுவதும் அதன் மூலம் மாணவ சமூகத்தை
            ஆராய்ச்சி அறிவில் வலுப்படுத்தி மேம்பட செய்வதும் அறக்கட்டளையின்
            முக்கிய நோக்கமாகும்.
          </p>
          <p>
            பெண்கள் இளைஞர்கள் தொழிமுனைவோர் ஆகியோரின் வளர்ச்சியில் நாட்டின்
            வளர்ச்சி உள்ளது என்பதை முன்னிறுத்தி அறக்கட்டளையானது ஐந்து முக்கிய
            செயல்பாடுகளை நோக்கி பல அமைப்புகளை உருவாக்கி பல நிகழ்ச்சிகள் நடத்தி
            நாளைய சமூகத்திற்கு பயனுள்ள வகையில் நல்ல பல தொண்டு செய்து மாற்றத்தை
            எதிர் நோக்கி நகர்கிறது.
          </p>
        </MDBCol>
      </MDBRow>
      <div style={{ textAlign: "justify" }}>
        <h2 style={{ marginTop: "30px" }}>
          அறக்கட்டளையின் முக்கியச் செயல்பாடுகள்
        </h2>
        <ul>
          <li>ஆராய்ச்சி மற்றும் பதிப்பு</li>
          <li>திறன் மேம்பாடு மற்றும் பயிற்சி</li>
          <li>பெண்கள் ஆரோக்கியம் மற்றும் விழிப்புணர்வு</li>
          <li>கல்வி மற்றும் குழந்தைகள் மேம்பாடு</li>
          <li>பெண்கள் தொழில்முனைவு பயிற்சி, திறன் மற்றும் ஆளுமை வளர்ச்சி</li>
        </ul>
      </div>
      <MDBRow style={{ margin: "auto", maxWidth: 1000, marginTop: "30px" }}>
        <h2>நிறுவன தலைவி</h2>
        <MDBCol style={frameStyle} md="6">
          <div style={frameStyles}>
            <img src={image2} alt="niruvanar" />
          </div>
        </MDBCol>
        <MDBCol md="6">
          <p>முனைவர். சுபத்ரா செல்லத்துரை</p>
          <p>அறக்கட்டளை பதிவு எண்.198/ B4 – 2017</p>
          <p>ISO - 9001-2015 தரச் சான்றிதழ், எண் :UCS8022-23B10664</p>
          <p>CSR பதிவு எண் CSR00036108,</p>
          <p>
            ஒப்புதல் எண் AADTB2122MF2022M உடன், 80 G வருமான வரியின் கீழ்
            அறக்கட்டளை அங்கீகரிக்கப்பட்டுள்ளது.
          </p>
          <p>Email: ofbyandforyou@gmail.com</p>
          <p>
            <a
              href="https://www.capeforumyoutrust.org"
              target="_blank"
              rel="noreferrer"
            >
              https://www.capeforumyoutrust.org
            </a>
          </p>
          <p>Contact: +91-9585212775</p>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Nirvagam;
