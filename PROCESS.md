# PROCESS FLOW DOCUMENTATION

## 1. Architecture

### Folder Structure Rationale

The project follows a **component-driven architecture** aligned with React best practices.

src/
├── components/
│ ├── Navbar.jsx
│ ├── Hero.jsx
│ ├── About.jsx
│ ├── Skills.jsx
│ ├── Projects.jsx
│ └── Contact.jsx
├── App.jsx
└── main.jsx


**Why this structure was chosen:**

- **Separation of Concerns:**  
  Each UI section is isolated into its own component, improving maintainability and readability.

- **Scalability:**  
  New sections or features can be added without impacting existing components.

- **Reusability:**  
  Components such as cards, sections, and layout patterns can be reused or refactored easily.

- **Industry Alignment:**  
  This mirrors real-world frontend project organization used in production React applications.

---

## 2. AI Usage

### Purpose of AI Assistance
AI tools (Gemini / AI agents) were used **only as a development accelerator**, not as a replacement for understanding orimplementation.

### Example Prompts Used

### Lighthouse Performance Optimization Prompts

AI assistance was specifically used to improve **Lighthouse scores** (Performance, Accessibility, Best Practices, SEO) in a measurable way.

#### Prompt 1 – Lighthouse Performance Improvement

My React + Vite portfolio has a Lighthouse performance score below 90.
Analyze common issues such as unused JavaScript, render-blocking resources,
and layout shifts. Suggest optimizations that do not require new libraries.


**Applied Improvements:**
- Removed unused components and imports
- Eliminated unnecessary animations affecting main thread
- Reduced bundle size by simplifying logic
- Verified CLS = 0 by stabilizing layout dimensions

---

#### Prompt 2 – Accessibility Fixes

Lighthouse shows accessibility warnings for buttons and links
without discernible names. How do I fix this in React
without changing UI design?


**Applied Improvements:**
- Added accessible text labels to icon-only links
- Ensured anchor elements had meaningful `href` targets
- Improved semantic structure of sections

---

#### Prompt 3 – SEO & Best Practices

My Lighthouse SEO score is below 100.
What minimal changes should I make in a React portfolio
to improve indexing and best practices?


**Applied Improvements:**
- Added proper meta tags (title, description)
- Ensured crawlable structure
- Fixed invalid `robots.txt` warnings during preview
- Verified heading hierarchy (H1 → H2)

---

#### Result
After applying these optimizations:

- **Performance:** 100
- **Accessibility:** 84+
- **Best Practices:** 100
- **SEO:** 91+

These changes were validated using **Lighthouse in Chrome DevTools (production preview)**.

## 3. Challenges Faced and Resolution

### Challenge: Dark Mode Toggle Causing Inconsistent UI State
While implementing a dark mode toggle using Tailwind CSS and localStorage, the UI state became inconsistent across reloads. In some cases, the toggle icon did not reflect the actual theme applied, and Lighthouse reported unnecessary JavaScript execution.

**Root Cause:**
- Theme state was being managed both in React state and directly via DOM manipulation.
- This caused redundant logic and synchronization issues during initial render.

**Solution:**
- Simplified the implementation by removing the dark mode toggle entirely.
- Retained a single default theme to reduce complexity and avoid UX inconsistencies.
- This decision reduced JavaScript execution, improved maintainability, and contributed to a higher Lighthouse performance score.

**Outcome:**
- Cleaner codebase
- Predictable UI behavior
- Improved performance and best practices score
