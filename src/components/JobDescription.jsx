import { Briefcase } from 'lucide-react';

/**
 * Job Description Input Component.
 * Allows the user to paste the target job description.
 * @param {Object} props - Component props.
 * @param {string} props.jobDescription - The current job description text.
 * @param {function} props.setJobDescription - State setter for job description.
 * @returns {JSX.Element} The rendered JobDescription component.
 */
const JobDescription = ({ jobDescription, setJobDescription }) => {
    return (
        <div className="h-full rounded-3xl border border-slate-200 bg-white p-1 shadow-sm transition-all hover:shadow-md">
            <div className="flex h-full flex-col rounded-[20px] bg-slate-50/50 p-6 md:p-8">

                <div className="mb-4">
                    <h2 className="flex items-center gap-2.5 text-lg font-bold text-slate-800">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 text-violet-600">2</span>
                        Job Description
                    </h2>
                </div>

                <textarea
                    className="flex-1 w-full resize-none rounded-xl border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-700 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 transition-all"
                    placeholder="Paste the target Job Description here..."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    rows={10}
                />

                <div className="mt-3 flex justify-end">
                    <span className="text-xs font-medium text-slate-400">
                        {jobDescription.length} characters
                    </span>
                </div>
            </div>
        </div>
    );
};

export default JobDescription;