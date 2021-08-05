import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import axios from 'axios';


export default class VacationChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            chart: {},
            data: []
        }
    }

    async componentDidMount() {
        const res = await axios.get('/vacations/vacation-chart');
        this.setState({ data: res.data })
        const { data } = res;
        const options = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Vacations followers'
            },

            xAxis: {
                categories: data.map(v => `${v.destination} - ${v.vacation_id}`)

            },
            yAxis: {
                title: {
                    text: 'Amount of followers for each vacation'
                }

            },
            series: [{
                data: data.map(v => v.number_of_followers)
            }]
        }
        const chart = Highcharts.chart('chart', options)

    }



    render() {

        return (
            <div>
                <div id="chart"></div>
            </div>
        )
    }


}
