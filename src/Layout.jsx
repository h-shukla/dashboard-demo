import { useState } from "react";
import { Sidebar, Topbar } from "./Navbar";
import { useEffect } from "react";

const Layout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setSidebarOpen(false);
        };
        window.addEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex min-h-screen bg-gray-50">
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-20 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* mobile drawer */}
            <aside
                className={`fixed top-0 left-0 h-full z30 w-56 lg:hidden transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <Sidebar
                    isDrawer={true}
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                    onClose={() => setSidebarOpen(false)}
                />
            </aside>

            {/* desktop */}
            <aside
                className={`hidden lg:flex flex-col shrink-0 transition-all duration-300 min-h-screen ${collapsed ? "w-17" : "w-56"}`}
            >
                <Sidebar
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                    isDrawer={false}
                />
            </aside>
            <div className="flex-1 flex flex-col min-w-0">
                <Topbar onMenuClick={() => setSidebarOpen((o) => !o)} />
                <div className="flex-1 overflow-auto">{children}</div>
            </div>
        </div>
    );
};

export default Layout;
