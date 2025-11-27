import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
    const [openSettings, setOpenSettings] = useState(false);

    return (
        <aside className="sidebar">
            {/* Top-level */}
            <NavLink to="/" className="link">Home</NavLink>
            <NavLink to="/dashboard" className="link">Dashboard</NavLink>

            {/* Nested */}
            <div className="nested">
                <NavLink to="/dashboard/analytics" className="link">Analytics</NavLink>
                <NavLink to="/dashboard/tasks" className="link">Tasks</NavLink>

                {/* Settings expand */}
                <Link
                    to='/dashboard/settings'
                    className="link text-left link"
                    onClick={() => setOpenSettings(!openSettings)}
                    style={{ cursor: "pointer" }}
                >
                    Settings ▾
                </Link>

                {openSettings && (
                    <div className="deepNested">
                        <NavLink to="/dashboard/settings/profile" className="link">
                            Profile
                        </NavLink>
                        <NavLink to="/dashboard/settings/security" className="link">
                            Security
                        </NavLink>
                    </div>
                )}
            </div>
        </aside>
    );
};

export default Sidebar;
