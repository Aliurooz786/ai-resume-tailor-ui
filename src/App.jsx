import { useState } from 'react';
import axios from 'axios';
import { Loader2, Wand2, AlertTriangle, RotateCcw } from 'lucide-react';

import Navbar from './components/Navbar';
import FileUpload from './components/FileUpload';
import JobDescription from './components/JobDescription';

/**
 * Main Application Component.
 * Manages state for file upload, job description input, and resume tailoring process.
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  /**
   * Handles file selection and validation.
   * Ensures only PDF files are accepted.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event from the file input.
   */
  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected?.type === 'application/pdf') {
      setFile(selected);
      setStatus('idle');
    } else {
      alert("Only PDF files allowed!");
    }
  };

  /**
   * Resets the application state to its initial values.
   * Clears the selected file, job description, status, and error messages.
   */
  const handleReset = () => {
    setFile(null);
    setJobDescription('');
    setStatus('idle');
    setErrorMessage('');
  };

  /**
   * Submits the resume and job description to the backend for tailoring.
   * Handles the API request, file download, and error states.
   */
  const handleTailorResume = async () => {
    if (!file || !jobDescription) return;

    setStatus('loading');
    const formData = new FormData();
    formData.append('file', file);
    formData.append('jobDescription', jobDescription);

    try {
      const res = await axios.post('http://localhost:8086/api/v1/resume/tailor', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Tailored_Resume.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();

      setStatus('success');
    } catch (err) {
      console.error('Resume tailoring failed:', err);
      setStatus('error');
      setErrorMessage('Backend Error: Make sure API is running on port 8086');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <Navbar />

      {/* Main Content Area */}
      <main className="container mx-auto max-w-6xl px-4 pt-16 pb-32">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Optimize your resume with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">AI Power</span>
          </h1>
          <p className="mt-3 text-base text-slate-600">
            Get a 95%+ ATS Score instantly.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:h-[360px] mb-24">
          <FileUpload file={file} onFileChange={handleFileChange} />
          <JobDescription jobDescription={jobDescription} setJobDescription={setJobDescription} />
        </div>

        {/* Action Area */}
        <div className="flex flex-col items-center justify-center gap-4 mt-12">

          {status === 'error' && (
            <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600 border border-red-100">
              <AlertTriangle className="h-4 w-4" /> {errorMessage}
            </div>
          )}

          <div className="flex items-center gap-4">
            <button
              onClick={handleReset}
              className="flex items-center justify-center h-12 w-12 rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-700 active:scale-95"
              title="Reset All"
            >
              <RotateCcw className="h-5 w-5" />
            </button>

            <button
              onClick={handleTailorResume}
              disabled={status === 'loading' || !file || !jobDescription}
              className="group relative flex items-center gap-3 overflow-hidden rounded-xl bg-slate-900 px-8 py-3 text-base font-semibold text-white shadow-xl transition-all hover:bg-slate-800 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 transition-opacity group-hover:opacity-100" />

              <span className="relative flex items-center gap-2">
                {status === 'loading' ? (
                  <><Loader2 className="animate-spin h-5 w-5" /> Optimizing...</>
                ) : (
                  <><Wand2 className="h-5 w-5" /> Tailor My Resume</>
                )}
              </span>
            </button>
          </div>

          {status === 'success' && (
            <p className="text-sm font-medium text-green-600 animate-bounce">
              Resume downloaded successfully!
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;