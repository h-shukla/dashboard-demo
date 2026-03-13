import { useState, useEffect } from "react";
import {
    LayoutDashboard,
    CreditCard,
    Users,
    Mail,
    Package,
    FileText,
    BarChart2,
    Zap,
    Settings,
    ShieldCheck,
    HelpCircle,
    X,
    Search,
    Calendar,
    Bell,
    Upload,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Menu,
} from "lucide-react";

const NAV = {
    GENERAL: [
        { icon: LayoutDashboard, label: "Dashboard", active: true },
        { icon: CreditCard, label: "Payment" },
        { icon: Users, label: "Customers" },
        { icon: Mail, label: "Messages", badge: 8 },
    ],
    TOOLS: [
        { icon: Package, label: "Product" },
        { icon: FileText, label: "Invoice" },
        { icon: BarChart2, label: "Analytics" },
        { icon: Zap, label: "Automation", tag: "BETA" },
    ],
    SUPPORT: [
        { icon: Settings, label: "Settings" },
        { icon: ShieldCheck, label: "Security" },
        { icon: HelpCircle, label: "Help" },
    ],
};

const NavItem = ({
    icon: Icon,
    label,
    active,
    badge,
    tag,
    collapsed,
    onClick,
}) => (
    <li className="relative">
        <a
            href="#"
            onClick={(e) => {
                e.preventDefault();
                onClick?.();
            }}
            title={collapsed ? label : undefined}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                active
                    ? "bg-[#5347CE] text-white font-medium shadow-sm shadow-indigo-200"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            } ${collapsed ? "justify-center" : ""}`}
        >
            <Icon size={16} className="shrink-0" />
            {!collapsed && <span className="flex-1 truncate">{label}</span>}
            {!collapsed && badge && (
                <span className="bg-[#5347CE] text-white text-[10px] rounded-full px-1.5 py-0.5 font-semibold leading-none">
                    {badge}
                </span>
            )}
            {!collapsed && tag && (
                <span className="text-[9px] font-bold text-[#5347CE] border border-[#5347CE] rounded px-1 leading-4">
                    {tag}
                </span>
            )}
            {collapsed && badge && (
                <span className="absolute top-1 right-1.5 w-1.5 h-1.5 bg-[#5347CE] rounded-full" />
            )}
        </a>
    </li>
);

function Sidebar({ collapsed, setCollapsed, isDrawer, onClose }) {
    return (
        <div className="flex flex-col h-full bg-white border-r border-gray-100">
            {/* Logo */}
            <div className="flex items-center gap-2.5 px-4 py-5 border-b border-gray-100 min-h-[64px]">
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="flex-shrink-0"
                >
                    <path
                        d="M3 3l7 9-7 9h4l5-6.5L16 21h4l-7-9 7-9h-4l-5 6.5L8 3H3z"
                        fill="#5347CE"
                    />
                </svg>
                {(!collapsed || isDrawer) && (
                    <span className="font-bold text-gray-900 text-[17px] tracking-tight">
                        Nexus
                    </span>
                )}
                {!isDrawer && (
                    <button
                        onClick={() => setCollapsed((c) => !c)}
                        className="ml-auto text-gray-400 hover:text-gray-600 transition-colors hidden lg:flex items-center justify-center w-6 h-6 rounded-md hover:bg-gray-100"
                        title={collapsed ? "Expand" : "Collapse"}
                    >
                        {collapsed ? (
                            <ChevronRight size={14} />
                        ) : (
                            <ChevronLeft size={14} />
                        )}
                    </button>
                )}
                {isDrawer && (
                    <button
                        onClick={onClose}
                        className="ml-auto text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X size={18} />
                    </button>
                )}
            </div>

            {/* Nav */}
            <nav className="flex-1 px-3 py-4 space-y-5 overflow-y-auto">
                {Object.entries(NAV).map(([section, items]) => (
                    <div key={section}>
                        {(!collapsed || isDrawer) && (
                            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest px-2 mb-1.5">
                                {section}
                            </p>
                        )}
                        {collapsed && !isDrawer && (
                            <div className="mb-2 border-t border-gray-100" />
                        )}
                        <ul className="space-y-0.5">
                            {items.map((item) => (
                                <NavItem
                                    key={item.label}
                                    {...item}
                                    collapsed={!isDrawer && collapsed}
                                    onClick={isDrawer ? onClose : undefined}
                                />
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>

            {/* Footer */}
            <div className="p-3 border-t border-gray-100">
                <div
                    className={`flex items-center gap-3 mb-3 ${collapsed && !isDrawer ? "justify-center" : ""}`}
                >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5347CE] to-[#4896FE] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        YA
                    </div>
                    {(!collapsed || isDrawer) && (
                        <div className="min-w-0">
                            <p className="text-xs font-semibold text-gray-800 truncate">
                                Team Marketing
                            </p>
                            <p className="text-[10px] text-gray-400">
                                Business
                            </p>
                        </div>
                    )}
                </div>
                {(!collapsed || isDrawer) && (
                    <button className="w-full text-xs font-semibold text-[#5347CE] border border-[#5347CE] rounded-lg py-1.5 hover:bg-[#5347CE] hover:text-white transition-colors duration-150">
                        Upgrade Plan
                    </button>
                )}
            </div>
        </div>
    );
}

function Topbar({ onMenuClick }) {
    const actions = [
        { icon: Calendar, title: "Calendar" },
        { icon: Bell, title: "Notifications" },
        { icon: Upload, title: "Export" },
    ];

    return (
        <header className="h-14 bg-white border-b border-gray-100 flex items-center px-4 md:px-6 gap-3 sticky top-0 z-10">
            <button
                onClick={onMenuClick}
                className="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-gray-600"
                aria-label="Toggle menu"
            >
                <Menu size={18} />
            </button>

            <div className="flex-1 relative max-w-sm">
                <Search
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-9 pr-10 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5347CE]/30 focus:border-[#5347CE] transition-all"
                />
                <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 border border-gray-200 rounded px-1 bg-white hidden sm:block">
                    ⌘F
                </kbd>
            </div>

            <div className="ml-auto flex items-center gap-1">
                {actions.map(({ icon: Icon, title }) => (
                    <button
                        key={title}
                        title={title}
                        className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors"
                    >
                        <Icon size={16} />
                    </button>
                ))}
                <div className="flex items-center gap-2 pl-3 ml-1 border-l border-gray-100 cursor-pointer group">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5347CE] to-[#4896FE] flex items-center justify-center text-white text-xs font-bold">
                        YA
                    </div>
                    <div className="hidden sm:block">
                        <p className="text-xs font-semibold text-gray-800 leading-none">
                            Young Alaska
                        </p>
                        <p className="text-[10px] text-gray-400 mt-0.5">
                            Business
                        </p>
                    </div>
                    <ChevronDown
                        size={13}
                        className="text-gray-400 group-hover:text-gray-600 transition-colors"
                    />
                </div>
            </div>
        </header>
    );
}

// Exported so App.jsx can pass collapsed + sidebarOpen state down if needed
export { Sidebar, Topbar };
