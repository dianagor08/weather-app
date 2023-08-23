import React, { useMemo } from 'react';
// React-Line chart documentation https://react-chartjs-2.js.org/examples/line-chart
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function Graph({ data, dayIndex }) {
    const getData = useMemo(() => {
        // See API documentation here: https://openweathermap.org/forecast5
        const temp_min = [];
        const temp_max = [];
        const temp_time = [];
        // The required day index to display in the graph 
        const startIndex = dayIndex * 8
        const endIndex = (dayIndex + 1) * 8 - 1;
        data.list.forEach((sample, index) => {
            if (index < startIndex || index > endIndex) return;
            const d = new Date(sample.dt * 1000);
            //console.log(d)
            temp_min.push(sample.main.temp_min);
            temp_max.push(sample.main.temp_max);
            temp_time.push(d.toLocaleTimeString());
        });
        //console.log('Graph mounted')
        return {
            labels: temp_time,
            datasets: [{
                data: temp_min,
                borderColor: "blue",
                fill: false
            }, {
                data: temp_max,
                borderColor: "red",
                fill: false
            }]
        }

    }, [data, dayIndex]);

    const options = {
        legend: { display: false }
    }
    return (
        <div>
            <h4>Hourly Temperature data</h4>
            {data &&
                <Line data={getData}
                    options={options} />
            }
        </div >
    );
}
