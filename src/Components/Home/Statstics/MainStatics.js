import React from 'react';
import StaticsLayout from "./StaticsLayout";
import "chart.js/auto";
import {Bar, Line, Pie} from "react-chartjs-2";


function MainStatics({labels, labelData, inStock, outOfStock}) {
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Order Statistics",
                data: labelData,
                fill: true,
                borderColor: 'rgb(99,154,255)',
                backgroundColor: 'rgba(99,154,255,0.62)',
            },
        ]
    };
    const Piedata = {
        labels: ["InStock", "Out of Stock"],
        datasets: [
            {
                label: 'Stocks',
                data: [inStock, outOfStock],
                backgroundColor: [
                    'rgba(86,253,100,0.3)',
                    'rgba(190,68,47,0.3)',

                ],
                borderColor: [
                    'rgb(40,217,34)',
                    'rgb(217,26,26)',
                ],
                borderWidth: 1.5,
            },
        ],
    };
    return (
       <>
           <StaticsLayout
               part1={<Pie data={Piedata} />}
               part2={<Bar data={data}/>}
           />
       </>
    );
}

export default MainStatics;
