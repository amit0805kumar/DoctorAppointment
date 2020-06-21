import React, { Component } from 'react';
import { Table } from 'antd';
import { connect }  from 'react-redux';
import { NavLink } from 'react-router-dom'

import "./style.css";
import { availableDoctorsApi } from './../../Data/api'
import { Select } from 'antd';

const { Option } = Select;

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Number',
        dataIndex: 'number',
    },
];

class AvailableDoctor extends Component {

    start = null;
    end = null;


    handleStartChange = (value) => {
        this.start = value;
        if (this.start == null || this.end == null) return;
        else this.props.dispatch(availableDoctorsApi({ start: this.start, end: this.end }));
    }
    handleEndChange = (value) => {
        this.end = value;
        if (this.start == null || this.end == null) return;
        else this.props.dispatch(availableDoctorsApi({ start: this.start, end: this.end }));
    }
    render() {
        const { doctorList } = this.props;
        const data = [];
        if (Array.isArray(doctorList)){
            for (let i = 0; i < doctorList.length; i++) {
                data.push({
                    key: i,
                    name: doctorList[i].name,
                    email: doctorList[i].email,
                    number: doctorList[i].number,
                });
            }
        }
       

        return (
            <div id="parentTableDiv">  <div>
                <NavLink to="/available-doctors" className='list-group-item' activeClassName='active'> Available Doctors  </NavLink>
                <NavLink to="/emergency-doctors" className='list-group-item' activeClassName='active'> Emergency Doctors  </NavLink>
            </div>
                <div className='project-list-container'>
                    <p className='total-record-style'>Available Doctors </p>
                    <Select
                        placeholder="Select start time"
                        style={{ width: 240, margin: "10px 10px" }}
                        onChange={this.handleStartChange}
                    >                        
                        <Option value="0000">00:00</Option>
                        <Option value="0100">01:00</Option>
                        <Option value="0200">02:00</Option>
                        <Option value="0300">03:00</Option>
                        <Option value="0400">04:00</Option>
                        <Option value="0500">05:00</Option>
                        <Option value="0600">06:00</Option>
                        <Option value="0700">07:00</Option>
                        <Option value="0800">08:00</Option>
                        <Option value="0900">09:00</Option>
                        <Option value="1000">10:00</Option>
                        <Option value="1100">11:00</Option>
                        <Option value="1200">12:00</Option>
                        <Option value="1300">13:00</Option>
                        <Option value="1400">14:00</Option>
                        <Option value="1500">15:00</Option>
                        <Option value="1600">16:00</Option>
                        <Option value="1700">17:00</Option>
                        <Option value="1800">18:00</Option>
                        <Option value="1900">19:00</Option>
                        <Option value="2000">20:00</Option>
                        <Option value="2100">21:00</Option>
                        <Option value="2200">22:00</Option>
                        <Option value="2300">23:00</Option>
                    </Select> 
                    <Select    
                        placeholder="Select End time" 
                        style={{ width: 240, margin: "10px 10px"}} 
                        onChange={this.handleEndChange}
                    >
                        <Option value="0000">00:00</Option>
                        <Option value="0100">01:00</Option>
                        <Option value="0200">02:00</Option>
                        <Option value="0300">03:00</Option>
                        <Option value="0400">04:00</Option>
                        <Option value="0500">05:00</Option>
                        <Option value="0600">06:00</Option>
                        <Option value="0700">07:00</Option>
                        <Option value="0800">08:00</Option>
                        <Option value="0900">09:00</Option>
                        <Option value="1000">10:00</Option>
                        <Option value="1100">11:00</Option>
                        <Option value="1200">12:00</Option>
                        <Option value="1300">13:00</Option>
                        <Option value="1400">14:00</Option>
                        <Option value="1500">15:00</Option>
                        <Option value="1600">16:00</Option>
                        <Option value="1700">17:00</Option>
                        <Option value="1800">18:00</Option>
                        <Option value="1900">19:00</Option>
                        <Option value="2000">20:00</Option>
                        <Option value="2100">21:00</Option>
                        <Option value="2200">22:00</Option>
                        <Option value="2300">23:00</Option>
                    </Select>
                        
            <Table columns={columns} dataSource={data} scroll={{ y: 240 }} />
            </div>
            </div>
        )
    }
};


export default connect(
    state => {
        return ({
            doctorList: state.availableDoctors.availableDoctors[state.availableDoctors.availableDoctors.length -1]
        })
    }
)(AvailableDoctor)