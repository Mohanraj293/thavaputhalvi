import React from "react";
import image from "../assets/pengal-amaippu-images/image2.png";
import "../css/PengalAmaippu.css";

const PengalAmaippu = ({ title }) => {
  document.title = title;
  return (
    <div className="pengal">
      <h1>தவப்புதல்வி</h1>
      <p>
        நீயே உன்னால் உனக்காக அறக்கட்டளையின் நோக்கத்தின் அடிப்படையில்
        உருவாக்கப்பட்ட பெண்கள் அமைப்பு
      </p>

      <h2>ASSOCIATION FOR WOMEN EMPOWERMENT AND CHILD DEVELOPMENT</h2>
      <p>
        பெண்கள் அதிகாரம் மற்றும் குழந்தைகள் மேம்பாடு சங்கம் தமிழ்நாடு, இந்தியா
        Email: awecdyoutrust@gmail.com Call / Whatsapp : +91-9585212775
      </p>
      <img src={image} alt="" />
      <h2>இலக்கு</h2>
      <p>
        பெண்ணுக்கு கல்வி மற்றும் அதிகாரம் அளித்து, மேம்படுத்தி சமூகத்தில் சரியான
        முறையில் பங்கேற்க செய்து வீட்டின் மற்றும் நாட்டின் வளர்ச்சிக்கு
        வழிவகுப்பது
      </p>

      <h2>நோக்கம்</h2>
      <ul
        style={{
          display: "grid",
          textAlign: "left",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <li>
          உடல் மற்றும் மன ஆரோக்கிய விழிப்புணர்வு மற்றும் மருத்துவ முகாம்களை
          நடத்துதல்
        </li>
        <li>உளவியல் ஆலோசனை வழங்குதல்</li>
        <li>சட்ட உரிமைகள் மற்றும் பொது விழிப்புணர்வை ஏற்படுத்துதல்</li>
        <li>
          தொழில் முனைவு பயிற்சி அளித்து , பெண் தொழில் முனைவோரை உருவாக்குதல்
        </li>
        <li>அதிகாரமளிப்பு பற்றிய கருத்தரங்குகள் நடத்தி பெண்களை ஊக்குவித்தல்</li>
        <li>
          குழந்தைகளை அவர்களின் கல்வி மற்றும் பாடநெறிக்கு அப்பாற்பட்ட செயல்களில்
          சாதிக்க தூண்டுதல்
        </li>
        <li>திறன் வளர்ப்பு பயிற்சி பட்டறை நடத்துதல்</li>
        <li>குழந்தைகளின் சிறப்புத் திறமைகளைக் கண்டறிந்து விருதுகள் அளித்தல்</li>
      </ul>
    </div>
  );
};

export default PengalAmaippu;
