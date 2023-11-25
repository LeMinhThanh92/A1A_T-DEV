import { Paper } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { useState } from 'react';

const rows: GridRowsProp = [
  {
    id: 1,
    vendoraccount: 'Hello',
    name: 'World',
    address: '123',
    group: '123',
    contactperson: '123',
    contactnumber: '123',
    taxid: '123',
    email: '123',
    payment: '123',
    currency: '123',
    internalname: '123'
  },
  {
    id: 1,
    vendoraccount: 'Hello',
    name: 'World',
    address: '123',
    group: '123',
    contactperson: '123',
    contactnumber: '123',
    taxid: '123',
    email: '123',
    payment: '123',
    currency: '123',
    internalname: '123'
  },
  {
    id: 1,
    vendoraccount: 'Hello',
    name: 'World',
    address: '123',
    group: '123',
    contactperson: '123',
    contactnumber: '123',
    taxid: '123',
    email: '123',
    payment: '123',
    currency: '123',
    internalname: '123'
  },
  {
    id: 1,
    vendoraccount: 'Hello',
    name: 'World',
    address: '123',
    group: '123',
    contactperson: '123',
    contactnumber: '123',
    taxid: '123',
    email: '123',
    payment: '123',
    currency: '123',
    internalname: '123'
  }
];

const columns: GridColDef[] = [
  { field: 'id' , headerClassName: 'col-header'},
  { field: 'vendoraccount', headerName: 'vendoraccount', width: 150, headerClassName: 'col-header' },
  { field: 'name', headerName: 'name', width: 150, headerClassName: 'col-header' },
  { field: 'address', headerName: 'address', width: 150, headerClassName: 'col-header' },
  { field: 'group', headerName: 'group', width: 150, headerClassName: 'col-header' },
  { field: 'contactperson', headerName: 'contactperson', width: 150, headerClassName: 'col-header' },
  { field: 'contactnumber', headerName: 'contactnumber', width: 150, headerClassName: 'col-header' },
  { field: 'taxid', headerName: 'taxid', width: 150, headerClassName: 'col-header' },
  { field: 'email', headerName: 'email', width: 150, headerClassName: 'col-header' },
  { field: 'payment', headerName: 'payment', width: 150, headerClassName: 'col-header' },
  { field: 'currency', headerName: 'currency', width: 150, headerClassName: 'col-header' },
  { field: 'internalname', headerName: 'internalname', width: 150 , headerClassName: 'col-header'},
];

export default function MSGroupTable() {
  const [page, setPage] = useState<number>(0);
  const [pageSize, setRowsPerPage] = useState(5);
  const [paginationModel, setPaginationModel] = useState({
    page: page,
    pageSize: pageSize
  });
  return (
    <div>
      <Paper sx={{
        width: '100%',
        minHeight: 100,
        marginTop: 1,
        '& .MuiDataGrid-columnHeaderTitle': {
          fontWeight: 'bold'
        },
        '& .col-header': {
          backgroundColor: "#CDAF95",
        },
      }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10, 20]}
          paginationMode={'client'}
          paginationModel={paginationModel}
          rowCount={rows.length}
          slots={{
            toolbar: GridToolbar,
          }}
          onPaginationModelChange={(model) => {
            console.log('Model change:', model);
            setPage(model.page);
            setRowsPerPage(model.pageSize);
            setPaginationModel(model);
          }}
        />
      </Paper>
    </div>
  );
}
