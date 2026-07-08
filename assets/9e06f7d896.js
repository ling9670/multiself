// ev-icons.jsx — line icons for Evelyn's connect row (self-contained set).

const EV_ICON_PATHS = {
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/>',
  youtube:   '<rect x="3" y="6" width="18" height="12" rx="3.5"/><path d="M10.5 9.3l4.2 2.7-4.2 2.7V9.3z" fill="currentColor" stroke="none"/>',
  threads:   '<path d="M16.3 11.4c-.1-2.2-1.6-3.6-3.9-3.7-1.6-.1-2.8.6-3.4 1.7M13 16.9c-2.9 0-4.8-2.3-4.8-5.9C8.2 7.5 10.1 5.2 13 5.2c2.5 0 4.1 1.6 4.6 3.6M11.9 12c-1.1.1-2 .8-1.9 1.9.1 1 .9 1.7 2.2 1.6 1.7-.1 2.7-1.2 2.7-3.4"/>',
  email:     '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M4 7l8 6 8-6"/>',
  whatsapp:  '<path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3.5 20l1.2-4.7A8.5 8.5 0 1 1 21 11.5z"/><path d="M9 8.8c.2-.5.4-.5.7-.5h.4c.2 0 .4 0 .6.5l.6 1.5c.1.2 0 .4-.1.5l-.4.5c-.1.2-.2.3 0 .6.3.5.8 1.2 1.5 1.6.5.3.7.3.9.2l.5-.5c.2-.2.4-.2.5-.1l1.4.7c.2.1.3.2.3.4 0 .6-.5 1.2-.9 1.4-.5.2-1.4.3-3-.6-1.7-.9-2.9-2.7-3-3-.2-.3-.9-1.3-.9-2.4 0-1 .5-1.5.7-1.7z" fill="currentColor" stroke="none"/>',
  website:   '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.8 2.4 4.2 5.6 4.2 9s-1.4 6.6-4.2 9c-2.8-2.4-4.2-5.6-4.2-9S9.2 5.4 12 3z"/>',
  medium:    '<circle cx="6.5" cy="12" r="3.5"/><ellipse cx="14.8" cy="12" rx="1.7" ry="3.5"/><line x1="20" y1="8.3" x2="20" y2="15.7"/>',
  book:      '<path d="M12 6.5c-2-1.3-4.7-1.6-7.5-1.1v11.6c2.8-.5 5.5-.2 7.5 1.1 2-1.3 4.7-1.6 7.5-1.1V5.4C16.7 4.9 14 5.2 12 6.5z"/><path d="M12 6.5V18"/>',
};

const EV_ICON_TITLE = {
  instagram: "Instagram", youtube: "YouTube", threads: "Threads", email: "Email",
  whatsapp: "WhatsApp", website: "Website", medium: "Medium", book: "Picture book",
};

function EvIcon({ type, size = 21 }) {
  const p = EV_ICON_PATHS[type] || EV_ICON_PATHS.website;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
         dangerouslySetInnerHTML={{ __html: p }} />
  );
}

Object.assign(window, { EvIcon, EV_ICON_TITLE });
