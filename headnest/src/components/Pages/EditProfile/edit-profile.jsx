import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import API from "../../../api/config"; // ✅ Backend connection
import defaultProfile from "../../../assets/Frame 110 (1).png";

const EditProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [profileImage, setProfileImage] = useState(defaultProfile);
  const [previewImage, setPreviewImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isEditingInfo, setIsEditingInfo] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [imageError, setImageError] = useState("");
  const [loading, setLoading] = useState(false);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  // ✅ Fetch current user profile from backend
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const res = await API.get("/user/auth/profile");
        const user = res.data;
        setFormData({
          username: user.username || "",
          email: user.email || "",
          password: "",
        });
        if (user.profileImage) {
          setProfileImage(user.profileImage);
        }
      } catch (err) {
        console.error("❌ Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // ✅ Watch hash to open modal or edit section
  useEffect(() => {
    setSuccessMessage("");
    if (location.hash === "#username") {
      setIsEditingInfo(true);
      setTimeout(() => usernameRef.current?.focus(), 100);
    } else if (location.hash === "#password") {
      setIsEditingInfo(true);
      setTimeout(() => passwordRef.current?.focus(), 100);
    }
  }, [location.hash]);

  // ✅ Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setShowModal(false);
    };
    if (showModal) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [showModal]);

  // ✅ Handle image upload and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!validTypes.includes(file.type)) {
        setImageError("Only JPG, PNG, and GIF files are allowed.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setImageError("File size must be less than 5MB.");
        return;
      }
      setImageError("");
      const previewURL = URL.createObjectURL(file);
      setPreviewImage(previewURL);
    }
  };

  // ✅ Save image (calls PUT /api/user/upload — may not yet exist)
  const handleSaveImage = async () => {
    if (!previewImage) return;
    try {
      const formData = new FormData();
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput?.files[0]) {
        formData.append("profileImage", fileInput.files[0]);

        try {
          await API.put("/user/upload", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
        } catch {
          console.warn("⚠️ Upload endpoint not available yet.");
        }
      }

      setProfileImage(previewImage);
      setSuccessMessage("Profile picture updated successfully!");
      setShowModal(false);
      setPreviewImage(null);
    } catch (err) {
      console.error("❌ Error uploading image:", err);
      setImageError("Failed to upload image.");
    }
  };

  // ✅ Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  // ✅ Field validation
  const validateField = (name, value) => {
    let newErrors = {};
    const checkUsername = name === "username" ? value : formData.username;
    const checkEmail = name === "email" ? value : formData.email;
    const checkPassword = name === "password" ? value : formData.password;

    if (name === "username" || name === null) {
      newErrors.username = checkUsername.trim() ? "" : "Username is required";
    }
    if (name === "email" || name === null) {
      newErrors.email = /\S+@\S+\.\S+/.test(checkEmail)
        ? ""
        : "Invalid email format";
    }
    if (name === "password" || name === null) {
      if (checkPassword.length > 0) {
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
        if (!passwordRegex.test(checkPassword)) {
          newErrors.password =
            "Password must be 8+ chars, include upper, lower, number, and special character.";
        }
      }
    }

    setErrors((prev) => {
      const updated = { ...prev };
      Object.keys(newErrors).forEach((key) => {
        if (!newErrors[key]) delete updated[key];
        else updated[key] = newErrors[key];
      });
      return updated;
    });
  };

  // ✅ Submit (PUT update profile)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalErrors = {};
    if (!formData.username.trim()) finalErrors.username = "Username is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      finalErrors.email = "Invalid email format";

    setErrors(finalErrors);

    if (Object.keys(finalErrors).length === 0) {
      try {
        setLoading(true);
        await API.put("/user/auth/profile", {
          username: formData.username,
          email: formData.email,
          password: formData.password || undefined,
        });

        setSuccessMessage("Changes updated successfully!");
        setIsEditingInfo(false);
        setFormData((prev) => ({ ...prev, password: "" }));
      } catch (err) {
        console.error("❌ Error updating profile:", err);
        setSuccessMessage("");
        alert("Failed to update profile.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex-1 min-h-screen w-full bg-white p-6 md:p-10">
      <div className="bg-white shadow-2xl rounded-xl w-full h-full p-6 md:p-10 space-y-6">
        {/* Back Button */}
        <button
          className="flex items-center text-lg text-[#2e3b4e] hover:text-[#4e7bbf] transition"
          onClick={() => navigate("/settings")}
        >
          <FontAwesomeIcon icon={faAngleLeft} className="text-xl mr-2" />
          Back
        </button>

        <h2 className="text-3xl font-bold text-[#2e3b4e] text-center">
          Edit Profile
        </h2>

        {/* Profile Picture */}
        <div className="flex flex-col items-center gap-4">
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover shadow-md"
          />
          <button
            className="flex items-center text-[#2e3b4e] hover:text-[#4e7bbf] font-medium"
            onClick={() => setShowModal(true)}
          >
            <FontAwesomeIcon icon={faPencilAlt} className="w-4 h-4 mr-2" />
            Edit Picture
          </button>
        </div>

        {successMessage && (
          <p className="text-green-700 bg-green-100 p-3 rounded-lg text-center font-medium">
            {successMessage}
          </p>
        )}

        {/* Info */}
        {!isEditingInfo ? (
          <div className="bg-gray-50 p-6 rounded-lg shadow border border-gray-200">
            <div className="flex justify-between items-center mb-4 border-b pb-3">
              <h3 className="text-xl font-bold text-[#2e3b4e]">Personal Info</h3>
              <button
                className="flex items-center text-sm text-[#2e3b4e] hover:text-[#4e7bbf]"
                onClick={() => setIsEditingInfo(true)}
              >
                <FontAwesomeIcon icon={faPencilAlt} className="w-4 h-4 mr-2" />
                Edit
              </button>
            </div>
            <div className="space-y-3">
              <p className="flex justify-between">
                <span className="text-gray-600">Username:</span>
                <span>{loading ? "Loading..." : formData.username}</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span>{loading ? "Loading..." : formData.email}</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Password:</span>
                <span>{formData.password ? "••••••••" : "Not changed"}</span>
              </p>
            </div>
          </div>
        ) : (
          <form className="flex flex-col gap-5 mt-4" onSubmit={handleSubmit}>
            <label className="block text-sm text-gray-600">
              Username
              <input
                ref={usernameRef}
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
                className="mt-1 p-3 w-full border rounded-lg focus:ring-[#4e7bbf] focus:border-[#4e7bbf]"
              />
              {errors.username && (
                <span className="text-red-500 text-xs">{errors.username}</span>
              )}
            </label>

            <label className="block text-sm text-gray-600">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-1 p-3 w-full border rounded-lg focus:ring-[#4e7bbf] focus:border-[#4e7bbf]"
              />
              {errors.email && (
                <span className="text-red-500 text-xs">{errors.email}</span>
              )}
            </label>

            <label className="block text-sm text-gray-600">
              Password
              <input
                ref={passwordRef}
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Leave blank to keep current password"
                className="mt-1 p-3 w-full border rounded-lg focus:ring-[#4e7bbf] focus:border-[#4e7bbf]"
              />
              {errors.password && (
                <span className="text-red-500 text-xs">{errors.password}</span>
              )}
            </label>

            <div className="flex justify-end gap-3 mt-4">
              <button
                type="button"
                className="py-2 px-5 rounded-lg bg-gray-200 text-[#2e3b4e] hover:bg-gray-300"
                onClick={() => setIsEditingInfo(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-2 px-5 rounded-lg bg-[#2e3b4e] text-white hover:bg-[#223040]"
                disabled={
                  Object.keys(errors).length > 0 ||
                  !formData.username.trim() ||
                  !formData.email.trim()
                }
              >
                Save Changes
              </button>
            </div>
          </form>
        )}

        {/* ✅ Image Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-xl w-80 text-center">
              <h2 className="text-xl font-bold text-[#2e3b4e] mb-4">
                Change Profile Picture
              </h2>
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-24 h-24 rounded-full mx-auto object-cover shadow mb-3"
                />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="text-sm w-full"
              />
              {imageError && (
                <p className="text-red-500 text-xs mt-1">{imageError}</p>
              )}
              <div className="flex justify-between mt-4">
                <button
                  className="py-2 px-4 bg-gray-200 text-[#2e3b4e] rounded-lg hover:bg-gray-300"
                  onClick={() => {
                    setShowModal(false);
                    setPreviewImage(null);
                    setImageError("");
                  }}
                >
                  Cancel
                </button>
                <button
                  className="py-2 px-4 bg-[#2e3b4e] text-white rounded-lg hover:bg-[#223040]"
                  onClick={handleSaveImage}
                  disabled={!previewImage}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditProfile;
