import Health from "@assets/images/projects/health-info.webp";
import TeacherAbs from "@assets/images/projects/teacher-absent.webp";
import HealthInfo from "@assets/images/projects/civil-reg.webp";
import PolicyPlan from "@assets/images/projects/landscape-nigeria.webp";
import Folic from "@assets/images/projects/folic.jpg";
import Child from "@assets/images/projects/child.jpg";
import Unicef from "@assets/images/projects/unicef.jpg";

import Unicef_ from "../../../public/unicef.png";
import Reporta from "../../../public/reporta.svg";
import Vkm from "../../../public/vkm_logo.png";
import coat from "../../../public/coat.png";
import fhi from "../../../public/fhi.png";
import white from "../../../public/white-ribbon.png";
import ty from "../../../public/ty.jpg";
import brac from "../../../public/brac.png";
import align from "../../../public/align.png";

const projectList = [
  {
    id: 1,
    name: "Health Information Development and Strengthening",
    slug: "Health-Information-Development-and-Strengthening",
    desc_short:
      " VKM developed the Nigeria Health Facility Registry (HFR) for the Federal Ministry of Health in 2017. The project was funded by USAID through the MEASURE Evaluation project under an institutional contract with VKM. The Health Facility Registry is a multilayered system with two functional sides: the public facing side and an administrative section. ",
    desc: " VKM developed the Nigeria Health Facility Registry (HFR) for the Federal Ministry of Health in 2017. The project was funded by USAID through the MEASURE Evaluation project. The Health Facility Registry is a multilayered system with two functional sides: the public facing side and an administrative section. The public facing side has a map and tables on four different classes of health facilities (Hospitals and Clinics, Laboratories, Imaging Centers, and Pharmaceutical Premises). Public users can search for facilities around the country based on the location and services of interest. The homepage shows a Choropleth map of Nigeria in which the color changes based on the number of health facilities in the state. The public user can drill down to seeing the state map which shows a choropleth map of the Local Government Areas. A user can further drill down to seeing the health facility layer in a Google Map view. The administrative section permits interaction by the officers in the Ministry of Health across the 36 states of the country and the Federal Capital Territory after authentication. These officers are responsible for keeping the data updated when they register new health facilities on an ongoing basis. The HFR has several Application Programming Interfaces (APIs) that enable other systems to connect with and retrieve data from the HFR. It is also linked with the Google API to provide live maps. ",
    img: Health,
    client: "Federal Ministry of health",
    logo: [{ one: coat }],
    publications: [
      {
        link: "http://www.ncbi.nlm.nih.gov/pmc/articles/PMC4235326/",
      },
      {
        link: "http://him.sagepub.com/content/45/2/90",
      },
      {
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5266756/",
      },
      {
        link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/hpm.2603",
      },
    ],
  },

  {
    id: 2,
    name: "UNICEF-Nigeria –Time to teach: Determinants of Teacher Absenteeism in Sub-Saharan Africa",
    slug: "UNICEF-Nigeria–Time-to-teach-Determinants of Teacher Absenteeism in Sub-Saharan Africa",
    desc_short:
      "VKM was identified by UNICEF in 2018 to lead the Nigeria component of a multi-country study on the determinants of teacher absenteeism in sub-Saharan Africa.",
    desc: "VKM in 2018/ 2019 conducted the Time to Teach study for UNICEF Nigeria as part of a multi-country study. The study was conducted across the six geopolitical zones in the country and engaged both quantitative and qualitative methods. The study required interview of national level stakeholders at the Universal Basic Education Commission, State level stakeholders at the State Universal Basic Education Board in Bayelsa, Oyo, Enugu, Kano, Benue and Bauchi states, Local Government education officers, headteachers across schools in the LGAs mentioned, School Based Management Committee/ PTA members, teachers, and pupils. ",
    client: "Unicef",
    img: TeacherAbs,
    logo: [{ one: Unicef_ }],
  },

  {
    id: 3,
    name: " Research on Civil Registration and Vital Statistics (CRVS) System",
    slug: "Research-on-Civil-Registration-and-Vital-Statistic-System",
    desc_short:
      "VKM has carried out several studies on birth registration in Nigeria collaborating with researchers across the world in the process.",
    desc: "VKM has carried out several studies on birth registration in Nigeria collaborating with researchers across the world in the process. We are continuing to contribute to the general discussion on CRVS in Nigeria through our scholarly works. Our research products are available online and are routinely consulted from across the world. These have been cited from far and near. ",
    img: HealthInfo,
    client: "VKM",
    logo: [{ one: Vkm }],
    publications: [
      {
        link: "https://www.tandfonline.com/doi/full/10.1080/16549716.2020.1811476?scroll=top&needAccess=true ",
      },
      {
        link: "http://www.demographic-research.org/volumes/vol35/12/",
      },
      {
        link: "http://bjsm.bmj.com/content/early/2017/04/27/bjsports-2016-097404 ",
      },
    ],
  },

  {
    id: 4,
    name: " Policy and Strategic Plan Development and Research",
    slug: "Policy-and-Strategic-Plan-Development-and-Research",
    desc_short:
      " VKM has expertise in the development of national level policies and strategic plans. Our chief executive led the development of the Nigeria Health Information System Strategic Plan (2014-2018) and the Sierra Leone Health Information System Strategic Plan (2017- 2021).",
    desc: " VKM has expertise in the development of national level policies and strategic plans. Our chief executive led the development of the Nigeria Health Information System Strategic Plan (2014-2018) and the Sierra Leone Health Information System Strategic Plan (2017-2021). He has also conducted active research in policy and advocated for the enactment of laws to improve the performance of the health system in general. ",
    img: PolicyPlan,
    client: "VKM",
    logo: [{ one: coat }],
    publications: [
      {
        link: "https://onlinelibrary.wiley.com/doi/abs/10.1111/hir.12240",
      },
      {
        link: "http://journals.sagepub.com/doi/full/10.1177/1524838015591588",
      },
      {
        link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/hpm.2603",
      },
      {
        link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/hpm.260http://www.health.gov.ng/doc/National%20HIS%20Strategic%20Plan.pdf",
      },
    ],
  },

  {
    id: 4,
    name: "UNICEF Nigeria – Iron-Folic Acid Supply Chain Assessment in Northern Nigeria",
    slug: "UNICEF-Nigeria–Iron-Folic-Acid-Supply-Chain-Assessment-in-Northern-Nigeria",
    desc_short:
      "VKM was contracted by UNICEF in January 2019 to conduct an assessment of the Iron-Folic Acid supply chain system in six states (Jigawa, Katsina, Kebbi, Sokoto, Yobe, Zamfara) in Northern Nigeria.",
    desc: "VKM was contracted by UNICEF in January 2019 to assess the Iron-Folic Acid (IFA) supply chain system in six states (Jigawa, Katsina, Kebbi, Sokoto, Yobe & Zamfara) in Northern Nigeria. UNICEF had been supporting the government of Nigeria with the provision of IFA products in the states to address maternal malnutrition and reduce mortality arising from maternal anemia and its consequences. VKM was engaged to assess the shortcomings in the supply chain system, identify bottlenecks and failure points that was preventing IFA from reaching the women that needed it. To achieve the objectives of the project, we conducted a desk review, interviewed key informants (health workers and pregnant or recently delivered women in health facilities and communities), and conducted a market survey of health facilities (drug shops, pharmacies, manufacturers, wholesalers, and hospital pharmacies). At the facilities we documented the different types of IFA products available within them including identifying those supplied by UNICEF. We used the data gathered to develop a project report.",
    img: Folic,
    client: "Unicef",
    logo: [{ one: Unicef_ }],
  },

  {
    id: 5,
    name: " UNICEF Nigeria – Drivers of Violence Against Children",
    slug: "UNICEF-Nigeria –Drivers-of-Violence-Against-Children",
    desc_short:
      "VKM in 2017/ 2018 provided consulting services to UNICEF Child Protection section. We conducted the Drivers of Violence Against Children study which required a systematic review of the literature, secondary data analysis and an interventions’ mapping across four focal states (Lagos, Cross River, Gombe and Plateau) of the country",
    desc: "VKM in 2018 provided consulting services to UNICEF Child Protection section. We conducted the Drivers of Violence Against Children study which required a systematic review of the literature, secondary data analysis and an interventions’ mapping across four focal states (Lagos, Cross River, Gombe and Plateau) in Nigeria. On this project we worked with the Federal Ministry of Women Affairs and Social Development, the Ministry of Women Affairs and Social Development across the four states, the National Population Commission, Federal Ministry of Health, and other government institutions represented in the “End Violence Against Children” Technical Working Group. ",
    img: Child,
    client: "Unicef",
    logo: [{ one: Unicef_ }],
    publications: [
      {
        link: "https://www.end-violence.org/sites/default/files/paragraphs/download/study%20nigeria.pdf ",
      },
    ],
  },

  {
    id: 6,
    name: "UNICEF U-Report 24X7 Assessment",
    slug: "UNICEF-U-Report-24X7-Assessment",
    desc_short:
      "VKM was contracted by UNICEF Nigeria (Management for Results Section) in February 2020 to conduct the U-Report 24X7 assessment in the humanitarian response states of Borno, Adamawa and Yobe.",
    desc: "VKM was contracted by UNICEF Nigeria (Management for Results Section) in February 2020 to conduct the U-Report 24X7 assessment in the humanitarian response states of Borno, Adamawa and Yobe. U-report is an SMS based polling system which UNICEF put in place as part of its means of engaging with those in need in the conflict affected zones. The U-Report platform permits UNICEF to send messages and polls intermittently to residents in this zone and receive feedback from them through the channel. The respondents can also initiate messages to raise issues on their welfare or ask questions about health and other related issues. This project was funded by the Belgian government. The evaluation methodology required both quantitative and qualitative methods. We conducted 60 key informant interviews, 18 focus group discussions and surveyed more than 1,600 respondents as part of this evaluation.",
    img: Unicef,
    client: "Unicef",
    logo: [{ one: Unicef_ }],
  },

  {
    id: 7,
    name: "UNICEF Strengthening Education Management Information System in Borno, Adamawa and Yobe states",
    slug: "UNICEF-Strengthening-Education-Management-Information-System-in-Borno-Adamawa-and-Yobe states",
    desc_short:
      "UNICEF engaged VKM in October 2020 to support the strengthening of the education management information system in Borno, Adamawa and Yobe states. This project requires the assessment of the current EMIS, development of a 3-5 year strategic plan for the EMIS, conduct of a baseline census of schools and compilation of a statistics book from this effort, and development of the baseline EMIS.",
    desc: "UNICEF engaged VKM in October 2020 to support the strengthening of the education management information system in Borno, Adamawa and Yobe states. This project requires the assessment of the current EMIS, development of a 3-5 year strategic plan for the EMIS, conduct of a baseline census of schools and compilation of a statistics book from this effort, and development of the baseline EMIS.",
    img: Unicef,
    client: "Unicef",
    logo: [{ one: Unicef_ }, { one: coat }],
  },

  {
    id: 8,
    name: " Reporta Health Mobile App",
    slug: "Reporta-Health-Mobile-App",
    desc_short:
      " In partnership with Viable Helpers Development Organization (VHDO), VKM has developed a mobile application (Reporta Health) for crowdsourcing data on illegal and unregistered health facilities across Nigeria. The app extends the functionality of the Health Facility Registry in the country.",
    img: Reporta,
    client: "VKM",
    logo: [{ one: Vkm }],
  },
  {
    id: 9,
    name: " Research on Global Health Security in Nigeria",
    slug: "Research-on-Global-Health-Security-in-Nigeria",
    desc_short:
      " VKM has over the last couple of years carried out a nationwide study on the Compliance with Disease Surveillance and Notification by Private Healthcare Providers in the country.",
    desc: "VKM has over the last couple of years carried out a nationwide study on the Compliance with Disease Surveillance and Notification by Private Healthcare Providers in the country. This study was a mixed methods study that included laws and policy analysis, key informant interviews and a cross sectional health facility survey across six states of the Southwest. ",
    client: "VKM",
    img: Vkm,
    logo: [{ one: Vkm }],
    publications: [
      {
        link: "http://www.jidc.org/index.php/journal/article/view/8148",
      },
      {
        link: "http://ojphi.org/ojs/index.php/ojphi/article/view/8649",
      },
      {
        link: "http://ojphi.org/ojs/index.php/ojphi/article/view/6554",
      },
      {
        link: "http://www.panafrican-med-journal.com/content/article/31/22/full/",
      },
      {
        link: "http://www.panafrican-med-journal.com/content/article/35/114/full/",
      },
    ],
  },
  {
    id: 10,
    name: " FHI360 – Client Satisfaction Survey among Patients receiving care within FHI360 Clinical System",
    slug: "FHI360–Client-Satisfaction-Survey-among-Patients-receiving-care-within-FHI360-Clinical-System",
    desc_short:
      " FHI360 in 2019 engaged VKM to conduct a study on the satisfaction of clients with HIV services across 12 states in Nigeria: Adamawa, Akwa Ibom, Anambra, Bauchi, Bayelsa, Borno, Cross River, Edo, Jigawa, Kano, Lagos and Yobe states. More than 2000 respondents were interviewed across these states as part of implementation of this study. ",
    desc: "FHI360 has been leading the provision of HIV services to the Nigerian population since the inception of the PEPFAR program. FHI360 provides services in 12 states through primary, secondary, and tertiary health facilities. Satisfaction with services is a known factor that can affect retention in care and thereby result in all the negative consequences of non-compliance with medications such as resistance to drugs. FHI360 in 2019 engaged VKM to conduct a study on the satisfaction of clients with HIV services across 12 states in Nigeria: Adamawa, Akwa Ibom, Anambra, Bauchi, Bayelsa, Borno, Cross River, Edo, Jigawa, Kano, Lagos and Yobe states. More than 2000 respondents were interviewed across these states as part of implementation of this study. ",
    img: fhi,
    client: "FHI360",
    logo: [{ one: fhi }],
  },
  {
    id: 11,
    name: " FHI360 – Willingness to Pay for HIV Services",
    slug: "FHI360–Willingness-to-Pay-for-HIV-Services",
    desc_short:
      " With dwindling resources available for HIV care, innovative models of financing are being considered. Thus, FHI360 in 2019 engaged VKM to conduct a Willingness to Pay for HIV services study among clients that have been receiving care under its network of facilities across 3 states (Akwa Ibom, Cross River and Lagos States). ",
    desc: "FHI360 has been leading the provision of HIV services to the Nigerian population since the inception of the PEPFAR program. With dwindling resources available for HIV care, innovative models of financing are being considered. Thus, FHI360 in 2019 engaged VKM to conduct a Willingness to Pay for HIV services study among clients that have been receiving care under its network of facilities across 3 states (Akwa Ibom, Cross River and Lagos States). We interviewed more than 1700 respondents across the 3 states.",
    img: fhi,
    client: "FHI360",
    logo: [{ one: fhi }],
  },
  {
    id: 12,
    name: " Evaluation of the Respectful Maternity Care Program",
    slug: "Evaluation-of-the-Respectful-Maternity-Care-Program",
    desc_short:
      " VKM was engaged by the White Ribbon Alliance for Safe Motherhood in Nigeria to conduct the endline evaluation of the Respectful Maternity Care program being implemented at the national level and across Kwara state.   ",
    desc: "VKM was engaged by the White Ribbon Alliance for Safe Motherhood in Nigeria to conduct the endline evaluation of the Respectful Maternity Care program being implemented at the national level and across Kwara state.  The intervention was targeted at strengthening Reproductive, Maternal, Newborn, Child and Adolescent Health in the country by advocacy and soliciting that states adopt approaches that will reduce the risk of abuse of women at childbirth. VKM conducted an end-line evaluation of the Respectful Maternity Care campaign in Nigeria. This required design of the evaluation study, field testing of tools, collection of the data and preparation of an evaluation report on the project. Furthermore, workshops were held to disseminate the findings of the project",
    img: Vkm,
    client: "White Ribbon Allience",
    logo: [{ one: white }],
  },
  {
    id: 13,
    name: " Experience in WASH",
    slug: "Experience-in-WASH",
    desc_short:
      " VKM was engaged by the TY Danjuma Foundation (a donor) to conduct an independent external evaluation of the Water, Sanitation and Hygiene (WASH) and Well-Being components of its portfolio.   ",
    desc: "VKM was engaged by the TY Danjuma Foundation (a donor) to conduct an independent external evaluation of the Water, Sanitation and Hygiene (WASH) and Well-Being components of its portfolio. TY Danjuma Foundation had funded two different organizations to provide hand operated bore holes in different communities in Taraba and Gombe state, training of local area mechanics, establishment of Water Sanitation and Hygiene Committees, the supply of tools to the mechanics and the provision of a seed repair parts for boreholes to a local entrepreneur/ shop owner to facilitate the continuous maintenance of the pumps. This evaluation required interviews of various stakeholders including representatives of the Ministries, Local Government Authorities, community leaders and the local area mechanics that were trained. We also conducted focus group discussions among community members and collected quantitative data on the status of the boreholes at the time of evaluation. A copy of the report has been included in this proposal.  ",
    img: Vkm,
    client: "TY Danjuma Foundation",
    logo: [{ one: ty }],
  },
  {
    id: 14,
    name: " Outcome evaluation of an adolescent girl economic empowerment program",
    slug: "Experience-in-Outcome-evaluation-of-an-adolescent girl-economic-empowerment-program",
    desc_short:
      " BRAC USA engaged VKM in February 2022 to carry out an outcome evaluation of the economic strengthening component of Adolescent 360 (A360).   ",
    desc: "BRAC USA engaged VKM in February 2022 to carry out an outcome evaluation of the economic strengthening component of Adolescent 360(A360).A 360 is a 4.5-year programme launched in 2016 by the Population Services International(PSI) and Society for Family Health with funding from Bill & Melinda Gates foundation and the Children Investment Fund foundation.The project was designed to work directly with young people to develop and deliver interventions with the aim of increasing the demand for and uptake of contraception among adolescent girls and women aged 15 - 19 in Ethiopia, Nigeria, and Tanzania.In Nigeria, this empowerment program takes place in Kaduna and Ogun states, Nigeria.It is tagged 9ja girls in Ogun state and Matasa Matan Arewa(MMA) in Kaduna state, with the peculiarity of each location’s cultural context - adolescent girls in Ogun state are unmarried while those in Kaduna state are mostly married.An economic strengthening dimension is being incorporated into the project for which VKM has been engaged to carry out an outcome(baseline, midline, and endline) evaluation in Nigeria.",
    img: brac,
    client: "BRAC USA",
    logo: [{ one: brac }],
  },
  {
    id: 15,
    name: "Advancing Learning and Innovation on Gender Norms (ALIGN) ",
    slug: "Advancing-Learning-and-Innovation-on-Gender-Norms",
    desc_short:
      "VKM in collaboration with Viable Helpers Development Organization (VHDO) was provided a grant in support of the conduct of a study on Gender-Based Violence in male-dominated industries in Nigeria.",
    desc: "VKM in collaboration with Viable Helpers Development Organization (VHDO) was provided a grant in support of the conduct of a study on Gender-Based Violence in male-dominated industries in Nigeria. The study particularly examined the information and communications technology sector in the country which is a fast-growing industry and has produced three unicorns (valued at more than $1 billion dollars) in a short time. The study utilized qualitative methods to address the objectives of the study.",
    img: align,
    client: "ALIGN",
    logo: [{ one: align }],
    publications: [
      {
        link: "https://www.alignplatform.org/resources/gender-based-violence-male-dominated-industry-identifying-and-responding-challenges ",
      },
    ],
  },
];

export default projectList;
