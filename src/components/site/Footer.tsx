import { Phone, Mail, Globe, Facebook, Twitter, Youtube, Instagram } from "lucide-react";

const FOOTER_LOGO = "https://www.mhssce.ac.in/images/footer-logo.png";
const ADMIN = "https://www.mhssce.ac.in/mhsadmin/admin.php";

const loginLinks = ["Faculty", "Admin", "Dean Academics", "NAAC", "Alumni"];

const socials = [
  { Icon: Facebook, href: "https://www.facebook.com/Aimhssce", label: "Facebook" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Youtube, href: "#", label: "YouTube" },
  { Icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-nav text-nav-foreground">
      <div className="site-container pt-8 pb-3">
        <div className="grid gap-8 border-b border-white/15 pb-6 md:grid-cols-3">
          <div>
            <img className="mb-5 mt-2" src={FOOTER_LOGO} alt="M. H. Saboo Siddik College of Engineering" width={299} height={87} />
            <p className="text-[13px] leading-6 text-nav-foreground/80">
              8, Saboo Siddik Polytechnic Road, Byculla, Mumbai, Maharashtra 400008
            </p>
            <ul className="mt-2 space-y-1 text-[13px] text-nav-foreground/80">
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" /> (022) 23012922
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" /> mhssce@yahoo.in
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-3.5 w-3.5" /> www.mhssce.ac.in
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold text-nav-foreground">Google Map</h4>
            <iframe
              title="Campus location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.160671485052!2d72.82883621489951!3d18.968510287149652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce40ffcfcacd%3A0x5d71ff22760f8e77!2sM.H.+Saboo+Siddik+College+of+Engineering!5e0!3m2!1sen!2sin!4v1564735028613!5m2!1sen!2sin"
              className="h-[200px] w-full border-0"
              loading="lazy"
            />
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold text-nav-foreground">Login</h4>
            <ul className="text-[13px]">
              {loginLinks.map((l) => (
                <li key={l} className="border-b border-white/10 last:border-0">
                  <a
                    href={ADMIN}
                    target="_blank"
                    rel="noreferrer"
                    className="block py-2 text-nav-foreground/80 transition-colors hover:text-nav-foreground"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="site-container pb-4 pt-3">
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
          <p className="text-[13px] text-nav-foreground/80">
            Copyright ©2020 M.H. Saboo Siddik College Of Engineering. All Rights Reserved | Website design by{" "}
            <a href="http://www.hitechadvt.com/" target="_blank" rel="noreferrer" className="underline">
              Hitech Advertising
            </a>
          </p>
          <ul className="flex items-center gap-2">
            {socials.map(({ Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-nav-foreground/85 transition-colors hover:bg-white/10"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
