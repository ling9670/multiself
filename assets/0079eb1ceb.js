// portrait-wheel.jsx — a controlled 3D "portrait wheel" image-swap.
//
// Four portraits are mounted at all times, parked around a vertical-axis circle
// (rotateY) at 0 / 90 / 180 / 270deg, each pushed out with translateZ(radius).
// Nothing loads, unmounts, or remounts during a swap — the next portrait is
// always already present, just off to the side. That is what guarantees zero
// flicker. A parent perspective turns the swap into a curved 3D arc.
//
// Drop into a Babel-standalone <script type="text/babel"> setup. Needs
// portrait-wheel.css. Globals: React (UMD). Exposes window.PortraitWheel.

const { useState, useRef, useEffect } = React;

/* ============================ TUNE HERE ============================ */
const AXIS = "vertical";          // 'vertical' | 'horizontal' — flip the spin axis
const SHOW_NEIGHBORS = false;     // true = window stops clipping; see the parked portraits
const WHIP = 1;                   // motion-blur trace strength, 0 disables it entirely
const TURN_MS = 700;              // turn duration
const EASING = "cubic-bezier(.62,.02,.20,1)";   // weighted, slight settle
const RATIO = 5 / 7;              // window width : height
const ROT_SIGN = -1;              // spin direction; -1 → incoming arcs in from the RIGHT
const STEP = 90;                  // degrees between faces (4 portraits)
/* ================================================================== */

function usePrefersReducedMotion() {
  const get = () =>
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [reduced, setReduced] = useState(get);
  useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(mq.matches);
    mq.addEventListener ? mq.addEventListener("change", on) : mq.addListener(on);
    return () =>
      mq.removeEventListener ? mq.removeEventListener("change", on) : mq.removeListener(on);
  }, []);
  return reduced;
}

function PortraitWheel({ index, images, roleName, accent, ratio = RATIO, className = "", showFrame = true }) {
  const rotRef = useRef(0);                  // accumulating angle — never snaps the seam
  const [rot, setRot] = useState(0);
  const [turning, setTurning] = useState(false);
  const [landed, setLanded] = useState(accent);   // accent that drives the frame glow
  const reduced = usePrefersReducedMotion();

  // When `index` changes, rotate the SHORTEST way to face `index`, accumulating
  // so a 0→2 jump is one continuous 180deg turn and we never snap across 360deg.
  useEffect(() => {
    const desired = ROT_SIGN * index * STEP;
    let delta = (((desired - rotRef.current) % 360) + 360) % 360; // 0..359
    if (delta > 180) delta -= 360;                                // take the short arc
    rotRef.current += delta;
    setRot(rotRef.current);
    if (reduced) {
      setLanded(accent);                       // crossfade recolors immediately
    } else if (delta !== 0) {
      setTurning(true);                         // arm the whip; cleared on transitionend
    }
  }, [index, accent, reduced]);

  const onTransitionEnd = (e) => {
    if (e.propertyName !== "transform") return;
    setTurning(false);                          // drop the whip the instant it settles
    setLanded(accent);                          // role accent "lands" with the portrait
  };

  // Fallback: if transitionend never fires (paused/throttled tab, interrupted
  // transition), still resolve the turn so the whip clears and the accent lands.
  useEffect(() => {
    if (!turning) return;
    const id = setTimeout(() => { setTurning(false); setLanded(accent); }, TURN_MS + 140);
    return () => clearTimeout(id);
  }, [turning, accent]);

  return (
    <div
      className={"portrait-wheel" + (className ? " " + className : "")}
      data-axis={AXIS}
      data-neighbors={SHOW_NEIGHBORS ? "1" : "0"}
      data-reduced={reduced ? "1" : "0"}
      style={{
        "--pw-accent": landed || accent,
        "--pw-rot": rot + "deg",
        "--pw-dur": TURN_MS + "ms",
        "--pw-ease": EASING,
        "--pw-h": "calc(var(--pw-w) * " + (1 / ratio).toFixed(4) + ")",
        "--pw-whip": (2 * WHIP).toFixed(2) + "px",
      }}
    >
      <div className="pw-stage">
        <div
          className={"pw-wheel" + (turning ? " is-turning" : "")}
          onTransitionEnd={onTransitionEnd}
        >
          {images.map((src, i) => (
            <div
              className="pw-face"
              key={i}
              style={{ "--pw-i": i }}
              data-active={i === index ? "" : undefined}
            >
              <img src={src} alt="" draggable="false" />
            </div>
          ))}
        </div>

        {showFrame && (
          <div className="pw-frame" aria-hidden="true">
            <span className="pw-tick tl"></span>
            <span className="pw-tick tr"></span>
            <span className="pw-tick bl"></span>
            <span className="pw-tick br"></span>
          </div>
        )}
      </div>

      <div className="pw-live" aria-live="polite">{roleName}</div>
    </div>
  );
}

window.PortraitWheel = PortraitWheel;
