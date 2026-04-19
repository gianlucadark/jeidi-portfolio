// Shared design tokens + atoms for the Jeidi Clemente portfolio
// Pixel-lifted from the Figma: fonts, colors, blob positions.

const TOKENS = {
  bgPale: "rgb(222,228,240)",       // home / about / contatti / photo
  bgBlue: "rgb(205,216,239)",       // project pages
  bgFooter: "rgb(240,240,240)",
  blobBrown: "rgb(161,107,73)",
  blobBlue: "rgb(64,79,128)",
  ink: "rgb(46,52,60)",
  black: "rgb(0,0,0)",
  white: "rgb(255,255,255)",
};

// ─────────────────────────────────────────────────────────
// Logo — SC monogram, 3 stacked chevrons
// ─────────────────────────────────────────────────────────
function Logo({ size = 74, color = TOKENS.ink, style = {} }) {
  // 74×52 container with 3 overlapping chevron strokes.
  // The Figma vector is an arrow-like "<" — we place 3 horizontally offset.
  const h = size * (52 / 74);
  return (
    <div style={{
      position: "relative", width: size, height: h,
      display: "flex", alignItems: "center", gap: size * 0.04,
      ...style,
    }}>
      {[0, 1, 2].map((i) => (
        <svg key={i} width={size * 0.35} height={h} viewBox="0 0 26 52" fill="none"
          style={{ display: "block" }}>
          <path d="M 24 2 L 2 26 L 24 50" stroke={color} strokeWidth="1.6" fill="none"/>
        </svg>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Background Blobs — two rotated ellipses. Drift slightly with mouse/scroll.
// Two modes:
//   "hero"   — both blobs visible (home, about, project pages, contatti)
//   "full"   — single enormous blue circle (photo page)
//   "none"   — only flat bg
// ─────────────────────────────────────────────────────────
function Blobs({ mode = "hero", mouse = { x: 0, y: 0 }, scroll = 0 }) {
  if (mode === "none") return null;

  if (mode === "full") {
    return (
      <div style={{
        position: "absolute", inset: 0, overflow: "hidden",
        pointerEvents: "none", zIndex: 0,
      }}>
        <div style={{
          position: "absolute",
          left: "-2.4%", top: "-8.2%",
          width: "108%", height: "179%",
          borderRadius: "50%",
          background: TOKENS.blobBlue,
          filter: "blur(0.5px)",
        }} />
      </div>
    );
  }

  const mx = mouse.x || 0;
  const my = mouse.y || 0;
  const sY = scroll * 0.15;

  return (
    <div style={{
      position: "absolute", inset: 0, overflow: "hidden",
      pointerEvents: "none", zIndex: 0,
    }}>
      {/* Brown blob, top-right area — rotated ellipse */}
      <div style={{
        position: "absolute",
        left: "53%", top: "-18%",
        width: "33vw", height: "49vw",
        maxWidth: 650, maxHeight: 980,
        borderRadius: "50%",
        background: TOKENS.blobBrown,
        transform: `translate3d(${mx * -12}px, ${my * -8 - sY * 0.4}px, 0) rotate(34deg)`,
        transition: "transform 1.2s cubic-bezier(.2,.8,.2,1)",
        willChange: "transform",
      }} />
      {/* Blue blob, lower-left */}
      <div style={{
        position: "absolute",
        left: "12%", top: "22%",
        width: "34vw", height: "51vw",
        maxWidth: 680, maxHeight: 1030,
        borderRadius: "50%",
        background: TOKENS.blobBlue,
        transform: `translate3d(${mx * 10}px, ${my * 6 - sY * 0.8}px, 0) rotate(34deg)`,
        transition: "transform 1.2s cubic-bezier(.2,.8,.2,1)",
        willChange: "transform",
      }} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Nav — pill-shape top nav with 5 items. Active item gets a thin border.
// ─────────────────────────────────────────────────────────
function Nav({ active = "home", onNavigate, textColor = TOKENS.ink }) {
  const items = [
    { id: "home",  label: "Home" },
    { id: "design", label: "Design" },
    { id: "photo", label: "Photography" },
    { id: "about", label: "About" },
    { id: "contatti", label: "Contact" },
  ];
  return (
    <nav style={{
      position: "fixed",
      top: 60,
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: 20,
      padding: 4,
      borderRadius: 37,
      zIndex: 50,
      alignItems: "center",
      mixBlendMode: "normal",
    }}>
      {items.map(item => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          data-hover="nav"
          style={{
            background: "transparent",
            border: active === item.id ? `1px solid ${textColor}` : "1px solid transparent",
            borderRadius: 37,
            padding: "8px 18px",
            fontFamily: "Lato, system-ui",
            fontWeight: 300,
            fontSize: 20,
            lineHeight: 1,
            color: textColor,
            cursor: "none",
            transition: "border-color .3s ease, color .3s ease",
            letterSpacing: 0,
          }}
        >{item.label}</button>
      ))}
    </nav>
  );
}

// Mobile nav
function MobileNav({ onNavigate, open, setOpen, textColor = TOKENS.ink }) {
  const items = [
    { id: "home",  label: "Home" },
    { id: "design", label: "Design" },
    { id: "photo", label: "Photography" },
    { id: "about", label: "About" },
    { id: "contatti", label: "Contact" },
  ];
  return (
    <>
      <div style={{
        position: "fixed", top: 20, left: 20, right: 20, zIndex: 60,
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <button onClick={() => onNavigate("home")} style={{
          background: "transparent", border: "none", padding: 0, cursor: "pointer",
        }}>
          <Logo size={34} color={textColor} />
        </button>
        <button onClick={() => setOpen(!open)} style={{
          background: "transparent", border: "none", cursor: "pointer", padding: 0,
          width: 24, height: 24, display: "flex", flexDirection: "column",
          justifyContent: "center", gap: 5,
        }}>
          <span style={{ display: "block", height: 1.5, background: textColor,
            width: open ? 20 : 16, marginLeft: "auto", transition: ".3s" }} />
          <span style={{ display: "block", height: 1.5, background: textColor,
            width: open ? 20 : 20, transition: ".3s" }} />
        </button>
      </div>
      <div style={{
        position: "fixed", inset: 0, zIndex: 55,
        background: TOKENS.bgPale,
        transform: open ? "translateY(0)" : "translateY(-100%)",
        transition: "transform .6s cubic-bezier(.77,0,.18,1)",
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center", gap: 24,
        fontFamily: "Lato", fontWeight: 100,
      }}>
        {items.map((item, i) => (
          <button key={item.id}
            onClick={() => { onNavigate(item.id); setOpen(false); }}
            style={{
              background: "transparent", border: "none",
              fontFamily: "Lato", fontWeight: 100, fontSize: "min(14vw, 72px)",
              color: TOKENS.black, cursor: "pointer", lineHeight: 1,
              transform: open ? "translateY(0)" : "translateY(40px)",
              opacity: open ? 1 : 0,
              transition: `transform .6s ${i * 0.08 + 0.2}s cubic-bezier(.2,.8,.2,1), opacity .6s ${i * 0.08 + 0.2}s`,
            }}>{item.label}</button>
        ))}
      </div>
    </>
  );
}

// ─────────────────────────────────────────────────────────
// Scroll-down / back button (circle with arrow)
// ─────────────────────────────────────────────────────────
function CircleArrow({ direction = "down", onClick, borderColor = TOKENS.ink, iconColor, style = {} }) {
  const rot = { down: 0, up: 180, left: 90, right: -90 }[direction];
  const col = iconColor || borderColor;
  return (
    <button onClick={onClick} data-hover="circle" style={{
      width: 84, height: 84, borderRadius: "50%",
      border: `2px solid ${borderColor}`,
      background: "transparent",
      display: "flex", alignItems: "center", justifyContent: "center",
      cursor: "none",
      transition: "background .4s ease, transform .4s ease",
      ...style,
    }}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
        style={{ transform: `rotate(${rot}deg)`, transition: "transform .4s" }}>
        <path d="M16 4 V28 M6 18 L16 28 L26 18" stroke={col} strokeWidth="2" fill="none"
          strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

// ─────────────────────────────────────────────────────────
// Footer — used on many pages. Big Jeidi / Clemente split, contact info top.
// ─────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      background: TOKENS.bgFooter,
      color: TOKENS.ink,
      padding: "80px 60px",
      minHeight: 700,
      position: "relative",
      display: "flex", flexDirection: "column",
      justifyContent: "space-between",
      overflow: "hidden",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 20,
      }}>
        <div style={{ fontFamily: "Lato", fontWeight: 300, fontSize: 20, lineHeight: 1.4 }}>
          <div>JEIDICLEMENTE@GMAIL.COM</div>
          <div style={{ marginTop: 8 }}>+39 342 524 6479</div>
        </div>
        <div style={{ fontFamily: "Lato", fontWeight: 300, fontSize: 20, lineHeight: 1.4, textAlign: "center" }}>
          <div>ROMA</div>
          <div style={{ marginTop: 8 }}>P. IVA 18469441002</div>
        </div>
        <div style={{ fontFamily: "Lato", fontWeight: 300, fontSize: 20, lineHeight: 1.4, textAlign: "right" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, justifyContent: "flex-end" }}>
            <img src="assets/ig-jeidiclemente.png" alt="" style={{ width: 30, height: 30, borderRadius: "50%", objectFit: "cover" }}/>
            <span>JEIDICLEMENTE</span>
          </div>
          <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 14, justifyContent: "flex-end" }}>
            <img src="assets/ig-jeidirphoto.png" alt="" style={{ width: 30, height: 30, borderRadius: "50%", objectFit: "cover" }}/>
            <span>JEIDIRPHOTO</span>
          </div>
        </div>
      </div>

      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "flex-end",
        marginTop: 80, gap: 40, flexWrap: "wrap",
      }}>
        <span style={{ fontFamily: "Lato", fontWeight: 100, fontSize: "min(11vw, 140px)", lineHeight: 1, color: TOKENS.black }}>Jeidi</span>
        <span style={{ fontFamily: "Lato", fontWeight: 100, fontSize: "min(11vw, 140px)", lineHeight: 1, color: TOKENS.black }}>Clemente</span>
      </div>
    </footer>
  );
}

// Fixed left-edge logo used on all pages except home (home has it inline)
function CornerLogo({ color = TOKENS.ink, onClick }) {
  return (
    <button onClick={onClick} data-hover="nav" style={{
      position: "fixed", left: 60, top: "50%", transform: "translateY(-50%)",
      background: "transparent", border: "none", cursor: "none", padding: 0,
      zIndex: 40,
    }}>
      <Logo size={74} color={color} />
    </button>
  );
}

// Page title — huge Lato Thin, centered, multiline support
function BigTitle({ children, size = 140, color = TOKENS.black, align = "center", weight = 100, style = {} }) {
  return (
    <h1 style={{
      fontFamily: "Lato, system-ui",
      fontWeight: weight,
      fontSize: `min(${size / 1920 * 100}vw, ${size}px)`,
      lineHeight: 1,
      color,
      margin: 0,
      textAlign: align,
      letterSpacing: "-0.01em",
      ...style,
    }}>{children}</h1>
  );
}

// Subtitle text (project pages) — large Lato Regular
function ProjectSubtitle({ children, color = TOKENS.ink }) {
  return (
    <h2 style={{
      fontFamily: "Lato, system-ui", fontWeight: 400,
      fontSize: "min(6.7vw, 128px)", lineHeight: 1.05,
      color, margin: 0, textAlign: "center",
    }}>{children}</h2>
  );
}

// Body copy
function Body({ children, color = TOKENS.ink, style = {} }) {
  return (
    <p style={{
      fontFamily: "Lato, system-ui", fontWeight: 300,
      fontSize: "min(1.66vw, 32px)", lineHeight: 1.35,
      color, margin: 0, maxWidth: 1078,
      textAlign: "center",
      ...style,
    }}>{children}</p>
  );
}

// Image with soft reveal on scroll
function RevealImage({ src, alt = "", aspect = "16/10", borderRadius = 20, style = {}, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={className} style={{
      width: "100%", aspectRatio: aspect,
      borderRadius, overflow: "hidden",
      background: "#eeeeee",
      transform: visible ? "translateY(0) scale(1)" : "translateY(60px) scale(0.98)",
      opacity: visible ? 1 : 0,
      transition: "transform 1.2s cubic-bezier(.2,.8,.2,1), opacity 1s ease",
      ...style,
    }}>
      {src ? (
        <img src={src} alt={alt} style={{
          width: "100%", height: "100%", objectFit: "cover", display: "block",
          transform: visible ? "scale(1)" : "scale(1.1)",
          transition: "transform 1.6s cubic-bezier(.2,.8,.2,1)",
        }} />
      ) : null}
    </div>
  );
}

function useInView(threshold = 0.15) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, visible];
}

