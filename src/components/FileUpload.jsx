import { UploadCloud, FileText, CheckCircle2 } from 'lucide-react';

/**
 * File Upload Component
 * Handles Drag & Drop interactions for PDF files.
 */
const FileUpload = ({ file, onFileChange }) => {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-1 shadow-sm transition-all hover:shadow-md h-full">
            <div className="relative flex h-full flex-col rounded-xl bg-slate-50/50 p-4">

                <div className="mb-2 flex items-center justify-between">
                    <h2 className="flex items-center gap-2 text-base font-bold text-slate-800">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-100 text-sm text-blue-600">1</span>
                        Upload Resume
                    </h2>
                    {file && <CheckCircle2 className="h-4 w-4 text-green-500" />}
                </div>

                <label
                    htmlFor="file-upload"
                    className={`relative flex flex-1 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed transition-all duration-300 ${file
                            ? 'border-blue-500/50 bg-blue-50/50'
                            : 'border-slate-300 hover:border-blue-400 hover:bg-white'
                        }`}
                >
                    <div className="flex flex-col items-center justify-center py-4 text-center">
                        {file ? (
                            <div className="animate-in fade-in zoom-in duration-300">
                                <FileText className="mx-auto mb-2 h-8 w-8 text-blue-600" />
                                <p className="max-w-[180px] truncate text-xs font-semibold text-slate-700">
                                    {file.name}
                                </p>
                                <p className="text-[10px] text-blue-600">Click to replace</p>
                            </div>
                        ) : (
                            <div className="group-hover:translate-y-[-2px] transition-transform duration-300">
                                <UploadCloud className="mx-auto mb-2 h-8 w-8 text-slate-400" />
                                <p className="text-xs font-medium text-slate-600">
                                    <span className="text-blue-600 hover:underline">Click upload</span> PDF
                                </p>
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