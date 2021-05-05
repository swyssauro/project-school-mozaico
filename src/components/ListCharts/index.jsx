import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "24/04",
    notificados: 11848,
    suspeitos: 68,
    confirmados: 3639,
  },
  {
    name: "27/04",
    suspeitos: 73,
    confirmados: 3677,
    notificados: 11957,
  },
  {
    name: "29/04",
    suspeitos: 114,
    confirmados: 3686,
    notificados: 12049,
  },
  {
    name: "30/04",
    suspeitos: 84,
    confirmados: 3715,
    notificados: 12101,
  },
  {
    name: "01/05",
    suspeitos: 68,
    confirmados: 3757,
    notificados: 12208,
  },
  {
    name: "04/05",
    suspeitos: 72,
    confirmados: 3809,
    notificados: 12248,
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <p>
        {`${label}`} : <b>{`${payload[0].value}`}</b>
      </p>
    );
  }
  return null;
};

export default function Chatbox(props) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey={props.name}
            stroke="#006aff"
            fill="#006aff38"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
