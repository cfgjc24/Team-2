import React, { useEffect, useState, useRef } from "react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { CsvExportModule } from "@ag-grid-community/csv-export";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import { ModuleRegistry, Grid } from "@ag-grid-community/core";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./../Firebase";

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  CsvExportModule,
  ExcelExportModule,
]);

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
  const gridRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(firestore, "tutor_data"));
      const data = querySnapshot.docs.map((doc) => doc.data());
      setRowData(data.slice(0, 20));
    };

    fetchData();
  }, []);

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

  const handleExportCSV = () => {
    if (gridRef.current) {
      gridRef.current.gridOptions.api.exportDataAsCsv({
        fileName: "tutor_feedback.csv",
        skipHeader: false,
        allColumns: true,
      });
    }
  };

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          marginTop: "20px",
          color: "#BCECFC",
        }}
      >
        <button
          style={{ width: "50px", padding: "3px" }}
          onClick={handleExportCSV}
        >
          Export to CSV
        </button>
        <button
          style={{ width: "50px", padding: "3px" }}
          onClick={handleExportExcel}
        >
          Export to Excel
        </button>
      </div>
    </div>
  );
}
