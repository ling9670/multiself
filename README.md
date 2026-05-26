# multiself

**Same you. Every version.**

Live: https://ling9670.github.io/multiself/

---

## Adding a new user profile

1. Copy `user-profile-template.html` → `[username].html`
2. Edit only the `const USER = { }` block at the top
3. Push to deploy:

```bash
git add [username].html
git commit -m "add [username] profile"
git push
```

Their link: `https://ling9670.github.io/multiself/[username].html`

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | Landing page + waitlist |
| `evelyn-profile.html` | Demo profile (Evelyn) |
| `system.html` | Internal system dashboard |
| `[username].html` | User profiles |
