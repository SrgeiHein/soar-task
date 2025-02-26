import React, { useState } from "react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("edit-profile");

  const tabs = [
    { id: "edit-profile", label: "Edit Profile" },
    { id: "preferences", label: "Preferences" },
    { id: "security", label: "Security" },
  ];

  return (
    <div className="p-6">
      <div className="bg-white rounded-[20px]">
        {/* Tabs */}
        <div className="md:px-8 border-b border-gray-100">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-5 px-1 relative ${
                  activeTab === tab.id
                    ? "text-[#232323] font-semibold"
                    : "text-[#B1B1B1]"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#232323]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Edit Profile Content */}
        {activeTab === "edit-profile" && (
          <div className="p-8">
            <div className="max-w-full">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 lg:max-w-[10rem] flex justify-center md:justify-start">
                  <div className="h-20 w-20 rounded-full overflow-hidden">
                    <img
                      src="/assets/bigProfile.png"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-[#232323] font-[16px] mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 text-[#718EBF] placeholder:text-[#718EBF]/50"
                        placeholder="Charlene Reed"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#232323] font-[16px] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 text-[#718EBF] placeholder:text-[#718EBF]/50"
                        placeholder="charlenereed@gmail.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#232323] font-[16px] mb-2">
                        Date of Birth
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 text-[#718EBF] placeholder:text-[#718EBF]/50"
                        placeholder="25 January 1990"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#232323] font-[16px] mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 text-[#718EBF] placeholder:text-[#718EBF]/50"
                        placeholder="San Jose, California, USA"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#232323] font-[16px] mb-2">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 text-[#718EBF] placeholder:text-[#718EBF]/50"
                        placeholder="45962"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-[#232323] font-[16px] mb-2">
                        User Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 text-[#718EBF] placeholder:text-[#718EBF]/50"
                        placeholder="Charlene Reed"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#232323] font-[16px] mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 text-[#718EBF] placeholder:text-[#718EBF]/50"
                        placeholder="********"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#232323] font-[16px] mb-2">
                        Present Address
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 text-[#718EBF] placeholder:text-[#718EBF]/50"
                        placeholder="San Jose, California, USA"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#232323] font-[16px] mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 text-[#718EBF] placeholder:text-[#718EBF]/50"
                        placeholder="San Jose"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#232323] font-[16px] mb-2">
                        Country
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 text-[#718EBF] placeholder:text-[#718EBF]/50"
                        placeholder="USA"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:justify-end mt-6">
                <button className="w-full md:w-auto bg-[#1B1D21] text-white px-20 py-2.5 rounded-xl hover:bg-[#2D2F33] transition-colors font-medium">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Preferences Content */}
        {activeTab === "preferences" && (
          <div className="py-6 h-full">
            <div className="max-w-3xl">
              <h3 className="text-lg font-semibold text-[#232323] mb-6">
                Preferences
              </h3>
              {/* Add preferences content here */}
            </div>
          </div>
        )}

        {/* Security Content */}
        {activeTab === "security" && (
          <div className="py-6 h-full">
            <div className="max-w-3xl ">
              <h3 className="text-lg font-semibold text-[#232323] mb-6">
                Security Settings
              </h3>
              {/* Add security content here */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
