import { UploadCloud, FileText, CheckCircle2 } from 'lucide-react';

/**
 * File Upload Component.
 * Handles the UI and logic for uploading a resume PDF.
 * @param {Object} props - Component props.
 * @param {File | null} props.file - The currently selected file.
 * @param {function} props.onFileChange - Handler for file selection changes.
 * @returns {JSX.Element} The rendered FileUpload component.
 */
const FileUpload = ({ file, onFileChange }) => {
    return (
        <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-1 shadow-sm transition-all hover:shadow-md">
            <div className="relative flex h-full flex-col rounded-[20px] bg-slate-50/50 p-6 md:p-8">

                <div className="mb-6 flex items-center justify-between">
                    <h2 className="flex items-center gap-2.5 text-lg font-bold text-slate-800">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600">1</span>
                        Upload Resume
                    </h2>
                    {file && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                </div>

                <label
                    htmlFor="file-upload"
                    className={`relative flex flex-1 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed transition-all duration-300 ${file
                        ? 'border-blue-500/50 bg-blue-50/50'
                        : 'border-slate-300 hover:border-blue-400 hover:bg-white'
                        }`}
                >
                    <div className="flex flex-col items-center justify-center py-10 text-center">
                        {file ? (
                            <div className="animate-in fade-in zoom-in duration-300">
                                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                                    <FileText className="h-8 w-8 text-blue-600" />
                                </div>
                                <p className="max-w-[200px] truncate text-sm font-semibold text-slate-700">
                                    {file.name}
                                </p>
                                <p className="mt-1 text-xs text-blue-600">Click to replace</p>
                            </div>
                        ) : (
                            <div className="group-hover:translate-y-[-2px] transition-transform duration-300">
                                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600 ring-4 ring-blue-50/50">
                                    <UploadCloud className="h-7 w-7" />
                                </div>
                                <p className="text-sm font-medium text-slate-600">
                                    <span className="text-blue-600 hover:underline">Click to upload</span> PDF
                                </p>
                                <p className="mt-1 text-xs text-slate-400">Max size 10MB</p>
                            </div>
                        )}
                    </div>
                    <input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        accept="application/pdf"
                        onChange={onFileChange}
                    />
                </label>
            </div>
        </div>
    );
};

export default FileUpload;