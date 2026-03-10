# Figma Make: Actionable Steps to Fix SPA Routing in Preview

## Problem summary

The project uses **React Router** (BrowserRouter) with two routes: `/` (landing) and `/palate` (flavor profile). In Figma Make’s preview, clicking “Your Palate” in the nav does **not** show the `/palate` page: it either does nothing, redirects to the homepage, or throws “router context” errors depending on how navigation is implemented.

## Root causes (what Figma Make should fix)

### 1. Preview does not run the real app entry (Router context missing)

- **Symptom:** Using React Router’s `<Link to="/palate">` causes errors like “router context not available” or “useNavigate() may be used only in the context of a Router”.
- **Cause:** Preview is likely rendering a single route component (e.g. `App` or `Navigation`) **without** the root that wraps the app in `<BrowserRouter>` (e.g. the `main.tsx` that does `createRoot(...).render(<BrowserRouter>...</BrowserRouter>)`).
- **Fix:** Preview must run the **actual app entry** (e.g. `src/main.tsx`) so that the whole tree is wrapped in `BrowserRouter`. Do not render route-level components in isolation when they (or their children) use `Link`, `useNavigate`, or `useLocation`.

### 2. Preview server does not support SPA fallback (full-page nav breaks)

- **Symptom:** Replacing `Link` with plain `<a href="/palate">` causes a full page load; the user then lands back on `/` or sees a blank/404 page instead of the `/palate` content.
- **Cause:** For a request to `/palate`, the preview server is not returning the same `index.html` that loads the SPA. So the browser loads a different (or missing) document and the React app never mounts with the `/palate` route.
- **Fix:** Configure the preview dev/server so that **all routes** (e.g. `/`, `/palate`, and any other client-side paths) serve the **same** `index.html` (the one that loads the app’s JS/CSS). Let the client-side router (React Router) handle which component to show based on the URL. This is standard “SPA fallback” or “history fallback” behavior (e.g. in Vite: `server.historyApiFallback` or equivalent).

### 3. Base URL / asset path (if preview is hosted in a subpath)

- If the preview is served from a path like `https://preview.figmamake.com/project/xyz/`, the app’s “root” is that path, not `/`. Then `/palate` might resolve to the wrong place.
- **Fix:** Either:
  - Serve the preview at the app root (e.g. `.../project/xyz/` with no path after it), and use `/palate` as the path, or
  - Set the app’s base URL (e.g. Vite’s `base`) and React Router’s `basename` to that subpath so that links and router match the preview URL.

## Actionable checklist for Figma Make

1. **Run the real entry in preview**
   - [ ] Ensure the preview builds and runs the project’s **entry file** (e.g. `src/main.tsx` for this Vite + React app), not individual route components.
   - [ ] Ensure the root component tree includes the same `BrowserRouter` (or equivalent) that wraps `<Routes>` and `<Route path="/" />`, `<Route path="/palate" />`, etc.

2. **SPA fallback in preview server**
   - [ ] For any GET request to a path that does not match a static asset (e.g. `/palate`, `/anything`), respond with the **same** `index.html` that loads the SPA.
   - [ ] Verify: opening `https://preview-url/palate` directly in a new tab shows the `/palate` page (flavor profile), not the homepage or 404.

3. **No router context in component-only preview (if offered)**
   - [ ] If Figma Make has a “component preview” that renders a single component without the app shell, either:
     - Don’t render components that use `Link` / `useNavigate` / `useLocation` in that mode, or
     - In that mode, wrap the component in a minimal Router (e.g. `MemoryRouter` or `BrowserRouter`) and a single `<Routes><Route path="*" element={<Component />} /></Routes>` so that Link/navigate still work.

4. **Documentation**
   - [ ] Document that preview supports client-side routing and that the app’s entry (with Router) is what runs.
   - [ ] Document any base URL / subpath requirements if preview URLs use a prefix.

## How to verify the fix

- Open the project in Figma Make preview.
- Click “Your Palate” in the navigation bar.
- **Expected:** The view updates to the flavor profile page (charts, constellation, chatbot, etc.) **without** a full page reload, and the URL is `.../palate`.
- **Also:** Opening `.../palate` in a new tab should show the same flavor profile page, not the landing page or an error.

---

## Alternative solution for Figma Make to implement

If fixing the preview to run the real app entry and support SPA fallback is not feasible in the short term, Figma Make can support multi-page behavior in another way:

### Option A: Support “view” / state-based navigation in preview

- **Idea:** When the preview runs the app, ensure the **root component tree is mounted once** and stays mounted. Apps that use **in-app state** (e.g. a `view` or `currentPage` state in the root) to switch between “home” and “palate” will then work: clicking “Your Palate” calls `setView('palate')`, the root re-renders, and shows the palate page. No router context and no server round-trip are required.
- **What Figma Make must do:** Run the project’s **entry file** (e.g. `src/main.tsx`) so that the root component (the one that holds this state and renders either home or palate) is the single mount point. Do not re-mount or replace the root on interaction; do not render only a single route component in isolation when the design includes navigation to another “page.”
- **Result:** “Your Palate” and “PALATE” (home) work by updating React state; the URL may stay the same or use a hash (`#/`, `#/palate`) if the app syncs state with the hash.

### Option B: Provide a minimal Router wrapper in component preview

- **Idea:** When Figma Make offers a “component preview” that renders a single component (e.g. `App` or `Navigation`) without the full app shell, provide an option to wrap that component in a **Router** so that `Link` and `useNavigate` work.
- **What Figma Make must do:** In that preview mode, wrap the component in a Router (e.g. `MemoryRouter` or `BrowserRouter`) and a catch-all route, e.g. `<MemoryRouter><Routes><Route path="*" element={<Component />} /></Routes></MemoryRouter>`, so that any `Link` or `useNavigate` inside the component has a valid router context. Optionally set the initial URL (e.g. `initialEntries={['/palate']}`) so that “page” previews work.

### Option C: Document and support hash-based URLs in preview

- **Idea:** Use hash-based routes (e.g. `#/`, `#/palate`) so that no server-side SPA fallback is required. The server always serves the same `index.html`; the hash is client-only.
- **What Figma Make must do:** (1) Ensure the preview **entry** runs (so the app that listens to `hashchange` / reads `window.location.hash` is mounted). (2) Ensure that when the user clicks a link like `<a href="#/palate">`, the **same document** stays loaded (no full reload) and the app’s JavaScript runs and reacts to the new hash. Today, either the entry is not run (so no listener) or the link triggers a full load that doesn’t preserve the SPA. Fixing (1) and (2) would make hash routing work without history fallback.

Implementing **Option A** and/or **Option C** would make “Your Palate” work in preview even before full React Router + SPA fallback support is added.

---

**Stack for reference:** React, Vite. This project now uses **state-based navigation** (no React Router in the tree): a root component holds `view: 'home' | 'palate'` and renders either the landing app or the palate page. Hash (`#/`, `#/palate`) is kept in sync for shareable links. React Router has been removed so that navigation works in Figma Make’s preview without router context or SPA fallback.
