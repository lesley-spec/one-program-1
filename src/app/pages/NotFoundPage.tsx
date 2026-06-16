import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-foreground mb-4">404 - Page Not Found</h1>
        <p className="text-muted-foreground mb-6 font-['Sarabun',sans-serif] text-[length:var(--text-base)]">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-accent text-accent-foreground rounded-[var(--radius-sm)] font-['Sarabun',sans-serif] font-[var(--font-weight-medium)] hover:opacity-90 transition-opacity"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
