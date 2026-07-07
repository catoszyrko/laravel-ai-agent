import { ReviewResult } from "@/types/review";

interface ReviewPanelProps {
  review: ReviewResult | null;
}

export default function ReviewPanel({
  review,
}: ReviewPanelProps) {
  if (!review) {
    return (
      <section className="rounded-lg border border-slate-300 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">
          Review Results
        </h2>

        <p>No review yet.</p>
      </section>
    );
  }

  return (
    <section className="rounded-lg border border-slate-300 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        Review Results
      </h2>

      <p className="mt-4">
        <strong>Score:</strong> {review.score}
      </p>

      <p className="mt-2">{review.summary}</p>

      <div className="mt-6">
        {review.findings.map((finding, index) => (
          <div
            key={index}
            className="mb-4 rounded border p-4"
          >
            <h3 className="font-semibold">
              {finding.title}
            </h3>

            <p>{finding.description}</p>

            <p className="mt-2 text-sm">
              Recommendation:
              {" "}
              {finding.recommendation}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}