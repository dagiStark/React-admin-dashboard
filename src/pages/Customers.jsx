import React from "react";

import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Inject,
  Toolbar,
  Selection,
  Sort,
  Filter,
  Edit,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../components";
import { customersData, customersGrid } from "../constants";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Customers" category="Page" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        width={"auto"}
        editSettings={{ allowDeleting: true, allowEditing: true }}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Sort, Filter, Edit]} />
      </GridComponent> 
    </div>
  );
};

export default Customers;
