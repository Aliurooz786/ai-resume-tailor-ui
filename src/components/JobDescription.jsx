/**
 * Job Description Input Component
 * Text area for pasting JD content.
 */
const JobDescription = ({ jobDescription, setJobDescription }) => {
    return (
        <div className="h-full rounded-2xl border border-slate-200 bg-white p-1 shadow-sm transition-all hover:shadow-md">
            <div className="flex h-full flex-col rounded-xl bg-slate-50/50 p-4">

                <div className="mb-2">
                    <h2 className="flex items-center gap-2 text-base font-bold text-slate-800">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-violet-100 text-sm text-violet-600">2</span>
                        Job Description
                    </h2>
                </div>

                <textarea
                    className="flex-1 w-full resize-none rounded-lg border border-slate-200 bg-white p-3 text-xs leading-relaxed text-slate-700 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 transition-all"
                    placeholder="Paste the target Job Description here..."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    style={{ minHeight: '120px' }}
                />

                <div className="mt-2 flex justify-end">
                    <span className="text-[10px] font-medium text-slate-400">
                        {jobDescription.length} chars
                    </span>
                </div>
            </div>
        </div>
    );
};

export default JobDescription;