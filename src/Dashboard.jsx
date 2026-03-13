import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    AreaChart,
    Area,
    CartesianGrid,
} from "recharts";

const subscriberData = [
    { day: "Sun", v: 800 },
    { day: "Mon", v: 1200 },
    { day: "Tue", v: 3874 },
    { day: "Wed", v: 1500 },
    { day: "Thu", v: 1100 },
    { day: "Fri", v: 900 },
    { day: "Sat", v: 600 },
];

const distData = [
    { name: "Website", value: 374.82, color: "#5347CE" },
    { name: "Mobile App", value: 241.6, color: "#4896FE" },
    { name: "Other", value: 213.42, color: "#16C8C7" },
];

const integrations = [
    {
        name: "Stripe",
        type: "Finance",
        rate: 40,
        profit: "$650.00",
        color: "#635BFF",
    },
    {
        name: "Zapier",
        type: "CRM",
        rate: 80,
        profit: "$720.50",
        color: "#FF4A00",
    },
    {
        name: "Shopify",
        type: "Marketplace",
        rate: 20,
        profit: "$432.25",
        color: "#96BF48",
    },
];

// --- Custom Ribbon Chart ---
const DATA = [
    {
        month: "Oct",
        China: 2988,
        US: 2200,
        USA: 1800,
        Canada: 1400,
        Other: 900,
    },
    { month: "Nov", China: 1766, US: 1400, USA: 1100, Canada: 850, Other: 600 },
    {
        month: "Dec",
        China: 4005,
        US: 2900,
        USA: 2100,
        Canada: 1600,
        Other: 1100,
    },
];

const SEG_COLORS = ["#5347CE", "#7B6FE8", "#4896FE", "#87CFFD", "#16C8C7"];

