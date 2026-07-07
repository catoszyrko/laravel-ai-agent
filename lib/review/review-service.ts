import { ReviewResult } from "@/types/review";

export async function reviewCode(
  code: string
): Promise<ReviewResult> {
    return {
        score: 90,
        summary: "",
        findings: []
    }
}