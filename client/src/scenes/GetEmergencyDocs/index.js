import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { getEmergencyDocssApi } from './../../Data/api'


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

class GetEmergencyDocs extends Component {

    componentWillMount() {
        this.props.dispatch(getEmergencyDocssApi())
    }
    render() {
        const { doctorList } = this.props;
        const data = [];
        if (Array.isArray(doctorList)) {
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
            <div id="parentTableDiv">
                <div>
                <NavLink to="/available-doctors"  className = 'list-group-item' activeClassName = 'active'> Available Doctors  </NavLink>
                <NavLink to="/emergency-doctors"  className = 'list-group-item' activeClassName = 'active'> Emergency Doctors  </NavLink>
</div>
                <div className='project-list-container'>
                    <p className='total-record-style'>Emergency Doctors </p>
                    <Table columns={columns} dataSource={data} scroll={{ y: 240 }} />
                </div>
            </div>
        )
    }
};


export default connect(
    state => {
        return ({
            doctorList: state.availableDoctors.emergencyDoctorsReducer[state.availableDoctors.emergencyDoctorsReducer.length - 1]
        })
    }
)(GetEmergencyDocs)