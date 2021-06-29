/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import { useMemo } from "react";

// @ts-ignore
import { FormBuilder as FormBuiderio, Components } from "react-formio";
import { Container } from "./styles";

// Components.setComponents(components);

export function FormBuilder() {
  const configForm = useMemo(() => {
    return {
      // builder: {
      //   layout: false,
      //   premium: false,
      //   basic: {
      //     default: true,
      //     components: {
      //       password: false,
      //       button: true,
      //     },
      //   },
      //   advanced: {
      //     default: false,
      //     components: {
      //       signature: false,
      //     },
      //   },
      // },
    };
  }, []);

  return (
    <Container>
      <FormBuiderio
        form={{ display: "form" }}
        onChange={(schema: any) => console.log(schema)}
        options={configForm}
      />
    </Container>
  );
}
