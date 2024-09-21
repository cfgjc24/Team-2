import React, { useEffect } from "react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ModuleRegistry, createGrid } from "@ag-grid-community/core";

// Register AG-Grid modules
ModuleRegistry.registerModules([ClientSideRowModelModule]);

// Format date
const dateFormatter = (params) => {
  return new Date(params.value).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// Custom cell renderer for company logo
class CompanyLogoRenderer {
  init(params) {
    let companyLogo = document.createElement("img");
    companyLogo.src = `https://www.ag-grid.com/example-assets/space-company-logos/${params.value.toLowerCase()}.png`;
    companyLogo.setAttribute(
      "style",
      "display: block; width: 25px; height: auto; max-height: 50%; margin-right: 12px; filter: brightness(1.1)"
    );

    let companyName = document.createElement("p");
    companyName.textContent = params.value;
    companyName.setAttribute(
      "style",
      "text-overflow: ellipsis; overflow: hidden; white-space: nowrap;"
    );

    this.eGui = document.createElement("span");
    this.eGui.setAttribute(
      "style",
      "display: flex; height: 100%; width: 100%; align-items: center"
    );
    this.eGui.appendChild(companyLogo);
    this.eGui.appendChild(companyName);
  }

  getGui() {
    return this.eGui;
  }

  refresh(params) {
    return false;
  }
}

// Custom cell renderer for mission result
class MissionResultRenderer {
  init(params) {
    let icon = document.createElement("img");
    icon.src = `https://www.ag-grid.com/example-assets/icons/${
      params.value ? "tick-in-circle" : "cross-in-circle"
    }.png`;
    icon.setAttribute("style", "width: auto; height: auto;");

    this.eGui = document.createElement("span");
    this.eGui.setAttribute(
      "style",
      "display: flex; justify-content: center; height: 100%; align-items: center"
    );
    this.eGui.appendChild(icon);
  }

  getGui() {
    return this.eGui;
  }

  refresh(params) {
    return false;
  }
}

// Grid Options
const gridOptions = {
  rowData: [],
  columnDefs: [
    { field: "mission", width: 150 },
    { field: "company", width: 130, cellRenderer: CompanyLogoRenderer },
    { field: "location", width: 225 },
    { field: "date", valueFormatter: dateFormatter },
    {
      field: "price",
      width: 130,
      valueFormatter: (params) => {
        return "£" + params.value.toLocaleString();
      },
    },
    { field: "successful", width: 120, cellRenderer: MissionResultRenderer },
    { field: "rocket" },
  ],
  defaultColDef: {
    filter: true,
    editable: true,
  },
  pagination: true,
  paginationPageSize: 10,
  onSelectionChanged: (event) => {
    console.log("Row Selection Event!");
  },
  onCellValueChanged: (event) => {
    console.log(`New Cell Value: ${event.value}`);
  },
};

export default function StudentFeedbackTable() {
  useEffect(() => {
    const gridDiv = document.querySelector("#myGrid");

    // Initialize grid
    const gridApi = createGrid(gridDiv, gridOptions);

    // Fetch data and set rowData
    fetch("https://www.ag-grid.com/example-assets/space-mission-data.json")
      .then((response) => response.json())
      .then((data) => gridApi.setGridOption("rowData", data));
  }, []);

  return (
    <div
      id="myGrid"
      style={{ height: "500px", width: "100%" }}
      className="ag-theme-quartz"
    ></div>
  );
}
