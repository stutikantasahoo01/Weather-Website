import { useContext } from "react";

import { MyContext } from "./ContextData";
import { ChartArea } from "lucide-react";
import ChartBox from "./ChartBox";

const FooterContent = () => {
  const { WeatherData } = useContext(MyContext);
  const hourlyData = WeatherData?.hourly?.time;
  const tempData = WeatherData?.hourly?.temperature_2m;
  //   console.log(hour, temp);
  if (!hourlyData || !tempData) {
    return <div>Forcast is loading</div>;
  }
  const chartData = hourlyData
    .map((elem, idx) => {
      return {
        hour: new Date(elem).getHours() + ":00",
        temp: Math.round(tempData[idx]),
      };
    })
    .slice(0, 24);
  console.log(chartData);

  return (
    <>
      <ChartBox data={chartData} />
    </>
  );
};

export default FooterContent;

// return (
//     <div className="w-full h-80 bg-white/5 backdrop-blur-md rounded-3xl p-6 mt-6 border border-white/10 shadow-xl">
//       <h3 className="text-white text-lg font-medium mb-6 opacity-80">Hourly Temperature (°C)</h3>

//       <ResponsiveContainer width="100%" height="80%">
//         <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
//           <defs>
//             {/* Creates that smooth "glow" effect under the line */}
//             <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.5}/>
//               <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
//             </linearGradient>
//           </defs>

//           {/* Horizontal grid lines only for a cleaner look */}
//           <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff1a" />

//           <XAxis
//             dataKey="hour"
//             axisLine={false}
//             tickLine={false}
//             tick={{ fill: '#94a3b8', fontSize: 12 }}
//             interval={3}
//           />

//           {/* We hide the Y-Axis to keep the design modern, like high-end weather apps */}
//           <YAxis hide domain={['dataMin - 5', 'dataMax + 5']} />

//           <Tooltip
//             cursor={{ stroke: '#3b82f6', strokeWidth: 1 }}
//             contentStyle={{
//               backgroundColor: '#0f172a',
//               border: 'none',
//               borderRadius: '12px',
//               fontSize: '14px'
//             }}
//             itemStyle={{ color: '#60a5fa' }}
//           />

//           <Area
//             type="monotone"
//             dataKey="temp"
//             stroke="#3b82f6"
//             strokeWidth={3}
//             fillOpacity={1}
//             fill="url(#colorTemp)"
//             animationDuration={1500}
//           />
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };
