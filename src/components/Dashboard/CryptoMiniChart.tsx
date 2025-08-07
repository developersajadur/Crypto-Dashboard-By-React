import * as React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  prices: number[];
};

export function CryptoMiniChart({ prices }: Props) {
  // Convert 7-day prices into chart data
  const data = React.useMemo(
    () =>
      prices.map((price, i) => ({
        timestamp: new Date(Date.now() - (prices.length - 1 - i) * 24 * 60 * 60 * 1000),
        price,
      })),
    [prices]
  );

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="timestamp"
            tickFormatter={(ts) =>
              new Date(ts).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })
            }
            tick={{ fill: "#888", fontSize: 12 }}
          />

          <Tooltip
            formatter={(value: number) => `$${value.toFixed(2)}`}
            labelFormatter={(label: Date) =>
              new Date(label).toLocaleString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })
            }
            contentStyle={{
              backgroundColor: "rgba(0,0,0,0.8)",
              borderRadius: 8,
              border: "none",
              color: "#fff",
            }}
            cursor={{ stroke: "#3b82f6", strokeWidth: 1 }}
          />

          <Area
            type="monotone"
            dataKey="price"
            stroke="#3b82f6"
            fill="url(#colorPrice)"
            strokeWidth={2}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
