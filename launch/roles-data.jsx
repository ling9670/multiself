// roles-data.jsx — loads content from content.json
// To update text, pricing, links etc: edit content.json only. No code knowledge needed.

(function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "content.json", false); // synchronous — fine for static/local use
  xhr.send();
  const data = JSON.parse(xhr.responseText);
  Object.assign(window, { PERSON: data.person, ROLES: data.roles });
})();
