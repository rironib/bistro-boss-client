import {Helmet} from "react-helmet-async";
import {RiBowlFill, RiCaravanFill, RiTeamFill, RiWallet3Fill} from "react-icons/ri";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import {useQuery} from "@tanstack/react-query";
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend} from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red'];

const AdminHome = () => {
    const axiosSecure = useAxiosSecure();

    const {data: stats = {}} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/admin/stats');
            return res.data;
        }
    })

    const {data: chartData = []} = useQuery({
        queryKey: ['chart-data'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/admin/order-stats')
            return res.data
        }
    })

    // custom shape for the bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // custom shape for the pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData.map(data => {
        return {name: data.category, value: data.revenue}
    })

    return (
        <>
            <Helmet>
                <title>Admin Dashboard | Bistro Boss</title>
            </Helmet>
            <main className='w-full bg-[#F6F6F6] p-6 space-y-6'>
                <div className='font-cinzel font-semibold text-3xl'>Hi, Welcome Back!</div>
                <div className='grid grid-cols-4 gap-12'>
                    <div
                        className='flex justify-evenly items-center gap-4 py-6 px-8 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] text-white rounded-lg'>
                        <RiWallet3Fill className='text-6xl'/>
                        <div className='space-y-1'>
                            <h3 className='font-semibold text-2xl'>${Math.round(stats.revenue)}</h3>
                            <p>Revenue</p>
                        </div>
                    </div>
                    <div
                        className='flex justify-evenly items-center gap-4 py-6 px-8 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] text-white rounded-lg'>
                        <RiTeamFill className='text-6xl'/>
                        <div className='space-y-1'>
                            <h3 className='font-semibold text-2xl'>{stats.users}</h3>
                            <p>Customers</p>
                        </div>
                    </div>
                    <div
                        className='flex justify-evenly items-center gap-4 py-6 px-8 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] text-white rounded-lg'>
                        <RiBowlFill className='text-6xl'/>
                        <div className='space-y-1'>
                            <h3 className='font-semibold text-2xl'>{stats.items}</h3>
                            <p>Products</p>
                        </div>
                    </div>
                    <div
                        className='flex justify-evenly items-center gap-4 py-6 px-8 bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] text-white rounded-lg'>
                        <RiCaravanFill className='text-6xl'/>
                        <div className='space-y-1'>
                            <h3 className='font-semibold text-2xl'>{stats.orders}</h3>
                            <p>Orders</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-8 grid grid-cols-2 gap-12'>
                    <div>
                        <BarChart
                            width={500}
                            height={300}
                            data={chartData}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </div>
                    <div>
                        <PieChart width={400} height={400}>
                            <Pie
                                data={pieChartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {pieChartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend></Legend>
                        </PieChart>
                    </div>
                </div>
            </main>
        </>
    );
};

export default AdminHome;
