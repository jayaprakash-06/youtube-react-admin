import "./controlAndConfiguration.css";
import { DataGrid } from "@material-ui/data-grid";
import {Avatar, Box, gridClasses, Typography} from '@mui/material';
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from 'react';
import React from "react";
import { grey } from '@mui/material/colors';
import { getUsers } from '../../dummyData';

export default function ControlAndConfiguration(factory, deps) {
    const [data, setData] = useState(userRows);
    const [toggle, setToggle] = useState(false);
    const [buttonText, setButtonText] = useState('Active');
    const [status, setIsActive] = useState(true);
    //const [data, setData] = useState(users);
    // const {
    //     state: { users },
    //     dispatch,
    // } = useValue();

    const [pageSize, setPageSize] = useState(5);
    const [rowId, setRowId] = useState(null);

    // useEffect(() => {
    //     if (users.length === 0) getUsers(dispatch);
    // }, []);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    function handleClick(id,status) {
        // setData(data.)
        let isActive = false
        if(status == 'Active'){
            isActive = true
        }
        isActive ? setButtonText('Active') : setButtonText('In Active')
        isActive ? setIsActive(true) : setIsActive(false)
    }
    const toggler = () => {
        toggle ? setToggle(false) : setToggle(true)
    }
    const columns = [
        { field: "id", headerName: "DeviceID", width: 150 },
        {
            field: "user",
            headerName: "Device Name",
            width: 200,
            renderCell: (params) =>
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
        },

        {
            field: "status",
            headerName: "Active",
            width: 250,
            type: Boolean,
            editMode: 'row',
            editable: true


            // renderCell: (params) => {
            //
            //     params.row.status ? setIsActive(true) :  setIsActive(false)
            //     function handleClick(id,status) {
            //         status ? setIsActive(true) : setIsActive(false)
            //         status ? setButtonText('Active') : setButtonText('In Active')
            //     }
            //     return(
            //
            //         <>
            //             <button
            //                 className="userListEdit"
            //                 style={{
            //                     backgroundColor: params.row.status ? 'green' : 'red'
            //                 }}
            //                 onClick={() => handleClick(params.row.id,params.row.status)}>{buttonText}
            //             </button>
            //         </>
            //     )

                //}
        },
        // {
        //   field: "status",
        //   headerName: "Status",
        //   width: 120,
        // },
        // {
        //   field: "transaction",
        //   headerName: "Transaction Volume",
        //   width: 160,
        // },
        {
            field: "update",
            headerName: "Update",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                    </>
                );
            }
        }
    ];

    return (
        <div className="userList">
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    );
}
