
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const FORMAT_DATA = (data: any) => {
    if (!data || !data.length) {
        return [];
    }
    let res: any = {};
    data.map((item: any) => {
        let date = item.date.local;
        if (!res.hasOwnProperty(date)) {
            res[date] = {};
        }
        res[date][item.parameter] = item.value;
    });
    let items = [];
    for (var key in res) {
        items.push({
            name: NAME(key),
            ...(res[key])
        });
    }
    return items;
}
const MONTHS = "January February March April May June July August September October November December".split(" ");
const NAME = (dateStr: string): string => {
    var date = new Date(dateStr);
    if (isNaN(date.getTime())) {
        return '-';
    }
    let _date = date.getDate();
    return `${MONTHS[date.getMonth()]} ${_date}`;
}
export const Chart: React.FC<{ data: any }> = ({ data }) => {
    const pollutionData = FORMAT_DATA(data);
    return <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={pollutionData}
                margin={{
                    top: 20,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey={`co`} minPointSize={8} stackId={`co`} fill={`#A64FF8`} />
                <Bar dataKey={`so2`} minPointSize={8} stackId={`so2`} fill={`#6845D9`} />
                <Bar dataKey={`no2`} minPointSize={8} stackId={`no2`} fill={`#595EF0`} />
                <Bar dataKey={`o3`} minPointSize={8} stackId={`o3`} fill={`#4571D9`} />
                <Bar dataKey={`pm10`} minPointSize={8} stackId={`pm10`} fill={`#4FAEF8`} />
                <Bar dataKey={`pm25`} minPointSize={8} stackId={`pm25`} fill={`#45A4D9`} />
            </BarChart>
        </ResponsiveContainer>
    </div>
}
