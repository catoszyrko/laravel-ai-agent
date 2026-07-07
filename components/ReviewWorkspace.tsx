"use client";

import { useState } from "react";

import AnalyzeButton from "@/components/AnalyzeButton";
import PhpCodeEditor from "@/components/PhpCodeEditor";
import ReviewPanel from "@/components/ReviewPanel";

import { reviewCode } from "@/lib/review/review-service";
import { ReviewResult } from "@/types/review";

export default function ReviewWorkspace() {
  const [code, setCode] = useState("");
  const [review, setReview] = useState<ReviewResult | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleReview() {
    setLoading(true);

    try {
      const result = await reviewCode(code);

      setReview(result);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-6 p-6">
      <PhpCodeEditor
        value={code}
        onChange={setCode}
      />

      <div className="flex justify-end">
        <AnalyzeButton
          loading={loading}
          onClick={handleReview}
        />
      </div>

      <ReviewPanel review={review} />
    </section>
  );
}