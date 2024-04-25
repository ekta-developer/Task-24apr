import React, { useState } from 'react'

import { Badge, Button, Form, Label, Modal, Row } from "reactstrap";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import Head from '../components/Head/Head';
import Header from '../components/headers/Headers';
import Nav from '../components/navbar/Nav';
import DataTable from "react-data-table-component";
import './dashboard.css';

const style = { color: "#e85347", fontSize: "11px", fontStyle: "italic" };
const container= {
  width: "100%", /* You can adjust the width as needed */
  margin:" 0 auto", /* Center the container horizontally */
  padding: "20px", /* Add padding for spacing */
  boxSizing: "border-box",
  marginTop:"50px"/* Include padding in the width calculation */
}
const Dashboard = () => {
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const getStatusColor = (status) => {
    if (status === true) {
      return "success"; // Green color for paid
    } else if (status === false) {
      return "danger"; // Red color for unpaid
    } else {
      return "warning"; // Orange color for partial paid
    }
  };

  const getStatusText = (status) => {
    if (status === true) {
      return "Active";
    } else if (status === false) {
      return "Inactive";
    } else {
      return "---";
    }
  };

const handleEdit=()=>{

}

  const [columns,setColumns]= useState([
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      sortable: true,
      
    },
    {
      name: "DOB",
      selector: (row) => row.dob,
      sortable: true,
      
    },
    {
      name: "Mobile",
      selector: (row) => row.mobile,
      sortable: true,
      
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      
    },
    {
      name: "username",
      selector: (row) => row.username,
      sortable: true,
      
    },
    {
      name: "Password",
      selector: (row) => row.password,
      sortable: true,
      
    },
    {
      name: "Hobbies",
      selector: (row) => row.hobbies,
      sortable: true,
      
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
      
    },
    {
      name: "District",
      selector: (row) => row.district,
      sortable: true,
      
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
      
    },
    {
      name: "Profile Picture",
      selector: (row) => row.pic,
      sortable: true,
      
    },
    {
      name: "Document",
      selector: (row) => row.document,
      sortable: true,
      
    },
    {
      name: <h4>Status</h4>,
      selector: (row) => row.status,
      cell: (row) => (
        <Badge color={`outline-${getStatusColor(row.status)}`}>
          {getStatusText(row.status)}
        </Badge>
      ),
      sortable: true,
    }
  ]);
  const [data,setData]= useState([
    {
      name:"ekta",
      gender:"female",
      dob:"12/3/2009",
      mobile:"657876545",
      email:"admin@gmail.com",
      username:"xyz",
      password:"123456",
      hobbies:"painting",
      state:"up",
      district:"lucknow",
      city:"lucknow",
      pic:"login.jpg",
      document:".pdf",
      status:true,

    },
    {
      name:"ekta",
      gender:"female",
      dob:"12/3/2009",
      mobile:"657876545",
      email:"admin@gmail.com",
      username:"xyz",
      password:"123456",
      hobbies:"painting",
      state:"up",
      district:"lucknow",
      city:"lucknow",
      pic:"login.jpg",
      document:".pdf",
      status:false,
      
    }
  ]);

  return (
    <>
    <Head title={"Dashboard"}/>
    <Nav/>
    <div className='container' style={container}>
      <Header mainHeading={"Welcome to Dashboard"} subHeading={"Task | Dashboard "}/>
      <DataTable
       data={data}
       columns={columns}
       striped={true}
       responsive={true}
       pagination
       paginationResetDefaultPage={resetPaginationToggle}
       subHeader={true}
       persistTableHead
       onColumnOrderChange
       paginationRowsPerPageOptions={[6,12,18]}
       paginationPerPage={6}
       />
    </div>
    </>
  )
}

export default Dashboard;
