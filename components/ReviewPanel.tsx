export default function ReviewPanel() {
    return (
      <section className="rounded-lg border border-slate-300 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">
          Review Results
        </h2>
  
        <p className="text-slate-500">
          No review yet. Paste your code and click{" "}
          <strong>Review Code</strong>.
        </p>
      </section>
    );
  }