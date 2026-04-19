// Page: Home (1920×1080 hero). Two big lines "Designing experiences for people and brands"
function HomePage({ navigate, mouse }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => { setMounted(true); }, []);

  // reveal the title letter by word
  const line1 = "Designing experiences".split(" ");
  const line2 = "for people and brands".split(" ");

  return (
    <div style={{
      position: "relative", minHeight: "100vh",
      background: TOKENS.bgPale, overflow: "hidden",
    }}>
      <Blobs mode="hero" mouse={mouse} scroll={0} />
      <Logo size={74} color={TOKENS.ink} style={{
        position: "absolute", left: 60, top: "50%", transform: "translateY(-50%)",
        zIndex: 2,
      }}/>

      <div style={{
        position: "relative", zIndex: 3,
        height: "100vh", minHeight: 720,
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "0 60px",
      }}>
        <div style={{ textAlign: "center", fontFamily: "Lato", fontWeight: 100,
          fontSize: "min(9vw, 140px)", lineHeight: 1, letterSpacing: "-0.01em",
          color: TOKENS.black, whiteSpace: "nowrap",
        }}>
          <div style={{ overflow: "hidden", paddingBottom: 8 }}>
            {line1.map((w, i) => (
              <span key={i} style={{ display: "inline-block",
                transform: mounted ? "translateY(0)" : "translateY(110%)",
                transition: `transform 1.1s ${0.1 + i * 0.08}s cubic-bezier(.2,.8,.2,1)`,
                marginRight: "0.3em",
              }}>{w}</span>
            ))}
          </div>
          <div style={{ overflow: "hidden", paddingBottom: 8 }}>
            {line2.map((w, i) => (
              <span key={i} style={{ display: "inline-block",
                transform: mounted ? "translateY(0)" : "translateY(110%)",
                transition: `transform 1.1s ${0.4 + i * 0.08}s cubic-bezier(.2,.8,.2,1)`,
                marginRight: "0.3em",
              }}>{w}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        position: "absolute", bottom: 60, left: "50%",
        transform: "translateX(-50%)", zIndex: 3,
      }}>
        <CircleArrow direction="down" onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
        }}/>
      </div>

      {/* second scroll: projects grid */}
      <HomeProjectsSection navigate={navigate} mouse={mouse} />
      <Footer/>
    </div>
  );
}

