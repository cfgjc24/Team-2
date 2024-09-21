import React, { useEffect, useState, useRef } from "react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { CsvExportModule } from "@ag-grid-community/csv-export";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export"; // Import Excel Export module
import { ModuleRegistry, Grid } from "@ag-grid-community/core";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./../Firebase";

// Registering the necessary ag-Grid modules
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  CsvExportModule,
  ExcelExportModule,
]); // Register Excel Export

const columnDefs = [
  { field: "user_id", headerName: "User ID", width: 150 },
  { field: "lesson_num", headerName: "Lesson Number", width: 150 },
  { field: "confidence_after", headerName: "Confidence After", width: 150 },
  { field: "location", headerName: "Location", width: 200 },
  { field: "total_attendance", headerName: "Total Attendance", width: 150 },
  { field: "feedback", headerName: "Feedback", width: 300 },
];

export default function TutorFeedbackTable() {
  const [rowData, setRowData] = useState([]);
  const gridRef = useRef(null); // Store the grid instance reference

  // Fetch data from Firebase
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(firestore, "tutor_data"));
      const data = querySnapshot.docs.map((doc) => doc.data());
      setRowData(data.slice(0, 20)); // Set only the first 20 rows
    };

    fetchData();
  }, []);

  // Initialize the grid and update row data
  useEffect(() => {
    const gridDiv = document.querySelector("#myGrid");

    if (!gridRef.current) {

      gridRef.current = new Grid(gridDiv, {
        rowData,
        columnDefs,
        defaultColDef: {
          filter: true,
          editable: true,
        },
        pagination: true,
        paginationPageSize: 10,
      });
    } else {
      gridRef.current.gridOptions.api.setRowData(rowData);
    }

    return () => {
      if (gridRef.current) {
        gridRef.current.gridOptions.api.destroy();
        gridRef.current = null;
      }
    };
  }, [rowData]);

  // Export to CSV function
  const handleExportCSV = () => {
    if (gridRef.current) {
      gridRef.current.gridOptions.api.exportDataAsCsv({
        fileName: "tutor_feedback.csv", 
        skipHeader: false, 
        allColumns: true, 
      });
    }
  };

  // Export to Excel function
  const handleExportExcel = () => {
    if (gridRef.current) {
      gridRef.current.gridOptions.api.exportDataAsExcel({
        fileName: "tutor_feedback.xlsx",
        sheetName: "Feedback Data", 
      });
    }
  };

  return (
    <div>
      <h1 style={{ fontWeight: "bold" }}>Tutor Feedback Report</h1>
      <div
        id="myGrid"
        style={{ height: "500px", width: "100%" }}
        className="ag-theme-quartz"
      ></div>
      <button onClick={handleExportCSV}>Export to CSV</button>
      <button onClick={handleExportExcel}>Export to Excel</button>
    </div>
  );
}
