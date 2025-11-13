import React from 'react';

const HostingExpired: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-10 shadow-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Hosting Service Expired
        </h1>
        <p className="text-lg text-slate-100 mb-6">
          This website is currently unavailable because the hosting plan has expired.
        </p>
        <p className="text-slate-200">
          Please contact your developer to renew the hosting service and restore access.
        </p>
      </div>
    </div>
  );
};

export default HostingExpired;
