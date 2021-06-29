/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// @ts-ignore
import { FormBuilder as FormBuiderio, Components } from "react-formio";

// Components.setComponents(components);

export function FormBuilder() {
  return (
    <div className="container">
      <FormBuiderio
        form={{ display: "form" }}
        onChange={(schema: any) => console.log(schema)}
      />
    </div>
  );
}
