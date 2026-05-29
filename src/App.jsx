import { useEffect, useRef, useState } from "react";
import logoUrl from "../ganpat logo 2.png";

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img">
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 4h16v16H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.86.32 1.7.6 2.5a2 2 0 0 1-.45 2.11L9 10.55a16 16 0 0 0 4.45 4.45l1.22-1.21a2 2 0 0 1 2.11-.45c.8.28 1.64.48 2.5.6A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function LogoMark({ large = false }) {
  return (
    <span className={large ? "portal-logo-mark" : "brand-mark"}>
      <img src={logoUrl} alt="Ganpat University Logo" style={{ width: '100%', height: '100%', maxWidth: '420px', maxHeight: '120px', objectFit: 'contain', background: 'transparent', borderRadius: '0', border: 'none', boxShadow: 'none' }} />
    </span>
  );
}

function Brand({ footer = false }) {
  return (
    <a className={`brand ${footer ? "footer-brand" : ""}`} href="#home" aria-label="Ganpat University home">
      <LogoMark />
    </a>
  );
}

const academicCards = [
  ["01", "After 10th", "Diploma programs with practical training and campus support."],
  [
    "02",
    "After 12th",
    "Undergraduate programs across technology, pharmacy, science, management, and design.",
  ],
  ["03", "After Graduation", "Postgraduate programs shaped for career growth and advanced study."],
  ["04", "Research", "Ph.D. programs, research projects, publications, and innovation initiatives."],
];

const researchCards = [
  ["CARS", "Advanced Research", "Research guidance, laboratories, collaborations, and interdisciplinary projects."],
  ["SSRIP", "Innovation Support", "Student start-up and research innovation support for applied problem solving."],
  ["Ph.D.", "Doctoral Programs", "Doctoral pathways across engineering, management, pharmacy, sciences, and more."],
  ["R&D", "Publications", "Research compendiums, journals, seed funding, and thrust area initiatives."],
];

const termsItems = [
  ["Student Account", "Login credentials are for authorized student use only and must not be shared."],
  ["Information Accuracy", "Admission, exam, and fee details shown here are demo content for presentation."],
  ["Responsible Use", "Users should not upload harmful content, misuse forms, or access restricted data."],
  ["Privacy", "Submitted sign-in and enquiry fields in this demo are not connected to a server."],
];

