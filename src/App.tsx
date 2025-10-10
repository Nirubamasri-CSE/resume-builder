import { useState } from 'react';
import { FileText, PlusCircle, User } from 'lucide-react';
import ResumeForm from './components/ResumeForm';
import ResumeView from './components/ResumeView';
import { nirubamaResume } from './data/sampleResume';
import { ResumeData } from './types/resume';

type View = 'home' | 'create' | 'preview' | 'sample';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);

  const handleFormSubmit = (data: ResumeData) => {
    setResumeData(data);
    setCurrentView('preview');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {currentView === 'home' && (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">Resume Builder</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Create professional, customizable resumes in minutes. Build your resume or view a sample.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
            <button
              onClick={() => setCurrentView('create')}
              className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
                  <PlusCircle className="text-blue-600" size={32} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Create Resume</h2>
                <p className="text-slate-600">Build your professional resume from scratch</p>
              </div>
            </button>

            <button
              onClick={() => setCurrentView('sample')}
              className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition">
                  <User className="text-green-600" size={32} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">View Sample</h2>
                <p className="text-slate-600">See a complete resume example</p>
              </div>
            </button>

            <button
              onClick={() => {
                setResumeData(nirubamaResume);
                setCurrentView('create');
              }}
              className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-200 transition">
                  <FileText className="text-amber-600" size={32} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Edit Sample</h2>
                <p className="text-slate-600">Start with a pre-filled template</p>
              </div>
            </button>
          </div>
        </div>
      )}

      {currentView === 'create' && (
        <div className="py-8">
          <div className="max-w-4xl mx-auto px-4 mb-6">
            <button
              onClick={() => {
                setCurrentView('home');
                setResumeData(null);
              }}
              className="text-slate-600 hover:text-slate-900 font-medium"
            >
              ← Back to Home
            </button>
          </div>
          <ResumeForm onSubmit={handleFormSubmit} initialData={resumeData || undefined} />
        </div>
      )}

      {currentView === 'preview' && resumeData && (
        <div className="py-8">
          <div className="max-w-5xl mx-auto px-4 mb-6 print:hidden flex justify-between items-center">
            <button
              onClick={() => setCurrentView('create')}
              className="text-slate-600 hover:text-slate-900 font-medium"
            >
              ← Edit Resume
            </button>
            <div className="flex gap-4">
              <button
                onClick={handlePrint}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Download PDF
              </button>
              <button
                onClick={() => setCurrentView('home')}
                className="px-6 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-700 transition"
              >
                Home
              </button>
            </div>
          </div>
          <ResumeView data={resumeData} />
        </div>
      )}

      {currentView === 'sample' && (
        <div className="py-8">
          <div className="max-w-5xl mx-auto px-4 mb-6 print:hidden flex justify-between items-center">
            <button
              onClick={() => setCurrentView('home')}
              className="text-slate-600 hover:text-slate-900 font-medium"
            >
              ← Back to Home
            </button>
            <button
              onClick={handlePrint}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Download PDF
            </button>
          </div>
          <ResumeView data={nirubamaResume} />
        </div>
      )}
    </div>
  );
}

export default App;