import React, { useState } from "react";
import Head from "../components/Head/Head";
import Nav from "../components/navbar/Nav";
import Header from "../components/headers/Headers";
import { Container, Row, Col, Form, Label, Input, Button } from "reactstrap";
import { useForm } from "react-hook-form";

const style = { color: "#e85347", fontSize: "11px", fontStyle: "italic" };
const container = {
  width: "100%" /* You can adjust the width as needed */,
  margin: " 0 auto" /* Center the container horizontally */,
  padding: "20px" /* Add padding for spacing */,
  boxSizing: "border-box",
  marginTop: "50px" /* Include padding in the width calculation */,
};
const formContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "140vh",
  marginTop: "70px",
  backgroundColor: "white",
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    reset,
    trigger,
    watch,
    formState: { errors },
  } = useForm();
  const [mode, setMode] = useState([]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [documentFile, setDocumentFile] = useState(null);

  const handleInputChange = (e) => {
    // Trigger validation for the "name" field
    setValue("name", e.target.value);
    trigger("name");
  }
  const handleMiddleName=(e)=>{
    setValue("middle_name", e.target.value);
    trigger("middle_name");
  }

  const handleLastName=(e)=>{
    setValue("last_name", e.target.value);
    trigger("last_name");
  };

  const onFormSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Head title={"Register"} />
      <Nav />
      <div className="container" style={container}>
        <Header
          mainHeading={"User Registration"}
          subHeading={"Task | Register "}
        />

        <div className="formContainer" style={formContainer}>
          <Container>
            <h2
              style={{
                textAlign: "center",
                backgroundColor: "#ff902f",
                height: "55px",

                marginBottom: "40px",
              }}
            >
              {" "}
              User Registration Form
            </h2>
            <span style={{ paddingBottom: "20px" }}></span>
            <Row className={`gy-4 mb-1`}>
              <Col lg={12} xxl={12} md={12}>
                <Form onSubmit={handleSubmit(onFormSubmit)} id="form">
                  <Row className={`gy-4`}>
                    <Col size="4">
                      <div className="form-group">
                        <Label htmlFor="default-0" className="form-label">
                          <h5> First name</h5>
                        </Label>
                      </div>
                      <div className="form-control-wrap">
                        <Input
                          type="text"
                          id="name"
                          {...register("name", {
                            required: true,
                          })}
                          value={watch(`name`)}
                          onChange={handleInputChange}
                        />
                        {errors.name && (
                          <span style={style}>Name field is required</span>
                        )}

                        {errors.name?.type === "pattern" && (
                          <span style={style}>Digits are not allowed</span>
                        )}
                      </div>
                    </Col>
                    <Col size="4">
                      <div className="form-group">
                        <Label className="from-label" htmlFor="department_name">
                          <h5> Middle Name</h5>
                        </Label>
                      </div>
                      <div className="form-control-wrap">
                        <Input
                          type="text"
                          id="middle_name"
                          {...register("middle_name", {
                            required: true,
                            pattern: /^[a-zA-Z\s]*$/,
                          })}
                          value={watch(`middle_name`)}
                          onChange={handleMiddleName}
                        />
                        <span className="invalid">
                          {errors.middle_name?.type === "required" && (
                            <span style={style}>
                              middle_name field is required
                            </span>
                          )}
                          {errors.middle_name?.type === "pattern" && (
                            <span style={style}>Digits are not allowed</span>
                          )}
                        </span>
                      </div>
                    </Col>
                    <Col size="4">
                      <div className="form-group">
                        <Label
                          className="from-label"
                          htmlFor="designation_name"
                        >
                          <h5> Last Name</h5>
                        </Label>
                      </div>
                      <div className="form-control-wrap">
                        <Input
                          type="text"
                          id="last_name"
                          {...register("last_name", {
                            required: true,
                            pattern: /^[a-zA-Z\s]*$/,
                          })}
                          value={watch(`last_name`)}
                          onChange={handleLastName}
                        />
                        <span className="invalid">
                          {errors.last_name?.type === "required" && (
                            <span style={style}>
                              last_name field is required
                            </span>
                          )}
                          {errors.last_name?.type === "pattern" && (
                            <span style={style}>Digits are not allowed</span>
                          )}
                        </span>
                      </div>
                    </Col>
                  </Row>

                  <Row className={`gy-4 mt-1`}>
                    <Col className={`gy-4 mt-1`}></Col>
                    <Col className={`gy-4 mt-1`}>
                      <div
                        className="form-group"
                        style={{ verticalAlign: "bottom" }}
                      >
                        <Button color="primary" size="md" type="submit">
                          Register
                        </Button>
                      </div>
                    </Col>
                    <Col md="4" className={`mt-auto`}>
                      <div
                        className="form-group"
                        style={{ verticalAlign: "bottom" }}
                      >
                        <Button color="primary" size="md" type="submit">
                          Login
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default SignUp;