export function SalesRibbonChart() {
    return (
        <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={DATA}>
                <CartesianGrid vertical={false} />

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Area
                    stackId="1"
                    type="basis"
                    dataKey="China"
                    fill="#5347CE"
                    stroke="#5347CE"
                />
                <Area
                    stackId="1"
                    type="basis"
                    dataKey="US"
                    fill="#7B6FE8"
                    stroke="#7B6FE8"
                />
                <Area
                    stackId="1"
                    type="basis"
                    dataKey="USA"
                    fill="#4896FE"
                    stroke="#4896FE"
                />
                <Area
                    stackId="1"
                    type="basis"
                    dataKey="Canada"
                    fill="#87CFFD"
                    stroke="#87CFFD"
                />
                <Area
                    stackId="1"
                    type="basis"
                    dataKey="Other"
                    fill="#16C8C7"
                    stroke="#16C8C7"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}

const MetricCard = ({ label, value, change, up, icon }) => (
    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-500">{label}</span>
            <span className="text-lg">{icon}</span>
        </div>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <span
            className={`text-xs font-semibold mt-1 inline-block ${up ? "text-emerald-500" : "text-red-400"}`}
        >
            {up ? "▲" : "▼"} {change}
        </span>
    </div>
);

export default function Dashboard() {
    return (
        <main className="flex-1 bg-[#F0F2F8] p-6 space-y-6 overflow-auto">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h1 className="hidden sm:inline-flex text-xl font-bold text-gray-900">
                    Dashboard
                </h1>
                <div className="flex items-center gap-2 text-xs text-gray-500 flex-wrap">
                    <span className="border border-gray-200 bg-white rounded-lg px-3 py-1.5">
                        Oct 18 – Nov 18
                    </span>
                    <span className="border border-gray-200 bg-white rounded-lg px-3 py-1.5">
                        Monthly ▾
                    </span>
                    <button className="border border-gray-200 bg-white rounded-lg px-3 py-1.5 hover:bg-gray-50">
                        ⚙ Filter
                    </button>
                    <button className="border border-gray-200 bg-white rounded-lg px-3 py-1.5 hover:bg-gray-50">
                        ⬆ Export
                    </button>
                </div>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <MetricCard
                    label="Page Views"
                    value="12,450"
                    change="15.8%"
                    up
                    icon="👁"
                />
                <MetricCard
                    label="Total Revenue"
                    value="$363.95"
                    change="34.0%"
                    up={false}
                    icon="💰"
                />
                <MetricCard
                    label="Bounce Rate"
                    value="86.5%"
                    change="24.2%"
                    up
                    icon="📊"
                />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Sales Overview */}
                <div className="lg:col-span-2 bg-white rounded-xl p-4 border border-gray-100 shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between mb-1">
                        <div>
                            <p className="text-xs text-gray-500">
                                Sales Overview
                            </p>
                            <p className="text-xl font-bold text-gray-900">
                                $9,257.51
                            </p>
                            <p className="text-xs text-emerald-500 font-semibold">
                                ▲ 15.8% +$143.50 increased
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                            <button className="hover:text-gray-600">
                                ⚙ Filter
                            </button>
                            <button className="hover:text-gray-600">
                                ↕ Sort
                            </button>
                        </div>
                    </div>
                    <SalesRibbonChart />
                    <div className="flex gap-3 mt-1 flex-wrap">
                        {["China", "US", "USA", "Canada", "Other"].map(
                            (l, i) => (
                                <span
                                    key={l}
                                    className="flex items-center gap-1 text-[10px] text-gray-500"
                                >
                                    <span
                                        className="w-2 h-2 rounded-full inline-block"
                                        style={{
                                            background: SEG_COLORS[i] ?? "#ddd",
                                        }}
                                    />
                                    {l}
                                </span>
                            ),
                        )}
                    </div>
                </div>

                {/* Total Subscribers */}
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                        <div>
                            <p className="text-xs text-gray-500">
                                Total Subscriber
                            </p>
                            <p className="text-xl font-bold text-gray-900">
                                24,473
                            </p>
                            <p className="text-xs text-emerald-500 font-semibold">
                                ▲ 3.3% +749 increased
                            </p>
                        </div>
                        <span className="text-xs border border-gray-200 rounded-lg px-2 py-1 text-gray-500">
                            Weekly ▾
                        </span>
                    </div>
                    <ResponsiveContainer width="100%" height={160}>
                        <BarChart data={subscriberData} barSize={18}>
                            <XAxis
                                dataKey="day"
                                tick={{ fontSize: 10 }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <YAxis hide />
                            <Tooltip
                                contentStyle={{ fontSize: 11, borderRadius: 8 }}
                            />
                            <Bar
                                dataKey="v"
                                fill="#5347CE"
                                radius={[4, 4, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Sales Distribution */}
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-sm font-semibold text-gray-800">
                            Sales Distribution
                        </p>
                        <span className="text-xs border border-gray-200 rounded-lg px-2 py-1 text-gray-500">
                            Monthly ▾
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <PieChart width={130} height={130}>
                            <Pie
                                data={distData}
                                cx={60}
                                cy={60}
                                innerRadius={38}
                                outerRadius={60}
                                dataKey="value"
                                paddingAngle={3}
                            >
                                {distData.map((d, i) => (
                                    <Cell key={i} fill={d.color} />
                                ))}
                            </Pie>
                        </PieChart>
                        <div className="space-y-3 flex-1">
                            {distData.map((d) => (
                                <div key={d.name}>
                                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                                        <span className="flex items-center gap-1.5">
                                            <span
                                                className="w-2 h-2 rounded-full"
                                                style={{ background: d.color }}
                                            />
                                            {d.name}
                                        </span>
                                        <span className="font-semibold text-gray-800">
                                            ${d.value.toFixed(2)}
                                        </span>
                                    </div>
                                    <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full rounded-full"
                                            style={{
                                                width: `${(d.value / 830) * 100}%`,
                                                background: d.color,
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Integration List */}
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-sm font-semibold text-gray-800">
                            List of Integration
                        </p>
                        <a
                            href="#"
                            className="text-xs text-[#5347CE] hover:underline"
                        >
                            See All
                        </a>
                    </div>
                    <table className="w-full text-xs">
                        <thead>
                            <tr className="text-gray-400 border-b border-gray-100">
                                <th className="text-left pb-2 font-medium">
                                    Application
                                </th>
                                <th className="text-left pb-2 font-medium">
                                    Type
                                </th>
                                <th className="text-left pb-2 font-medium">
                                    Rate
                                </th>
                                <th className="text-right pb-2 font-medium">
                                    Profit
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {integrations.map((r) => (
                                <tr
                                    key={r.name}
                                    className="hover:bg-gray-50 transition-colors"
                                >
                                    <td className="py-2.5 flex items-center gap-2">
                                        <span
                                            className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                                            style={{ background: r.color }}
                                        >
                                            {r.name[0]}
                                        </span>
                                        {r.name}
                                    </td>
                                    <td className="py-2.5 text-gray-500">
                                        {r.type}
                                    </td>
                                    <td className="py-2.5">
                                        <div className="flex items-center gap-1.5">
                                            <div className="h-1 w-16 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full rounded-full bg-[#5347CE]"
                                                    style={{
                                                        width: `${r.rate}%`,
                                                    }}
                                                />
                                            </div>
                                            <span className="text-gray-500">
                                                {r.rate}%
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-2.5 text-right font-semibold text-gray-800">
                                        {r.profit}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}
