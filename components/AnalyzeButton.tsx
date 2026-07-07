interface AnalyzeButtonProps {
    loading: boolean;
    onClick: () => void;
  }
  
  export default function AnalyzeButton({
    loading,
    onClick,
  }: AnalyzeButtonProps) {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={loading}
        className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Reviewing..." : "Review Code"}
      </button>
    );
  }