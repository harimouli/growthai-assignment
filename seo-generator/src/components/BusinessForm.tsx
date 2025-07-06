
import { useState } from "react";
import { Building, MapPin, Search, AlertCircle } from "lucide-react";

interface BusinessFormProps {
  onSubmit: (data: { name: string; location: string }) => void;
  isLoading: boolean;
}

const BusinessForm = ({ onSubmit, isLoading }: BusinessFormProps) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [locationTouched, setLocationTouched] = useState(false);
  const [nameError, setNameError] = useState("");
  const [locationError, setLocationError] = useState("");

  const validateName = (value: string) => {
    if (!value.trim()) return "Business name is required";
    if (value.length < 2) return "Must be at least 2 characters";
    if (value.length > 100) return "Must be under 100 characters";
    return "";
  };

  const validateLocation = (value: string) => {
    if (!value.trim()) return "Location is required";
    if (value.length < 2) return "Must be at least 2 characters";
    if (value.length > 100) return "Must be under 100 characters";
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameErr = validateName(name);
    const locErr = validateLocation(location);

    setNameError(nameErr);
    setLocationError(locErr);
    setNameTouched(true);
    setLocationTouched(true);

    if (!nameErr && !locErr) {
      onSubmit({ name: name.trim(), location: location.trim() });
    }
  };

  const isValid = !nameError && !locationError && name.trim() && location.trim();

  const getInputClasses = (touched: boolean, error: string) => {
    const  base = "w-full pl-10 pr-4 py-2 border rounded-md text-sm focus:outline-none transition ";
    if (error) return base + "border-red-400 focus:ring-red-500";
    if (touched && !error) return base + "border-green-400 focus:ring-green-500";
    return base + "border-gray-300 focus:ring-blue-500";
  };

  return (
    <div className="bg-white p-8 rounded-md border border-gray-200 shadow-sm">
      <div className="text-center mb-4">
        <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full mb-2">
          <Building className="w-5 h-5 text-blue-600" />
        </div>
        <h2 className="text-base font-semibold text-gray-800">Business Analysis</h2>
        <p className="text-xs text-gray-500">Enter business details for SEO insights</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
       
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Business Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (nameTouched) setNameError(validateName(e.target.value));
              }}
              onBlur={() => {
                setNameTouched(true);
                setNameError(validateName(name));
              }}
              className={getInputClasses(nameTouched, nameError)}
              placeholder="Enter business name"
              disabled={isLoading}
            />
          </div>
          {nameError && (
            <p className="text-xs text-red-600 mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" /> {nameError}
            </p>
          )}
        </div>

        {/* Location */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Location <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                if (locationTouched) setLocationError(validateLocation(e.target.value));
              }}
              onBlur={() => {
                setLocationTouched(true);
                setLocationError(validateLocation(location));
              }}
              className={getInputClasses(locationTouched, locationError)}
              placeholder="Enter location"
              disabled={isLoading}
            />
          </div>
          {locationError && (
            <p className="text-xs text-red-600 mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" /> {locationError}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isLoading || !isValid}
          className="w-full flex items-center justify-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 py-2 rounded-md disabled:opacity-50 transition"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <Search className="w-4 h-4" />
              <span>Analyze</span>
            </>
          )}
        </button>

        {!isValid && (nameTouched || locationTouched) && (
          <p className="text-center text-xs text-gray-500 mt-1">
            Please fill in all required fields correctly
          </p>
        )}
      </form>
    </div>
  );
};

export default BusinessForm;
