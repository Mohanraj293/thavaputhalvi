import React from "react";
import "../css/Niruvanar.css";
import image1 from "../assets/niruvanar-images/image1.png";
import image2 from "../assets/niruvanar-images/image2.png";
import image3 from "../assets/niruvanar-images/image3.png";
import image4 from "../assets/niruvanar-images/image4.png";
import image5 from "../assets/niruvanar-images/image5.png";

const Niruvanar = ({ title }) => {
  document.title = title;
  return (
    <div className="niruvanar">
      <h1>நிறுவனர்</h1>
      <div
        style={{
          border: "solid",
          width: "300px",
          margin: "auto",
          padding: "10px",
          borderColor: "#ff2e99",
        }}
      >
        <img src={image1} alt="" height={200} width={200} />
      </div>
      <div style={{ marginTop: "20px" }}>
        <img src={image2} alt="" height={100} width={100} />
        <img src={image3} alt="" height={100} width={100} />
        <img src={image4} alt="" height={100} width={100} />
        <img src={image5} alt="" height={100} width={100} />
      </div>
      <h1><strong>முனைவர். சுபத்ரா செல்லத்துரை</strong></h1>
      <p>M.Com., M.Phil., PGDHRM, M. A (Soc.), M.Sc (Psy.), UGC-NET, Ph.D.</p>
      <p>இதழாசிரியர் மற்றும் தொகுப்பாசிரியர்</p>
      <p>தவப்புதல்வி, (தமிழ் காலாண்டிதழ்)</p>
      <p>
        Email:{" "}
        <a href="mailto:thavaputhalviyoutrust@gmail.com">
          thavaputhalviyoutrust@gmail.com
        </a>
      </p>
      <div style={{ maxWidth: "800px", margin: "auto", textAlign: "justify" }}>
        <h2>நிறுவனர் , நீயே உன்னால் உனக்காக அறக்கட்டளை</h2>
        <p>(OF BY AND FOR YOU TRUST)</p>
        <p style={{ textIndent: "20px" }}>
          இந்திய அறக்கட்டளை சட்டம் 1882ன் கீழ் பதிவுசெய்யப்பட்டது, அறக்கட்டளை
          பதிவு எண்.198/ B4 - 2017, தமிழ்நாடு இந்தியா ISO - 9001-2015 தரச்
          சான்றிதழ், எண் :UCS8022-23B10664 CSR பதிவு எண் CSR00036108, ஒப்புதல்
          எண் AADTB2122MF2022M உடன், 80 G வருமான வரியின் கீழ் அறக்கட்டளை
          அங்கீகரிக்கப்பட்டுள்ளது.
        </p>
        <div className="contact-info">
          <p>
            Email:{" "}
            <a href="mailto:ofbyandforyou@gmail.com">ofbyandforyou@gmail.com</a>
          </p>
          <p>
            Web:{" "}
            <a href="https://www.capeforumyoutrust.org">
              https://www.capeforumyoutrust.org
            </a>
          </p>
          <p>Call / Whatsapp : +91-86103 11546</p>
        </div>

        <h2><strong>அமைப்பாளர்</strong></h2>
        <p>ஐந்திணை தென் தமிழியல் ஆய்வு மன்றம், தமிழ்நாடு</p>

        <h2><strong>இயக்குனர்</strong></h2>
        <p>
          பெண்கள் அதிகாரம் மற்றும் குழந்தைகள் மேம்பாட்டுச் சங்கம், தமிழ்நாடு
        </p>

        <h2>பதிப்பாசிரியர், OF BY AND FOR YOU PUBLICATIONS</h2>
        <p>பதிப்பகம் பதிவு எண்: TN09D0018951</p>
        <p>
          (இந்திய அரசின், குறு சிறு மற்றும் நடுத்தர நிறுவனங்களின் அமைச்சகத்தின்
          கீழ் பதிவு செய்யப்பட்டுள்ளது)
        </p>

        <div className="contact-info">
          <p>
            E-Mail:{" "}
            <a href="mailto:drcsubathra@gmail.com">drcsubathra@gmail.com</a>
          </p>
          <p>
            Website:{" "}
            <a href="https://subathrachelladurai.in">
              https://subathrachelladurai.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Niruvanar;
