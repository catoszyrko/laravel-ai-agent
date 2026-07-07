export default function PhpCodeEditor() {
    return (
      <div>
        <label
          htmlFor="php-code"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          PHP Code
        </label>
  
        <textarea
          id="php-code"
          placeholder="Paste your PHP or Laravel code here..."
          className="h-96 w-full rounded-lg border border-slate-300 bg-white p-4 font-mono text-sm shadow-sm focus:border-blue-500 focus:outline-none"
        />
      </div>
    );
  }