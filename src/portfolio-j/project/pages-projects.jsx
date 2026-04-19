// Case-study / project pages — all follow the same scaffold:
//   1) circle back-arrow
//   2) BigTitle
//   3) hero image
//   4) Subtitle + body
//   5) grid of additional images

function ProjectScaffold({ title, subtitle, body, hero, grid, bg = TOKENS.bgBlue, mouse, navigate, back = "design" }) {
  return (
    <div style={{ position: "relative", background: bg, overflow: "hidden" }}>
      <Blobs mode="hero" mouse={mouse}/>
      <CornerLogo color={TOKENS.ink} onClick={() => navigate("home")} />

      <section style={{ position: "relative", zIndex: 2, padding: "200px 136px 100px" }}>
        <div style={{ maxWidth: 1647, margin: "0 auto", display: "flex", flexDirection: "column", gap: 80 }}>
          <CircleArrow direction="left" onClick={() => navigate(back)} />
          <BigTitle align="left" style={{ textAlign: "left" }}>{title}</BigTitle>

          {hero && <RevealImage src={hero} aspect="1647/824"/>}

          <div style={{ textAlign: "center", padding: "0 10%", display: "flex", flexDirection: "column", gap: 20 }}>
            <ProjectSubtitle>{subtitle}</ProjectSubtitle>
            <Body style={{ margin: "0 auto" }}>{body}</Body>
          </div>

          {grid}
        </div>
      </section>
      <Footer/>
    </div>
  );
}

// ada festival
function AdaPage(props) {
  return (
    <ProjectScaffold {...props}
      back="brand"
      title="ada festival"
      subtitle="Festival rebranding"
      body="Il progetto di rebranding di Villa Ada Festival nasce con l'obiettivo di rafforzarne l'identità e consolidarne la presenza presso il pubblico, attraverso un'immagine che trae ispirazione dalla natura, dalla luce calda del sole e dal cielo intenso delle notti estive, evocando la sua atmosfera autentica e vibrante."
      hero="assets/ada-5.jpg"
      grid={<ProjectGrid images={["assets/ada-6.png", "assets/ada-1.jpg", "assets/ada-2.jpg", "assets/ada-3.jpg", "assets/ada-4.jpg"]} />}
    />
  );
}

// ideate
function IdeatePage(props) {
  return (
    <ProjectScaffold {...props}
      back="brand"
      title="Ideate"
      subtitle="Logo design"
      body="Ideate è lo studio creativo pensato come spazio per nuove idee. L'identità visiva gioca con la sovrapposizione e la ripetizione per restituire un senso di processo, di pensiero in movimento, di un'idea che prende forma."
      hero="assets/ideate-5.jpg"
      grid={<ProjectGrid images={["assets/ideate-1.jpg", "assets/ideate-2.jpg", "assets/ideate-3.jpg", "assets/ideate-4.jpg", "assets/ideate-6.jpg"]} />}
    />
  );
}

// riga
function RigaPage(props) {
  return (
    <ProjectScaffold {...props}
      back="brand"
      title="riga"
      subtitle="Riga, the shape of tomorrow."
      body="Riga è uno studio di design che trasforma le idee in forme: un'identità minimale, basata sulla geometria elementare, che nasce da una sola linea e si ricompone in un intero sistema visivo."
      hero="assets/riga-4.jpg"
      grid={<ProjectGrid images={["assets/riga-1.jpg", "assets/riga-2.jpg", "assets/riga-3.png"]} />}
    />
  );
}

