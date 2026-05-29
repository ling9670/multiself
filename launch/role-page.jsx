// role-page.jsx — a single "self" rendered as a full one-page intro.

function MSPlaceholder({ label, className, style }) {
  return (
    <div className={"ph " + (className || "")} style={style}>
      <span>{label}</span>
    </div>
  );
}

function Dots({ val }) {
  return (
    <div className="dots">
      {[0,1,2,3,4].map(i => <div key={i} className={"dot" + (i < val ? " on" : "")} />)}
    </div>
  );
}

function SecHead({ kicker, title }) {
  return (
    <div className="sec-head">
      <div>
        <div className="sec-kicker">{kicker}</div>
        <div className="sec-title">{title}</div>
      </div>
      <div className="sec-line" />
    </div>
  );
}

function Hero({ r, index, total }) {
  return (
    <div className="hero">
      <div className="hero-top">
        <div className="chip">‹</div>
        <div className="hero-kicker">No. 0{index + 1} / 0{total}</div>
        <div className="chip">⋯</div>
      </div>

      <div className="hero-portrait">
        <MSPlaceholder label="full-bleed portrait" style={{ position: "absolute", inset: "0 0 0 0", border: "none",
          backgroundColor: "transparent",
          backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,.14) 0 9px, transparent 9px 18px)" }} />
        <div className="hero-name">{r.nameStack.split("\n").map((l,i)=><div key={i}>{l}</div>)}</div>
      </div>

      <div className="hero-foot">
        <div className="hero-person">{window.PERSON} · plays</div>
        <div className="hero-role">{r.role}</div>
        <div className="hero-tagline">{r.tagline}</div>
      </div>
    </div>
  );
}

// attribute block (replaces "difficulty") — sibling of hero so it is never clipped
function Stats({ r }) {
  return (
    <div className="stats">
      <div className="stat-row">
        <div className="stat"><div className="k">Established</div><div className="v">{r.est}</div></div>
        <div className="divider-v" />
        <div className="stat"><div className="k">Based in</div><div className="v small">{r.location}</div></div>
        <div className="divider-v" />
        <div className="stat"><div className="k">Type</div><div className="v small">{r.type}</div></div>
      </div>
      <div className="traits">
        {r.traits.map((t,i) => (
          <div className="trait" key={i}>
            <span className="tl">{t.label}</span>
            <Dots val={t.val} />
          </div>
        ))}
      </div>
      <div className="status-tag"><span className="pulse" />{r.status}</div>
    </div>
  );
}

function About({ r }) {
  return (
    <div className="section">
      <SecHead kicker="00 · About" title="The story" />
      <p className="about-text">
        <span className="lead">“{r.lead}”</span>
        {r.about}
      </p>
    </div>
  );
}

function Work({ r }) {
  const w = r.work;
  return (
    <div className="section">
      <SecHead kicker={"01 · " + w.kicker} title={w.title} />
      <div className="work-grid">
        {w.items.map((it,i) => <MSPlaceholder key={i} label={it} />)}
      </div>
      <div className="work-caption">{w.caption}</div>
    </div>
  );
}

function Video({ r }) {
  const v = r.video;
  return (
    <div className="section">
      <SecHead kicker={"02 · " + v.kicker} title="Watch me work" />
      <div className="video-feature">
        <MSPlaceholder label="feature video" style={{ position: "absolute", inset: 0, borderRadius: 16 }} />
        <div className="play" />
      </div>
      <div className="video-meta">
        <span className="video-title">{v.title}</span>
        <span className="video-dur">{v.dur}</span>
      </div>
      <div className="video-row">
        {v.more.map((m,i) => <MSPlaceholder key={i} label={m} />)}
      </div>
    </div>
  );
}

function Shop({ r }) {
  const s = r.shop;
  return (
    <div className="section">
      <SecHead kicker={"03 · " + s.kicker} title={s.title} />
      {s.items.map((p,i) => (
        <div className="product" key={i}>
          <MSPlaceholder label="shot" />
          <div className="info">
            <div className="pname">{p.name}</div>
            <div className="pdesc">{p.desc}</div>
            <div className="prow">
              <span className="price">{p.price}</span>
              <a className="buy" href="#" onClick={e=>e.preventDefault()}>{p.cta} →</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Connect({ r }) {
  return (
    <div className="section">
      <SecHead kicker="04 · Connect" title="Find this self" />
      <div className="links">
        {r.links.map((l,i) => (
          <a className="link" key={i} href="#" onClick={e=>e.preventDefault()} title={l.k}>
            <span className="ic"><MSIcon name={l.k} /></span>
            <span className="lt">
              <span className="lv">{l.v}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

function RolePage({ r, index, total, swipeDir }) {
  return (
    <div className={"page" + (swipeDir ? " swipe-" + swipeDir : "")}>
      <Hero r={r} index={index} total={total} />
      <Stats r={r} />
      <PortfolioBody r={r} />
    </div>
  );
}

// Shared portfolio body — used by every template; only the top card differs.
function PortfolioBody({ r }) {
  return (
    <div className="body">
      <About r={r} />
      <Work r={r} />
      <Video r={r} />
      <Shop r={r} />
      <Connect r={r} />
      <div className="cta">
        <div className="cta-kicker">Multiself</div>
        <div className="cta-head">Every self deserves<br/>its own card.</div>
        <p className="cta-sub">Collect your many roles into one shareable set — and let people meet every version of you.</p>
        <a className="cta-btn" href="#" onClick={e=>e.preventDefault()}>Create your own multiself →</a>
      </div>
      <div className="foot">
        <div className="sig">One person, many selves.</div>
        <div className="meta">{window.PERSON} · {r.role}</div>
      </div>
    </div>
  );
}

Object.assign(window, { RolePage, Hero, MSPlaceholder, SecHead, Dots, Stats, About, Work, Video, Shop, Connect, PortfolioBody });
