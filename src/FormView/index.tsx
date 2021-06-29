// @ts-ignore
import { Form } from "react-formio";
import formData from "./formData.json";
import "bootstrap/dist/css/bootstrap.min.css";

export function FormView() {
  return (
    <div style={{ padding: 20 }}>
      <Form
        form={formData}
        onSubmit={(value: any) => console.log("value", value)}
      />
    </div>
  );
}
