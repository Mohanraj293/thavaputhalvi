import React from "react";
import Ithaz from "./Ithaz";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";

import NationalConfSetImage from "../assets/Publications-label/2nd-national-conf.jpeg";
import NationalConfSetPdf from "../assets/Publications-pdf/2nd national conf SET.pdf";
import AiBankingImage from "../assets/Publications-label/AI in Banking and Education.jpeg";
import AiBankingPdf from "../assets/Publications-pdf/AI in BB & E.pdf";
import BusinessResearchImage from "../assets/Publications-label/Business-research-methods.jpeg";
import BusinessResearchPdf from "../assets/Publications-pdf/RISHI-BRM.pdf";
import DigitalisationImage from "../assets/Publications-label/DIGITALISATION-IN-INDIA.jpg";
import DigitalisationPdf from "../assets/Publications-pdf/DIGITALISATION IN INDIA  - Jul 2019.pdf";
import DigitalEraImage from "../assets/Publications-label/Digital-era.png";
import DigitalEraPdf from "../assets/Publications-pdf/Digital era - Mar 2019.pdf";
import DigitalMarketingImage from "../assets/Publications-label/Digital-marketing-techniques.jpeg";
import DigitalMarketingPdf from "../assets/Publications-pdf/Digital Marketing Techniques in Small Business Management March 2026.pdf";
import IslamicReadingImage from "../assets/Publications-label/ENGLISH ISLAMIC READING TEXT.jpeg";
import IslamicReadingPdf from "../assets/Publications-pdf/ENGLISH ISLAMIC READING TEXT.pdf";
import EssentialSkillsImage from "../assets/Publications-label/ESSENTIAL SKILLS - Dr. Subathra Chelladurai.jpeg";
import EssentialSkillsPdf from "../assets/Publications-pdf/ESSENTIAL SKILLS - Dr. Subathra Chelladurai.pdf";
import EmperorImage from "../assets/Publications-label/Emperor.jpg";
import EmperorPdf from "../assets/Publications-pdf/Emperor Journal - MAr 2018.pdf";
import EnglishPoetryImage from "../assets/Publications-label/English poetry.png";
import EnglishPoetryPdf from "../assets/Publications-pdf/ENGLISH POETRY - BUK.pdf";
import EntrepreneurshipImage from "../assets/Publications-label/Enterpreneurship-An Introduction.jpg";
import EntrepreneurshipPdf from "../assets/Publications-pdf/Enterpreneurship -An Introduction - Sep 2018.pdf";
import MultimodalImage from "../assets/Publications-label/FACILITATING STUDENTS' MULTIMODAL COMPETENCE DEVELOPMENT IN TECHNOLOGY-SUPPORTED SPEAKING CLASS.jpeg";
import MultimodalPdf from "../assets/Publications-pdf/FACILITATING STUDENTS MULTIMODAL COMPETENCE DEVELOPMENT IN TECHNOLOGY-SUPPORTED SPEAKING CLASS.pdf";
import FixelsImage from "../assets/Publications-label/FIXELS AND PEDAGOGY FROM CHALKBOARD TO SMARTBOARDS TRACING THE IMPACT OF TECHNOLOGY ON LANGUAGE EDUCATION.jpeg";
import FixelsPdf from "../assets/Publications-pdf/FIXELS AND PEDAGOGY FROM CHALKBOARD TO SMARTBOARDS TRACING THE IMPACT OF TECHNOLOGY ON LANGUAGE EDUCATION.pdf";
import SupplyChainImage from "../assets/Publications-label/Global-Supply-chain-management.jpeg";
import SupplyChainPdf from "../assets/Publications-pdf/Global Supply Chain Management Best Practices Technology Adoption in Business Ethics April 2026.pdf";
import BrandingImage from "../assets/Publications-label/Hall Marks of Branding.jpeg";
import BrandingPdf from "../assets/Publications-pdf/HALLMARK - Dr. MUTHU DEEPA.pdf";
import GuntavanukiImage from "../assets/Publications-label/Hindi - rishi label.jpeg";
import GuntavanukiPdf from "../assets/Publications-pdf/Hindi - RISHI.pdf";
import IcaensgImage from "../assets/Publications-label/ICAENSG 2026 - Proceedings.jpeg";
import IcaensgPdf from "../assets/Publications-pdf/ICAENSG 2026 - Proceedings.pdf";
import IctEflImage from "../assets/Publications-label/ICT-EFL.jpeg";
import IctEflPdf from "../assets/Publications-pdf/ICT BOOK - CS Muthmainah.pdf";
import AcademicWritingImage from "../assets/Publications-label/IMPROVING STUDENTS' ACADEMIC WRITING QUALITY BY USING ICT ONLINE TOOLS.jpeg";
import AcademicWritingPdf from "../assets/Publications-pdf/IMPROVING STUDENTS ACADEMIC WRITING QUALITY BY USING ICT ONLINE TOOLS.pdf";
import DemocracyConfImage from "../assets/Publications-label/ISBN 978-81-989016-1-3.png";
import DemocracyConfPdf from "../assets/Publications-pdf/PROCEEDING 2ND INTL. CONFERENCE.pdf";
import IscmiImage from "../assets/Publications-label/ISCMI.jpeg";
import IscmiPdf from "../assets/Publications-pdf/ISCMI - CS ANDI.pdf";
import InstitutionalFinanceImage from "../assets/Publications-label/Institutional-finance-to-entrepreneurs.jpg";
import InstitutionalFinancePdf from "../assets/Publications-pdf/Institutional finance to entrepreneurs - Sep 2018.pdf";
import IcissceImage from "../assets/Publications-label/International Conference-ICISSCE - 2025.jpeg";
import IcisscePdf from "../assets/Publications-pdf/ICISSCE - Conf Proceedings- Final Book.pdf";
import InternationalBusinessImage from "../assets/Publications-label/International business.jpeg";
import InternationalBusinessPdf from "../assets/Publications-pdf/INTERNATIONAL BUSINESS - Dr. Sabeena.pdf";
import SeminarEducationImage from "../assets/Publications-label/International-Seminar-on-education.jpeg";
import SeminarEducationPdf from "../assets/Publications-pdf/FULL INTERNATIONAL PROCEEDINGS.pdf";
import LeadershipImage from "../assets/Publications-label/LEADERSHIP-BEHAVIOUR.jpg";
import LeadershipPdf from "../assets/Publications-pdf/LEADERSHIP BEHAVIOUR - Jan 2019.pdf";
import HybridLearningImage from "../assets/Publications-label/ONLINE FACE TO FACE, OR HYBRID LEARNING.jpeg";
import HybridLearningPdf from "../assets/Publications-pdf/ONLINE FACE TO FACE, OR HYBRID LEARNING.pdf";
import ParadigmShiftImage from "../assets/Publications-label/PARADIGM-SHIFT-BOOK.jpg";
import ParadigmShiftPdf from "../assets/Publications-pdf/PARADIGM SHIFT BOOK - Aug 2019.pdf";
import ManagementImage from "../assets/Publications-label/POM-BOOK.jpeg";
import ManagementPdf from "../assets/Publications-pdf/POM book.pdf";
import MarketingImage from "../assets/Publications-label/Principles of Marketing.jpeg";
import MarketingPdf from "../assets/Publications-pdf/PRINCIPLES OF MARKETING - Dr. CS.pdf";
import MbicVol1No1Image from "../assets/Publications-label/Proceeding-vol1-nomor1.jpeg";
import MbicVol1No1Pdf from "../assets/Publications-pdf/VOLUME 1 NOMOR 1.pdf";
import MbicVol1No2Image from "../assets/Publications-label/Proceeding-vol1-nomor2.jpeg";
import MbicVol1No2Pdf from "../assets/Publications-pdf/VOLUME 1 NOMOR 2.pdf";
import MbicVol2No1Image from "../assets/Publications-label/Proceeding1-2024.jpeg";
import MbicVol2No1Pdf from "../assets/Publications-pdf/Proceeding 1.pdf";
import MbicVol2No2Image from "../assets/Publications-label/Proceeding2-2024.jpeg";
import MbicVol2No2Pdf from "../assets/Publications-pdf/Proceeding 2.pdf";
import GscImage from "../assets/Publications-label/Proceedings - GSC 2025 - CS.jpeg";
import GscPdf from "../assets/Publications-pdf/Proceedings - GSC 2025 - CS.pdf";
import RecentResearchImage from "../assets/Publications-label/RECENT-TRENDS-IN-ARTS-SCIENCE.jpg";
import RecentResearchPdf from "../assets/Publications-pdf/RECENT TRENDS IN ARTS _ SCIENCE - Apr 2020.pdf";
import CovidImage from "../assets/Publications-label/RESEARCHERS-VIEW-ON-COVID-19.jpg";
import CovidPdf from "../assets/Publications-pdf/RESEARCHERS VIEW ON COVID - 19 - June 2020.pdf";
import AgricultureImage from "../assets/Publications-label/STATUS-OF-AGRICULTURE-IN-INDIA.jpg";
import AgriculturePdf from "../assets/Publications-pdf/STATUS OF AGRICULTURE IN INDIA -Dec - 2019.pdf";
import SocialResponsibilityImage from "../assets/Publications-label/Social-Responsibility.jpg";
import SocialResponsibilityPdf from "../assets/Publications-pdf/Social Responsibility - June 2018.pdf";
import TranslationImage from "../assets/Publications-label/TRANSLATION.jpeg";
import TranslationPdf from "../assets/Publications-pdf/TRANSLATION.pdf";
import TrendingFrontiersImage from "../assets/Publications-label/TRENDING-FRONTIERS-IN-COMMERCE-ND-MANAGEMENT.jpg";
import TrendingFrontiersPdf from "../assets/Publications-pdf/TRENDING FRONTIERS IN COMMERCE AND MANAGEMENT - Mar 2020.pdf";
import HigherEducationImage from "../assets/Publications-label/Virtual Innternational Conference.jpeg";
import HigherEducationPdf from "../assets/Publications-pdf/VICHE360 Conf Proceedings - CS.pdf";