// IA (information design)
function IAPage(props) {
  return (
    <ProjectScaffold {...props}
      back="design"
      title={<>L'Ia e la società<br/>moderna</>}
      subtitle="Information design"
      body="Questo progetto nasce dalla rielaborazione digitale di un lavoro cartaceo dedicato alle grandi innovazioni del XX secolo. Il sito web approfondisce l'evoluzione dell'IA, considerata la principale forza trainante del progresso nel XXI secolo, con l'obiettivo di informare e sensibilizzare il pubblico sul suo impatto sociale e tecnologico."
      hero="assets/ia-3fd2d896b0ee.jpg"
      grid={<ProjectGrid images={["assets/ia-74a77be12b7d.jpg", "assets/ia-2c198d8faa22.jpg", "assets/ia-fc6d5b063910.png"]} />}
    />
  );
}

// Circus
function CircusPage(props) {
  return (
    <ProjectScaffold {...props}
      back="brand"
      title="circus"
      subtitle="Brand identity"
      body="Una visual identity circense, pensata per un collettivo che si muove tra arte, performance e comunità. L'identità si muove tra rigore editoriale e momenti di spettacolo, con un'anima pop e giocosa."
      hero="assets/circus-1.jpg"
      grid={<ProjectGrid images={["assets/circus-3.png", "assets/circus-2.jpg", "assets/circus-4.jpg"]} />}
    />
  );
}

// perlei
function PerleiPage(props) {
  return (
    <ProjectScaffold {...props}
      back="socialmedia"
      title="perlei"
      subtitle="Social media design"
      body="Una serie di contenuti editoriali per Perlei, pensata per costruire una voce visiva coerente tra storie e post. Colori saturi, lettering sicuro, immagini che raccontano la cura artigianale del brand."
      hero="assets/perlei-3.jpg"
      grid={<ProjectGrid images={["assets/perlei-1.jpg", "assets/perlei-2.png", "assets/perlei-4.jpg", "assets/perlei-5.jpg", "assets/perlei-6.jpg", "assets/perlei-7.jpg"]} />}
    />
  );
}

// regiro
function RegiroPage(props) {
  return (
    <ProjectScaffold {...props}
      back="uxui"
      title="regiro"
      subtitle="UX/UI Design"
      body="Un'app per riscoprire la città a piedi: percorsi raccontati, contenuti geolocalizzati, interfacce silenziose. Il sistema visivo poggia su tipografia, ampie gerarchie e fotografie documentarie."
      hero="assets/regiro-1.jpg"
      grid={<ProjectGrid images={["assets/regiro-2.jpg", "assets/regiro-3.jpg", "assets/regiro-4.jpg", "assets/regiro-5.png"]} />}
    />
  );
}

// ── UX/UI index ──
function UxuiPage({ navigate, mouse }) {
  const projects = [
    { id: "regiro", title: "Regiro", desc: "A walking-tour app that turns the city into stories.", img: "assets/regiro-1.jpg" },
  ];
  return (
    <div style={{ position: "relative", background: TOKENS.bgBlue, overflow: "hidden" }}>
      <Blobs mode="hero" mouse={mouse}/>
      <CornerLogo color={TOKENS.ink} onClick={() => navigate("home")} />

      <section style={{ position: "relative", zIndex: 2, padding: "200px 136px 100px" }}>
        <div style={{ maxWidth: 1647, margin: "0 auto", display: "flex", flexDirection: "column", gap: 60 }}>
          <CircleArrow direction="left" onClick={() => navigate("design")}/>
          <BigTitle align="left" style={{ textAlign: "left" }}>UX/UI Design</BigTitle>
          {projects.map(p => (
            <BrandProjectCard key={p.id} proj={p} onClick={() => navigate(p.id)}/>
          ))}
          <div style={{ opacity: 0.5, padding: "80px 10%", textAlign: "center" }}>
            <Body>More case studies coming soon.</Body>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

// ── Social media index ──
function SocialMediaPage({ navigate, mouse }) {
  const projects = [
    { id: "perlei", title: "Perlei", desc: "Editorial social content for a curated craft brand.", img: "assets/perlei-3.jpg" },
    { id: "circus", title: "Circus", desc: "A traveling performance identity for social.",       img: "assets/circus-1.jpg" },
  ];
  return (
    <div style={{ position: "relative", background: TOKENS.bgBlue, overflow: "hidden" }}>
      <Blobs mode="hero" mouse={mouse}/>
      <CornerLogo color={TOKENS.ink} onClick={() => navigate("home")}/>
      <section style={{ position: "relative", zIndex: 2, padding: "200px 136px 100px" }}>
        <div style={{ maxWidth: 1647, margin: "0 auto", display: "flex", flexDirection: "column", gap: 60 }}>
          <CircleArrow direction="left" onClick={() => navigate("design")}/>
          <BigTitle align="left" style={{ textAlign: "left" }}>Social media design</BigTitle>
          {projects.map(p => (
            <BrandProjectCard key={p.id} proj={p} onClick={() => navigate(p.id)}/>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
}

// ── generic grid of images ──
function ProjectGrid({ images }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: 30,
      marginTop: 20,
    }}>
      {images.map((src, i) => {
        // alternate spans for rhythm
        const pattern = [
          "span 6", "span 2", "span 4", "span 3", "span 3", "span 6",
          "span 4", "span 2", "span 6",
        ];
        const span = pattern[i % pattern.length];
        const aspect = span === "span 6" ? "16/9" : (span === "span 4" || span === "span 3" ? "4/3" : "1/1");
        return (
          <div key={i} style={{ gridColumn: span }} data-hover="image">
            <RevealImage src={src} aspect={aspect}/>
          </div>
        );
      })}
    </div>
  );
}

Object.assign(window, {
  ProjectScaffold, AdaPage, IdeatePage, RigaPage, IAPage, CircusPage, PerleiPage, RegiroPage,
  UxuiPage, SocialMediaPage, ProjectGrid,
});
