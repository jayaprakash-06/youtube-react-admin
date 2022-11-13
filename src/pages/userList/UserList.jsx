import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "DeviceID", width: 150 },
    {
      field: "user",
      headerName: "Device Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
      {
          field: "view",
          headerName: "View",
          width: 150,
          renderCell: (params) => {
              return (
                  <>
                      <Link to={"/user/" + params.row.id}>
                          <button className="userListEdit">View</button>
                      </Link>
                  </>
              );
          }
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
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => {
        return (
            <>
              <DeleteOutline
                  className="userListDelete"
                  onClick={() => handleDelete(params.row.id)}
              />
            </>
        );
      },
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
