import React from "react";
import "../css/Aasiriyar.css";
import image1 from "../assets/home-images/THAVAPUTHALVI  LOGO.png";

const Aasiriyarkuzhu = ({ title }) => {
  document.title = title;
  return (
    <div className="aasiriyar">
      <h1>
        காணவிரும்பும் மாற்றமாய் : மாற்றத்தை நோக்கி (தமிழ் காலாண்டிதழ்)
        தவப்புதல்வி
      </h1>
      <img src={image1} alt="" height={200} width={200}/>
      <h1>ஆசிரியர் குழு</h1>
      <p>
        இதழாசிரியர் மற்றும் தொகுப்பாசிரியர் முனைவர். சுபத்ரா செல்லத்துரை M.Com.,
        M.Phil., PGDHRM, M. A (Soc.), M.Sc (Psy.), UGC-NET, Ph.D.
      </p>
      <p>
        உதவிப் பேராசிரியர் &amp; ஆராய்ச்சி மேற்பார்வையாளர், வணிகவியல் துறை,
        பயோனியர் குமாரசாமி கல்லூரி, நாகர்கோவில் – 629003, தமிழ்நாடு, இந்தியா
      </p>
      <p>
        Per-Website:{" "}
        <a
          rel="noreferrer"
          href="https://subathrachelladurai.in"
          target="_blank"
        >
          https://subathrachelladurai.in
        </a>
        , Off-Website:{" "}
        <a rel="noreferrer" href="https://thavaputhalvi.in" target="_blank">
          https://thavaputhalvi.in
        </a>
      </p>
      <p>
        Per-E-Mail:{" "}
        <a href="mailto:drcsubathra@gmail.com">drcsubathra@gmail.com</a>,
        Off-Email:{" "}
        <a href="mailto:thavaputhalviyoutrust@gmail.com">
          thavaputhalviyoutrust@gmail.com
        </a>
      </p>
      <p>Contact: 91-86103 11546 / +91-95852 12775 (Whatsapp)</p>

      <h2>உதவி ஆசிரியர் குழு</h2>
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
          <li>
            <p>
              முனைவர் D. குமரேசன் M.Com., M.Sc., M.B.A., M.A., M.Phil., Ph.D.
            </p>
            <p>
              பேராசிரியர் மற்றும் இயக்குனர், கே.எஸ்.ஆர். மகளிர் கலை மற்றும்
              அறிவியல் கல்லூரி, திருச்செங்கோடு
            </p>{" "}
            E-mail:{" "}
            <a href="mailto:winnerkumaresan@gmail.com">
              winnerkumaresan@gmail.com
            </a>
          </li>
          <li>
            <p>
              முனைவர் பேரா. இரா. நாகேஸ்வரி M.A, MA(Socio.), M.Com(F&amp;C),
              BA(HRM), M. Phil, PGDCA, PGDGC, PGDCE, M. Sc(Psych.,) Ph.D.,
            </p>
            <p>
              பொருளியல் துறை தலைவர், சீதாலெட்சுமி ஆச்சி மகளிர் கல்லூரி,
              பள்ளத்தூர்
            </p>
            <p>
              {" "}
              E-mail:{" "}
              <a href="mailto:nageshperumal@yahoo.com">
                nageshperumal@yahoo.com
              </a>
            </p>
          </li>
          <li>
            <p>முனைவர் அ ‌ பாரதிராணி M.A, B.Ed, M.Phil., Ph.D.,</p>
            <p>
              {" "}
              உதவிப் பேராசிரியர் , தமிழ் உயராய்வு மையம், அழகப்பா அரசு கலைக்
              கல்லூரி காரைக்குடி
            </p>
            E-mail:{" "}
            <a href="mailto:abharathirani78@gmail.com">
              abharathirani78@gmail.com
            </a>
          </li>
          <li>
            <p>முனைவர் செ. செல்வராணி M.A, B.Ed, M.Phil., Ph.D., </p>
            <p>
              ஆசிரியர் மற்றும் எழுத்தாளர், வணிகவியல் துறைத் தலைவர், இதயா மகளிர்
              கல்லூரி சருகனி, சிவகங்கை மாவட்டம்{" "}
            </p>
            <p>
              E-Mail:{" "}
              <a href="mailto:selvashanmugam16@gmail.com">
                selvashanmugam16@gmail.com
              </a>
            </p>
          </li>
          <li>
            <p>முனைவர் சு. கிருஷ்ணகுமாரி MBA., MHRM, M. Sc., (Psy.), Ph. D</p>
            <p>
              உதவிப் பேராசிரியர் சத்தியபாமா நிகர்நிலைப் பல்கலைக் கழகம், சென்னை
            </p>
            E-mail:{" "}
            <a href="mailto:krishnakumari.mba@gmail.com">
              krishnakumari.mba@gmail.com
            </a>
          </li>
          <li>
            <p>முனைவர் த. ஜான்சிபால்ராஜ் M.A, B.Ed, M.Phil., Ph.D., </p>
            <p> உவாக்கர் மேல்நிலைப் பள்ளி,டோனாவூர்.திருநெல்வேலி மாவட்டம் </p>
            E-mail:{" "}
            <a href="mailto:jansy.emmima@gmail.com">jansy.emmima@gmail.com</a>
          </li>
          <li>
            <p>முனைவர் இரா. இரவீந்திரநாத் நேரு M.Sc., Ph.D., M.Sc., Ph.D.,</p>
            <p>
              மேனாள் பேராசிரியர், சுற்றுச்சூழல் அறிவியல் துறை, சபா பல்கலைக்
              கழகம், சபா, லிபியா,
            </p>
            E-mail: <a href="mailto:rrnehru@yahoo.co.in">rrnehru@yahoo.co.in</a>
          </li>
          <li>
            <p>மரு. மு. சூரியகுமார், MBBS, MD, PG. Dip. Diab</p>
            <p>மருத்துவ பேராசிரியர் (ஒய்வு), அரசு மருத்துவ கல்லூரி, மதுரை</p>
            E-mail:{" "}
            <a href="mailto:suryaswathi@gmail.com">suryaswathi@gmail.com</a>
          </li>
          <li>
            <p>
              முனைவர் செ.அந்தோணி ராகுல் கோல்டன் M.Com M.Phil NET Ph.D MBA SET
              NET M.Sc M.A M.A
            </p>{" "}
            <p>உதவிப் பேராசிரியர், லயோலா கல்லூரி, சென்னை</p>
            E-mail: <a href="mailto:kvsrahul@gmail.com">kvsrahul@gmail.com</a>
          </li>
          <li>
            <p>
              முனைவர் ஆ. பிரபு MA, B.Ed., B. Co-op, MPhil., PhD., SET NET-JRF,
              CTCT-JRF, DOA{" "}
            </p>
            <p>உதவிப் பேராசிரியர், தூய நெஞ்சக் கல்லூரி, திருப்பத்தூர்</p>
            E-mail:{" "}
            <a href="mailto:prabutamilnadu@gmail.com">
              prabutamilnadu@gmail.com
            </a>
          </li>
          <li>
            <p>
              திரு. சே. பச்சைமால்கண்ணன், எழுத்தாளர், கோவன்குளம் திருநெல்வேலி
            </p>
            <p>
              E-mail:{" "}
              <a href="mailto:pachaimalkannan@gmail.com">
                pachaimalkannan@gmail.com
              </a>
            </p>
          </li>
          <li>
            <p>
              முனைவர் சி. ம. ஸ்ரீலங்கா மீனாட்சி, M.Com. PGDCA. YYE M.Acu.,
              Ph.D.,
            </p>
            <p>
              வணிகவியல் துறைத் தலைவர், அரசு கலை மற்றும் அறிவியல் கல்லூரி,
              கடையநல்லூர்
            </p>
            <p>
              E-mail:{" "}
              <a href="mailto:langayuha@gmail.com">langayuha@gmail.com</a>
            </p>
          </li>
          <li>
            <p>ஸ்ரீதேவி சிவானந்தம், M.A., MBA., DMM</p>
            <p>
              தலைமை நிர்வாக அதிகாரி, DAM திறன் மேம்பாட்டு பயிற்சி மையம், அபுதாபி
            </p>
            <p>
              E-mail: <a href="mailto:neenuu@yahoo.com">neenuu@yahoo.com</a>
            </p>
          </li>
          <li>
            <p>முனைவர் ப. சு. செல்வமீனா, M.A., M.Phil., Ph.D.,</p>
            <p>
              இணைப்பேராசிரியர், தமிழ் உயராய்வு மையம், அழகப்பா அரசு கலைக்
              கல்லூரி, காரைக்குடி
            </p>
            <p>
              E-mail:{" "}
              <a href="mailto:selvameenakumaran8@gmail.com">
                selvameenakumaran8@gmail.com
              </a>
            </p>
          </li>
          <li>
            <p>
              கவிஞர். V. S. உமா மகேஸ்வரி (குமரி உத்ரா), எழுத்தாளர், கொட்டாரம்
            </p>
            <p>
              E-mail: <a href="mailto:aumaasj@gmail.com">aumaasj@gmail.com</a>
            </p>
          </li>
          <li>
            <p>முனைவர் மி. ஜோஸ்பின் ரேணுகா, M.A., M.Phil., Ph.D.,</p>
            <p>
              உதவிப் பேராசிரியர், ஹோலி கிராஸ் ஹோம் சயின்ஸ் கல்லூரி, தூத்துக்குடி
            </p>
            <p>
              E-mail:
              <a href="mailto:josephinrenuga1983@gmail.com">
                josephinrenuga1983@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Aasiriyarkuzhu;
