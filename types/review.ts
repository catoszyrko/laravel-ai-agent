export type Severity =
    | "critical"
    | "warning"
    | "info";

export type FindingCategory =
    | "solid"
    | "security"
    | "performance"
    | "testing"
    | "laravel"
    | "clean-code";

export interface ReviewFinding {
    severity: Severity;
    category: FindingCategory;
    title: string;
    description: string;
    recommendation: string;
}

export interface ReviewResult {
    score: number; // 0-100
    summary: string;
    findings: ReviewFinding[];
}