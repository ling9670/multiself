// timeline-nav.jsx — bottom nav linking all selves (timeline + swipe).

function TimelineNav({ roles, current, onGo }) {
  const r = roles[current];
  const prev = roles[(current - 1 + roles.length) % roles.length];
  const next = roles[(current + 1) % roles.length];
  return (
    <div className="timeline">
      <div className="timeline-inner">
        <div className="tl-arrow" onClick={() => onGo(current - 1)} title={prev.role}>‹</div>
        <div className="tl-track">
          <div className="tl-label">
            <span className="tl-now">{r.role}</span>
            <span className="tl-count">0{current + 1} / 0{roles.length}</span>
          </div>
          <div className="tl-nodes">
            {roles.map((role, i) => (
              <div className="tl-node" key={role.id}>
                <div className="tl-seg lead" style={{ background: i <= current && i !== 0 ? "var(--role)" : undefined }} />
                <div
                  className={"tl-dot" + (i === current ? " active" : "")}
                  style={{ "--dot-color": role.color }}
                  onClick={() => onGo(i)}
                  title={role.role}
                />
                <div className="tl-seg trail" style={{ background: i < current ? "var(--role)" : undefined }} />
              </div>
            ))}
          </div>
          <div className="tl-hint">swipe to change self</div>
        </div>
        <div className="tl-arrow" onClick={() => onGo(current + 1)} title={next.role}>›</div>
      </div>
    </div>
  );
}

Object.assign(window, { TimelineNav });
