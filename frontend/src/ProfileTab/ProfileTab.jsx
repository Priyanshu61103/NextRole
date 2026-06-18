import { Edit, LogOut, X } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfileTab } from "../Redux/Slice/profileTabSlice/profileTabSlice";
import { Link, useNavigate } from "react-router-dom";

const ProfileTab = () => {
  const profileData = useSelector((state) => state.profileData.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOutHandler = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div>
      {profileData && profileData.payload && (
        <div className="h-85 w-80 p-5 flex flex-wrap justify-center items-around text-gray-100 rounded-xl bg-[rgb(49,49,49)]">
          <div className="w-full flex justify-between">
            <h2 className="font-semibold">{profileData.payload.email}</h2>
            <X onClick={() => dispatch(setProfileTab())} />
          </div>
          <div className="w-full flex justify-center">
            <div>
              <div className="my-4">
                <Link to="/profile">
                  <img
                    src={profileData.payload.profilePhoto}
                    alt=""
                    className="h-20 w-20 border-4 border-blue-600 rounded-full relative left-20"
                  />
                </Link>
                <h1 className="text-center text-xl font-semibold mt-2">
                  Hi, {profileData.payload.firstName}{" "}
                  {profileData.payload.lastName}
                </h1>
                <h1 className="text-center text-sm font-semibold text-gray-100">
                  {localStorage.getItem("user").charAt(0).toUpperCase() +
                    localStorage.getItem("user").slice(1)}
                </h1>
              </div>
              <div className="w-60 border-4 border-blue-600 rounded-2xl">
                <Link to="/edit-profile">
                  <button className="h-12 w-58 flex justify-center items-center gap-x-2 border-b-4 border-blue-600 font-semibold">
                    <Edit />
                    Edit Profile
                  </button>
                </Link>
                <button
                  onClick={logOutHandler}
                  className="h-12 w-56 flex justify-center items-center gap-x-2 font-semibold"
                >
                  <LogOut />
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileTab;
