import { Outlet } from "react-router-dom";

const Settings = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-800">Settings</h2>
            <p className="mt-2 text-gray-600">
                Manage your profile, preferences, and security.
            </p>

            <div className="mt-6">
                <Outlet />
            </div>
        </div>
    );
};

export default Settings;
