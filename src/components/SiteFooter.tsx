export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600">
        <p className="font-medium">Rutherford, Shirlaw &amp; Denholm Ltd</p>
        <p className="mt-1">Scotch whisky advisory · Prestige bottlings · Export brand building</p>
        <p className="mt-3 text-slate-500">© {new Date().getFullYear()} RSD Whisky. All rights reserved.</p>
      </div>
    </footer>
  );
}
