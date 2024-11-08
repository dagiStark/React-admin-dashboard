import React from "react";
import { SparklineComponent } from "@syncfusion/ej2-react-charts";

const SparkLine = ({ currentColor, id, type, height, width, data, color }) => {
  return (
    <SparklineComponent
      type={type}
      id={id}
      height={height}
      width={width}
      dataSource={data}
      xName="x"
      yName="yval"
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      lineWidth={1}
      tooltipSettings={{
        visible: true,
        format: "${x}: data ${y}",
        trackLineSettings: {
          visible: true,
        },
      }}
    ></SparklineComponent>
  );
};

export default SparkLine;
