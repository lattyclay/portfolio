# Latifa Clay — Portfolio

A React + Vite + Tailwind rebuild of the original single-file HTML portfolio.
All the visual design is preserved exactly — only the structure changed, so
the content is now easy to edit without touching any markup or styles.

## Getting started

```bash
npm install
npm run dev       # starts a local dev server with hot reload
npm run build     # builds a production-ready /dist folder
npm run preview   # preview the production build locally
```

## Updating your information

All editable content lives in `src/data/`. You shouldn't need to touch
anything in `src/components/` to update your info — just edit these files:

| File | What it controls |
|---|---|
| `src/data/profile.js` | Name, role, bio, stats, contact info, "Hire me" link, roadmap link |
| `src/data/projects.js` | Featured projects grid |
| `src/data/skills.js` | Skills grid |
| `src/data/experience.js` | Work experience timeline |
| `src/data/education.js` | Education timeline |

Each file has a comment at the top explaining its fields. For example, to
add a new project, just add another object to the array in `projects.js`:

```js
{
  title: "My New Project",
  description: "A short one or two sentence description.",
  category: "Web",
  status: "Live",
  tech: ["React", "Tailwind"],
  thumb: "browser", // or "browser2", "ai-chat", "glyph"
}
```

The References and Roadmap sections (`src/components/References.jsx` and
`src/components/Roadmap.jsx`) are simple enough that their text can be edited
directly in those files if needed — Roadmap's link comes from `profile.js`.

## Project structure

```
.github/
  workflows/
    deploy.yml     ← builds and publishes to GitHub Pages on every push to main
src/
  data/            ← edit these to update content
    profile.js
    projects.js
    skills.js
    experience.js
    education.js
  components/      ← visual building blocks (rarely need edits)
    Masthead.jsx
    Projects.jsx
    ProjectCard.jsx
    ProjectThumb.jsx
    Skills.jsx
    Experience.jsx
    Education.jsx
    Timeline.jsx
    References.jsx
    Roadmap.jsx
    SectionLabel.jsx
  App.jsx          ← assembles all sections into the page
  main.jsx         ← React entry point
  index.css        ← Tailwind directives + base styles
```

## Deploying to GitHub Pages

This repo is already set up to deploy automatically. The included workflow
at `.github/workflows/deploy.yml` builds the site and publishes it to GitHub
Pages every time you push to `main` — there's no manual build step to run
yourself once it's connected.

`vite.config.js` is set to `base: '/portfolio/'`, which matches a repo
named `portfolio` deployed at `https://<username>.github.io/portfolio/`.
If you name your repository something else, update that line to match
(e.g. a repo named `my-site` needs `base: '/my-site/'`).

**One-time setup, after pushing this code to GitHub:**

1. Push this project to a new GitHub repository (see steps below if you
   haven't done this before).
2. On GitHub, go to your repository's **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**
   (not "Deploy from a branch" — the workflow handles this differently).
4. That's it. Push to `main`, and the **Actions** tab will show the
   workflow running. Once it finishes (usually under a minute), your site
   is live at `https://<your-username>.github.io/portfolio/`.

**If you've never pushed a project to GitHub before:**

```bash
# from inside this project folder
git init
git add .
git commit -m "Initial commit"

# create a new repository on github.com first, then:
git remote add origin https://github.com/<your-username>/portfolio.git
git branch -M main
git push -u origin main
```

After that initial push, go complete steps 2–4 above. Every future push to
`main` redeploys automatically — no need to repeat any of this.

**Manually triggering a deploy without a new push:** the workflow also
listens for `workflow_dispatch`, so you can go to the **Actions** tab,
select **Deploy to GitHub Pages**, and click **Run workflow** if you ever
need to redeploy without changing any code.
