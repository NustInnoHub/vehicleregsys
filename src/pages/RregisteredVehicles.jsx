import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
// import Checkbox from "@mui/material/Checkbox";

import Paper from "@mui/material/Paper";

import EnhancedTableToolbar from "../components/newreg/EnhancedTableToolbar";
import EnhancedTableHead from "../components/newreg/EnhancedTableHead";
import Row from "../components/newreg/Row";

function createData(
  Vehicle_Reg_Number,
  Previous_Reg_Number,
  Vehicle_PIN_Number,
  Chassis_Number,
  Engine_Number,
  Vehicle_Make,
  Vehicle_Model,
  Vehicle_Colour,
  Vehicle_Tax_Class,
  Vehicle_Fuel_Type,
  Type_of_Body,
  Net_Mass,
  Gross_Vehicle_Mass,
  Year_of_Manufacture,
  Country_of_import,
  Vehicle_Reg_Status,
  Date_of_Zim_Reg,
  Vehicle,
  Vehicle_Restri,
  Minimum_Height,
  Owner_Surname,
  Owner_Name,
  Owner_ID,
  Owner_Phone_Number,
  Second_Owner_Surname,
  Second_Owner_Name,
  Date_Issued,
  Issuing_Office,
  Certificate_Number,
  Category,
  Address,
  City_Town
) {
  return {
    Vehicle_Reg_Number,
    Previous_Reg_Number,
    Vehicle_PIN_Number,
    Chassis_Number,
    Engine_Number,
    Vehicle_Make,
    Vehicle_Model,
    Vehicle_Colour,
    Vehicle_Tax_Class,
    Vehicle_Fuel_Type,
    Type_of_Body,
    Net_Mass,
    Gross_Vehicle_Mass,
    Year_of_Manufacture,
    Country_of_import,
    Vehicle_Reg_Status,
    Date_of_Zim_Reg,
    Vehicle,
    Vehicle_Restri,
    Minimum_Height,
    Owner_Surname,
    Owner_Name,
    Owner_ID,
    Owner_Phone_Number,
    Second_Owner_Surname,
    Second_Owner_Name,
    Date_Issued,
    Issuing_Office,
    Certificate_Number,
    Category,
    Address,
    City_Town
  };
}

const rows = [
  createData("ACC 0000", "ACC 0000", "5654", "N14HR", "N14RR", ""),
  createData("ACC 0001", "ACC 0000", "5654", "N14HR", "N14RR", ""),
  createData("ACC 0002", "ACC 0000", "5654", "N14HR", "N14RR", ""),
  createData("ACC 0003", "ACC 0000", "5654", "N14HR", "N14RR", ""),
  createData("ACC 0004", "ACC 0000", "5654", "N14HR", "N14RR", ""),
  createData("ACC 0005", "ACC 0000", "5654", "N14HR", "N14RR", ""),
  createData("ACC 0006", "ACC 0000", "5654", "N14HR", "N14RR", ""),
  createData("ACC 0007", "ACC 0000", "5654", "N14HR", "N14RR", ""),
  createData("ACC 0008", "ACC 0000", "5654", "N14HR", "N14RR", ""),
  createData("ACC 0009", "ACC 0000", "5654", "N14HR", "N14RR", ""),
  createData("ACC 00010", "ACC 0000", "5654", "N14HR", "N14RR", ""),
  createData("ACC 00010", "ACC 0000", "5654", "N14HR", "N14RR", ""),
  createData("ACC 00012", "ACC 0000", "5654", "N14HR", "N14RR", ""),
  createData("ACC 00013", "ACC 0000", "5654", "N14HR", "N14RR", ""),
  createData("ACC 00014", "ACC 0000", "5654", "N14HR", "N14RR", ""),
  createData("ACC 00015", "ACC 0000", "5654", "N14HR", "N14RR", ""),
  createData("ACC 00016", "ACC 0000", "5654", "N14HR", "N14RR", "")
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE10, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  React.useEffect(() => {
    setRowsPerPage(dense ? 5 : 10);
  }, [setRowsPerPage, dense]);

  // const handleSelectAllClick = (event) => {
  //   if (event.target.checked) {
  //     const newSelecteds = rows.map((n) => n.name);
  //     setSelected(newSelecteds);
  //     return;
  //   }
  //   setSelected([]);
  // };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", borderRadius: 3 }}>
        <EnhancedTableToolbar
          handleChangeDense={handleChangeDense}
          dense={dense}
          numSelected={selected.length}
        />
        <TableContainer sx={{ minHeight: 380, mb: 0 }}>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              // onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE10, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.Vehicle_Reg_Number);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <Row
                      key={index}
                      isItemSelected={isItemSelected}
                      labelId={labelId}
                      handleClick={handleClick}
                      row={row}
                    />
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[dense ? 10 : 5, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
