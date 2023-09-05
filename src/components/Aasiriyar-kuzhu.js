import React from "react";
import "../css/Aasiriyar.css";
import image1 from "../assets/home-images/THAVAPUTHALVI  LOGO.png";
import thavaputhalvi from "../assets/home-images/THAVAPPUTHALVI-TEXT.png";

const Aasiriyarkuzhu = ({ title }) => {
  const sub = [
    {
      name: "முனைவர் D. குமரேசன் M.Com., M.Sc., M.B.A., M.A., M.Phil., Ph.D.",
      role: "பேராசிரியர் மற்றும் இயக்குனர், கே.எஸ்.ஆர். மகளிர் கலை மற்றும் அறிவியல் கல்லூரி, திருச்செங்கோடு",
      email: "winnerkumaresan@gmail.com",
    },
    {
      name: "முனைவர் பேரா. இரா. நாகேஸ்வரி M.A, MA(Socio.), M.Com(F&C), BA(HRM), M. Phil, PGDCA, PGDGC, PGDCE, M. Sc(Psych.,) Ph.D.",
      role: "பொருளியல் துறை தலைவர், சீதாலெட்சுமி ஆச்சி மகளிர் கல்லூரி, பள்ளத்தூர்",
      email: "nageshperumal@yahoo.com",
    },
    {
      name: "முனைவர் அ ‌ பாரதிராணி M.A, B.Ed, M.Phil., Ph.D.",
      role: "உதவிப் பேராசிரியர் , தமிழ் உயராய்வு மையம், அழகப்பா அரசு கலைக் கல்லூரி காரைக்குடி",
      email: "abharathirani78@gmail.com",
    },
    {
      name: "முனைவர் செ. செல்வராணி M.A, B.Ed, M.Phil., Ph.D.",
      role: "ஆசிரியர் மற்றும் எழுத்தாளர், வணிகவியல் துறைத் தலைவர், இதயா மகளிர் கல்லூரி சருகனி, சிவகங்கை மாவட்டம்",
      email: "selvashanmugam16@gmail.com",
    },
    {
      name: "முனைவர் சு. கிருஷ்ணகுமாரி MBA., MHRM, M. Sc., (Psy.), Ph. D",
      role: "உதவிப் பேராசிரியர் சத்தியபாமா நிகர்நிலைப் பல்கலைக் கழகம், சென்னை",
      email: "krishnakumari.mba@gmail.com",
    },
    {
      name: "முனைவர் த. ஜான்சிபால்ராஜ் M.A, B.Ed, M.Phil., Ph.D.",
      role: "உவாக்கர் மேல்நிலைப் பள்ளி,டோனாவூர்.திருநெல்வேலி மாவட்டம்",
      email: "jansy.emmima@gmail.com",
    },
    {
      name: "முனைவர் இரா. இரவீந்திரநாத் நேரு M.Sc., Ph.D., M.Sc., Ph.D.,",
      role: "மேனாள் பேராசிரியர், சுற்றுச்சூழல் அறிவியல் துறை, சபா பல்கலைக் கழகம், சபா, லிபியா",
      email: "rrnehru@yahoo.co.in",
    },
    {
      name: "மரு. மு. சூரியகுமார், MBBS, MD, PG. Dip. Diab",
      role: "மருத்துவ பேராசிரியர் (ஒய்வு), அரசு மருத்துவ கல்லூரி, மதுரை",
      email: "suryaswathi@gmail.com",
    },
    {
      name: "முனைவர் செ.அந்தோணி ராகுல் கோல்டன் M.Com M.Phil NET Ph.D MBA SET NET M.Sc M.A",
      role: "உதவிப் பேராசிரியர், லயோலா கல்லூரி, சென்னை",
      email: "kvsrahul@gmail.com",
    },
    {
      name: "முனைவர் ஆ. பிரபு MA, B.Ed., B. Co-op, MPhil., PhD., SET NET-JRF, CTCT-JRF, DOA",
      role: "உதவிப் பேராசிரியர், தூய நெஞ்சக் கல்லூரி, திருப்பத்தூர்",
      email: "prabutamilnadu@gmail.com",
    },
    {
      name: "திரு. சே. பச்சைமால்கண்ணன்,",
      role: " எழுத்தாளர், கோவன்குளம் திருநெல்வேலி",
      email: "pachaimalkannan@gmail.com",
    },
    {
      name: "முனைவர் சி. ம. ஸ்ரீலங்கா மீனாட்சி, M.Com. PGDCA. YYE M.Acu., Ph.D.",
      role: "வணிகவியல் துறைத் தலைவர், அரசு கலை மற்றும் அறிவியல் கல்லூரி, கடையநல்லூர்",
      email: "langayuha@gmail.com",
    },
    {
      name: "ஸ்ரீதேவி சிவானந்தம், M.A., MBA., DMM",
      role: "தலைமை நிர்வாக அதிகாரி, DAM திறன் மேம்பாட்டு பயிற்சி மையம், அபுதாபி",
      email: "neenuu@yahoo.com",
    },
    {
      name: "முனைவர் ப. சு. செல்வமீனா, M.A., M.Phil., Ph.D.",
      role: "இணைப்பேராசிரியர், தமிழ் உயராய்வு மையம், அழகப்பா அரசு கலைக் கல்லூரி, காரைக்குடி",
      email: "selvameenakumaran8@gmail.com",
    },
    {
      name: "கவிஞர். V. S. உமா மகேஸ்வரி (குமரி உத்ரா)",
      role: " எழுத்தாளர், கொட்டாரம்",
      email: "aumaasj@gmail.com",
    },
    {
      name: "முனைவர் மி. ஜோஸ்பின் ரேணுகா, M.A., M.Phil., Ph.D.",
      role: "உதவிப் பேராசிரியர், ஹோலி கிராஸ் ஹோம் சயின்ஸ் கல்லூரி, தூத்துக்குடி",
      email: "josephinrenuga1983@gmail.com",
    },
  ];

  document.title = title;
  return (
    <div className="aasiriyar" style={{ marginTop: "70px" }}>
      <h1 style={{ color: "#ff2e99", fontWeight: "bold" }}>ஆசிரியர் குழு</h1>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <img src={image1} alt="" height={200} width={200} />
        <br />
        <img height={60} width={200} src={thavaputhalvi} alt="" />
        <h2 style={{ color: "#0B0B45" }}>
          காணவிரும்பும் மாற்றமாய் : மாற்றத்தை நோக்கி <br /> (தமிழ் காலாண்டிதழ்)
        </h2>
      </div>
      <h4 style={{ color: "#ff2e99" }}>
        <strong>இதழாசிரியர் மற்றும் தொகுப்பாசிரியர் </strong>
      </h4>
      <p style={{ color: "#0B0B45" }}>
        முனைவர். சுபத்ரா செல்லத்துரை M.Com., M.Phil., PGDHRM, M. A (Soc.), M.Sc
        (Psy.), UGC-NET, Ph.D.
      </p>
      <p style={{ color: "#0B0B45" }}>
        உதவிப் பேராசிரியர் &amp; ஆராய்ச்சி மேற்பார்வையாளர், வணிகவியல் துறை,
        பயோனியர் குமாரசாமி கல்லூரி, நாகர்கோவில் - 629003, தமிழ்நாடு, இந்தியா
      </p>
      <p style={{ color: "#0B0B45" }}>
        Per-Website:{" "}
        <a
          rel="noreferrer"
          href="https://subathrachelladurai.in"
          target="_blank"
          style={{ color: "#0B0B45" }}
        >
          https://subathrachelladurai.in
        </a>
        , Off-Website:{" "}
        <a
          style={{ color: "#0B0B45" }}
          rel="noreferrer"
          href="https://thavaputhalvi.in"
          target="_blank"
        >
          https://thavaputhalvi.in
        </a>
      </p>
      <p style={{ color: "#0B0B45" }}>
        Per-E-Mail: drcsubathra@gmail.com , Off-Email:{" "}
        thavaputhalviyoutrust@gmail.com
      </p>
      <p style={{ color: "#0B0B45" }}>
        Contact: 91-86103 11546 / +91-95852 12775 (Whatsapp)
      </p>
      <h4 style={{ color: "#ff2e99" }}>
        <strong>உதவி ஆசிரியர் குழு</strong>
      </h4>
      <div>
        <ul
          style={{
            display: "grid",
            textAlign: "left",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          {sub.map((data, i) => (
            <li>
              <p style={{ color: "#0B0B45" }}>{data.role}</p>
              <p style={{ color: "#0B0B45" }}>{data.name}</p>
              <p style={{ color: "#0B0B45" }}>{data.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Aasiriyarkuzhu;
