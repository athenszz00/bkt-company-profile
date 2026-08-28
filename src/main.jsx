import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import logo from './assets/bktlogo.png';
import heroImage from './assets/hero-lpg.jpeg';
import serviceUfm from './assets/service-ufm.jpeg';
import fabrication from './assets/fabrication.jpeg';
import utility from './assets/utility.jpeg';
import project from './assets/project.jpeg';
import freeportLogo from './assets/clients/freeport.png';
import pertaminaEpLogo from './assets/clients/pertamina-ep.png';
import pheLogo from './assets/clients/phe.png';
import yokogawaLogo from './assets/clients/yokogawa.png';
import schneiderLogo from './assets/clients/schneider.png';
import petrochinaLogo from './assets/clients/petrochina.png';
import medcoLogo from './assets/clients/medco.png';
import cikarangLogo from './assets/clients/cikarang-listrindo.png';
import tripatraLogo from './assets/clients/tripatra.png';
import pjbLogo from './assets/clients/pjb.png';

/* =========================================================
   SERVICES DATA
========================================================= */

const services = [
  {
    icon: '⚙',
    title: 'Instrumentasi Industri',
    text: 'Service, calibration, installation, commissioning, training, metering, PLC, DCS, fire & gas systems.'
  },
  {
    icon: 'ϟ',
    title: 'Electrical & Mechanical',
    text: 'Fabrication, generator, pump, compressor, boiler, hydrant system, piping & tubing, serta material supply.'
  },
  {
    icon: '◈',
    title: 'SPPBE & LPG Support',
    text: 'Layanan servis, pembangunan fasilitas SPPBE, sparepart UFM, evacuation pump, loading hose, dan utility device.'
  },
  {
    icon: '✓',
    title: 'Engineering & Maintenance',
    text: 'Startup & commissioning, shutdown & maintenance, troubleshooting, manpower supply, dan engineering construction.'
  }
];

/* =========================================================
   HIGHLIGHTS DATA
========================================================= */

const highlights = [
  ['20+', 'Ruang lingkup layanan'],
  ['50+', 'Mitra & pelanggan'],
  ['Indonesia', 'Cakupan proyek'],
  ['Experienced', 'Engineering team']
];

/* =========================================================
   CLIENTS DATA
========================================================= */

const clients = [
  {
    name: 'PT. Freeport Indonesia',
    logo: freeportLogo
  },
  {
    name: 'PT. Pertamina EP',
    logo: pertaminaEpLogo
  },
  {
    name: 'PT. Pertamina Hulu Energi',
    logo: pheLogo
  },
  {
    name: 'PT. Yokogawa Indonesia',
    logo: yokogawaLogo
  },
  {
    name: 'PT. Schneider Electric',
    logo: schneiderLogo
  },
  {
    name: 'PT. Petrochina',
    logo: petrochinaLogo
  },
  {
    name: 'PT. Medco Energi',
    logo: medcoLogo
  },
  {
    name: 'PT. Cikarang Listrindo',
    logo: cikarangLogo
  },
  {
    name: 'PT. Tripatra Engineering',
    logo: tripatraLogo
  },
  {
    name: 'PT. PJB Muara Karang',
    logo: pjbLogo
  }
];

/* =========================================================
   PROJECT DATA
========================================================= */

const projectItems = [
  {
    image: project,
    alt: 'Tim engineering di proyek industri',
    title: 'Industrial Engineering Support',
    subtitle: 'Field service & commissioning'
  },
  {
    image: serviceUfm,
    alt: 'Service Unit Filling Machine',
    title: 'UFM Service',
    subtitle: 'Maintenance & calibration'
  },
  {
    image: fabrication,
    alt: 'Fabrikasi UFM',
    title: 'UFM Fabrication',
    subtitle: 'Fabrication & assembly'
  },
  {
    image: utility,
    alt: 'Utility device SPPBE',
    title: 'SPPBE Utility',
    subtitle: 'Equipment & facility support'
  }
];

/* =========================================================
   NAVIGATION DATA
========================================================= */

const navItems = {
  home: 'Beranda',
  about: 'Tentang Kami',
  services: 'Layanan',
  projects: 'Proyek',
  clients: 'Klien',
  contact: 'Kontak'
};

/* =========================================================
   APP
========================================================= */

