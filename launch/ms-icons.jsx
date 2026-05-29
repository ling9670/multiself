// ms-icons.jsx — clear line icons for the Connect section. Stroke uses currentColor.

const MS_ICON_PATHS = {
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/>',
  website:   '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.8 2.4 4.2 5.6 4.2 9s-1.4 6.6-4.2 9c-2.8-2.4-4.2-5.6-4.2-9S9.2 5.4 12 3z"/>',
  shop:      '<path d="M5 8h14l-1 12H6L5 8z"/><path d="M8.5 8V6.5a3.5 3.5 0 0 1 7 0V8"/>',
  whatsapp:  '<path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3.5 20l1.2-4.7A8.5 8.5 0 1 1 21 11.5z"/><path d="M8.6 8.8c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5l.7 1.6c.1.2 0 .4-.1.6l-.5.6c-.1.2-.2.3 0 .6.3.5.9 1.3 1.7 1.8.6.4.8.4 1 .3l.6-.6c.2-.2.4-.2.6-.1l1.5.8c.2.1.3.3.3.5 0 .6-.5 1.3-1 1.5-.5.2-1.5.3-3.2-.6-1.9-1-3.2-3-3.4-3.3-.2-.3-1-1.4-1-2.6 0-1.1.6-1.7.8-1.9z" fill="currentColor" stroke="none"/>',
  email:     '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M4 7l8 6 8-6"/>',
  map:       '<path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/>',
  events:    '<rect x="3.5" y="5" width="17" height="16" rx="2.5"/><path d="M3.5 9.5h17"/><path d="M8 3v4M16 3v4"/>',
  youtube:   '<rect x="3" y="6" width="18" height="12" rx="3.5"/><path d="M10.5 9.3l4.2 2.7-4.2 2.7V9.3z" fill="currentColor" stroke="none"/>',
};

function msIconKey(k) {
  const s = (k || "").toLowerCase();
  if (MS_ICON_PATHS[s]) return s;
  if (s.includes("insta")) return "instagram";
  if (s.includes("web") || s.includes("site")) return "website";
  if (s.includes("shop") || s.includes("store")) return "shop";
  if (s.includes("whats")) return "whatsapp";
  if (s.includes("mail") || s.includes("@")) return "email";
  if (s.includes("map") || s.includes("plot") || s.includes("find")) return "map";
  if (s.includes("event") || s.includes("date") || s.includes("market")) return "events";
  if (s.includes("you") || s.includes("video") || s.includes("tube")) return "youtube";
  return "website";
}

function MSIcon({ name, size = 20 }) {
  const key = msIconKey(name);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
         dangerouslySetInnerHTML={{ __html: MS_ICON_PATHS[key] }} />
  );
}

Object.assign(window, { MSIcon, msIconKey });