// Custom cursor
function Cursor() {
  const [pos, setPos] = React.useState({ x: -100, y: -100 });
  const [target, setTarget] = React.useState(null); // hoverable state
  const [down, setDown] = React.useState(false);
  const posRef = React.useRef({ x: -100, y: -100, tx: -100, ty: -100 });
  const ringRef = React.useRef(null);
  const dotRef = React.useRef(null);

  React.useEffect(() => {
    const onMove = (e) => {
      posRef.current.tx = e.clientX;
      posRef.current.ty = e.clientY;
      // detect hover target
      const el = e.target.closest && e.target.closest("[data-hover]");
      setTarget(el ? el.getAttribute("data-hover") : null);
    };
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    let raf;
    const tick = () => {
      const p = posRef.current;
      // dot follows 1:1, ring lags
      p.x += (p.tx - p.x) * 0.22;
      p.y += (p.ty - p.y) * 0.22;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${p.tx}px, ${p.ty}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  const ringSize = target === "image" ? 120 : target === "nav" ? 56 : target === "circle" ? 96 : 36;
  const ringBorder = down ? 2 : 1;

  return (
    <>
      <div ref={ringRef} style={{
        position: "fixed", left: 0, top: 0,
        width: ringSize, height: ringSize, borderRadius: "50%",
        border: `${ringBorder}px solid ${TOKENS.ink}`,
        pointerEvents: "none", zIndex: 9999,
        mixBlendMode: "difference",
        transition: "width .35s cubic-bezier(.2,.8,.2,1), height .35s cubic-bezier(.2,.8,.2,1), border-width .2s",
        backdropFilter: target === "image" ? "invert(1)" : "none",
      }}>
        {target === "image" && (
          <span style={{
            position: "absolute", inset: 0, display: "flex",
            alignItems: "center", justifyContent: "center",
            fontFamily: "Lato", fontWeight: 300, fontSize: 13,
            color: TOKENS.white, letterSpacing: ".1em",
          }}>VIEW</span>
        )}
      </div>
      <div ref={dotRef} style={{
        position: "fixed", left: 0, top: 0,
        width: 4, height: 4, borderRadius: "50%",
        background: TOKENS.ink,
        pointerEvents: "none", zIndex: 9999,
        mixBlendMode: "difference",
      }} />
    </>
  );
}

// Page transition overlay
function PageTransition({ phase }) {
  // phase: "idle" | "out" | "in"
  return (
    <>
      <div style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: TOKENS.black,
        transformOrigin: "top",
        transform: phase === "out" ? "scaleY(1)" : (phase === "in" ? "scaleY(1)" : "scaleY(0)"),
        transition: phase === "out"
          ? "transform .6s cubic-bezier(.77,0,.18,1)"
          : (phase === "in" ? "transform .6s cubic-bezier(.77,0,.18,1)" : "none"),
        transformOrigin: phase === "out" ? "bottom" : "top",
        pointerEvents: "none",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          opacity: phase === "out" ? 1 : 0,
          transition: "opacity .4s ease",
        }}>
          <div style={{ color: TOKENS.white, fontFamily: "Lato", fontWeight: 100, fontSize: 96, letterSpacing: "-0.02em" }}>
            JC
          </div>
        </div>
      </div>
    </>
  );
}

Object.assign(window, {
  TOKENS, Logo, Blobs, Nav, MobileNav, CircleArrow, Footer, CornerLogo,
  BigTitle, ProjectSubtitle, Body, RevealImage, useInView, Cursor, PageTransition,
});
