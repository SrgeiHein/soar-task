const Settings = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-[#343C6A] mb-6">Settings</h1>

        <div className="space-y-6">
          <div className="border-b pb-4">
            <h2 className="text-lg font-medium text-[#343C6A] mb-4">
              Profile Settings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>
          </div>

          <div className="border-b pb-4">
            <h2 className="text-lg font-medium text-[#343C6A] mb-4">
              Notification Preferences
            </h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="emailNotif"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="emailNotif" className="ml-2 text-gray-700">
                  Email Notifications
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="pushNotif"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="pushNotif" className="ml-2 text-gray-700">
                  Push Notifications
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="bg-[#343C6A] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
