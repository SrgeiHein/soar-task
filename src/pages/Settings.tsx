import React, { useState, FC } from "react";
import { useForm } from "react-hook-form";
import { FormInputs } from "../types/form";

const Settings: FC = () => {
  const [activeTab, setActiveTab] = useState("edit-profile");
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>(
    "/assets/bigProfile.png"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log(data);
    // Reset form
    reset();
    // Show success message
    setShowSuccess(true);
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const tabs = [
    { id: "edit-profile", label: "Edit Profile" },
    { id: "preferences", label: "Preferences" },
    { id: "security", label: "Security" },
  ];

  return (
    <div className="p-6 bg-[#F3F3F3]">
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
            {showSuccess && (
              <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                <span className="block sm:inline">
                  Your profile has been edited successfully!
                </span>
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="max-w-full">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 lg:max-w-[10rem] flex justify-center md:justify-start">
                    <div className="relative group">
                      <div className="h-20 w-20 rounded-full overflow-hidden">
                        <img
                          src={selectedImage}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <label className="absolute top-[50px] right-[-10px] cursor-pointer  p-1.5 rounded-full transition-colors">
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                        <img
                          src="/assets/edit.png"
                          alt="Edit"
                          className="w-6 h-6"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="space-y-4">
                      <div className="h-[78px]">
                        <label className="block text-sm text-[#232323] font-[16px] mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          className={`w-full px-4 py-2 border ${
                            errors.yourName
                              ? "border-red-500"
                              : "border-gray-200"
                          } rounded-lg focus:outline-none focus:ring-0 text-[#718EBF] placeholder:text-[#718EBF]/50`}
                          placeholder="Charlene Reed"
                          {...register("yourName", {
                            required: "Name is required",
                          })}
                        />
                        {errors.yourName && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.yourName.message}
                          </p>
                        )}
                      </div>
                      <div className="h-[78px]">
                        <label className="block text-sm text-[#232323] font-[16px] mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          className={`w-full px-4 py-2 border ${
                            errors.email ? "border-red-500" : "border-gray-200"
                          } rounded-lg focus:outline-none focus:ring-0 text-[#718EBF] placeholder:text-[#718EBF]/50`}
                          placeholder="charlenereed@gmail.com"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm text-[#232323] font-[16px] mb-2">
                          Date of Birth
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 text-[#718EBF] placeholder:text-[#718EBF]/50"
                          placeholder="25 January 1990"
                          {...register("dateOfBirth")}
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
                          {...register("address")}
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
                          {...register("postalCode")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="space-y-4">
                      <div className="h-[78px]">
                        <label className="block text-sm text-[#232323] font-[16px] mb-2">
                          User Name
                        </label>
                        <input
                          type="text"
                          className={`w-full px-4 py-2 border ${
                            errors.userName
                              ? "border-red-500"
                              : "border-gray-200"
                          } rounded-lg focus:outline-none focus:ring-0 text-[#718EBF] placeholder:text-[#718EBF]/50`}
                          placeholder="Charlene Reed"
                          {...register("userName", {
                            required: "Username is required",
                          })}
                        />
                        {errors.userName && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.userName.message}
                          </p>
                        )}
                      </div>
                      <div className="h-[78px]">
                        <label className="block text-sm text-[#232323] font-[16px] mb-2">
                          Password
                        </label>
                        <input
                          type="password"
                          className={`w-full px-4 py-2 border ${
                            errors.password
                              ? "border-red-500"
                              : "border-gray-200"
                          } rounded-lg focus:outline-none focus:ring-0 text-[#718EBF] placeholder:text-[#718EBF]/50`}
                          placeholder="********"
                          {...register("password", {
                            required: "Password is required",
                            minLength: {
                              value: 8,
                              message: "Password must be at least 8 characters",
                            },
                          })}
                        />
                        {errors.password && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.password.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm text-[#232323] font-[16px] mb-2">
                          Present Address
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 text-[#718EBF] placeholder:text-[#718EBF]/50"
                          placeholder="San Jose, California, USA"
                          {...register("presentAddress")}
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
                          {...register("city")}
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
                          {...register("country")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:justify-end mt-6">
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-[#1B1D21] text-white px-20 py-2.5 rounded-xl hover:bg-[#2D2F33] transition-colors font-medium"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* Preferences Content */}
        {activeTab === "preferences" && (
          <div className="py-6 h-full min-h-[calc(100vh-200px)]">
            <div className="max-w-3xl h-full p-6">
              <h3 className="text-lg font-semibold text-[#232323] mb-6">
                Preferences
              </h3>
              {/* Add preferences content here */}
            </div>
          </div>
        )}

        {/* Security Content */}
        {activeTab === "security" && (
          <div className="py-6 h-full min-h-[calc(100vh-200px)]">
            <div className="max-w-3xl h-full p-6">
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
