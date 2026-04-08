# Atomity — Frontend Engineering Challenge

## 🚀 Live Demo
atomity-frontend-challenge-seven.vercel.app

## 🛠️ Choice & Approach
I chose **Option A** (0:30–0:40) because it effectively demonstrates the bridge between raw data and visual storytelling. My goal was to create a dashboard that feels alive and professional.

### Technical Highlights:
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4 (using the new `@import "tailwindcss"` engine)
- **Animations:** Framer Motion (for staggered list entrances and physics-based bar transitions)
- **Data Fetching:** TanStack Query (React Query) for smart caching and state management.
- **Modern CSS:**
  - `clamp()` for fluid typography (responsive headings).
  - CSS Variables for a clean Design Token architecture.
  - Logical properties for modern layout standards.
  - Responsive design using Tailwind's mobile-first breakpoints.

## 🧠 Approach to Requirements
- **Data Handling:** I used a public API (JSONPlaceholder) and mapped the data to simulate real-world cloud metrics.
- **Caching:** Implemented a 1-minute stale-time to prevent redundant network requests.
- **Surprise Element:** Added a "Savings Potential" card at the bottom with pulse animations to show proactive optimization insights.

## 📦 Installation & Setup
1. Clone the repo: `git clone [YOUR_REPO_URL]`
2. Install dependencies: `npm install`
3. Run dev: `npm run dev`