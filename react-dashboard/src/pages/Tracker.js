import React, { useEffect, useState } from "react";
import "./pages.css";
import { Inputs } from "../components/Inputs/Inputs";
import { Selects } from "../components/Selects/Selects";
import { Buttons } from "../components/Buttons/Buttons";
import { useFormik } from "formik";
import { TrackerSchema } from "../validation/TrackerSchema";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Tracker = () => {
  const [showParentTicket, setShowParentTicket] = useState("");
  const [showErrMsg, setShowErrMsg] = useState("");
  const [formData, setFormData] = useState([]);

  const formik = useFormik({
    initialValues: {
      Sprint: "",
      SprintWeek: "",
      TicketType: "",
      ParentTicket: showParentTicket.length == 0 ? "null" : showParentTicket,
      TicketNo: "",
      EffortHours: "",
      Status: "",
      Comments: "",
    },
    validationSchema: TrackerSchema,
    onSubmit: (values, { resetForm }) => {
      setFormData([...formData,values])
      toast.success("Tracker Submited")
      resetForm();
    },
  });

  useEffect(()=>{
    localStorage.setItem('tracker',JSON.stringify(formData));
  },[formData])

  const { handleChange, values, handleSubmit } = formik;

  const handleChangeParent = (e) =>{
    setShowParentTicket(e.target.value)
    if(e.target.value.length == 0){
        setShowErrMsg("*Field is required")
    }else{
        setShowErrMsg("")
    }
  }

  return (
    <main>
      <div className="main__container">
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <form onSubmit={handleSubmit}>
                <h1>Tracker</h1>
                <Inputs
                  label={"Sprint"}
                  name="Sprint"
                  value={values?.Sprint}
                  onChange={handleChange}
                />
                {formik.touched.Sprint && formik.errors.Sprint ? (
                  <div className="error">{formik.errors.Sprint}</div>
                ) : null}
                <div className="form-flex">
                  <div>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 425 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Sprint Week
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        name="SprintWeek"
                        value={values?.SprintWeek}
                        onChange={handleChange}
                      >
                        <MenuItem value="Week 1">Week 1</MenuItem>
                        <MenuItem value="Week 2">Week 2</MenuItem>
                        <MenuItem value="Week 3">Week 3</MenuItem>
                        <MenuItem value="Week 4">Week 4</MenuItem>
                      </Select>
                    </FormControl>
                    {formik.touched.SprintWeek && formik.errors.SprintWeek ? (
                      <div className="error">{formik.errors.SprintWeek}</div>
                    ) : null}
                  </div>
                  <div>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 425 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Ticket Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        title="Ticket Type"
                        name="TicketType"
                        value={values?.TicketType}
                        onChange={handleChange}
                      >
                        <MenuItem value="Story">Story</MenuItem>
                        <MenuItem value="Task">Task</MenuItem>
                        <MenuItem value="Defect">Defect</MenuItem>
                        <MenuItem value="Bug">Bug</MenuItem>
                      </Select>
                    </FormControl>
                    {formik.touched.TicketType && formik.errors.TicketType ? (
                      <div className="error">{formik.errors.TicketType}</div>
                    ) : null}
                  </div>
                </div>
                {values?.TicketType == "Task" || values?.TicketType == "Defect" ? 
                    <>
                     <Inputs
                        label={"Parent Ticket No."}
                        name="ParentTicket"
                        value={showParentTicket}
                        onChange={handleChangeParent}
                      />
                      <div className="error">{showErrMsg}</div>
                    </>
                    :
                    ""}   
                     
                <Inputs
                  label={"Ticket No."}
                  name="TicketNo"
                  value={values?.TicketNo}
                  onChange={handleChange}
                />
                {formik.touched.TicketNo && formik.errors.TicketNo ? (
                  <div className="error">{formik.errors.TicketNo}</div>
                ) : null}
                <div className="form-flex">
                  <div>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 425 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Effort Hours
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        title="Effort Hours"
                        name="EffortHours"
                        value={values?.EffortHours}
                        onChange={handleChange}
                      >
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                        <MenuItem value="6">6</MenuItem>
                        <MenuItem value="7">7</MenuItem>
                        <MenuItem value="8">8</MenuItem>
                      </Select>
                    </FormControl>
                    {formik.touched.EffortHours && formik.errors.EffortHours ? (
                      <div className="error">{formik.errors.EffortHours}</div>
                    ) : null}
                  </div>
                  <div>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 425 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Status
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        title="Status"
                        name="Status"
                        value={values?.Status}
                        onChange={handleChange}
                      >
                        <MenuItem value="In Progress">In Progress</MenuItem>
                        <MenuItem value="Completed">Completed</MenuItem>
                        <MenuItem value="Blocked">Blocked</MenuItem>
                      </Select>
                    </FormControl>
                    {formik.touched.Status && formik.errors.Status ? (
                      <div className="error">{formik.errors.Status}</div>
                    ) : null}
                  </div>
                </div>
                <Inputs
                  label={"Comments"}
                  name="Comments"
                  value={values?.Comments}
                  onChange={handleChange}
                />
                {formik.touched.Comments && formik.errors.Comments ? (
                  <div className="error">{formik.errors.Comments}</div>
                ) : null}
                <div style={{ marginTop: "20px" }}>
                  <Buttons type="submit" title="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
