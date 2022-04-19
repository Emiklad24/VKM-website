import Health from "@assets/images/projects/health-info.webp";
import TeacherAbs from "@assets/images/projects/teacher-absent.webp";
import HealthInfo from "@assets/images/projects/civil-reg.webp";
import PolicyPlan from "@assets/images/projects/landscape-nigeria.webp";
import Folic from "@assets/images/projects/folic.jpg";
import Child from "@assets/images/projects/child.jpg";
import Unicef from "@assets/images/projects/unicef.jpg";
import Reporta from "../../../public/reporta.svg";
const projectList = [
  {
    id: 1,
    name: "Health Information Systems Strengthening",
    slug: "health-information-systems-strengthening",
    desc: " VKM developed the Nigeria Health Facility Registry (HFR) for the   Federal Ministry of Health. The project was funded by USAID through the MEASURE Evaluation project under an institutional contract with VKM.",
    img: Health,
  },

  {
    id: 2,
    name: "UNICEF Nigeria – Time to teach: Determinants of Teacher Absenteeism in Sub-Saharan Africa",
    slug: "unicef-nigeria–time to teach-determinants-of-teacher-absenteeism-in-sub-saharan-africa",
    desc: "VKM was identified by UNICEF in 2018 to lead the Nigeria component of a multi-country study on the determinants of teacher absenteeism in sub-Saharan Africa.",
    img: TeacherAbs,
  },

  {
    id: 3,
    name: " Research on Civil Registration and Vital Statistics (CRVS) System",
    slug: "research-on-civil-registration-and-vital-statistics-system",
    desc: "VKM has carried out several studies on birth registration in Nigeria collaborating with researchers across the world in the process.",
    img: HealthInfo,
  },

  {
    id: 4,
    name: " Policy and Strategic Plan Development and Research",
    slug: "policy-and-strategic-plan-development-and-research",
    desc: " VKM has expertise in the development of national level policies and strategic plans. Our chief executive led the development of the Nigeria Health Information System Strategic Plan (2014-2018) and the Sierra Leone Health Information System Strategic Plan (2017- 2021).",
    img: PolicyPlan,
  },

  {
    id: 4,
    name: "UNICEF Nigeria – Iron-Folic Acid Supply Chain Assessment in Northern Nigeria",
    slug: "unicef-nigeria–Iron-Folic-acid-supply-chain-assessment-in-northern-nigeria",
    desc: "VKM was contracted by UNICEF in January 2019 to conduct an assessment of the Iron-Folic Acid supply chain system in six states (Jigawa, Katsina, Kebbi, Sokoto, Yobe, Zamfara) in Northern Nigeria.",
    img: Folic,
  },

  {
    id: 5,
    name: " UNICEF Nigeria – Drivers of Violence Against Children",
    slug: "unicef-nigeria–drivers-of-violence-against-children",
    desc: "VKM in 2017/ 2018 provided consulting services to UNICEF Child Protection section. We conducted the Drivers of Violence Against Children study which required a systematic review of the literature, secondary data analysis and an interventions’ mapping across four focal states (Lagos, Cross River, Gombe and Plateau) of the country",
    img: Child,
  },

  {
    id: 6,
    name: "UNICEF U-Report 24X7 Assessment",
    slug: "unicef-u-report-247-assessment",
    desc: "VKM was contracted by UNICEF Nigeria (Management for Results Section) in February 2020 to conduct the U-Report 24X7 assessment in the humanitarian response states of Borno, Adamawa and Yobe...",
    img: Unicef,
  },

  {
    id: 7,
    name: "UNICEF Strengthening Education Management Information System in Borno, Adamawa and Yobe states",
    slug: "unicef-strengthening-education-management-information-system-in-borno-adamawa-and-yobe-states",
    desc: "UNICEF engaged VKM in October 2020 to support the strengthening of the education management information system in Borno, Adamawa and Yobe states. This project requires the assessment of the current EMIS, development of a 3-5 year strategic plan for the EMIS, conduct of a baseline census of schools and compilation of a statistics book from this effort, and development of the baseline EMIS.",
    img: Unicef,
  },

  {
    id: 8,
    name: " Reporta Health Mobile App",
    slug: "reporta-health-mobile-app",
    desc: " In partnership with Viable Helpers Development Organization (VHDO), VKM has developed a mobile application (Reporta Health) for crowdsourcing data on illegal and unregistered health facilities across Nigeria. The app extends the functionality of the Health Facility Registry in the country.",
    img: Reporta,
  },
];

export default projectList;
