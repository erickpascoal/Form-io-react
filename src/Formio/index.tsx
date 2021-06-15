// @ts-ignore
import { Form } from "react-formio";
import formData from "./formData.json";

export function Formio() {
  return (
    <div>
      <Form
        form={formData}
        onSubmit={(value: any) => console.log("value", value)}
      />
    </div>
  );
}