const Publication = ({ title }) => {
  document.title = title;

  const publications = [
    {
      title: "LEADERSHIP BEHAVIOUR OF COLLEGE PRINCIPALS IN KANYAKUMARI DISTRICT",
      pdfUrl: LeadershipPdf,
      label: LeadershipImage,
    },
    {
      title: "GLOBAL SUPPLY CHAIN MANAGEMENT",
      pdfUrl: SupplyChainPdf,
      label: SupplyChainImage,
    },
    {
      title: "DIGITAL MARKETING TECHNIQUES IN SMALL BUSINESS MANAGEMENT",
      pdfUrl: DigitalMarketingPdf,
      label: DigitalMarketingImage,
    },
    {
      title: "INTERNATIONAL SEMINAR ON EDUCATION - PROCEEDING",
      pdfUrl: SeminarEducationPdf,
      label: SeminarEducationImage,
    },
    {
      title: "ESSENTIAL SKILLS FOR EMPLOYABILITY AND CAREER SUCCESS",
      pdfUrl: EssentialSkillsPdf,
      label: EssentialSkillsImage,
    },
    {
      title: "ICAENSG 2026 - CONFERENCE PROCEEDINGS",
      pdfUrl: IcaensgPdf,
      label: IcaensgImage,
    },
    {
      title: "PROCEEDING - THE 2ND INTERNATIONAL CONFERENCE",
      pdfUrl: DemocracyConfPdf,
      label: DemocracyConfImage,
    },
    {
      title: "PROCEEDINGS OF THE GLOBAL SCHOLARLY COLLOQUIUM - 2025",
      pdfUrl: GscPdf,
      label: GscImage,
    },
    {
      title: "INTERNATIONAL BUSINESS",
      pdfUrl: InternationalBusinessPdf,
      label: InternationalBusinessImage,
    },
    {
      title: "FACILITATING STUDENTS' MULTIMODAL COMPETENCE DEVELOPMENT IN TECHNOLOGY-SUPPORTED SPEAKING CLASS",
      pdfUrl: MultimodalPdf,
      label: MultimodalImage,
    },
    {
      title: "IMPROVING STUDENTS' ACADEMIC WRITING QUALITY BY USING ICT ONLINE TOOLS",
      pdfUrl: AcademicWritingPdf,
      label: AcademicWritingImage,
    },
    {
      title: "HIGHER EDUCATION 360° - VIRTUAL INTERNATIONAL CONFERENCE PROCEEDINGS",
      pdfUrl: HigherEducationPdf,
      label: HigherEducationImage,
    },
    {
      title: "PRINCIPLES OF MARKETING",
      pdfUrl: MarketingPdf,
      label: MarketingImage,
    },
    {
      title: "HALLMARKS OF BRANDING",
      pdfUrl: BrandingPdf,
      label: BrandingImage,
    },
    {
      title: "ICISSCE 2025 - CONFERENCE PROCEEDINGS",
      pdfUrl: IcisscePdf,
      label: IcissceImage,
    },
    {
      title: "AI IN BANKING, BUSINESS AND EDUCATION",
      pdfUrl: AiBankingPdf,
      label: AiBankingImage,
    },
    {
      title: "ICT IN EFL",
      pdfUrl: IctEflPdf,
      label: IctEflImage,
    },
    {
      title: "MBIC PROCEEDING - VOLUME 2 NO. 2 - 2024",
      pdfUrl: MbicVol2No2Pdf,
      label: MbicVol2No2Image,
    },
    {
      title: "MBIC PROCEEDING - VOLUME 2 NO. 1 - 2024",
      pdfUrl: MbicVol2No1Pdf,
      label: MbicVol2No1Image,
    },
    {
      title: "TRANSLATION",
      pdfUrl: TranslationPdf,
      label: TranslationImage,
    },
    {
      title: "ONLINE, FACE TO FACE, OR HYBRID LEARNING?",
      pdfUrl: HybridLearningPdf,
      label: HybridLearningImage,
    },
    {
      title: "FIXELS AND PEDAGOGY FROM CHALKBOARD TO SMARTBOARDS",
      pdfUrl: FixelsPdf,
      label: FixelsImage,
    },
    {
      title: "ENGLISH ISLAMIC READING TEXT",
      pdfUrl: IslamicReadingPdf,
      label: IslamicReadingImage,
    },
    {
      title: "THE ARTISTRY OF ENGLISH POETRY AND CREATIVE EXPRESSION",
      pdfUrl: EnglishPoetryPdf,
      label: EnglishPoetryImage,
    },
    {
      title: "PRINCIPLES OF MANAGEMENT",
      pdfUrl: ManagementPdf,
      label: ManagementImage,
    },
    {
      title: "GUNTAVNUKICHI GURUKILI",
      pdfUrl: GuntavanukiPdf,
      label: GuntavanukiImage,
    },
    {
      title: "BUSINESS RESEARCH METHODS",
      pdfUrl: BusinessResearchPdf,
      label: BusinessResearchImage,
    },
    {
      title: "THE SECOND NATIONAL CONFERENCE ON SOCIAL SCIENCES, EDUCATION, AND TECHNOLOGY",
      pdfUrl: NationalConfSetPdf,
      label: NationalConfSetImage,
    },
    {
      title: "MBIC PROCEEDING - VOLUME 1 NO. 1 - 2023",
      pdfUrl: MbicVol1No1Pdf,
      label: MbicVol1No1Image,
    },
    {
      title: "MBIC PROCEEDING - VOLUME 1 NO. 2 - 2023",
      pdfUrl: MbicVol1No2Pdf,
      label: MbicVol1No2Image,
    },
    {
      title: "INTERNATIONAL STUDENTS CONFERENCE ON MULTIPLE INTELLIGENCES (ISCMI) 2022",
      pdfUrl: IscmiPdf,
      label: IscmiImage,
    },
    {
      title: "COMMERCE AND MANAGEMENT IN DIGITAL ERA",
      pdfUrl: DigitalEraPdf,
      label: DigitalEraImage,
    },
    {
      title: "DIGITALISATION IN INDIA",
      pdfUrl: DigitalisationPdf,
      label: DigitalisationImage,
    },
    {
      title: "EMPEROR INTERNATIONAL JOURNAL OF FINANCE AND MANAGEMENT RESEARCH",
      pdfUrl: EmperorPdf,
      label: EmperorImage,
    },
    {
      title: "ENTREPRENEURSHIP - AN INTRODUCTION",
      pdfUrl: EntrepreneurshipPdf,
      label: EntrepreneurshipImage,
    },
    {
      title: "INSTITUTIONAL FINANCE TO ENTREPRENEURS",
      pdfUrl: InstitutionalFinancePdf,
      label: InstitutionalFinanceImage,
    },
    {
      title: "A PARADIGM SHIFT IN BANKING, MARKETING AND HRM",
      pdfUrl: ParadigmShiftPdf,
      label: ParadigmShiftImage,
    },
    {
      title: "RECENT RESEARCHES IN ARTS AND SCIENCE",
      pdfUrl: RecentResearchPdf,
      label: RecentResearchImage,
    },
    {
      title: "RESEARCHERS VIEW ON COVID - 19",
      pdfUrl: CovidPdf,
      label: CovidImage,
    },
    {
      title: "SOCIAL RESPONSIBILITY",
      pdfUrl: SocialResponsibilityPdf,
      label: SocialResponsibilityImage,
    },
    {
      title: "STATUS OF AGRICULTURE IN INDIA",
      pdfUrl: AgriculturePdf,
      label: AgricultureImage,
    },
    {
      title: "TRENDING FRONTIERS AND PROSPECTS IN COMMERCE AND MANAGEMENT",
      pdfUrl: TrendingFrontiersPdf,
      label: TrendingFrontiersImage,
    },
  ];

  return (
    <div style={{ padding: "10px", marginTop: "88px" }}>
      <h1 style={{ textAlign: "center", color: "#D90166", fontWeight: "bold" }}>
        Publication
      </h1>
      <MDBRow style={{ maxWidth: "1000px", margin: "auto" }}>
        {publications.map((publication, i) => (
          <MDBCol key={i}>
            <Ithaz
              image={publication.label}
              title={publication.title}
              pdfUrl={publication.pdfUrl}
            />
          </MDBCol>
        ))}
      </MDBRow>
    </div>
  );
};

export default Publication;
