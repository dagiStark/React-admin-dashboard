import React from "react";

import {
  GridComponent,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Pager,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../components";

const Orders = () => {
  return (
    <div>
      <Header title="Orders" category="Page" />
    </div>
  );
};

export default Orders;