function HomeProjectsSection({ navigate, mouse }) {
  // quick grid of featured projects so scroll is rewarding
  const items = [
    { id: "ada",    title: "ada festival",     kind: "Festival rebranding", img: "assets/ada-5.jpg" },
    { id: "ideate", title: "ideate",           kind: "Logo design",          img: "assets/ideate-5.jpg" },
    { id: "riga",   title: "riga",             kind: "Brand identity",       img: "assets/riga-4.jpg" },
    { id: "ia",     title: "L'IA e la società moderna", kind: "Information design", img: "assets/ia-3fd2d896b0ee.jpg" },
    { id: "perlei", title: "perlei",           kind: "Social media design",  img: "assets/perlei-3.jpg" },
    { id: "circus", title: "circus",           kind: "Brand identity",       img: "assets/circus-1.jpg" },
  ];

  return (
    <section style={{
      position: "relative",
      background: TOKENS.bgBlue, padding: "180px 60px 140px",
      overflow: "hidden",
    }}>
      <Blobs mode="hero" mouse={mouse} scroll={0} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1800, margin: "0 auto" }}>
        <div style={{ fontFamily: "Lato", fontWeight: 100,
          fontSize: "min(8vw, 140px)", lineHeight: 1, marginBottom: 100 }}>
          Selected work<span style={{ color: TOKENS.blobBrown }}>.</span>
        </div>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 30,
        }}>
          {items.map((it, i) => {
            // varied layout
            const span = [
              "span 7", "span 5", "span 5", "span 7", "span 6", "span 6",
            ][i] || "span 6";
            return (
              <button key={it.id} onClick={() => navigate(it.id)}
                data-hover="image"
                style={{
                  gridColumn: span, background: "transparent", padding: 0, border: "none",
                  cursor: "none", textAlign: "left", display: "block",
                }}>
                <RevealImage src={it.img} aspect="16/10" />
                <div style={{ display: "flex", justifyContent: "space-between",
                  alignItems: "flex-end", marginTop: 24, gap: 40 }}>
                  <div style={{ fontFamily: "Lato", fontWeight: 100,
                    fontSize: "min(4vw, 64px)", lineHeight: 1, color: TOKENS.black }}>
                    {it.title}
                  </div>
                  <div style={{ fontFamily: "Lato", fontWeight: 300,
                    fontSize: 20, color: TOKENS.ink }}>
                    {String(i + 1).padStart(2, "0")} — {it.kind}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────── About ────────────────────────
function AboutPage({ navigate, mouse }) {
  return (
    <div style={{ position: "relative", background: TOKENS.bgPale, overflow: "hidden" }}>
      <Blobs mode="hero" mouse={mouse} />
      <CornerLogo color={TOKENS.ink} onClick={() => navigate("home")} />

      <section style={{
        position: "relative", minHeight: "100vh", zIndex: 2,
        padding: "200px 120px 120px", display: "flex", flexDirection: "column",
        alignItems: "flex-end", textAlign: "right",
      }}>
        <BigTitle align="right" style={{ maxWidth: 980 }}>
          Ciao,<br/>mi chiamo Jeidi!
        </BigTitle>
        <p style={{
          marginTop: 80, maxWidth: 940, textAlign: "right",
          fontFamily: "Lato", fontWeight: 300, fontSize: "min(1.7vw, 32px)",
          lineHeight: 1.35, color: TOKENS.ink,
        }}>
          Sono una visual designer e fotografa con base a Roma. Il mio percorso è iniziato dalla fotografia di eventi, un'esperienza che mi ha insegnato a osservare, raccontare e cogliere l'essenza dei momenti. Successivamente è nata una forte passione per il mondo della moda e per tutto ciò che riguarda l'immagine e la comunicazione visiva.<br/><br/>
          Durante il mio percorso di studi mi sono avvicinata al branding e allo UX/UI design. Questo mi ha permesso di unire sensibilità estetica e pensiero progettuale, creando soluzioni che non sono solo belle da vedere, ma chiare, funzionali e pensate per le persone.<br/><br/>
          Mi riconosco in uno stile minimale, essenziale e pulito, che guida ogni mio progetto. Credo in un design capace di comunicare con semplicità, valorizzando l'identità di ogni brand in modo autentico e contemporaneo.
        </p>
      </section>

      <section style={{
        position: "relative", zIndex: 2,
        padding: "120px 120px 200px", textAlign: "center",
      }}>
        <BigTitle align="center">
          Trasformo idee in esperienze visive coerenti e significative che raccontano storie e lasciano un segno.
        </BigTitle>
      </section>

      <Footer/>
    </div>
  );
}

// ──────────────────────── Design index ────────────────────────
function DesignPage({ navigate, mouse }) {
  // Three panels: UX/UI Design, Brand and Visual Identity, Social media design
  const panels = [
    { id: "uxui",   label: "UX/UI Design",             img: "assets/brand-uxui.jpg" },
    { id: "brand",  label: "Brand and Visual Identity", img: "assets/brand-social.jpg" },
    { id: "socialmedia", label: "Social media design",  img: "assets/circus-4.jpg" },
  ];
  return (
    <div style={{ position: "relative", background: TOKENS.bgBlue, minHeight: "100vh" }}>
      <CornerLogo color={TOKENS.ink} onClick={() => navigate("home")} />
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
        minHeight: "100vh",
      }}>
        {panels.map((p, i) => (
          <button key={p.id} data-hover="image"
            onClick={() => navigate(p.id)}
            style={{
              position: "relative", border: "none", cursor: "none",
              padding: 0, minHeight: "100vh", overflow: "hidden",
              background: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${p.img}) center/cover no-repeat`,
            }}
            className="design-panel">
            <span style={{
              position: "absolute", inset: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "Lato", fontWeight: 400, fontSize: "min(3.5vw, 48px)",
              color: TOKENS.bgFooter, textAlign: "center", padding: "0 60px",
              transition: "transform .6s ease, letter-spacing .6s ease",
            }}>{p.label}</span>
          </button>
        ))}
      </div>
      <style>{`
        .design-panel:hover span { letter-spacing: .08em; }
      `}</style>
    </div>
  );
}

// ──────────────────────── Brand category ────────────────────────
function BrandPage({ navigate, mouse }) {
  const projects = [
    { id: "ada",    title: "ada festival",         desc: "A festival rebranding rooted in nature and warm summer nights.", img: "assets/ada-5.jpg" },
    { id: "ideate", title: "Ideate",               desc: "A logo design for a creative studio.", img: "assets/ideate-5.jpg" },
    { id: "riga",   title: "Riga, the shape of tomorrow.", desc: "A logo design for a creative studio.", img: "assets/riga-4.jpg" },
  ];
  return (
    <div style={{ position: "relative", background: TOKENS.bgBlue, overflow: "hidden" }}>
      <Blobs mode="hero" mouse={mouse} />
      <CornerLogo color={TOKENS.ink} onClick={() => navigate("home")} />

      <section style={{ position: "relative", zIndex: 2, padding: "200px 136px 120px" }}>
        <div style={{ maxWidth: 1647, margin: "0 auto", display: "flex", flexDirection: "column", gap: 60 }}>
          <CircleArrow direction="left" onClick={() => navigate("design")} />
          {projects.map((p, i) => (
            <BrandProjectCard key={p.id} proj={p} onClick={() => navigate(p.id)} />
          ))}
        </div>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "60vh" }}>
        <button data-hover="image" onClick={() => navigate("uxui")} style={{
          border: "none", padding: 0, cursor: "none", position: "relative",
          minHeight: "60vh",
          background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(assets/brand-uxui.jpg) center/cover no-repeat`,
        }}>
          <span style={{ position: "absolute", inset: 0, display: "flex",
            alignItems: "center", justifyContent: "center",
            fontFamily: "Lato", fontSize: "min(3.5vw, 48px)", color: TOKENS.bgFooter }}>
            UX/UI Design
          </span>
        </button>
        <button data-hover="image" onClick={() => navigate("socialmedia")} style={{
          border: "none", padding: 0, cursor: "none", position: "relative",
          minHeight: "60vh",
          background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(assets/brand-social.jpg) center/cover no-repeat`,
        }}>
          <span style={{ position: "absolute", inset: 0, display: "flex",
            alignItems: "center", justifyContent: "center",
            fontFamily: "Lato", fontSize: "min(3.5vw, 48px)", color: TOKENS.bgFooter }}>
            Social media design
          </span>
        </button>
      </div>
      <Footer/>
    </div>
  );
}

function BrandProjectCard({ proj, onClick }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(60px)",
      transition: "opacity 1s ease, transform 1s cubic-bezier(.2,.8,.2,1)",
    }}>
      <button data-hover="image" onClick={onClick} style={{
        background: "transparent", border: "none", padding: 0, cursor: "none",
        width: "100%", textAlign: "left",
      }}>
        <div style={{
          width: "100%", aspectRatio: "1647/824", borderRadius: 20, overflow: "hidden",
          background: `url(${proj.img}) center/cover no-repeat`,
        }}/>
        <div style={{ marginTop: 40, padding: "0 10%", textAlign: "center" }}>
          <div style={{ fontFamily: "Lato", fontWeight: 400,
            fontSize: "min(6.7vw, 128px)", lineHeight: 1, color: TOKENS.ink }}>
            {proj.title}
          </div>
          <p style={{ marginTop: 16, fontFamily: "Lato", fontWeight: 300,
            fontSize: "min(1.66vw, 32px)", lineHeight: 1.2, color: TOKENS.ink }}>
            {proj.desc}
          </p>
        </div>
      </button>
    </div>
  );
}

// ──────────────────────── Photo page ────────────────────────
function PhotoPage({ navigate, mouse }) {
  const photos = [
    "assets/perlei-3.jpg", "assets/perlei-4.jpg", "assets/perlei-5.jpg",
    "assets/perlei-6.jpg", "assets/perlei-7.jpg", "assets/ada-1.jpg",
    "assets/ada-2.jpg", "assets/ada-3.jpg", "assets/riga-1.jpg",
    "assets/riga-2.jpg", "assets/riga-4.jpg", "assets/regiro-1.jpg",
    "assets/regiro-3.jpg", "assets/regiro-4.jpg",
  ];
  return (
    <div style={{ position: "relative", background: TOKENS.bgPale, overflow: "hidden" }}>
      <Blobs mode="full" />

      <section style={{ position: "relative", zIndex: 2, padding: "180px 60px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <div style={{ fontFamily: "Lato", fontWeight: 100,
            fontSize: "min(11vw, 180px)", color: TOKENS.white, lineHeight: 1 }}>
            Photography
          </div>
          <div style={{ marginTop: 20, fontFamily: "Lato", fontWeight: 300,
            fontSize: 20, color: TOKENS.white, letterSpacing: ".2em" }}>
            EVENTS · FASHION · PORTRAITS
          </div>
        </div>

        <div style={{ columns: "3 400px", columnGap: 24, maxWidth: 1800, margin: "0 auto" }}>
          {photos.map((p, i) => (
            <div key={i} data-hover="image" style={{
              breakInside: "avoid", marginBottom: 24, borderRadius: 14, overflow: "hidden",
              cursor: "none",
            }}>
              <img src={p} alt="" style={{ width: "100%", display: "block" }}/>
            </div>
          ))}
        </div>
      </section>

      <CornerLogo color={TOKENS.white} onClick={() => navigate("home")} />
      <Footer/>
    </div>
  );
}

// ──────────────────────── Contact page ────────────────────────
function ContattiPage({ navigate, mouse }) {
  const items = [
    { label: "Jeidiclemente@gmail.com", icon: "mail",     href: "mailto:jeidiclemente@gmail.com" },
    { label: "+39 342 524 6479",         icon: "phone",    href: "tel:+393425246479" },
    { label: "Jeidiclemente",            icon: "linkedin", href: "#" },
    { label: "Jeidirphoto",              icon: "instagram",href: "#" },
  ];
  return (
    <div style={{ position: "relative", background: TOKENS.bgPale, minHeight: "100vh", overflow: "hidden" }}>
      <Blobs mode="hero" mouse={mouse} />
      <CornerLogo color={TOKENS.ink} onClick={() => navigate("home")} />

      <section style={{
        position: "relative", zIndex: 2, minHeight: "100vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "160px 80px",
      }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, maxWidth: 900,
        }}>
          {items.map((it, i) => (
            <a key={i} href={it.href} data-hover="circle" style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 20,
              color: TOKENS.black, textDecoration: "none", cursor: "none",
            }}>
              <ContactIcon type={it.icon}/>
              <span style={{ fontFamily: "Lato", fontSize: 24, textAlign: "center" }}>{it.label}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

function ContactIcon({ type }) {
  const s = 37;
  const common = { width: s, height: s, viewBox: "0 0 32 32", fill: "none", stroke: TOKENS.ink, strokeWidth: 1.6 };
  if (type === "mail") return (
    <svg {...common}><rect x="3" y="7" width="26" height="18" rx="2"/><path d="M3 9l13 9 13-9"/></svg>
  );
  if (type === "phone") return (
    <svg {...common}><path d="M6 4 h5 l2 6 l-3 2 a14 14 0 0 0 10 10 l2 -3 l6 2 v5 a2 2 0 0 1 -2 2 A22 22 0 0 1 4 6 a2 2 0 0 1 2 -2 z"/></svg>
  );
  if (type === "linkedin") return (
    <svg {...common}><rect x="4" y="4" width="24" height="24" rx="3"/><rect x="8" y="13" width="3" height="10" fill={TOKENS.ink}/><circle cx="9.5" cy="9.5" r="1.5" fill={TOKENS.ink}/><path d="M15 13 v10 M15 17 a3 3 0 0 1 6 0 v6"/></svg>
  );
  if (type === "instagram") return (
    <svg {...common}><rect x="4" y="4" width="24" height="24" rx="6"/><circle cx="16" cy="16" r="5"/><circle cx="23" cy="9" r="1" fill={TOKENS.ink}/></svg>
  );
  return null;
}

Object.assign(window, { HomePage, AboutPage, DesignPage, BrandPage, PhotoPage, ContattiPage });
