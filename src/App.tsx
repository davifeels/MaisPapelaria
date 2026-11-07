import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { LandingView } from './components/landing/LandingView';
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import { CheckCircle2, Sparkles } from 'lucide-react';

const AppContent: React.FC = () => {
  const { activeView, toastMessage } = useApp();

  return (
    <div className="relative min-h-screen">
      {/* View Switcher */}
      {activeView === 'landing' ? (
        <LandingView />
      ) : (
        <DashboardLayout />
      )}

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-bounce-slow">
          <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <p className="text-xs font-medium text-slate-100 leading-snug">
            {toastMessage}
          </p>
        </div>
      )}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
