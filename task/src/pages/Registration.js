import React,{useState} from 'react'
import Head from '../components/Head/Head'
import Header from '../components/headers/Headers'
import Nav from "../components/navbar/Nav";
import { SlClose } from "react-icons/sl";
import {
  Col,
  Input,
  Label,
  Row,
  Form,
  Button,
  Container,
  FormGroup,
} from "reactstrap";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

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

const Registration = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value);
    };
  
    const handleCon_password = (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        setPasswordError("Passwords do not match");
      } else {
        // Passwords match, proceed with form submission
        setPasswordError("");
        // Add your form submission logic here
      }
    };
  
    const [documentFile, setDocumentFile] = useState(null);
  
    const handleDocumentChange = (e) => {
      const file = e.target.files[0];
      // You can perform additional checks or validations on the file here if needed
      setDocumentFile(file);
    };
    const [imageUrl, setImageUrl] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    function handleImageChange(event) {
      const file = event.target.files[0];
      const fileType = file.type;
  
      // Check if the file type is one of the accepted types
      if (
        fileType === "image/jpeg" ||
        fileType === "image/png" ||
        fileType === "image/jpg"
      ) {
        const reader = new FileReader();
        reader.onload = function (e) {
          setImageUrl(e.target.result);
          setErrorMessage("");
        };
        reader.readAsDataURL(file);
      } else {
        // If the file type is not accepted, show an error message
        setErrorMessage(
          "Invalid file type. Please upload a JPG, PNG, or JPEG file."
        );
      }
    }
  
    function removeImage() {
      setImageUrl("");
    }
  
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
            >   User Registration Form
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
                            pattern: /^[a-zA-Z\s]*$/,
                          })}
                          value={watch(`name`)}
                          className="form-control"
                          onChange={trigger("name")}
                        />
                        <span className="invalid">
                          {errors.name?.type === "required" && (
                            <span style={style}>Name field is required</span>
                          )}
                          {errors.name?.type === "pattern" && (
                            <span style={style}>Digits are not allowed</span>
                          )}
                        </span>
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
                          className="form-control"
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
                          className="form-control"
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
                    <Col sm="4">
                      <div className="form-group">
                        <Label>
                          <h5> DOB</h5>
                        </Label>
                        <div className="form-control-wrap">
                          <Input
                            className="form-control date-picker"
                            id="date"
                            {...register("dob", { required: true })}
                            minDate={new Date()} // Minimum date is today
                            maxDate={
                              new Date(
                                new Date().setFullYear(
                                  new Date().getFullYear() + 1
                                )
                              )
                            } // Maximum date is one year from today
                            dateFormat="yyyy-MM-dd"
                          />
                          {errors.dob && (
                            <span style={style}>DOB field is required</span>
                          )}
                        </div>
                        <div className="form-note">
                          Date Format <code>yyyy-MM-dd</code>
                        </div>
                      </div>
                    </Col>
                    <Col sm="4">
                      <div className="form-group">
                        <Label htmlFor="default-1" className="form-label">
                          <h5>Mobile no.</h5>
                        </Label>
                        <div className="form-control-wrap">
                          <input
                            type="text"
                            id="mobile"
                            {...register("mobile", {
                              required: true,
                              minLength: 10,
                              maxLength: 10,
                              pattern: /^[6-9]\d{9}$/,
                            })}
                            className="form-control"
                          />
                          {errors.mobile &&
                            errors.mobile.type === "required" && (
                              <span className="invalid">
                                Mobile field is required
                              </span>
                            )}
                          {errors.mobile &&
                            errors.mobile.type === "minLength" && (
                              <span className="invalid">
                                Invalid input.Min- 10 digits are allowed
                              </span>
                            )}
                          {errors.mobile &&
                            errors.mobile.type === "maxLength" && (
                              <span className="invalid">
                                Invalid input.Max- 10 digits are allowed
                              </span>
                            )}
                          {errors.mobile &&
                            errors.mobile.type === "pattern" && (
                              <span className="invalid">
                                Recheck number!. Starts from (6-9) only.
                              </span>
                            )}
                        </div>
                      </div>
                    </Col>
                    <Col sm="4">
                      <div className="form-group">
                        <Label htmlFor="default-1" className="form-label">
                          <h5> Email-ID:</h5>
                        </Label>
                        <div className="form-control-wrap">
                          <input
                            type="text"
                            id="email"
                            {...register("email", {
                              required: true,
                              pattern:
                                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            })}
                            className="form-control"
                            onChange={trigger("email")}
                            // onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                          {errors.email && errors.email.type === "required" && (
                            <span className="invalid">
                              Email field is required
                            </span>
                          )}
                          {errors.email && errors.email.type === "pattern" && (
                            <span className="invalid">
                              Invalid input.Format: (xyz@gmail.com)
                            </span>
                          )}
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className={`gy-4 mt-1`}>
                    <Col sm="4">
                      <div className="form-group">
                        <Label htmlFor="default-1" className="form-label">
                          <h5> Username</h5>
                        </Label>
                        <div className="form-control-wrap">
                          <input
                            type="text"
                            id="username"
                            {...register("username", {
                              required: true,
                              pattern: /^[a-zs]*$/,
                            })}
                            className="form-control"
                          />
                          {errors.username &&
                            errors.username.type === "required" && (
                              <span className="invalid">
                                username field is required.(Digits Only)
                              </span>
                            )}
                          {errors.username &&
                            errors.username.type === "pattern" && (
                              <span className="invalid">
                                Invalid input. Only lowerCase are allowed
                              </span>
                            )}
                        </div>
                      </div>
                    </Col>
                    <Col sm="4">
                      <div className="form-group">
                        <Label htmlFor="default-1" className="form-label">
                          <h5> Password</h5>
                        </Label>
                        <div className="form-control-wrap">
                          <input
                            type="password"
                            id="password"
                            {...register("password", {
                              required: true,
                              pattern:
                                /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~\-]).*(?=.*[A-Z]).*(?=.*[a-z]).*(?=.*\d).{6}$/,
                              minLength: 6,
                              maxLength: 8,
                            })}
                            className="form-control"
                            value={password}
                            onChange={handlePasswordChange}
                          />
                          {errors.password &&
                            errors.password.type === "minLength" && (
                              <span className="invalid">
                                Invalid input.Min-6 digits are allowed
                              </span>
                            )}
                          {errors.password &&
                            errors.password.type === "maxLength" && (
                              <span className="invalid">
                                Invalid input.Max-8 digits are allowed
                              </span>
                            )}
                          {errors.password &&
                            errors.password.type === "required" && (
                              <span className="invalid">
                                Password field is required.(Only Digits)
                              </span>
                            )}
                          {errors.password &&
                            errors.password.type === "pattern" && (
                              <span className="invalid">
                                digits,lowercase,uppercase and special character
                              </span>
                            )}
                        </div>
                      </div>
                    </Col>
                    <Col sm="4">
                      <div className="form-group">
                        <Label htmlFor="default-1" className="form-label">
                          <h5> Confirm Password</h5>
                        </Label>
                        <div className="form-control-wrap">
                          <input
                            type="password"
                            id="c_password"
                            {...register("c_password", {
                              required: true,
                            })}
                            className="form-control"
                            value={watch("c_password")}
                            onChange={handleConfirmPasswordChange}
                          />
                          <button type="submit" onClick={handleCon_password}>
                            Verify
                          </button>
                          {passwordError && <p>{passwordError}</p>}
                          {errors.c_password &&
                            errors.c_password.type === "required" && (
                              <span className="invalid">
                                Confirm password field is required.(Only Digits)
                              </span>
                            )}
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className={`gy-4 mt-1`}>
                    <Col size="4">
                      <div className="form-group">
                        <Label htmlFor="default-0" className="form-label">
                          <h5> Profile</h5>
                        </Label>
                        <div className="form-control-wrap">
                          <input
                            type="file"
                            id="profile"
                            {...register("profile", { required: true })}
                            onChange={handleImageChange}
                            accept=".jpg, .png, .jpeg"
                          />
                          {imageUrl && (
                            <div>
                              <img
                                src={imageUrl}
                                alt="Preview"
                                style={{ maxWidth: "100%", maxHeight: "200px" }}
                              />
                              <Button onClick={removeImage} style={{}}>
                                <SlClose />
                              </Button>
                            </div>
                          )}
                          {errorMessage && <p>{errorMessage}</p>}
                          {errors.profile && <p>Profile is required.</p>}
                        </div>
                      </div>
                    </Col>
                    <Col sm="4">
                      <div className="form-group">
                        <Label htmlFor="default-1" className="form-label">
                          <h5> Document:</h5>
                        </Label>
                      </div>
                      <div className="form-control-wrap">
                        <input
                          type="file"
                          id="document"
                          {...register("document", { required: true })}
                          onChange={handleDocumentChange}
                          accept=".pdf,.doc,.docx,.txt" // Specify accepted file formats if needed
                        />
                          {errors.document && <p>Document is required.</p>}
                      </div>
                      
                    </Col>
                    <Col sm="4">
                      <div className="form-group">
                        <Label htmlFor="default-1" className="form-label">
                          <h5> Status:</h5>
                        </Label>
                      </div>
                      <div className="form-control-wrap">
                        <CreatableSelect
                          options={[
                            { label: "Active", value: "Active" },
                            { label: "Inactive", value: "Inactive" },
                          ]}
                          {...register("status", { required: true })}
                        />
                           {errors.status && <p>Status is required.</p>}
                      </div>
                    </Col>
                  </Row>
                  <Row className={`gy-4 mt-1`}>
                    <Col>
                      {" "}
                      <Label>
                        <h5>Gender</h5>
                      </Label>
                      <div style={{ display: "flex" }}>
                        <br />
                        <FormGroup check>
                          <Input name="radio1" type="radio" />{" "}
                          <Label check>Male</Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input name="radio1" type="radio" />{" "}
                          <Label check>Female</Label>
                        </FormGroup>
                      </div>
                    </Col>
                    <Col>
                      <Label>
                        <h5>Hobbies:&nbsp;&nbsp; &nbsp;</h5>{" "}
                      </Label>
                      <div style={{ display: "flex" }}>
                        <FormGroup check>
                          <Input type="checkbox" /> <Label check>Singing</Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input type="checkbox" /> <Label check>Dancing</Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input type="checkbox" /> <Label check>Reading</Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input type="checkbox" /> <Label check>Coading</Label>
                        </FormGroup>
                      </div>
                    </Col>
                    <Col></Col>
                  </Row>
                  <h5>Address:</h5>
                  <Row className={`gy-4 mt-1`}>
                    <Col size="4">
                      <div className="form-group">
                        <label className="form-label" htmlFor="tower">
                          <h5>Country</h5>
                        </label>
                        <div className="form-control-wrap">
                          <CreatableSelect
                            className=""
                            id="tower"
                            // options={towerList}
                            {...register("tower", { required: true })}
                            // onChange={handleTowerChange}
                            value={watch(`tower`)}
                          />
                          {errors.tower && (
                            <span style={style}>Tower field is required</span>
                          )}
                        </div>
                      </div>
                    </Col>
                    <Col size="4">
                      <div className="form-group">
                        <label className="form-label" htmlFor="tower">
                          <h5>State</h5>
                        </label>
                        <div className="form-control-wrap">
                          <CreatableSelect
                            className=""
                            id="tower"
                            // options={towerList}
                            {...register("tower", { required: true })}
                            // onChange={handleTowerChange}
                            value={watch(`tower`)}
                          />
                          {errors.tower && (
                            <span style={style}>Tower field is required</span>
                          )}
                        </div>
                      </div>
                    </Col>
                    <Col size="4">
                      <div className="form-group">
                        <label className="form-label" htmlFor="tower">
                          <h5>City</h5>
                        </label>
                        <div className="form-control-wrap">
                          <CreatableSelect
                            className=""
                            id="tower"
                            // options={towerList}
                            {...register("tower", { required: true })}
                            // onChange={handleTowerChange}
                            value={watch(`tower`)}
                          />
                          {errors.tower && (
                            <span style={style}>Tower field is required</span>
                          )}
                        </div>
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
                          {mode == "Edit" ? "Update" : "Add"} Register
                        </Button>
                      </div>
                    </Col>
                    <Col md="4" className={`mt-auto`}>
                      <div
                        className="form-group"
                        style={{ verticalAlign: "bottom" }}
                      >
                        <Button color="primary" size="md" type="submit">
                          {mode == "Edit" ? "Update" : "Add"} Login
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>{" "}
        </div>
      </div>
    </>
  )
}

export default Registration;
