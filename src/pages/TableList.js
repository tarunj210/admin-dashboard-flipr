import React, { Component } from 'react';
import Chart from 'react-apexcharts';
class TableList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                chart: {
                    background: 'none',
                    forecolor: '#333'
                },
                xaxis: {
                    categories: [
                        'Bangalore',
                        'New Delhi',
                        'Kolkata',
                        'Mumbai',
                        'Chennai',
                        'Hyderabad',
                        'Jaipur',
                        'Ahmedabad',
                        'Kochi',
                        'Mysore'
                    ]
                },
                plotOptions: {
                    bar: {
                        horizontal: false
                    }
                },
                fill: {
                    color: ['#f44336']
                },
                dataLabels: {
                    enabled: false
                },
                title: {
                    text: 'Largest indian cities by population',
                    align: 'top',
                    margin: 20,
                    offsetY: 20,
                    style: {
                        fontSize: '25px'
                    }
                }
            },
            series: [{
                name: 'Population',
                data: [
                    9991836,
                    4328063,
                    5104047,
                    12691836,
                    4631392,
                    2935744,
                    3597816,
                    1394928,
                    5104047,
                    1026908
                ]
            }]
        }
    }
    render() {
        return (
            <>
                <div className="table">
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="bar"
                        height="400"
                        width="250%"
                    />
                </div>
                <div className="chart">
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="area"
                        height="300"
                        width="175%"
                    />
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="bar"
                        height="300"
                        width="175%"
                    />
                </div>
            </>
        )
    }
}

export default TableList;