function CardGrid({ cards }) {
  return (
    <div className="card-grid">
      {cards.map(([number, title, text]) => (
        <article className="info-card" key={title}>
          <span className="card-number">{number}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}

function ServicesList({ items, target }) {
  return (
    <div className="services-list">
      {items.map((item) => (
        <a href={target} key={item}>
          {item}
        </a>
      ))}
    </div>
  );
}

function Header({ onLoginClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="notice-bar">
        <div className="notice-track">
          <span>Admission Enquiry - 2026</span>
          <span>Open House - 2026</span>
          <span>Online Programmes Available</span>
          <span>Ph.D. application date extended</span>
        </div>
        <a className="notice-link" href="#admissions">
          Apply Now
        </a>
      </div>

      <div className="utility-bar">
        <a href="#campus">Campus Virtual Tour</a>
        <a href="#alumni">Alumni</a>
        <a href="#academics">Faculty</a>
        <a href="#career">Career</a>
        <a href="#contact">Contact</a>
      </div>

      <nav className="main-nav" aria-label="Primary navigation">
        <Brand />

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {[
            ["#about", "About"],
            ["#academics", "Academics"],
            ["#research", "Research"],
            ["#admissions", "Admission"],
            ["#events", "Events"],
            ["#campus", "Campus Life"],
          ].map(([href, label]) => (
            <a href={href} key={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </div>

        <button className="student-login-trigger" type="button" aria-label="Student login" onClick={onLoginClick}>
          <span className="login-icon" aria-hidden="true">
            <UserIcon />
          </span>
          <span>Student Login</span>
        </button>
      </nav>
    </header>
  );
}

function HomePage() {
  return (
    <main id="home">
      <section className="hero">
        <div className="hero-media" aria-hidden="true"></div>
        <div className="hero-content">
          <p className="eyebrow">GUNI inspired demo website</p>
          <h1>Ganpat University</h1>
          <p>A clean university portal for admissions, academics, research, student services, events, and campus life.</p>
          <div className="hero-actions">
            <a className="btn primary" href="#admissions">
              Explore Admissions
            </a>
            <a className="btn secondary" href="#student-services">
              Student Services
            </a>
          </div>
        </div>
      </section>

      <section className="quick-panel" aria-label="Quick actions">
        <a href="#admissions">
          <strong>Admissions India</strong>
          <span>UG, PG, Diploma, Ph.D.</span>
        </a>
        <a href="#international">
          <strong>International</strong>
          <span>Global students and exchange</span>
        </a>
        <a href="#student-services">
          <strong>Student Portal</strong>
          <span>ERP, fees, results, certificates</span>
        </a>
        <a href="#terms">
          <strong>Terms</strong>
          <span>Usage policy and conditions</span>
        </a>
      </section>

      <section id="about" className="section intro-section">
        <div className="section-heading">
          <p className="eyebrow">About the university</p>
          <h2>Supporting students in developing knowledge, skills, and professional confidence.</h2>
        </div>
        <div className="intro-grid">
          <div>
            <p>
              This demo follows the structure of a modern college website: announcement bar, institutional navigation,
              admissions highlights, academic disciplines, campus services, events, and footer quick links.
            </p>
            <p>
              The design is intentionally neat and readable, with a clear student login access point at the top and a
              dedicated sign-in panel.
            </p>
          </div>
          <div className="stat-grid">
            {[
              ["2005", "Establishment Year"],
              ["14", "Academic Disciplines"],
              ["28", "Institutes"],
              ["7000+", "Yearly Students"],
              ["1200+", "Staff Members"],
              ["41K+", "Graduated Students"],
            ].map(([value, label]) => (
              <article key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="academics" className="section muted-section">
        <div className="section-heading">
          <p className="eyebrow">Academics</p>
          <h2>Program pathways for every stage of learning.</h2>
        </div>
        <CardGrid cards={academicCards} />
      </section>

      <section id="research" className="section research-section">
        <div className="section-heading">
          <p className="eyebrow">Research</p>
          <h2>Centers, publications, seed funding, and student research projects.</h2>
        </div>
        <CardGrid cards={researchCards} />
      </section>

      <section id="admissions" className="section admissions-section">
        <div className="admission-copy">
          <p className="eyebrow">Admission 2026</p>
          <h2>Plan your application with clear steps and helpful counselling.</h2>
          <p>Students can explore programs, schedule counselling, check eligibility, and track application details from one simple admission area.</p>
          <a className="btn primary" href="#contact">
            Request Counselling
          </a>
        </div>
        <form className="admission-form" aria-label="Admission enquiry form">
          <h3>Admission Enquiry</h3>
          <label>
            Full Name
            <input type="text" placeholder="Enter your name" />
          </label>
          <label>
            Mobile Number
            <input type="tel" placeholder="+91 98765 43210" />
          </label>
          <label>
            Interested Program
            <select>
              <option>Undergraduate</option>
              <option>Postgraduate</option>
              <option>Diploma</option>
              <option>Ph.D.</option>
            </select>
          </label>
          <button className="btn primary full" type="button">
            Submit Enquiry
          </button>
        </form>
      </section>

      <section id="international" className="section international-section">
        <div className="section-heading">
          <p className="eyebrow">International</p>
          <h2>Guidance for global students and international admission support.</h2>
        </div>
        <ServicesList
          target="#international"
          items={["International Programs", "Pre-Arrival Information", "Accommodation", "FRRO Guidance", "Fees Payment", "Student Registration"]}
        />
      </section>

      <section id="student-services" className="section student-section">
        <div className="section-heading">
          <p className="eyebrow">Student corner</p>
          <h2>Fast access to important student services.</h2>
        </div>
        <ServicesList
          target="#student-services"
          items={["ERP 2.0 Login", "Fee Payment", "Exam Result", "Scholarship Information", "Transcript / Verification", "Student Grievance"]}
        />
      </section>

      <section id="events" className="section news-events">
        <div>
          <div className="section-heading compact">
            <p className="eyebrow">Upcoming events</p>
            <h2>Happenings on campus</h2>
          </div>
          {[
            ["2026-06-09", "09 Jun 2026", "Recent Technological Advancements in Smart & Sustainable Systems", "Department lecture and discussion series for emerging technologies."],
            ["2026-05-22", "22 May 2026", "IPR in Healthcare Startups", "Innovation protection in 3D printing and additive manufacturing."],
          ].map(([dateTime, date, title, text]) => (
            <article className="event-row" key={title}>
              <time dateTime={dateTime}>{date}</time>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="news-card">
          <p className="eyebrow">Latest news</p>
          <h3>Open House - 2026</h3>
          <p>Prospective students can visit the campus, meet faculty, and learn about programs.</p>
          <a href="#admissions">Read More</a>
        </div>
      </section>

      <section id="campus" className="section campus-section">
        <div className="section-heading">
          <p className="eyebrow">Life at campus</p>
          <h2>A full campus experience with learning, residence, sports, and community.</h2>
        </div>
        <div className="campus-grid">
          {[
            ["Hostel Facility", "Comfortable residential blocks and student support."],
            ["Transportation", "Campus travel routes for nearby cities and towns."],
            ["Sports", "Playgrounds, events, and wellness activities."],
            ["Library", "Resources for research, reading, and digital learning."],
          ].map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="alumni" className="section alumni-section">
        <div className="section-heading compact">
          <p className="eyebrow">Alumni</p>
          <h2>Connected to the Ganpat University community beyond graduation.</h2>
        </div>
        <div className="news-card light">
          <h3>Alumni Portal</h3>
          <p>Graduates can stay connected with university updates, events, professional networks, and student mentorship opportunities.</p>
        </div>
      </section>

      <section id="career" className="section career-section">
        <div className="section-heading compact">
          <p className="eyebrow">Career</p>
          <h2>Placement, training, and career support for students.</h2>
        </div>
        <ServicesList target="#career" items={["Placement Cell", "Industry Connect", "Skill Development"]} />
      </section>

      <section id="terms" className="section terms-section">
        <div className="section-heading compact">
          <p className="eyebrow">Terms and conditions</p>
          <h2>Usage policy</h2>
        </div>
        <div className="terms-grid">
          {termsItems.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div>
        <Brand footer />
        <p>Ganpat Vidyanagar, Mehsana-Gandhinagar Highway, North Gujarat, India</p>
        <p>Email: info@ganpatuniversity.ac.in | Admission: +91 81006 16161</p>
      </div>
      <div className="footer-links">
        {[
          ["#academics", "Academics"],
          ["#research", "Research"],
          ["#admissions", "Admission"],
          ["#student-services", "Student Corner"],
          ["#career", "Career"],
          ["#terms", "Terms"],
        ].map(([href, label]) => (
          <a href={href} key={href}>
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}

function TermsDialog({ open, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (open) {
      if (!dialog.open) {
        dialog.showModal();
      }

      dialog.scrollTop = 0;
      window.requestAnimationFrame(() => {
        dialog.scrollTop = 0;
      });
    }

    if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  function handleCancel(event) {
    event.preventDefault();
    onClose();
  }

  return (
    <dialog className="terms-dialog" ref={dialogRef} onCancel={handleCancel} aria-label="Terms and conditions popup">
      <section className="terms-popup-panel">
        <button className="close-login" type="button" aria-label="Close terms" onClick={onClose}>
          x
        </button>
        <p className="eyebrow">Terms and conditions</p>
        <h2>Usage policy</h2>
        <p className="portal-subtitle">Please review these terms before signing in or creating an account.</p>
        <div className="terms-popup-grid">
          {termsItems.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </dialog>
  );
}

function LoginDialog({ open, onClose, onOpenTerms }) {
  const dialogRef = useRef(null);
  const [activeTab, setActiveTab] = useState("signin");

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (open) {
      setActiveTab("signin");

      if (!dialog.open) {
        dialog.showModal();
      }

      dialog.scrollTop = 0;

      window.requestAnimationFrame(() => {
        dialog.scrollTop = 0;
        dialog.querySelector(".portal-form-pane")?.scrollTo({ top: 0, left: 0, behavior: "auto" });
      });
    }

    if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  function handleCancel(event) {
    event.preventDefault();
    onClose();
  }

  function handleTermsClick(event) {
    event.preventDefault();
    onOpenTerms();
  }

  return (
    <dialog className="login-dialog" ref={dialogRef} onCancel={handleCancel} aria-label="Student login and signup dialog">
      <div className="portal-auth">
        <section className="portal-brand-pane">
          <div className="portal-brand-content">
            <div className="portal-logo">
              <LogoMark large />
            </div>
            <h2>BTech in Computer Science (AEDP)</h2>
            <p>Access your student portal, track your application status, and stay connected with the GUNI community.</p>
          </div>
        </section>

        <section className="portal-form-pane">
          <button className="close-login" type="button" aria-label="Close login" onClick={onClose}>
            x
          </button>

          <form className={`auth-pane ${activeTab === "signin" ? "active" : ""}`} aria-label="Student sign in form">
            <h2>Welcome Back</h2>
            <p className="portal-subtitle">Sign in to access your student portal</p>
            <label>
              Email
              <span className="field-with-icon">
                <MailIcon />
                <input type="email" placeholder="you@example.com" autoComplete="username" />
              </span>
            </label>
            <label>
              Password
              <span className="field-with-icon">
                <LockIcon />
                <input type="password" placeholder="Password" autoComplete="current-password" />
              </span>
            </label>
            <label className="check-row portal-check">
              <input type="checkbox" required />
              <span>
                I agree to the Ganpat University admission terms before sign up.
              </span>
            </label>
            <button className="portal-submit" type="button">
              Sign In
            </button>
            <p className="auth-switch-text">
              Need a new account?{" "}
              <button type="button" onClick={() => setActiveTab("signup")}>
                Sign Up
              </button>
            </p>
            <button className="back-home" type="button" onClick={onClose}>
              Back to Home
            </button>
          </form>

          <form className={`auth-pane ${activeTab === "signup" ? "active" : ""}`} aria-label="Student sign up form">
            <h2>Create Account</h2>
            <p className="portal-subtitle">Register to get started with your application</p>
            <div className="form-grid two">
              <label>
                First Name
                <input type="text" placeholder="John" autoComplete="given-name" />
              </label>
              <label>
                Last Name
                <input type="text" placeholder="Doe" autoComplete="family-name" />
              </label>
            </div>
            <label>
              Email
              <span className="field-with-icon">
                <MailIcon />
                <input type="email" placeholder="you@example.com" autoComplete="email" />
              </span>
            </label>
            <label>
              Phone Number
              <span className="field-with-icon">
                <PhoneIcon />
                <input type="tel" placeholder="+91 98765 43210" autoComplete="tel" />
              </span>
            </label>
            <label>
              Password
              <span className="field-with-icon">
                <LockIcon />
                <input type="password" placeholder="Password" autoComplete="new-password" />
              </span>
            </label>
            <label className="check-row portal-check">
              <input type="checkbox" required />
              <span>
                I agree to the <a href="#terms" onClick={handleTermsClick}>Terms & Conditions</a> and Privacy Policy, and authorize Ganpat University to contact me by Email, SMS, WhatsApp,
                RCS, or Voice Call regarding admission and student services.
              </span>
            </label>
            <button className="portal-submit" type="button">
              Create Account
            </button>
            <p className="auth-switch-text">
              Already registered?{" "}
              <button type="button" onClick={() => setActiveTab("signin")}>
                Sign In
              </button>
            </p>
          </form>
        </section>
      </div>
    </dialog>
  );
}

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      <HomePage />
      <Footer />
      <LoginDialog open={isLoginOpen} onClose={() => setIsLoginOpen(false)} onOpenTerms={() => setIsTermsOpen(true)} />
      <TermsDialog open={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </>
  );
}
