import fs from 'fs';
import path from 'path';

const mappings = {
  // Layout
  "page-container": "max-w-7xl mx-auto w-full",
  // Cards
  "card-sm": "bg-white rounded-xl shadow-md p-4 border border-gray-100",
  "card-md": "bg-white rounded-xl shadow-md p-5 border border-gray-100",
  "card-lg": "bg-white rounded-xl shadow-lg p-6 border border-gray-100",
  "card": "bg-white rounded-xl shadow-md p-6 border border-gray-100",
  // Section
  "section-header": "flex items-center justify-between flex-wrap gap-4 mb-6",
  // Forms
  "form-label": "block text-[13px] font-medium text-gray-700 mb-1.5",
  "form-input": "block w-full h-[38px] px-3 text-sm text-gray-900 bg-white border border-gray-300 rounded-md outline-none transition-all shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed",
  "form-textarea": "block w-full px-3 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-md outline-none transition-all resize-y min-h-[5rem] shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10",
  "form-select": "block w-full h-[38px] pl-3 pr-8 text-sm text-gray-900 bg-white border border-gray-300 rounded-md outline-none shadow-sm transition-all cursor-pointer focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 appearance-none bg-[url('data:image/svg+xml,%3csvg_xmlns=%27http://www.w3.org/2000/svg%27_fill=%27none%27_viewBox=%270_0_20_20%27%3e%3cpath_stroke=%27%236b7280%27_stroke-linecap=%27round%27_stroke-linejoin=%27round%27_stroke-width=%271.5%27_d=%27M6_8l4_4_4-4%27/%3e%3c/svg%3e')] bg-[position:right_0.5rem_center] bg-no-repeat bg-[size:1.25em_1.25em]",
  "form-error": "text-xs text-red-600 mt-1 flex items-center gap-1",
  "form-hint": "text-xs text-gray-500 mt-1",
  "input-error": "border-red-500 focus:border-red-500 focus:ring-red-500/10",
  // Buttons
  "btn": "inline-flex items-center justify-center gap-1.5 text-[13px] font-semibold rounded-md px-3.5 h-9 cursor-pointer transition-all duration-150 whitespace-nowrap border border-transparent outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/20 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed",
  "btn-sm": "h-[30px] px-2.5 text-xs",
  "btn-lg": "h-11 px-5 text-[15px]",
  "btn-primary": "bg-indigo-600 text-white shadow-sm hover:bg-indigo-700",
  "btn-secondary": "bg-white text-gray-700 border border-gray-300 shadow-sm hover:bg-gray-50",
  "btn-danger": "bg-red-50 text-red-600 border border-red-200 hover:bg-red-100",
  "btn-ghost": "bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900",
  "btn-link": "bg-transparent text-indigo-600 border-none p-0 h-auto font-medium hover:text-indigo-700 hover:underline",
  // Badges
  "badge": "inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-full uppercase tracking-wide border whitespace-nowrap",
  "badge-gray": "bg-slate-100 text-slate-600 border-slate-200",
  "badge-blue": "bg-blue-50 text-blue-700 border-blue-200",
  "badge-indigo": "bg-indigo-50 text-indigo-700 border-indigo-200",
  "badge-green": "bg-green-50 text-green-700 border-green-200",
  "badge-yellow": "bg-amber-50 text-amber-700 border-amber-200",
  "badge-red": "bg-red-50 text-red-700 border-red-200",
  "badge-purple": "bg-purple-50 text-purple-700 border-purple-200",
  "badge-orange": "bg-orange-50 text-orange-700 border-orange-200",
  "badge-draft": "bg-slate-100 text-slate-600 border-slate-200",
  "badge-sent": "bg-blue-50 text-blue-700 border-blue-200",
  "badge-viewed": "bg-indigo-50 text-indigo-700 border-indigo-200",
  "badge-accepted": "bg-green-50 text-green-700 border-green-200",
  "badge-rejected": "bg-red-50 text-red-700 border-red-200",
  "badge-approved": "bg-green-50 text-green-700 border-green-200",
  "badge-pending": "bg-amber-50 text-amber-700 border-amber-200",
  "badge-paid": "bg-green-50 text-green-700 border-green-200",
  "badge-overdue": "bg-red-50 text-red-700 border-red-200",
  "badge-active": "bg-green-50 text-green-700 border-green-200",
  "badge-inactive": "bg-slate-100 text-slate-600 border-slate-200",
  "badge-open": "bg-blue-50 text-blue-700 border-blue-200",
  "badge-closed": "bg-slate-100 text-slate-600 border-slate-200",
  "badge-in-progress": "bg-indigo-50 text-indigo-700 border-indigo-200",
  "badge-cancelled": "bg-red-50 text-red-700 border-red-200",
  // Table
  "data-table-wrapper": "bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm",
  "data-table": "w-full border-collapse text-sm",
  // Stats
  "stat-card": "bg-white border border-slate-200 rounded-lg p-5 shadow-sm flex flex-col gap-3 transition-all hover:border-slate-300 hover:shadow-md",
  "divider": "h-px bg-slate-200 border-none my-6 w-full",
  "page-title": "text-2xl font-bold text-slate-900 tracking-tight leading-snug",
  "page-subtitle": "text-sm text-slate-500 mt-1",
  // Icon Inputs
  "input-with-icon": "relative",
  "input-icon": "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-4 h-4",
  "input-icon-right": "pl-3 pr-11",
  "input-icon-right-pos": "left-auto right-3",
  // Sidebar
  "sidebar-nav-item": "flex items-center gap-2.5 px-3 py-2 text-[13px] font-medium text-gray-600 rounded-md transition-all cursor-pointer border border-transparent hover:bg-gray-100 hover:text-gray-900 whitespace-nowrap",
  // Alerts
  "alert": "flex items-start gap-3 px-4 py-3 rounded-md text-sm border",
  "alert-success": "bg-green-50 text-green-700 border-green-200",
  "alert-warning": "bg-amber-50 text-amber-700 border-amber-200",
  "alert-error": "bg-red-50 text-red-700 border-red-200",
  "alert-info": "bg-blue-50 text-blue-700 border-blue-200",
  // Skeleton
  "skeleton": "bg-slate-200 animate-pulse rounded-md",
  // Modal
  "modal-backdrop": "fixed inset-0 bg-black/45 z-50 flex items-center justify-center p-4 backdrop-blur-sm",
  "modal-box": "bg-white rounded-xl border border-slate-200 shadow-xl w-full max-h-[90vh] overflow-y-auto",
  // Tabs
  "tab-list": "flex gap-0 border-b border-slate-200 mb-6",
  "tab-item": "px-4 py-2.5 text-[13px] font-medium text-gray-500 cursor-pointer border-b-2 border-transparent -mb-px transition-all hover:text-gray-900",
  // Empty State
  "empty-state": "flex flex-col items-center justify-center p-12 text-center text-gray-500",
  "empty-state-icon": "w-12 h-12 text-gray-300 mb-4",
  "empty-state-title": "text-[15px] font-semibold text-gray-700 mb-1.5",
  "empty-state-text": "text-[13px] text-gray-400 max-w-md",
  // Avatar
  "avatar": "inline-flex items-center justify-center rounded-full font-semibold text-white shrink-0 bg-indigo-600",
  "avatar-sm": "w-7 h-7 text-[11px]",
  "avatar-md": "w-9 h-9 text-[13px]",
  "avatar-lg": "w-11 h-11 text-[15px]",
  "avatar-xl": "w-14 h-14 text-lg",
  // Dropdown
  "dropdown-menu": "absolute p-1.5 min-w-[10rem] bg-white rounded-lg shadow-lg border border-slate-200 z-10",
  "dropdown-item": "flex items-center gap-2 px-3 py-2 text-[13px] text-gray-700 rounded-md cursor-pointer transition-colors hover:bg-gray-100",
  "destructive": "text-red-600 hover:bg-red-50",
  "kpi-value": "text-3xl font-bold text-slate-900 tracking-tight leading-tight",
  "breadcrumb": "flex items-center gap-1.5 text-[13px] text-gray-500",
  "breadcrumb-active": "text-slate-900 font-medium",
  "stepper-line": "relative before:absolute before:left-[11px] before:top-6 before:bottom-0 before:w-px before:bg-slate-200"
};

