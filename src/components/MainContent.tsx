import React from 'react';

const MainContent: React.FC = () => {
  return (
    <main className="flex-1 p-6 bg-gray-50">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">My Cards</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Card placeholders */}
          <div className="bg-blue-600 text-white p-6 rounded-xl">
            <div className="mb-4">
              <div className="text-sm opacity-80">Balance</div>
              <div className="text-2xl font-bold">$5,756</div>
            </div>
            <div className="text-sm">**** **** **** 1234</div>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl">
            <div className="mb-4">
              <div className="text-sm text-gray-600">Balance</div>
              <div className="text-2xl font-bold text-gray-800">$5,756</div>
            </div>
            <div className="text-sm text-gray-600">**** **** **** 1234</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
