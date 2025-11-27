import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="p-6">
                <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
                <p className="text-gray-600 mt-2">Overview of your workspace.</p>

                <div className="mt-6">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