const classNamesToReplace = Object.keys(mappings).sort((a, b) => b.length - a.length);

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // A simple strategy is to find `className="..."` or `className={...}` and do string replacement inside.
  // To avoid replacing things outside of className, we can use a regex to match the className attribute.
  const classNameRegex = /className=(["'])(.*?)\1|className=\{([^}]*)\}/g;
  
  content = content.replace(classNameRegex, (match, quote, p2, p3) => {
    if (p2 !== undefined) {
      // It's a standard string className="class1 class2"
      let classes = p2;
      classNamesToReplace.forEach(cls => {
        const regex = new RegExp(`\\b${cls}\\b`, 'g');
        classes = classes.replace(regex, mappings[cls]);
      });
      return `className=${quote}${classes}${quote}`;
    } else if (p3 !== undefined) {
      // It's an expression className={`class1 ${active ? 'class2' : ''}`}
      let expr = p3;
      classNamesToReplace.forEach(cls => {
        const regex = new RegExp(`\\b${cls}\\b`, 'g');
        expr = expr.replace(regex, mappings[cls]);
      });
      return `className={${expr}}`;
    }
    return match;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.tsx') || fullPath.endsWith('.js')) {
      processFile(fullPath);
    }
  }
}

walk(path.join(process.cwd(), 'src'));
console.log('Replacement complete.');