function App() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* =======================================================
     NAVBAR SCROLL
  ======================================================= */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener(
      'scroll',
      onScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        'scroll',
        onScroll
      );
    };
  }, []);

  /* =======================================================
     SCROLL NAVIGATION
  ======================================================= */

  const go = (id) => {
    setOpen(false);

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
  };

  return (
    <>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header
        className={`nav ${
          scrolled ? 'nav--scrolled' : ''
        }`}
      >
        <div className="container nav__inner">

          <button
            className="brand"
            onClick={() => go('home')}
            aria-label="Ke beranda"
          >
            <img
              src={logo}
              alt="CV. Bhatara Kresna Tunggal"
            />
          </button>

          <nav
            className={`nav__links ${
              open ? 'is-open' : ''
            }`}
            aria-label="Navigasi utama"
          >
            {Object.entries(navItems).map(
              ([id, label]) => (
                <button
                  key={id}
                  onClick={() => go(id)}
                >
                  {label}
                </button>
              )
            )}
          </nav>

          <button
            className="menu"
            onClick={() =>
              setOpen((value) => !value)
            }
            aria-label={
              open
                ? 'Tutup menu'
                : 'Buka menu'
            }
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </header>

      <main>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          id="home"
          className="hero"
        >
          <div className="hero__glow hero__glow--one" />
          <div className="hero__glow hero__glow--two" />
          <div className="container hero__grid">

            <div className="hero__content reveal">

              <p className="eyebrow">
                INSTRUMENT • ELECTRICAL • MECHANICAL
              </p>

              <h1>
                Engineering partner untuk operasi industri yang{' '}
                <span>andal.</span>
              </h1>

              <p className="hero__lead">
                CV. Bhatara Kresna Tunggal menyediakan solusi
                engineering, service, maintenance, material
                supply, dan dukungan SPPBE untuk kebutuhan
                industri.
              </p>

              <div className="hero__actions">

                <button
                  className="btn btn--primary"
                  onClick={() => go('services')}
                >
                  Lihat Layanan
                  <b>→</b>
                </button>

                <a
                  className="btn btn--ghost"
                  href="https://wa.me/6282218485849"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hubungi via WhatsApp
                </a>

              </div>

              <div className="hero__trust">

                <span>
                  ✓ Engineering berpengalaman
                </span>

                <span>
                  ✓ Respons cepat
                </span>

                <span>
                  ✓ Solusi end-to-end
                </span>

              </div>

            </div>

            <div className="hero__visual">

              <div className="hero__frame">

                <img
                  src={heroImage}
                  alt="Aktivitas industri LPG"
                />

              </div>

              <div className="floating-card">

                <strong>
                  Professional Service
                </strong>

                <small>
                  Calibration • Installation • Commissioning
                </small>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            ABOUT
        ===================================================== */}

        <section
          id="about"
          className="section about"
        >

          {/* HIGHLIGHTS */}

          <div className="container about-highlights">

            {highlights.map(([number, label], index) => (

              <article
                className="about-highlight-card"
                key={label}
              >

                <strong>
                  {number}
                </strong>

                <p>
                  {label}
                </p>

              </article>

            ))}

          </div>


          {/* ABOUT CONTENT */}

          <div className="container about__grid">

            <div>

              <p className="eyebrow eyebrow--dark">
                TENTANG KAMI
              </p>

              <h2>
                Solusi teknis untuk industri,
                dari lapangan hingga commissioning.
              </h2>

            </div>

            <div className="about__copy">

              <p>
                CV. Bhatara Kresna Tunggal bergerak
                di bidang instrumentasi, electrical,
                mechanical engineering dan service.
                Tim terdiri dari tenaga ahli serta
                engineering lapangan yang terlatih
                dan berpengalaman.
              </p>

              <p>
                Fokus kami adalah memberikan layanan
                yang efektif, efisien, terjangkau,
                inovatif, dan dapat diterapkan sesuai
                kebutuhan operasional pelanggan.
              </p>

            </div>

          </div>


          {/* VISION MISSION */}

          <div className="container vision-grid">

            <article className="vision-card">

              <h3>
                Visi
              </h3>

              <p>
                Menciptakan produk barang dan jasa di bidang
                teknologi instrumentasi industri dan teknologi
                informasi & komunikasi yang handal, efektif,
                inovatif dan dinamis.
              </p>

            </article>

            <article className="vision-card vision-card--accent">

              <h3>
                Misi
              </h3>

              <p>
                Memberikan layanan prima yang efektif,
                efisien dan terjangkau, sekaligus
                memberikan solusi penerapan yang memberi
                manfaat bagi dunia industri.
              </p>

            </article>

          </div>

        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section
          id="services"
          className="section services"
        >

          <div className="container">

            <p className="eyebrow">
              LAYANAN UTAMA
            </p>

            <div className="section-head">

              <h2>
                Kapabilitas lengkap untuk kebutuhan industri.
              </h2>

              <p>
                Dari instrumentasi presisi sampai pekerjaan
                mechanical, maintenance, SPPBE, material
                dan manpower supply.
              </p>

            </div>

            <div className="service-grid">

              {services.map((service) => (

                <article
                  className="service-card"
                  key={service.title}
                >

                  <div className="service-card__icon">
                    {service.icon}
                  </div>


                  <h3>
                    {service.title}
                  </h3>


                  <p>
                    {service.text}
                  </p>

                  <span className="card-link">
                    Professional engineering support →
                  </span>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            PROJECTS - CREATIVE AUTO CAROUSEL
        ===================================================== */}

        <section
          id="projects"
          className="section projects"
        >
          <div className="container">
            <p className="eyebrow eyebrow--dark">
              PORTOFOLIO PEKERJAAN
            </p>

            <div className="section-head section-head--dark">
              <h2>
                Pengalaman nyata di lingkungan operasional.
              </h2>

              <p>
                Dokumentasi kegiatan service, fabrication,
                utility, instalasi dan engineering support.
              </p>
            </div>
          </div>

          <div
            className="creative-projects"
            aria-label="Galeri portofolio pekerjaan BKT"
          >
            <div className="creative-projects__track">
              {[...projectItems, ...projectItems].map((item, index) => {
                const position = index % 5;
                const projectNumber =
                  (index % projectItems.length) + 1;

                return (
                  <article
                    className={`creative-project-card creative-project-card--${position}`}
                    key={`${item.title}-${index}`}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading={index >= projectItems.length ? 'lazy' : 'eager'}
                    />

                    <div className="creative-project-card__overlay">

                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="container">
            <div className="creative-projects__bottom">
            </div>
          </div>
        </section>

        {/* =====================================================
            CLIENTS - AUTO CAROUSEL LEFT TO RIGHT
        ===================================================== */}

        <section
          id="clients"
          className="section clients"
        >
          <div className="container">
            <p className="eyebrow">
              MITRA & PELANGGAN
            </p>

            <div className="section-head">
              <h2>
                Dipercaya untuk berbagai kebutuhan industri.
              </h2>

              <p>
                Beberapa nama pelanggan dan mitra yang
                tercantum dalam company profile perusahaan.
              </p>
            </div>
          </div>

          <div
            className="client-carousel"
            aria-label="Carousel mitra dan pelanggan BKT"
          >
            <div className="client-carousel__track">
              {[...clients, ...clients].map((client, index) => (
                <article
                  className="client-card"
                  key={`${client.name}-${index}`}
                >
                  <div className="client-card__logo">
                    <img
                      src={client.logo}
                      alt={`Logo ${client.name}`}
                      loading={
                        index >= clients.length
                          ? 'lazy'
                          : 'eager'
                      }
                    />
                  </div>

                  <h3>
                    {client.name}
                  </h3>
                </article>
              ))}
            </div>
          </div>

          <div className="container">
            <div className="client-carousel__bottom">
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          FLOATING CONTACT BUTTONS
      ===================================================== */}

      <div className="floating-contact">

        {/* EMAIL */}
        <a
          href="mailto:lazuardi.bkt@gmail.com"
          className="floating-contact__button floating-contact__button--email"
          aria-label="Kirim Email"
          title="Kirim Email"
        >
            <svg
            className="floating-contact__email-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M3 5h18v14H3V5zm2 2v.4l7 5.1 7-5.1V7H5zm14 10V9.8l-7 5-7-5V17h14z"
            />
          </svg>
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/6282218485849"
          target="_blank"
          rel="noreferrer"
          className="floating-contact__button floating-contact__button--whatsapp"
          aria-label="Hubungi melalui WhatsApp"
          title="WhatsApp"
        >
          <svg
            className="floating-contact__whatsapp-icon"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path
              fill="#ffffff"
              d="M16.04 3C8.86 3 3.02 8.82 3.02 16c0 2.29.6 4.53 1.73 6.5L3 29l6.68-1.75A12.96 12.96 0 0 0 16.04 29C23.22 29 29 23.18 29 16S23.22 3 16.04 3Zm0 23.82a10.8 10.8 0 0 1-5.5-1.5l-.39-.23-3.96 1.04 1.06-3.86-.25-.4A10.8 10.8 0 1 1 16.04 26.82Zm5.93-8.08c-.32-.16-1.92-.95-2.22-1.06-.3-.11-.52-.16-.74.16-.22.33-.85 1.06-1.04 1.28-.19.22-.38.25-.71.08-.32-.16-1.37-.5-2.61-1.61-.96-.86-1.61-1.92-1.8-2.25-.19-.32-.02-.5.14-.66.15-.14.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.12-1.14 2.72s1.17 3.15 1.33 3.37c.16.22 2.3 3.51 5.57 4.92.78.34 1.38.54 1.86.69.78.25 1.49.21 2.05.13.63-.09 1.92-.79 2.19-1.55.27-.76.27-1.41.19-1.55-.08-.13-.3-.21-.62-.37Z"
            />
          </svg>
        </a>

      </div>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer
        id="contact"
        className="footer"
      >

        <div className="container footer__grid">


          {/* COMPANY */}

          <div className="footer__column footer__company">

            <button
              className="footer__brand"
              onClick={() => go('home')}
              aria-label="Kembali ke beranda"
            >

              <img
                src={logo}
                alt="CV. Bhatara Kresna Tunggal"
              />

            </button>

            <p>
              Engineering partner untuk kebutuhan
              instrumentasi, electrical, mechanical,
              maintenance, service dan industrial support.
            </p>

          </div>

          {/* QUICK LINKS */}

          <div className="footer__column">

            <h3>
              Quick Links
            </h3>

            <button onClick={() => go('home')}>
              <span className="footer__menu-text">
                Beranda
              </span>
            </button>

            <button onClick={() => go('about')}>
              <span className="footer__menu-text">
                Tentang Kami
              </span>
            </button>

            <button onClick={() => go('projects')}>
              <span className="footer__menu-text">
                Portofolio
              </span>
            </button>

            <button onClick={() => go('clients')}>
              <span className="footer__menu-text">
                Mitra & Pelanggan
              </span>
            </button>

          </div>

          {/* SERVICES */}

          <div className="footer__column">

            <h3>
              Layanan
            </h3>

            <button onClick={() => go('services')}>
              <span className="footer__menu-text">
                Instrumentasi Industri
              </span>
            </button>

            <button onClick={() => go('services')}>
              <span className="footer__menu-text">
                Electrical & Mechanical
              </span>
            </button>

            <button onClick={() => go('services')}>
              <span className="footer__menu-text">
                SPPBE & LPG Support
              </span>
            </button>

            <button onClick={() => go('services')}>
              <span className="footer__menu-text">
                Engineering & Maintenance
              </span>
            </button>

          </div>

          {/* CONTACT */}

          <div className="footer__column footer__contact">

            <h3>
              Contact Us
            </h3>

            <a
              href="https://wa.me/6282218485849"
              target="_blank"
              rel="noreferrer"
            >
              <span className="footer__emoji-icon">
                📞
              </span>

              <span className="footer__link-text">
                +62 822 1848 5849
              </span>
            </a>

            <a href="mailto:lazuardi.bkt@gmail.com">

              <span className="footer__emoji-icon">
                📧
              </span>

              <span className="footer__link-text">
                lazuardi.bkt@gmail.com
              </span>

            </a>

            <p className="footer__address">

              <span className="footer__emoji-icon">
                📍
              </span>

              <span className="footer__link-text">
                Jl. Pasir Kumeli,
                Kota Cimahi,
                Jawa Barat 40511
              </span>

            </p>

          </div>

        </div>

        {/* =================================================
            FOOTER BOTTOM
        ================================================= */}

        <div className="footer__bottom">

          <div className="container footer__bottom-inner">

            <p>
              © {new Date().getFullYear()} CV. Bhatara Kresna Tunggal.
              All rights reserved.
            </p>

            <button
              onClick={() => go('home')}
            >
              Kembali ke atas ↑
            </button>

          </div>

        </div>

      </footer>

    </>
  );
}

/* =========================================================
   REACT ROOT
========================================================= */

createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);