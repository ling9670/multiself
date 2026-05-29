// trading-card-hero.jsx — collectible-card hero header for a role.

function TCHero({ r, index, total }) {
  return (
    <div className="tc-wrap">
      <div className="tc">
        <div className="tc-inner">
          <div className="tc-head">
            <div>
              <div className="tc-person">{window.PERSON} · No. 0{index + 1}/0{total}</div>
              <div className="tc-name">{r.role}</div>
            </div>
            <div className="tc-badge">
              <span className="est-k">Est.</span>
              <span className="est-v">{r.est}</span>
            </div>
          </div>

          <div className="tc-art">
            <MSPlaceholder label="portrait" />
            <div className="tc-emblem">{r.type}</div>
          </div>

          <div className="tc-ribbon">
            <span>{r.type} type</span><span className="sep">◆</span>
            <span>{r.location}</span><span className="sep">◆</span>
            <span>{r.tagline.split("·")[0].trim()}</span>
          </div>

          <div className="tc-abil">
            {r.traits.map((t, i) => (
              <div className="tc-row" key={i}>
                <div className="tc-cost">
                  {[0,1,2].map(p => <span key={p} className={"tc-pip" + (p < Math.round(t.val/2) ? " on" : "")} />)}
                </div>
                <span className="tc-abil-name">{t.label}</span>
                <span className="tc-abil-val">{"★".repeat(t.val)}</span>
              </div>
            ))}
          </div>

          <div className="tc-footer">
            <span className="tc-no">No. 0{index + 1}</span>
            <span className="tc-status-mini"><span className="pulse" />{r.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { TCHero });
