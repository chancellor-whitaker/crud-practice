import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import { useState } from "react";

import { generateColumnDefs } from "./helpers/generateColumnDefs";
import { usePrevious } from "./hooks/usePrevious";
import { fetchJson } from "./helpers/fetchJson";
import { usePromise } from "./hooks/usePromise";
import { url } from "./constants/url";

const promise = fetchJson(url);

export default function App() {
  const [selectedRow, setSelectedRow] = useState(null);

  const rowClassRules = {
    "bg-primary-subtle": ({ data }) => data === selectedRow,
  };

  const customers = usePromise(promise);

  const [rowData, setRowData] = useState([]);

  const columnDefs = generateColumnDefs(rowData);

  usePrevious(customers, () => customers && setRowData(customers));

  // ! TODO
  const createRow = () => {
    // create new row where Customer Id of row doesn't match Customer Id of any existing row in rowData
    // for every field in columnDefs (other than Customer Id), row should have a value of null
    // create new array containing all rows in rowData and new row
    // new row should be positioned at beginning of array
    // set rowData to new array
    // set selectedRow to new row
  };

  // ! TODO
  const selectRow = (clickedRow) => {
    // set selectedRow to clickedRow
    // reset selectedRow if clickedRow already equals selectedRow
  };

  // ! TODO
  const deleteRow = () => {
    // filter selectedRow out of rowData
    // reset selectedRow
  };

  return (
    <main className="container">
      <div className="my-3 p-3 bg-body rounded shadow-sm">
        <div className="d-flex gap-2 flex-wrap">
          <button className="btn btn-primary" onClick={createRow} type="button">
            Create
          </button>
          <button
            className="btn btn-primary"
            disabled={!selectedRow}
            onClick={deleteRow}
            type="button"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="my-3 p-3 bg-body rounded shadow-sm">
        <div style={{ height: 500 }}>
          <AgGridReact
            onRowClicked={({ data }) => selectRow(data)}
            rowClassRules={rowClassRules}
            columnDefs={columnDefs}
            rowData={rowData}
          />
        </div>
      </div>
    </main>
  );
}
