import PhpCodeEditor from "./PhpCodeEditor";
import AnalyzeButton from "./AnalyzeButton";
import ReviewPanel from "./ReviewPanel";

export default function ReviewWorkspace() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-6 p-6">
      <PhpCodeEditor />

      <div className="flex justify-end">
        <AnalyzeButton />
      </div>

      <ReviewPanel />
    </section>
  );
}