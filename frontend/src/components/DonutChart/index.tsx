//Gráfico referente a categoria com o histórico de valor mais relevante
import axios from 'axios';
import { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'
import { CategoryValue } from 'types/detail';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    labels: string[];
    series: number[];

}

function DonutChart(){

    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    useEffect(() => {

        axios.get(`${BASE_URL}/details/value-of-category`)
            .then(response => {
                const data = response.data as CategoryValue[];
                const myLabels = data.map(x => x.categoryName);
                const mySeries = data.map(x => x.sum);

                setChartData({ labels: myLabels, series: mySeries });
            });
    }, []);
    const options = {
        legend: {
            show: true,
        },
    }
    return (
        <Chart
            options={{ ...options, 
                labels: chartData.labels,
            theme: {
                mode: "dark"
            } 
        }}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;