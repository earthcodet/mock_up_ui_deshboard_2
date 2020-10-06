import React, { Component } from 'react'

import '../CSS/HomePage.scss'
import NavBar from './MainNavBar'

// Echarts
import MainFooter from './MainFooter'
import ReactEcharts from 'echarts-for-react';
import $ from 'jquery'

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            heading: ['TRAFFIC', 'NEW USERS', 'SALES', 'PERFORMANCE'],
            icon: ['icon fas fa-chart-bar', 'icon fas fa-chart-pie', 'icon fas fa-users', 'icon fas fa-percent'],
            number: ['350,897', '2,356', '924', '49,65%'],
            numberBottom: ['3.48%', '3.48%', '1.10%', '12%'],
            textBottom: ['Since last month', 'Since last week', 'Since yesterday', 'Since last month'],
            color: ['box-icon color-orange', 'box-icon color-lightorange', 'box-icon color-yellow', 'box-icon color-blue'],
            iconButtom: ['color-green fas fa-arrow-up', 'color-red fas fa-arrow-down', 'color-red fas fa-arrow-down', 'color-green fas fa-arrow-up'],
            isToggleOn: 'ONE',
            isOptionChart: {
                responsive: true,
                grid: {
                    // top:0
                    x: 30,
                    right: 0
                },
                xAxis: {
                    type: 'category',
                    data: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        fontFamily: "sans-serif",
                        fontSize: 13,
                        color: '#8898aa',
                        align: "right",
                        lineHeight: 40
                    }
                },
                yAxis: {
                    // axisLine:false,
                    type: 'value',
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        fontFamily: "sans-serif",
                        formatter: function (value) {
                            var format = '$' + value + 'k'
                            return format
                        },
                        fontSize: 13,
                        color: '#8898aa',
                        align: "left"
                    },
                    axisTick: {
                        show: false
                    }
                },
                series: [{
                    data: [0, 20, 10, 30, 15, 40, 20, 60],
                    type: 'line',
                    smooth: true,
                    color: '#5e72e4',
                    showSymbol: false,
                    lineStyle: {
                        width: 5
                    }
                }]
            }
        };
        this.createCardStatus = this.createCardStatus.bind(this)
        this.getOption = this.getOption.bind(this)
        this.onClickTabItem = this.onClickTabItem.bind(this)
        this.changeOptionChart = this.changeOptionChart.bind(this)
    }
    componentDidMount(){
       this.changeOptionChart(this.state.isToggleOn)
    }
    onClickTabItem(i) {
        console.log(this.state.isOptionChart)
        if (this.state.isToggleOn === 'ONE' && i !== 1) {
            $('.main-button').toggleClass('active')
            this.setState({
                isToggleOn: "TWO"
            })
            this.changeOptionChart('TWO')
            console.log(`one ${this.state.isToggleOn} and ${i}`)
        }
        if (this.state.isToggleOn === "TWO" && i !== 2) {
            $('.main-button').toggleClass('active')
            this.setState({
                isToggleOn: "ONE"
            })
            this.changeOptionChart('ONE')
            console.log(`two ${this.state.isToggleOn} and ${i}`)
        }

    }
    changeOptionChart(i){
        let line_chart_1 = {
            responsive: true,
            grid: {
                // top:0
                x: 30,
                right: 0
            },
            xAxis: {
                type: 'category',
                data: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    fontFamily: "sans-serif",
                    fontSize: 13,
                    color: '#8898aa',
                    align: "right",
                    lineHeight: 40
                }
            },
            yAxis: {
                // axisLine:false,
                type: 'value',
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    fontFamily: "sans-serif",
                    formatter: function (value) {
                        var format = '$' + value + 'k'
                        return format
                    },
                    fontSize: 13,
                    color: '#8898aa',
                    align: "left"
                },
                axisTick: {
                    show: false
                }
            },
            series: [{
                data: [0, 20, 10, 30, 15, 40, 20, 60],
                type: 'line',
                smooth: true,
                color: '#5e72e4',
                showSymbol: false,
                lineStyle: {
                    width: 5
                }
            }]
        };
        let line_chart_2 = {
            responsive: true,
            grid: {
                // top:0
                x: 30,
                right: 0
            },
            xAxis: {
                type: 'category',
                data: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    fontFamily: "sans-serif",
                    fontSize: 13,
                    color: '#8898aa',
                    align: "right",
                    lineHeight: 40
                }
            },
            yAxis: {
                // axisLine:false,
                type: 'value',
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    fontFamily: "sans-serif",
                    formatter: function (value) {
                        var format = '$' + value + 'k'
                        return format
                    },
                    fontSize: 13,
                    color: '#8898aa',
                    align: "left"
                },
                axisTick: {
                    show: false
                }
            },
            series: [{
                data: [0, 20, 5, 25, 10, 30, 15, 40],
                type: 'line',
                smooth: true,
                color: '#5e72e4',
                showSymbol: false,
                lineStyle: {
                    width: 5
                }
            }]
        };

        if(i === 'ONE'){
            this.setState({
                isOptionChart : line_chart_1
            })
            console.log(this.isOptionChart)
        }else{
            this.setState({
                isOptionChart : line_chart_2
            })
        }
    }
    getOption(i) {
        let bar_chart = {
            responsive: true,
            grid: {
                // top:0
                x: 50,
                right: 0
            },
            xAxis: {
                type: 'category',
                data: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    fontFamily: "sans-serif",
                    fontSize: 13,
                    color: '#8898aa',
                    align: "center",
                    lineHeight: 40
                }
            },
            yAxis: {
                // axisLine:false,
                type: 'value',
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    fontFamily: "sans-serif",
                    fontSize: 13,
                    color: '#8898aa',
                    align: "left"
                },
                axisTick: {
                    show: false
                },
                splitNumber: 4
            },
            series: [{
                data: [25, 20, 30, 22, 17, 29],
                type: 'bar',
                color: '#fb6340',
                barWidth: "15%",
                itemStyle: {
                    barBorderRadius: [20, 20, 20, 20]
                }
            }]
        };
        switch (i) {
            case 2:
                return bar_chart
            default:
                return bar_chart
        }
    }
    createCardStatus(i) {
        return (<div className='col padding'>
            <div className='box-status-card-content '>
                <div className='cols'>
                    <div className='col'>
                        <p class='flex'>
                            <span>{this.state.heading[i]}</span>
                            <span>{this.state.number[i]}</span>
                        </p>
                    </div>
                    <div className='col-auto-width'>
                        <div className={this.state.color[i]}>
                            <i className={this.state.icon[i]}></i>
                        </div>
                    </div>
                </div>
                <div>
                    <p class='inline'>
                        <span className={this.state.iconButtom[i]}>
                            <span >{this.state.numberBottom[i]}</span>
                        </span>
                        <span>{this.state.textBottom[i]}</span>
                    </p>
                </div>
            </div>
        </div>)
    }

    render() {
        return (
            <div class='main-content'>
                <div className='cols home-card-status'>
                    <NavBar />
                    <div className='cols home-content'>
                        {this.createCardStatus(0)}
                        {this.createCardStatus(1)}
                        {this.createCardStatus(2)}
                        {this.createCardStatus(3)}
                    </div>
                </div>
                <div className='cols home-item-content '>
                    <div className='cols home-chart-content '>
                        <div className=' col is-7'>
                            <div className='home-chart-line-box'>
                                <div className='home-chart-line-box-title'>
                                    <p className='flex'>
                                        <span>
                                            OVERVIEW
                                    </span>
                                        <span>
                                            Sales value
                                    </span>
                                    </p>
                                    <div className='right'>
                                        <button onClick={() => { this.onClickTabItem(1) }} className='main-button active'>Month</button>
                                        <button onClick={() => { this.onClickTabItem(2) }} className='main-button'>Week</button>
                                    </div>
                                </div>

                                <div>
                                    <ReactEcharts
                                        option={this.state.isOptionChart}
                                        className='size-chart'
                                    />
                                </div>

                            </div>
                        </div>
                        <div className='col '>
                            <div className='home-chart-bar-box'>
                                <div className='home-chart-bar-box-title'>
                                    <p className='flex'>
                                        <span>
                                            PERFORMANCE
                                </span>
                                        <span>
                                            Total orders
                                </span>
                                    </p>
                                </div>
                                <ReactEcharts
                                    option={this.getOption(2)}
                                    className='size-chart'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='cols home-table-content '>
                        <div className='col is-7 '>
                            <div className='home-box-table'>
                                <div className='home-table-title'>
                                    <p className='one-line'>
                                        <span >
                                            Page visits
                                        </span>
                                    </p>
                                    <button className='main-button-table'>
                                        See all
                                    </button>
                                </div>
                                <div className='home-table-body'>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>page name</th>
                                                <th>visitors</th>
                                                <th>unique users</th>
                                                <th>bounce rate</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>/argon</td>
                                                <td>4,569</td>
                                                <td>340</td>
                                                <td>
                                                    <span>
                                                        <i className='color-green fas fa-arrow-up'></i>
                                                    46,53%
                                                </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>/argon/index.html</td>
                                                <td>3,985</td>
                                                <td>319</td>
                                                <td>
                                                    <span >
                                                        <i className='color-red fas fa-arrow-down'></i>
                                                    46,53%
                                                </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>/argon/charts.html</td>
                                                <td>3,513</td>
                                                <td>294</td>
                                                <td>
                                                    <span >
                                                        <i className='color-red fas fa-arrow-down'></i>
                                                    36,49%
                                                </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>/argon/tables.html</td>
                                                <td>2,050</td>
                                                <td>147</td>
                                                <td>
                                                    <span >
                                                        <i className='color-green fas fa-arrow-up'></i>
                                                    50,87%
                                                </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>/argon/profile.html</td>
                                                <td>1,795</td>
                                                <td>190</td>
                                                <td>
                                                    <span >
                                                        <i className='color-red fas fa-arrow-down'></i>
                                                    49,53%
                                                </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='home-box-table'>
                                <div className='home-table-title'>
                                    <p className='one-line'>
                                        <span >
                                            Page visits
                                        </span>
                                    </p>
                                    <button className='main-button-table'>
                                        See all
                                    </button>
                                </div>
                                <div className='home-table-body'>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>page name</th>
                                                <th>visitors</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>/argon</td>
                                                <td>4,569</td>
                                                <td>340</td>
                                            </tr>
                                            <tr>
                                                <td>/argon/index.html</td>
                                                <td>3,985</td>
                                                <td>319</td>
                                            </tr>
                                            <tr>
                                                <td>/argon/charts.html</td>
                                                <td>3,513</td>
                                                <td>294</td>
                                            </tr>
                                            <tr>
                                                <td>/argon/tables.html</td>
                                                <td>2,050</td>
                                                <td>147</td>
                                            </tr>
                                            <tr>
                                                <td>/argon/profile.html</td>
                                                <td>1,795</td>
                                                <td>190</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>

                    </div>
                
                </div>
               <MainFooter />
            </div>
        )
    }
}
export default HomePage