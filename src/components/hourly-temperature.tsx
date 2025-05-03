import type { ForecastData } from "@/api/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { format } from "date-fns";

interface HourlyTemperatureProps {
  data: ForecastData;
}

const HourlyTemperature = ({ data }: HourlyTemperatureProps) => {
  const chartData = data.list.slice(0, 8).map((item) => ({
    time: format(new Date(item.dt * 1000), "ha"),
    temp: Math.round(item.main.temp),
    feels_like: Math.round(item.main.feels_like),
  }));

  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Today's Temperature</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <LineChart data={chartData}>
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                fontSize={12}
                stroke="#888888"
              />
              <YAxis
                tickFormatter={(value) => `${value}°C`}
                axisLine={false}
                tickLine={false}
                fontSize={12}
                stroke="#888888"
              />

              {/* tooptip */}
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div>
                          <div>
                            <span>Temperature</span>
                            <span>{payload[0].value}°C</span>
                          </div>
                          <div>
                            <span>Feels Like</span>
                            <span>{payload[1].value}°C</span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                }}
              />

              {/* line chart */}
              <Line
                type="monotone"
                dataKey="temp"
                stroke="#8884d8"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="feels_like"
                stroke="#8884d8"
                strokeWidth={2}
                dot={false}
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default HourlyTemperature;
