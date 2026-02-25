# Puffer Advantage Academy

This repository hosts a static learning website and is configured to publish via **GitHub Pages**.

## Publishing setup

- Deployment is automated by GitHub Actions using `.github/workflows/deploy-pages.yml`.
- Every push to `main` triggers a new Pages deployment.
- A `.nojekyll` file is included so all static assets are served as-is.

## One-time GitHub repo settings

1. Open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually) to publish.

After deployment, your site will be available at:

- `https://<your-github-username>.github.io/<repository-name>/`
