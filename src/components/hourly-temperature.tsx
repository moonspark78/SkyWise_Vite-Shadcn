import type { ForecastData } from "@/api/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {Lne, LineChart, ResponsiveContainer} from "recharts";
import { format } from "date-fns";

interface HourlyTemperatureProps {
  data: ForecastData;
}

const HourlyTemperature = ({ data }: HourlyTemperatureProps) => {

  const chartData = data.list.slice(0,8).map((item) => ({
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
        <p>Card Content</p>
      </CardContent>
    </Card>
  );
};

export default HourlyTemperature;
