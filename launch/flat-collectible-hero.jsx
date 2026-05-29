// flat-collectible-hero.jsx — flat, friendly collectible hero header for a role.

function FCHero({ r, index, total }) {
  return (
    <div className="fc-wrap">
      <div className="fc">
        <div className="fc-top">
          <span className="fc-person">{window.PERSON} · plays</span>
          <span className="fc-no">No. 0{index + 1} / 0{total}</span>
        </div>

        <div className="fc-stage">
          <div className="fc-disc"><MSPlaceholder label="portrait" /></div>
          <div className="fc-role">{r.role}</div>
          <div className="fc-tag">{r.tagline}</div>
        </div>

        <div className="fc-panel">
          <div className="fc-chips">
            <span className="fc-chip">{r.type}</span>
            <span className="fc-chip">Est. {r.est}</span>
            <span className="fc-chip">{r.location}</span>
          </div>
          <div className="fc-moves">
            {r.traits.map((t, i) => (
              <div className="fc-move" key={i}>
                <span className="fc-icon">{t.label[0]}</span>
                <span className="mt">
                  <b>{t.label}</b>
                  <span>{["—","Developing","Capable","Skilled","Strong","Signature"][t.val]}</span>
                </span>
                <span className="mv">
                  {[0,1,2,3,4].map(p => <i key={p} className={p < t.val ? "on" : ""} />)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { FCHero });
