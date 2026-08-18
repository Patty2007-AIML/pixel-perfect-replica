import { createFileRoute } from "@tanstack/react-router";

const BG = "https://www.mhssce.ac.in/images/bg/bg6.jpg";
const GALLERY_BASE = "https://www.mhssce.ac.in/images/IEEE%20gallery/";

const committee: Array<[string, string]> = [
  ["Muzzammil Amrelia", "Chairperson"],
  ["Mahek Mukadam", "Vice-Chairperson"],
  ["Samiya Qureshi", "Secretary"],
  ["Azzam Anas", "Joint Secretary"],
  ["Umme Hani Shaikh", "Treasurer"],
  ["Alkaseem Malik", "Joint Treasurer"],
  ["Khalid Saifullah", "Webmaster"],
  ["Mustafa Ansari", "Joint Webmaster"],
  ["Prof. Amar S Pawade", "Branch Counselor"],
];

const gallery = [
  "Blood donation drive organised by department of Electronics, IEEE-MHSSCOE on 19th March 2019.",
  "PCB designing workshop under IEEE-SKEP on 12th February, 2019 by Dr. Y. S. Rao, Vice principal, SPIT, Mumbai.",
  "FPGAs & Soft Processors workshop under IEEE-SKEP on 20th January, 2018 conducted by Mr. Mandar Saraf, Scientific Officer (D), and Colleagues TIFR, Mumbai.",
  "Seminar on \u201cProgramming and applications of Robotics\u201d under IEEE-SKEP, on September 28, 2017 conducted by Mr. Quentin D\u2019souza, CEO of Quantum Designs, Mumbai",
  "Tech-fest 2018 - Technical paper presentation",
  "Tech-fest 2018 - minute to win it",
  "Tech-fest 2018 - LIVE CS",
  "Tech-fest 2018",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IEEE Student Branch | M.H. Saboo Siddik College Of Engineering" },
      {
        name: "description",
        content:
          "IEEE Student Branch at M.H. Saboo Siddik College of Engineering, Mumbai — committee members, activities and event gallery.",
      },
      { property: "og:title", content: "IEEE Student Branch | M.H. Saboo Siddik College Of Engineering" },
      {
        property: "og:description",
        content:
          "IEEE Student Branch at M.H. Saboo Siddik College of Engineering, Mumbai — committee members, activities and event gallery.",
      },
    ],
  }),
  component: IEEEPage,
});

function IEEEPage() {
  return (
    <>
      {/* Inner page banner */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="bg-background/80">
          <div className="site-container py-[100px] text-center">
            <h1 className="text-[32px] font-bold text-foreground">IEEE</h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section>
        <div className="site-container pt-10 pb-5">
          <p className="text-[15px] leading-[26px] text-justify text-foreground">
            IEEE - <b>Institute of Electrical and Electronics Engineers</b> - is the world&rsquo;s largest technical
            professional organization dedicated to advancing technology for the benefit of humanity. The IEEE is a
            non-profit professional organization founded by a handful of engineers in 1884 for the purpose of
            consolidating ideas dealing with electro-technology. The IEEE plays a significant role in publishing
            technical works, sponsoring conferences and seminars, accreditation, and standards development. IEEE
            membership can help the students members and professional members to accelerate their career plans and help
            to grow as a technology professional as it offers access to technical innovation, cutting-edge information,
            networking opportunities, and exclusive member benefits. Members support IEEE&apos;s mission to advance
            technology for humanity and the profession, while memberships build a platform to introduce careers in
            technology around the world.
          </p>
        </div>
      </section>

      {/* Committee */}
      <section>
        <div className="site-container pb-10">
          <h2 className="line-bottom-edu mb-8 text-[22px] font-bold text-foreground">Committee</h2>
          <div className="md:w-1/2">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-[14px]">
                <tbody>
                  <tr className="bg-muted">
                    <th className="border-b border-border px-3 py-2 text-left font-bold">Name</th>
                    <th className="border-b border-border px-3 py-2 text-left font-bold">Designation</th>
                  </tr>
                  {committee.map(([name, role], i) => (
                    <tr key={name} className={i % 2 === 1 ? "bg-muted/60" : undefined}>
                      <td className="border-b border-border px-3 py-2">{name}</td>
                      <td className="border-b border-border px-3 py-2">{role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section>
        <div className="site-container pb-14">
          <h2 className="line-bottom-edu mb-6 text-[22px] font-bold text-foreground">Gallery</h2>
          <p className="mb-5 text-[14px] text-muted-foreground">Click on the photo for information.</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {gallery.map((caption, i) => (
              <a
                key={i}
                href={`${GALLERY_BASE}${i + 1}.jpg`}
                target="_blank"
                rel="noreferrer"
                title={caption}
                className="block border border-border"
              >
                <img
                  src={`${GALLERY_BASE}${i + 1}.jpg`}
                  alt={caption}
                  loading="lazy"
                  className="block h-auto w-full"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
