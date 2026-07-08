// evelyn-page.jsx — tailor-made one-page renderer for each of Evelyn's selves.

const _EvPh = ({ label, style, className }) => (
  <div className={"ph " + (className || "")} style={style}><span>{label}</span></div>
);

// Linkify the "Multiself" wordmark when a deployed URL is set; otherwise plain text.
function evBrand(text) {
  const url = window.MULTISELF_URL;
  if (!url || !text || text.indexOf("Multiself") === -1) return text;
  const parts = text.split("Multiself");
  return (
    <React.Fragment>
      {parts[0]}
      <a className="brand-link" href={url} target="_blank" rel="noopener">Multiself</a>
      {parts[1]}
    </React.Fragment>
  );
}

function EvSecHead({ kicker, title }) {
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

function EvHero({ s, index, total }) {
  const PWheel = window.PortraitWheel;
  const imgs = (window.SELVES || []).map((x) => x.imgWide || x.img);
  return (
    <div className="hero">
      <div className="hero-top">
        <div className="chip">‹</div>
        <div className="hero-kicker">No. 0{index + 1} / 0{total}</div>
        <div className="chip">⋯</div>
      </div>
      <div className="hero-portrait hero-portrait--wheel">
        {PWheel
          ? <PWheel className="pw-fill" ratio={7 / 5} showFrame={false}
                    index={index} images={imgs} roleName={s.role} accent={s.color} />
          : <img className="hero-portrait-img" src={s.img} alt={s.role} draggable="false" />}
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-name">{s.vertName.split("\n").map((l, i) => <div key={i}>{l}</div>)}</div>
      </div>
      <div className="hero-foot">
        <div className="hero-person">{evBrand(s.kicker)}</div>
        <div className="hero-role">{s.role}</div>
        <div className="hero-tagline">{s.tagline}</div>
      </div>
    </div>
  );
}

function EvStats({ s }) {
  return (
    <div className="stats">
      <div className="stat-row">
        {s.facts.map((f, i) => (
          <React.Fragment key={i}>
            {i > 0 && <div className="divider-v" />}
            <div className="stat"><div className="k">{f.k}</div><div className="v small">{f.v}</div></div>
          </React.Fragment>
        ))}
      </div>

      {s.tags && (
        <div className="ptags">
          {s.tags.map((t, i) => <span className="ptag" key={i}>{t}</span>)}
        </div>
      )}

      {s.qualities && (
        <ul className="qualities-prose">
          {s.qualities.map((q, i) => <li key={i}>{q}</li>)}
        </ul>
      )}
    </div>
  );
}

function EvAbout({ s }) {
  const paras = Array.isArray(s.about) ? s.about : [s.about];
  return (
    <div className="section">
      <EvSecHead kicker="00 · About" title={s.kind === "person" ? "A little about me" : "The story"} />
      <div className="about-text">
        {s.lead && <span className="lead">“{s.lead}”</span>}
        {paras.map((p, i) => <p className="about-p" key={i}>{p}</p>)}
      </div>
    </div>
  );
}

function EvFavourite({ s }) {
  return (
    <div className="section">
      <div className="fav">
        <div className="fav-k">My favourite thing</div>
        <div className="fav-v">{s.favourite}</div>
      </div>
    </div>
  );
}

function EvVideos({ s }) {
  return (
    <div className="section">
      <EvSecHead kicker="01 · Portfolio" title="Watch me work" />
      <div className="vids">
        {s.videos.map((v, i) => (
          <a className="vid" key={i} href={v.url} target="_blank" rel="noopener">
            {v.img
              ? <img className="vid-img" src={v.img} alt="" draggable="false" />
              : <_EvPh label={v.label} style={{ position: "absolute", inset: 0, border: "none", borderRadius: 0 }} />}
            <span className="vid-play" />
            <span className="vid-tag">Reel</span>
          </a>
        ))}
      </div>
      <div className="work-caption">Tap to watch</div>
    </div>
  );
}

function EvTestimonials({ s }) {
  return (
    <div className="section">
      <EvSecHead kicker="02 · Reviews" title="Kind words" />
      <div className="tcards">
        {s.testimonials.map((t, i) => (
          <figure className="tcard" key={i}>
            <div className="tquote">{t.quote}</div>
            {t.gloss && <div className="tgloss">{t.gloss}</div>}
            <figcaption className="tcite">— {t.cite}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function EvMeet({ s }) {
  const m = s.meet;
  return (
    <div className="section">
      <EvSecHead kicker="01 · Companion" title="Meet Nike" />
      <div className="meet">
        <a className="meet-photo" href={m.url} target="_blank" rel="noopener">
          {m.img
            ? <img className="meet-img" src={m.img} alt={m.name} draggable="false" />
            : <_EvPh label="Nike" style={{ position: "absolute", inset: 0, border: "none", borderRadius: 0 }} />}
          <span className="meet-handle">{m.handle}</span>
        </a>
        <p className="meet-quote">{m.quote}</p>
      </div>
    </div>
  );
}

function EvDefine({ s }) {
  return (
    <div className="section">
      <div className="define">
        {s.define.map((d, i) => (
          <div className="def" key={i}>
            <div className="def-head">
              <span className="def-term">{d.term}</span>
              <span className="def-say">— {d.say}</span>
            </div>
            <p className="def-body">{d.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function EvCollections({ s }) {
  return (
    <div className="section">
      <EvSecHead kicker="02 · Collections" title="Two ways to dream" />
      <div className="colls">
        {s.collections.map((c, i) => (
          <article className="coll" key={i}>
            {c.img && c.img.indexOf("/") >= 0
              ? <img className="coll-img" src={c.img} alt={c.name} draggable="false" />
              : <_EvPh className="coll-img" label={c.img} />}
            <div className="coll-body">
              <h4 className="coll-name">{c.name}</h4>
              <p className="coll-desc">{c.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function EvPull({ s }) {
  return (
    <div className="section">
      <div className="fav">
        <div className="fav-k">{s.pull.k}</div>
        <div className="fav-v">{s.pull.v}</div>
      </div>
    </div>
  );
}

function EvReading({ s }) {
  const r = s.reading;
  return (
    <div className="section">
      <EvSecHead kicker="03 · Featured reading" title="On the page" />
      <div className="reads">
        {r.items.map((it, i) => (
          <a className="read" key={i} href={r.url} target="_blank" rel="noopener">
            <span className="read-no">{String(i + 1).padStart(2, "0")}</span>
            <span className="read-body">
              <span className="read-series">{it.series}</span>
              <span className="read-title">{it.title}</span>
            </span>
            <span className="read-arrow">→</span>
          </a>
        ))}
      </div>
      <div className="work-caption">{r.caption}</div>
    </div>
  );
}

function EvWork({ s }) {
  return (
    <div className="section">
      <EvSecHead kicker="01 · Work" title="Pieces in glass" />
      <div className="work-grid">
        {s.work.items.map((it, i) => <_EvPh key={i} label={it} />)}
      </div>
      <div className="work-caption">{s.work.caption}</div>
    </div>
  );
}

function EvConnect({ s }) {
  return (
    <div className="connect">
      <div className="connect-k">Contact me</div>
      <div className="cb-row">
        {s.links.map((l, i) => (
          <a className="cbtn" key={i} href={l.url} target="_blank" rel="noopener" title={window.EV_ICON_TITLE[l.type] || ""}>
            <span className="cbtn-ic"><EvIcon type={l.type} /></span>
            <span className="cbtn-label">{l.label || window.EV_ICON_TITLE[l.type] || l.type}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

const EV_SECTIONS = {
  about: EvAbout,
  favourite: EvFavourite,
  meet: EvMeet,
  define: EvDefine,
  collections: EvCollections,
  pull: EvPull,
  reading: EvReading,
  videos: EvVideos,
  testimonials: EvTestimonials,
  work: EvWork,
};

function EvSelf({ s, index, total }) {
  return (
    <div className="page">
      <EvHero s={s} index={index} total={total} />
      <div className="page-rest" key={s.id}>
        <EvStats s={s} />
        <div className="body">
          {s.sections.map((key) => {
            const C = EV_SECTIONS[key];
            return C ? <C key={key} s={s} /> : null;
          })}
          <EvConnect s={s} />
          <div className="foot">
            <div className="sig">{window.SLOGAN}</div>
            <div className="meta">{window.ME} · {evBrand("Multiself")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { EvSelf });
