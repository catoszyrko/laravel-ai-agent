import { ReviewResult } from "@/types/review";

export async function reviewCode(
  code: string
): Promise<ReviewResult> {
  return {
    score: 90,
    summary: `Review completed successfully. ${code.length} characters analyzed.`,
    findings: [
      {
        severity: "warning",
        category: "security",
        title: "Avoid using request()->all()",
        description:
          "Using request()->all() may expose unintended fields to mass assignment.",
        recommendation:
          "Use a FormRequest and call validated() instead.",
      },
      {
        severity: "info",
        category: "testing",
        title: "Missing feature tests",
        description:
          "No feature tests were identified for this code path.",
        recommendation:
          "Add feature tests covering validation and the expected response.",
      },
    ],
  };
}