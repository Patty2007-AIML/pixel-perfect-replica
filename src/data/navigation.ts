export type NavItem = {
  label: string;
  href?: string;
  external?: boolean;
  children?: NavItem[];
};

export type NavEntry = {
  label: string;
  href?: string;
  /** megamenu = 3-column wide panel, dropdown = simple list */
  type?: "link" | "dropdown" | "megamenu";
  columns?: NavItem[][];
  items?: NavItem[];
};

const B = "https://www.mhssce.ac.in/";

export const topLinks: NavItem[] = [
  { label: "Mandatory Disclosure", href: `${B}pdf/MandatoryDisclosure.pdf`, external: true },
  { label: "NIRF", href: `${B}pdf/nirf2026.pdf`, external: true },
  { label: "R&D", href: `${B}RandD.php`, external: true },
  { label: "IEEE", href: `${B}IEEE.php`, external: true },
  { label: "Library", href: "https://mhsscelibrary.remotexs.in/", external: true },
  { label: "Gallery", href: `${B}Gallery.php`, external: true },
  { label: "Important Links", href: `${B}Important Links.php`, external: true },
  { label: "Contact Us", href: `${B}Contact Us.php`, external: true },
];

export const mainNav: NavEntry[] = [
  { label: "Home", href: `${B}index.php`, type: "link" },
  {
    label: "Institution",
    type: "megamenu",
    columns: [
      [
        { label: "Anjuman-I-Islam", href: `${B}Anjuman-I-Islam.php` },
        { label: "Administrative Committees", href: `${B}Administrative Committees.php` },
        { label: "From Chairman's Desk", href: `${B}From Chairmans Desk.php` },
        { label: "From Director's Desk", href: `${B}From Directors Desk.php` },
        { label: "From Principal's Desk", href: `${B}From Principals Desk.php` },
        { label: "AICTE Approval", href: `${B}AICTE Approval.php` },
      ],
      [
        { label: "NBA Accreditation", href: `${B}NBA Accreditation.php` },
        { label: "Infrastructure and Facilities", href: `${B}Infrastructure and Facilities.php` },
        { label: "Fee Proposal (UG)", href: `${B}pdf/2020-2021 Fee Structure SE TE BE.pdf` },
        { label: "Staff Working Committees", href: `${B}Staff Working Committees.php` },
        {
          label: "Mumbai University - Code of Conduct for University & College Teachers",
          href: `${B}pdf/university Circular-Code of Conduct- Teachers (1).pdf`,
        },
      ],
      [
        { label: "Code of Conduct and Ethics For Students", href: `${B}CCEFS.php` },
        { label: "Prohibition and Prevention For Ragging", href: `${B}pdf/DECIPLINE AND ANTI RAGGING.pdf` },
        { label: "Media", href: `${B}Media.php` },
        { label: "Achievements", href: `${B}pdf/All-Achievments.pdf` },
        {
          label: "Students Grievnaces Redressal Cell",
          href: "https://docs.google.com/forms/d/1IeikXjSmBjo6vSg5KcTRmKzPn2z5AqcVElHxwjmW_bQ/viewform",
        },
        {
          label: "Feedback Link for Students and Faculty on AICTE Portal",
          href: "https://www.aicte-india.org/feedback/",
        },
      ],
    ],
  },
  {
    label: "Admissions",
    type: "dropdown",
    items: [
      { label: "Documents required for Admission(26-27)", href: `${B}pdf/Admission/2026-2027/documentForAdmission.pdf` },
      { label: "Prospectus", href: `${B}Prospectus.php` },
      { label: "Intake Capacity", href: `${B}Intake Capacity.php` },
      { label: "Admission Notices", href: `${B}Admission Notices.php` },
      { label: "Online for FE", href: "https://forms.gle/vy5ctThkKNt6xz6v7" },
      { label: "Online for DSE", href: "https://forms.gle/pSKzXvYknpGmmpUn9" },
      { label: "FRA Computation 2026-27", href: `${B}pdf/FRA/FRA_2026-2027.pdf` },
      { label: "Contact Us", href: `${B}Admissions Contact.php` },
    ],
  },
  {
    label: "Examinations",
    type: "dropdown",
    items: [
      {
        label: "Exam Form",
        children: [
          { label: "Sem-I", href: `${B}pdf/Examinations/Sem-I Exam Form.pdf` },
          { label: "Sem-II", href: `${B}pdf/Examinations/Sem-II Exam Form.pdf` },
          { label: "Sem-III", href: `${B}pdf/Examinations/Sem III Exam Form-1.pdf` },
          { label: "Sem-IV", href: `${B}pdf/Examinations/Sem IV Exam Form-1.pdf` },
          { label: "Sem-V", href: `${B}pdf/Examinations/Sem V Exam Form-1.pdf` },
          { label: "Sem-VI", href: `${B}pdf/Examinations/Sem VI Exam Form-1.pdf` },
          { label: "Sem-VII", href: `${B}pdf/Examinations/Sem-VII Exam Form.pdf` },
          { label: "Sem-VIII", href: `${B}pdf/Examinations/Sem-VIII Exam Form.pdf` },
        ],
      },
      { label: "D form for AY 2026-26", href: `${B}pdf/Dform 2025-26.pdf` },
      { label: "LC Form", href: `${B}pdf/LC FORM.pdf` },
      { label: "Timetable", href: `${B}Timetable.php` },
      { label: "Exams Results", href: `${B}Exams Results.php` },
      { label: "Exams Notices", href: `${B}Exams Notices.php` },
      { label: "Revaluation & Photocopy", href: `${B}Revaluation Photocopy.php` },
      { label: "Contact Us", href: `${B}Examinations Contact.php` },
    ],
  },
  {
    label: "Department",
    type: "megamenu",
    columns: [
      [
        { label: "Computer Engineering", href: `${B}Computer.php` },
        {
          label: "Computer Science And Engineering (Artificial Intelligence and Machine Learning)",
          href: `${B}CSE-AIML.php`,
        },
        {
          label:
            "Computer Science And Engineering(Internet of Things and Cyber Security including BlockChain Technology)",
          href: `${B}CSE-IOT.php`,
        },
      ],
      [
        { label: "Mechanical Engineering Automobile", href: `${B}Automobile.php` },
        { label: "Civil Engineering", href: `${B}Civil.php` },
        { label: "Information Technology", href: `${B}Information Technology.php` },
        { label: "Mechanical Engineering", href: `${B}Mechanical.php` },
      ],
      [
        { label: "Electronics & Tele-Communication Engineering", href: `${B}Electronics TeleCommunication.php` },
        { label: "Humanities and Applied Sciences", href: `${B}Basic Science and Humanity.php` },
        { label: "M.E in Civil (Constructions Engineering & Managment)", href: `${B}` },
        {
          label: "M.E in Computer Science And Engineering (Artificial intelligence & Machine learning)",
          href: `${B}`,
        },
      ],
    ],
  },
  {
    label: "Training & Placement",
    type: "megamenu",
    columns: [
      [
        { label: "Message from T&P Head", href: `${B}Message TP Head.php` },
        { label: "List of Recruiters", href: `${B}TP-Recruiters.php` },
        { label: "List of Universities for Higher Studies (MS)", href: `${B}TP-Universities.php` },
      ],
      [
        { label: "Placement and Higher Study Records", href: `${B}Placement and Higher Study Records.php` },
        { label: "Activities", href: `${B}TP-Activities.php` },
        { label: "Recruiters Testimonial", href: `${B}TPO Recruiters Testimonial.php` },
      ],
      [
        { label: "Contact Details", href: `${B}Placement Contact.php` },
        { label: "Psychological Counsellor", href: `${B}Psychological Counsellor Contact.php` },
      ],
    ],
  },
  {
    label: "NAAC",
    type: "dropdown",
    href: `${B}NAAC.php`,
    items: [
      { label: "IQAC", href: `${B}NAAC IQAC.php` },
      { label: "QIF", href: "#" },
      { label: "SSR", href: `${B}NAAC SSR.php` },
    ],
  },
  {
    label: "EDC",
    type: "megamenu",
    columns: [
      [
        { label: "About Us", href: `${B}EDC About.php` },
        { label: "Our Flagship Event - IIGC", href: `${B}IIGC.php` },
        { label: "Our Team", href: `${B}EDC Team.php` },
      ],
      [
        { label: "Reports", href: `${B}EDC Reports.php` },
        { label: "Events", href: `${B}EDC Events.php` },
        { label: "Testimonials", href: `${B}EDC Testimonials.php` },
      ],
      [
        { label: "UnThink 2026", href: "https://mhssce.ac.in/UnThink/" },
        { label: "Contact Us", href: `${B}EDC Contact.php` },
      ],
    ],
  },
  {
    label: "Fee Payment",
    type: "dropdown",
    items: [
      { label: "Fee structure for AY 2026-27", href: `${B}pdf/FEE/fee structure 2026-27.pdf` },
      { label: "Online payment account details", href: `${B}pdf/FEE/OnlineFees.pdf` },
      { label: "QR code for fee payment", href: `${B}pdf/qr code for fee payment 19.10.22.jpeg` },
      {
        label: "Scholarship",
        children: [
          {
            label: "Declaration of Family Income",
            href: `${B}pdf/Scholarship/2025-2026/Family_Income_Minority_Self_declaration.pdf`,
          },
          {
            label: "Marathi Beneficiary undertaking",
            href: `${B}pdf/Scholarship/2025-2026/Marathi_beneficiary_undertaking.pdf`,
          },
        ],
      },
    ],
  },
  {
    label: "Life @MHSS",
    type: "dropdown",
    items: [
      { label: "SAE", href: `${B}SAE.php` },
      { label: "CES, ISSE", href: `${B}CES-ISSE.php` },
      { label: "CSI", href: `${B}CSI.php` },
      { label: "IETE", href: `${B}IETE.php` },
      { label: "ACM", href: `${B}ACM.php` },
      { label: "ISHRAE, MESA", href: `${B}Ishrae-MESA.php` },
      { label: "SACE", href: `${B}SACE.php` },
      { label: "MHSSCOE-AWS", href: `${B}MHSSCOE-AWS.php` },
      { label: "NSS", href: `${B}NSS.php` },
      { label: "PC", href: `${B}PC.php` },
    ],
  },
  {
    label: "Alumni",
    type: "megamenu",
    columns: [
      [
        { label: "Objectives", href: `${B}Alumni Objectives.php` },
        { label: "Distinguished Alumni", href: `${B}Distinguished Alumni.php` },
        { label: "Transcripts", href: `${B}Alumni Transcripts.php` },
        { label: "Activities", href: `${B}Alumni Activities.php` },
      ],
      [
        { label: "Events", href: `${B}Alumni Events.php` },
        { label: "Testimonials from Alumni", href: `${B}Alumni Testimonials.php` },
        { label: "Enquiry Form", href: `${B}Alumni Enquiry.php` },
        { label: "Alumni Stakeholder Survey Form", href: `${B}pdf/alumni survey form.pdf` },
      ],
      [
        { label: "Alumni Login", href: `${B}mhsadmin/admin.php` },
        { label: "Alumni Registration", href: `${B}Alumni Registration.php` },
        { label: "Industry Mentor Program", href: `${B}Industry Mentor Program.php` },
        { label: "Anjuman-I-Islam Alumni Network", href: "https://alumni.anjumaniislam.org/" },
      ],
    ],
  },
];
