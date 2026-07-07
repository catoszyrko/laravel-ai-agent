export default function Header() {
    return (
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <h1 className="text-3xl font-bold text-slate-900">
            Laravel AI Reviewer
          </h1>
  
          <p className="mt-2 text-slate-600">
            AI-powered code reviews for Laravel and PHP applications.
          </p>
        </div>
      </header>
    );
  }