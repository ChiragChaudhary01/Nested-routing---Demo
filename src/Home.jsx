import Sidebar from "./Sidebar"

const Home = () => {
    return (
        // <div className="flex">
        //     This is the Home page
        // </div>
        <div className="flex">
            <Sidebar />
            <div className="p-6">
                <h1 className="text-3xl font-semibold text-gray-800">Home</h1>
                <p className="mt-2 text-gray-600">
                    Welcome to the dashboard. Use the sidebar to explore different sections.
                </p>
            </div>
        </div>
    )
}

export default Home
