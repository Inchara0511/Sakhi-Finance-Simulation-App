import { useNavigate } from 'react-router';
import { Mic } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function SplashScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 flex flex-col items-center justify-center p-6">
      <div className="flex flex-col items-center gap-8 max-w-sm">
        {/* App Logo/Illustration */}
        <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-white">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1762766515870-be360744415b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBydXJhbCUyMHdvbWFuJTIwc21pbGluZyUyMHBvcnRyYWl0JTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzcwNDUzNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="SakhiFinance"
            className="w-full h-full object-cover"
          />
        </div>

        {/* App Name */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-pink-600 mb-2">SakhiFinance</h1>
          <p className="text-xl text-purple-600">Your Voice Finance Saathi</p>
        </div>

        {/* Start Button */}
        <button
          onClick={() => navigate('/home')}
          className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-12 py-6 rounded-full text-2xl font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center gap-3 hover:scale-105"
        >
          <Mic className="w-8 h-8" />
          Start
        </button>
      </div>
    </div>
  );
}
