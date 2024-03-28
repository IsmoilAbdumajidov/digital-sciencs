import React from 'react';
import ReactApexChart from 'react-apexcharts';

function ApexChart() {
    const series = [{
        name: 'Servings',
        data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 100, 65, 35]
    }];

    const options = {
        annotations: {
            points: [{
                // x: 'Bananas',
                // seriesIndex: 0,
                label: {
                    borderColor: '#775DD0',
                    offsetY: 0,
                    style: {
                        color: '#fff',
                        background: '#775DD0',
                    },
                    // text: 'Bananas are good',
                }
            }]
        },
        chart: {
            height: 350,
            type: 'bar',
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                columnWidth: '50%',
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 2
        },
        grid: {
            row: {
                colors: ['#fff', '#f2f2f2']
            }
        },
        xaxis: {
            labels: {
                rotate: -45
            },
            categories: ['Buxgalteriya hisobi va audit kafedrasi', 'Energiya tejamkorligi va muqobil energiya manbalari kafedrasi', 'QISHLOQ XO‘JALIGINI MEXANIZATSIYALASHTIRISH KAFEDRASI', 'FOYDALI QAZILMALAR VA QAYTA ISHLASH TEXNOLOGIYALARI KAFEDRASI', 'Arxitektura', 'MUHANDISLIK VA KOMPYUTER GRAFIKASI KAFEDRASI',
                'METROLOGIYA VA STANDARTLASHTIRISH KAFEDRASI', 'YO‘L HARAKATI XAVFSIZLIGI KAFEDRASI', 'AXBOROT TIZIMLARI VA TEXNOLOGIYALARI KAFEDRASI', 'CHET TILLAR KAFEDRASI', 'JISMONIY TARBIYA VA SPORT KAFEDRASI', 'IQTISODIYOT KAFEDRASI', 'MASHINASOZLIK TEXNOLOGIYASI KAFEDRASI'
            ],
            tickPlacement: 'on'
        },
        // yaxis: {
        //     title: {
        //         text: 'Servings',
        //     },
        // },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: "horizontal",
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 0.85,
                opacityTo: 0.85,
                stops: [50, 0, 100]
            },
        }
    };

    return (
        <div className='main-container'>
            <div className='my-20 text-center relative w-full md:w-[600px] m-auto'>
                <div className='absolute w-36 h-1 -top-5 left-[50%] -translate-x-[50%] bg-[#0f95ee]'></div>
                <h1 className='text-bg text-3xl pb-5 sm:text-4xl md:text-5xl font-semibold '>Statistika</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit deserunt ab vitae velit. Beatae, consequatur ab in quasi non minima!</p>
            </div>
            <div id="chart">
                <ReactApexChart options={options} series={series} type="bar" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
}

export default ApexChart;
