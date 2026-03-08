/_ ═══════════════════════════════════════════════════════════════════════════
DARK MODE IMPLEMENTATION EXAMPLES
Apply these patterns across all components for consistent theme support
═══════════════════════════════════════════════════════════════════════════ _/

/_ ── Main Layout Wrapper (Hero, About, Projects sections) ──────── _/

<main className="min-h-screen bg-white dark:bg-slate-950 text-slate dark:text-slate-100 transition-colors duration-150">
  {/* Background & text colors automatically adapt */}
</main>

/_ ── Section with Blueprint Background ──────────── _/

<section className="py-20 bg-offwhite dark:bg-slate-900 blueprint-bg transition-colors duration-150">
  {/* Grid background automatically adapts via CSS in index.css */}
</section>

/_ ── Card Component ────────────────────────────── _/

<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm dark:shadow-lg shadow-slate-400/5 hover:shadow-md dark:hover:shadow-slate-400/10 transition-all duration-150">
  <h3 className="text-slate dark:text-slate-100 font-heading font-bold text-lg">Title</h3>
  <p className="text-slate/70 dark:text-slate-300 text-sm mt-2">Description</p>
</div>

/_ ── Text Hierarchy ────────────────────────────── _/

<div>
  <h1 className="text-slate dark:text-white font-heading font-bold text-4xl">Heading (contrast 9:1)</h1>
  <p className="text-slate/70 dark:text-slate-300 text-base">Body text (contrast 4.5:1)</p>
  <span className="text-slate/50 dark:text-slate-400 text-xs">Secondary text (contrast 4.5:1)</span>
</div>

/_ ── Interactive Elements ──────────────────────── _/
<button className="bg-accent hover:bg-orange-600 text-white dark:text-slate-950 px-6 py-2.5 rounded-full transition-colors duration-150">
{/_ Use opacity on dark background for better OLED performance _/}
</button>

<input 
  type="text"
  className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate dark:text-slate-100 px-4 py-2 rounded-lg focus:ring-2 focus:ring-accent dark:focus:ring-accent transition-colors duration-150"
/>

/_ ── Navigation & Links ────────────────────────── _/

<nav className="text-slate/70 dark:text-slate-300 hover:text-accent dark:hover:text-accent transition-colors duration-150">
  Link
</nav>

/_ ── Overlay / Modal ───────────────────────────── _/

<div className="fixed inset-0 bg-black/50 dark:bg-black/80 backdrop-blur-sm transition-colors duration-150">
  <div className="bg-white dark:bg-slate-900 rounded-2xl">
    {/* Content */}
  </div>
</div>

/_ ═══════════════════════════════════════════════════════════════════════════
COLOR PALETTE (WCAG AA Compliant - 4.5:1 Contrast Minimum)
═══════════════════════════════════════════════════════════════════════════ _/

/_ Light Mode _/
bg-white /_ #FFFFFF - Background _/
text-slate /_ #1E293B - Primary text _/
text-slate/70 /_ Reduced opacity - Secondary text _/
bg-offwhite /_ #F3F4F6 - Section backgrounds _/
border-slate-200 /_ #E2E8F0 - Borders _/

/_ Dark Mode _/
dark:bg-slate-950 /_ #0f172a - Background (OLED-friendly, not pure #000) _/
dark:text-slate-100 /_ #E2E8F0 - Primary text (not pure white) _/
dark:text-slate-300 /_ #CBD5E1 - Secondary text _/
dark:text-slate-400 /_ #94A3B8 - Tertiary text _/
dark:bg-slate-900 /_ #18181b - Section backgrounds _/
dark:border-slate-700 /_ #334155 - Borders _/

/_ ═══════════════════════════════════════════════════════════════════════════
KEY PERFORMANCE NOTES
═══════════════════════════════════════════════════════════════════════════ _/
/\*

1. Use `transition-colors duration-150` on interactive elements
2. Only transition `color` and `background-color` (not layout properties)
3. Dark classes use slate-950 (#0f172a) instead of pure black to reduce OLED mura
4. All color pairs meet WCAG AA minimum contrast 4.5:1 requirement
5. Theme-color meta tag updates automatically via ThemeToggle component
6. Zero JavaScript re-renders - all via CSS class toggling on html element
7. Inline blocking script prevents FOIT on initial load
   \*/
