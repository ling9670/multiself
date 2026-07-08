// evelyn-web.jsx — DESKTOP site: one calm centered column, pill switcher on top.
// Same SELVES data as the phone card; arrangement flexes to show each role's best.

function _WebPh({ label, className, style }) {
  return <div className={"evw-ph " + (className || "")} style={style}><span>{label}</span></div>;
}

// Linkify the "Multiself" wordmark when a deployed URL is set; otherwise plain text.
function webBrand(text) {
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

function WebSecHead({ children }) {
  return <div className="evw-sec-h">{children}</div>;
}

/* ---- hero (top of every self) ---- */
function WebHero({ s }) {
  const PWheel = window.PortraitWheel;
  const imgs = (window.SELVES || []).map((x) => x.imgWide || x.img);
  const idx = (window.SELVES || []).findIndex((x) => x.id === s.id);
  const showLead = s.lead && s.lead !== s.tagline;
  return (
    <React.Fragment>
      <div className="evw-kicker">{webBrand(s.kicker)}</div>
      <h1 className="evw-title">{s.role}</h1>
      {s.tagline && <p className="evw-tagline">{s.tagline}</p>}

      {s.facts && (
        <div className="evw-facts">
          {s.facts.map((f, i) => (
            <div className="evw-fact" key={i}><div className="k">{f.k}</div><div className="v">{f.v}</div></div>
          ))}
        </div>
      )}

      {PWheel
        ? <div className="evw-hero-wheel">
            <PWheel className="pw-fill" ratio={7 / 5} showFrame={false}
                    index={idx < 0 ? 0 : idx} images={imgs} roleName={s.role} accent={s.color} />
          </div>
        : <img className="evw-hero-img wide" src={s.imgWide || s.img} alt={s.role} draggable="false" />}

      {showLead && <p className="evw-lead">{s.lead}</p>}

      {s.qualities && (
        <ul className="evw-quals-prose">
          {s.qualities.map((q, i) => <li key={i}>{q}</li>)}
        </ul>
      )}
    </React.Fragment>
  );
}

/* ---- sections ---- */
function WebAbout({ s }) {
  const paras = Array.isArray(s.about) ? s.about : [s.about];
  return (
    <section className="evw-sec">
      <WebSecHead>{s.kind === "person" ? "A little about me" : "The story"}</WebSecHead>
      {paras.map((p, i) => <p className="evw-body" key={i}>{p}</p>)}
    </section>
  );
}

function WebFavourite({ s }) {
  return (
    <section className="evw-fav">
      <div className="evw-fav-k">My favourite thing</div>
      <p className="evw-fav-v">{s.favourite}</p>
    </section>
  );
}

function WebMeet({ s }) {
  const m = s.meet;
  return (
    <section className="evw-sec">
      <WebSecHead>Meet {m.name}</WebSecHead>
      <a className="evw-meet-photo" href={m.url} target="_blank" rel="noopener">
        {m.img
          ? <img className="evw-meet-img" src={m.img} alt={m.name} draggable="false" />
          : <_WebPh label={m.name} style={{ position: "absolute", inset: 0, border: "none", borderRadius: 0 }} />}
        <span className="evw-meet-handle">{m.handle}</span>
      </a>
      <p className="evw-meet-quote">“{m.quote}”</p>
    </section>
  );
}

function WebVideos({ s }) {
  return (
    <section className="evw-sec">
      <WebSecHead>Watch me work</WebSecHead>
      <div className="evw-reels">
        {s.videos.map((v, i) => (
          <a className="evw-reel" key={i} href={v.url} target="_blank" rel="noopener">
            {v.img
              ? <img className="evw-reel-img" src={v.img} alt="" draggable="false" />
              : <_WebPh label={v.label} style={{ position: "absolute", inset: 0, border: "none", borderRadius: 0 }} />}
            <span className="play" />
          </a>
        ))}
      </div>
    </section>
  );
}

function WebTestimonials({ s }) {
  return (
    <section className="evw-sec">
      <WebSecHead>Kind words</WebSecHead>
      <div className="evw-tcards">
        {s.testimonials.map((t, i) => (
          <figure className="evw-tcard" key={i} style={{ margin: 0 }}>
            <div className="evw-tquote tquote">{t.quote}</div>
            {t.gloss && <div className="evw-tgloss">{t.gloss}</div>}
            <figcaption className="evw-tcite">— {t.cite}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function WebDefine({ s }) {
  return (
    <section className="evw-sec">
      <div className="evw-define">
        {s.define.map((d, i) => (
          <div className="evw-def" key={i}>
            <div className="evw-def-term">{d.term}</div>
            <div className="evw-def-say">— {d.say}</div>
            <p className="evw-def-body">{d.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WebCollections({ s }) {
  return (
    <section className="evw-sec">
      <WebSecHead>Two ways to dream</WebSecHead>
      <div className="evw-colls">
        {s.collections.map((c, i) => (
          <article key={i}>
            {c.img && c.img.indexOf("/") >= 0
              ? <img className="evw-coll-img" src={c.img} alt={c.name} draggable="false" />
              : <_WebPh className="evw-coll-img" label={c.img} />}
            <h3 className="evw-coll-name">{c.name}</h3>
            <p className="evw-coll-desc">{c.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function WebPull({ s }) {
  return (
    <section className="evw-pull">
      <div className="evw-pull-k">{s.pull.k}</div>
      <p className="evw-pull-v">“{s.pull.v}”</p>
    </section>
  );
}

function WebReading({ s }) {
  const r = s.reading;
  return (
    <section className="evw-sec">
      <WebSecHead>On the page</WebSecHead>
      <div className="evw-reads">
        {r.items.map((it, i) => (
          <a className="evw-read" key={i} href={r.url} target="_blank" rel="noopener">
            <span className="evw-read-no">{String(i + 1).padStart(2, "0")}</span>
            <span>
              <span className="evw-read-series">{it.series}</span>
              <span className="evw-read-title">{it.title}</span>
            </span>
            <span className="evw-read-arrow">→</span>
          </a>
        ))}
      </div>
      <div className="evw-read-foot">{r.caption}</div>
    </section>
  );
}

const WEB_SECTIONS = {
  about: WebAbout, favourite: WebFavourite, meet: WebMeet, videos: WebVideos,
  testimonials: WebTestimonials, define: WebDefine, collections: WebCollections,
  pull: WebPull, reading: WebReading,
};

function WebConnect({ s }) {
  return (
    <section className="evw-connect">
      <WebSecHead>Contact me</WebSecHead>
      <div className="evw-links">
        {s.links.map((l, i) => (
          <a className="evw-link" key={i} href={l.url} target="_blank" rel="noopener">
            <span className="ic"><EvIcon type={l.type} size={17} /></span>
            <span className="lv">{l.label || (window.EV_ICON_TITLE && window.EV_ICON_TITLE[l.type]) || l.type}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function EvWebSite({ selves, cur, onGo }) {
  const s = selves[cur];
  React.useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [cur]);

  return (
    <div className="evw only-web">
      <div className="evw-top">
        <div className="evw-pill" role="tablist">
          {selves.map((sv, i) => (
            <button
              key={sv.id}
              className={"evw-cell" + (i === cur ? " active" : "")}
              style={{ "--cell": sv.color }}
              onClick={() => onGo(i)}
            >
              <span className="dot" />
              {sv.kind === "person" ? "Evelyn" : sv.role}
            </button>
          ))}
        </div>
      </div>

      <main className="evw-main">
        <div className="evw-col">
          <WebHero s={s} />
          <div className="evw-rest" key={s.id}>
            {s.sections.map((key) => {
              const C = WEB_SECTIONS[key];
              return C ? <C key={key} s={s} /> : null;
            })}
            <WebConnect s={s} />
            <div className="evw-foot"><b>{window.ME}</b> · {webBrand("Multiself")}</div>
          </div>
        </div>
      </main>
    </div>
  );
}

Object.assign(window, { EvWebSite });
