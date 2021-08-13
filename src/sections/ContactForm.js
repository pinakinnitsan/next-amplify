import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container, Button } from "react-bootstrap";
import InputGroup from "../components/Core/InputGroup";
import { validateEmail, validateText } from "../utils/validation";

const RenderInputs = ({ elements, setValues, values }) => {
  return elements.map((element, id) => {
    const { label, name } = element;
    const type = element.type.toLowerCase();

    if (type === "email" || type === "text" || type === "textarea") {
      return (
        <Col md={type === "textarea" ? "12" : "6"} key={name}>
          <InputGroup
            label={label}
            name={name}
            type={type}
            value={values[name] ? values[name].value : ""}
            handleChange={(e) =>
              setValues({
                ...values,
                [name]: { ...values[name], value: e.target.value },
              })
            }
            handleBlur={(e) => {
              setValues({
                ...values,
                [name]: {
                  ...values[name],
                  error:
                    type !== "email"
                      ? validateText(label, e.target.value)
                      : validateEmail(label, e.target.value),
                },
              });
            }}
            error={values[name] ? values[name].error : ""}
            textarea={type === "textarea"}
          />
        </Col>
      );
    } else {
      return <React.Fragment key={name}></React.Fragment>;
    }
  });
};

const ContactForm = ({ data }) => {
  const [values, setValues] = useState({});

  useEffect(() => {
    let tempValues = {};
    data.form.elements.map((element, id) => {
      const { label, name, defaultValue } = element;
      const type = element.type.toLowerCase();

      if (type === "email" || type === "text" || type === "textarea") {
        tempValues = {
          ...tempValues,
          [name]: { value: defaultValue, error: "", name, label, type },
        };
      }
    });

    setValues({ ...tempValues });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isError = Object.values(values).some((inValues, id) => {
      const { value } = inValues;
      return !value ? true : false;
    });

    if (isError) {
      let tempValues = { ...values };
      Object.values(values).map((inValues, id) => {
        tempValues = {
          ...tempValues,
          [inValues.name]: {
            ...inValues,
            error:
              inValues["type"] !== "email"
                ? validateText(inValues["label"], e.target.value)
                : validateEmail(inValues["label"], e.target.value),
          },
        };
      });
      setValues({ ...tempValues });
    } else {
      const formData = new FormData();

      Object.entries(values).map((inValue) => {
        formData.append(inValue[0], inValue[1].value);
      });

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL.slice(0, -1)}${data.link.url}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res, "res");

      // for (var pair of formData.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }
    }
  };

  return (
    <Container>
      <div className="login-form bg-white border-gray-3 px-8 pb-9 px-sm-11 py-sm-18 pt-15 shadow-1 rounded-10">
        <form onSubmit={handleSubmit}>
          <Row>
            <RenderInputs
              elements={data.form.elements}
              values={values}
              setValues={setValues}
            />
            <Col xs="3">
              <Button className="form-btn btn btn-primary w-100" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </form>
      </div>
    </Container>
  );
};

export default ContactForm;
