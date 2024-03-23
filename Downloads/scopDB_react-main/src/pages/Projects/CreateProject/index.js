import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Input, Label, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
//Import Flatepicker
import Flatpickr from "react-flatpickr";
import Select from "react-select";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Dropzone from "react-dropzone";

//Import Images
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";

const CreateProject = () => {
    const SingleOptions = [
        { value: 'Watches', label: 'Watches' },
        { value: 'Headset', label: 'Headset' },
        { value: 'Sweatshirt', label: 'Sweatshirt' },
        { value: '20% off', label: '20% off' },
        { value: '4 star', label: '4 star' },
      ];

    const [selectedMulti, setselectedMulti] = useState(null);

    const handleMulti = (selectedMulti) => {
    setselectedMulti(selectedMulti);
    }  
    
    //Dropzone file upload
    const [selectedFiles, setselectedFiles] = useState([]);
  
    const handleAcceptedFiles = (files) => {
      files.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
          formattedSize: formatBytes(file.size),
        })
      );
      setselectedFiles(files);
    }

        /**
     * Formats the size
     */
    const formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    }

document.title="Create Project | Velzon - React Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Create Project" pageTitle="Projects" />
                    <Row>
                        <Col lg={8}>
                            <Card>
                                <CardBody>
                                    <div className="mb-3">
                                        <Label className="form-label" htmlFor="project-title-input">Project Title</Label>
                                        <Input type="text" className="form-control" id="project-title-input"
                                            placeholder="Enter project title" />
                                    </div>

                                    <div className="mb-3">
                                        <Label className="form-label" htmlFor="Client-name-input">Client name</Label>
                                        <Input type="text" className="form-control" id="Client-name-input"
                                            placeholder="Enter Client name" />
                                    </div>

                                    <div className="mb-3">
                                        <Label className="form-label" htmlFor="Response-rate-input">Sample size</Label>
                                        <Input type="text" className="form-control" id="Response-rate-input"
                                            placeholder="Enter Response rate" />
                                    </div>

                                    <div className="mb-3">
                                        <Label className="form-label" htmlFor="SAR-Value-input">SAR Value </Label>
                                        <Input type="text" className="form-control" id="SAR-Value-input"
                                            placeholder="Enter SAR Value " />
                                    </div>


                                    <div className="mb-3">
                                        <Label className="form-label" htmlFor="NO-DC-input">No. of days spent on data collection</Label>
                                        <Input type="text" className="form-control" id="NO-DC-input"
                                            placeholder="Enter No. of days spent on Data collection" />
                                    </div>


                                    <div className="mb-3">
                                        <Label className="form-label">Project Description</Label>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data="<p>Hello from CKEditor 5!</p>"
                                            onReady={(editor) => {
                                                // You can store the "editor" and use when it is needed.
                                                
                                            }}
                                            // onChange={(editor) => {
                                            //     editor.getData();
                                            // }}
                                            />
                                    </div>

                                

                                    <Row>
                                        <Col lg={4}>
                                            <div className="mb-3 mb-lg-0">
                                                <Label htmlFor="choices-priority-input" className="form-label">Priority</Label>
                                                <select className="form-select" data-choices data-choices-search-false
                                                    id="choices-priority-input">
                                                    <option defaultValue="High">High</option>
                                                    <option value="Medium">Medium</option>
                                                    <option value="Low">Low</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="mb-3 mb-lg-0">
                                                <Label htmlFor="choices-status-input" className="form-label">Status</Label>
                                                <select className="form-select" data-choices data-choices-search-false
                                                    id="choices-status-input">
                                                    <option defaultValue="Inprogress">Inprogress</option>
                                                    <option value="Completed">Completed</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div>
                                                <Label htmlFor="datepicker-deadline-input" className="form-label">Deadline</Label>
                                                <Flatpickr
                                                    className="form-control"
                                                    options={{
                                                    dateFormat: "d M, Y"
                                                    }}
                                                    placeholder="Enter due date"
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardHeader >
                                    <h5 className="card-title mb-0">Attached files</h5>
                                </CardHeader>
                                <CardBody>
                                    <div>
                                        <p className="text-muted">Add Attached files here.</p>

                                        <Dropzone
                                            onDrop={acceptedFiles => {
                                            handleAcceptedFiles(acceptedFiles);
                                            }}
                                        >
                                            {({ getRootProps, getInputProps }) => (
                                            <div className="dropzone dz-clickable">
                                                <div
                                                className="dz-message needsclick"
                                                {...getRootProps()}
                                                >
                                                <div className="mb-3">
                                                    <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                                                </div>
                                                <h4>Drop files here or click to upload.</h4>
                                                </div>
                                            </div>
                                            )}
                                        </Dropzone>

                                        <ul className="list-unstyled mb-0" id="dropzone-preview">
                                        
                                        {selectedFiles.map((f, i) => {
                                            return (
                                                <Card
                                                className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                key={i + "-file"}
                                                >
                                                <div className="p-2">
                                                    <Row className="align-items-center">
                                                    <Col className="col-auto">
                                                        <img
                                                        data-dz-thumbnail=""
                                                        height="80"
                                                        className="avatar-sm rounded bg-light"
                                                        alt={f.name}
                                                        src={f.preview}
                                                        />
                                                    </Col>
                                                    <Col>
                                                        <Link
                                                        to="#"
                                                        className="text-muted font-weight-bold"
                                                        >
                                                        {f.name}
                                                        </Link>
                                                        <p className="mb-0">
                                                        <strong>{f.formattedSize}</strong>
                                                        </p>
                                                    </Col>
                                                    </Row>
                                                </div>
                                                </Card>
                                            );
                                            })}
                                        </ul>

                                    </div>
                                </CardBody>
                            </Card>

                            <div className="text-end mb-4">
                                <button type="submit" className="btn btn-danger w-sm me-1">Delete</button>
                                <button type="submit" className="btn btn-secondary w-sm me-1">Draft</button>
                                <button type="submit" className="btn btn-success w-sm">Create</button>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">Privacy</h5>
                                </div>
                                <CardBody>
                                    <div>
                                        <Label htmlFor="choices-privacy-status-input" className="form-label">Status</Label>
                                        <select className="form-select" data-choices data-choices-search-false
                                            id="choices-privacy-status-input">
                                            <option defaultValue="Private">Private</option>
                                            <option value="Team">Team</option>
                                            <option value="Public">Public</option>
                                        </select>
                                    </div>
                                </CardBody>
                            </div>

                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">Type</h5>
                                </div>
                                <CardBody>
                                    <div className="mb-3">
                                        <Label htmlFor="choices-Type-input" className="form-label">Type</Label>
                                        <select className="form-select" data-choices data-choices-search-false
                                            id="choices-Type-input">
                                            <option defaultValue="1">1</option>
                                            <option value="2">2</option>
                                        </select>
                                    </div>

                                    <div>
                                        <Label htmlFor="choices-text-input" className="form-label">Keywords</Label>
                                        <Select
                                            value={selectedMulti}
                                            isMulti={true}                                                            
                                            onChange={() => {
                                                handleMulti();
                                            }}
                                            options={SingleOptions}
                                        />
                                    </div>
                                </CardBody>
                            </div>

                            <Card>
                                <CardHeader>
                                    <h5 className="card-title mb-0">Members</h5>
                                </CardHeader>
                                <CardBody>
                                    <div className="mb-3">
                                        <Label htmlFor="choices-lead-input" className="form-label">Project Manger</Label>
                                        <select className="form-select" data-choices data-choices-search-false
                                            id="choices-lead-input">
                                            <option defaultValue="Brent Gonzalez">Dr. Abdullah</option>
                                            <option value="Darline Williams">Dr. Saad</option>
                                            <option value="Sylvia Wright">Dr. Ibrahim</option>
                                        </select>
                                    </div>

                                    <div>
                                        <Label className="form-label">Team Members</Label>
                                        <div className="avatar-group">
                                            <Link to="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Brent Gonzalez">
                                                <div className="avatar-xs">
                                                    <img src={avatar3} alt="" className="rounded-circle img-fluid" />
                                                </div>
                                            </Link>
                                            <Link to="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Sylvia Wright">
                                                <div className="avatar-xs">
                                                    <div className="avatar-title rounded-circle bg-secondary">
                                                        S
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Ellen Smith">
                                                <div className="avatar-xs">
                                                    <img src={avatar4} alt="" className="rounded-circle img-fluid" />
                                                </div>
                                            </Link>
                                            <Link to="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Add Members">
                                                <div className="avatar-xs" data-bs-toggle="modal" data-bs-target="#inviteMembersModal">
                                                    <div className="avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary">
                                                        +
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default CreateProject;