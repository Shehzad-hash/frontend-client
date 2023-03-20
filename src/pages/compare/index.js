import React, { useState, useEffect } from "react";
import fSwordImage from "./../../img/fSword.png";
import "./style.css";
import {
  getCompanyDetails,
  getInstantProgramDetails,
  getThreeStepProgramDetails,
  getTwoStepProgramDetails,
  getOneStepProgramDetails,
  getCompanies,
  getPriceByIdProgram,
} from "./../../api/index";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "antd/dist/reset.css";
import { Select } from "antd";
export default function Compare() {
  const [show, setShow] = useState(false);

  // const [mode, setMode] = useState(0);

  const handleClose = () => setShow(false);

  // const handleShowIt = (value) => {
  //   setMode(value);
  //   setShow(true);
  // };

  const [company, setCompany] = useState({});
  const [program, setProgram] = useState({});

  const [company2, setCompany2] = useState({});
  const [program2, setProgram2] = useState({});

  const [company3, setCompany3] = useState({});
  const [program3, setProgram3] = useState({});

  const [price, setPrice] = useState({});
  const [selectedProgram, setSelectedProgram] = useState("selectedProgram");
  useEffect(() => {
    getCompaniesFromBackend();
  }, []);
  const getPricesByIDByBackend = async () => {
    try {
      //ToDo:- make it dynamic by idprogram
      let response = await getPriceByIdProgram("5ER01");
      if (response.status === 200) {
        setPrice(response.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log("program", program?.minimumTimetoPayout)
  const [theCompanies, setTheCompanies] = useState({});

  const [companySelected, setCompanySelected] = useState("");

  const [companyPrograms, setCompanyPrograms] = useState([]);
  const [company2Programs, setCompany2Programs] = useState([]);
  const [company3Programs, setCompany3Programs] = useState([]);


  const [companyId, setCompanyId] = useState("");

  const [companyId2, setCompanyId2] = useState("");

  const [companyId3, setCompanyId3] = useState("");

  const getCompaniesFromBackend = async () => {
    try {
      let response = await getCompanies();

      // console.log("RESPONSE",response)
      if (response.status === 200) {
        setTheCompanies(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeForCompany = (value, moode) => {
    let mode = parseInt(moode.moode)

    console.log("mode", mode)
    // setMode(mode);
    switch (mode) {
      case 1:
        setCompanySelected(value);
        let index1 = theCompanies.findIndex((x) => x._id === value);
        setCompanyPrograms(theCompanies[index1].programs)
        setCompanyId(theCompanies[index1]._id);
        getCompanyDetailsByBackend(value, mode);
        // getInstantProgramByBackend(value, mode);
        break;
      case 2:
        setCompanySelected(value);

        let index2 = theCompanies.findIndex((x) => x._id === value);
        setCompanyId2(theCompanies[index2]._id);
        setCompany2Programs(theCompanies[index2].programs)
        getCompanyDetailsByBackend(value, mode);
      // getInstantProgramByBackend(value, mode);
      case 3:
        setCompanySelected(value);
        let index3 = theCompanies.findIndex((x) => x._id === value);
        setCompanyId3(theCompanies[index3]._id);
        getCompanyDetailsByBackend(value, mode);
      // getInstantProgramByBackend(value, mode);
      default:
        break;
    }
  };

  const getCompanyDetailsByBackend = async (companyId, mode) => {
    try {
      let response = await getCompanyDetails(companyId);
      let data = response.data;
      switch (mode) {
        case 1:
          setCompany(data);
          setCompanyPrograms(data.programs)
          break;
        case 2:
          setCompany2(data);

          setCompany2Programs(data.programs)
          break;
        case 3:
          setCompany3(data);
          setCompany3Programs(data.programs)
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getInstantProgramByBackend = async (companyName, mode) => {
    try {
      let response = await getInstantProgramDetails(companyName);
      let data = response.data;

      switch (mode) {
        case 1:
          setProgram(data[0]);
          break;
        case 2:
          setProgram2(data[0]);
          break;
        case 3:
          setProgram3(data[0]);
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getThreeProgramByBackend = async (companyName, mode) => {
    try {
      let response = await getThreeStepProgramDetails(companyName);
      let data = response.data;

      switch (mode) {
        case 1:
          setProgram(data[0]);
          break;
        case 2:
          setProgram2(data[0]);
          break;
        case 3:
          setProgram3(data[0]);
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getOneProgramByBackend = async (companyName, mode) => {

    try {
      let response = await getOneStepProgramDetails(companyName);
      let data = response.data;

      switch (mode) {
        case 1:
          setProgram(data[0]);
          break;
        case 2:
          setProgram2(data[0]);
          break;
        case 3:
          setProgram3(data[0]);
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }

    // try {
    //   let response = await getOneStepProgramDetails(companyName);
    //   let data = response.data;

    //   // console.log("RESPONSE", data[0].maxLossPercentage);
    //   setProgram(data[0]);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const getTwoProgramByBackend = async (companyName, mode) => {


    try {
      let response = await getTwoStepProgramDetails(companyName);
      let data = response.data;

      switch (mode) {
        case 1:
          setProgram(data[0]);
          break;
        case 2:
          setProgram2(data[0]);
          break;
        case 3:
          setProgram3(data[0]);
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }

    // try {
    //   let response = await getTwoStepProgramDetails(companyName);
    //   let data = response.data;
    //   setProgram(data[0]);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const [stepToCheck, setStepToCheck] = React.useState("Select Program");

  const handleProgramChange = async (step, moode) => {
    let mode = moode.moode;

    // setStepToCheck(step);

    if (step == "Instant") {
      await getInstantProgramByBackend(companyId, mode);
    } else if (step == "1-step") {
      await getOneProgramByBackend(companyId, mode);
    } else if (step == "2-step") {
      await getTwoProgramByBackend(companyId, mode);
    } else {
      await getThreeProgramByBackend(companyId, mode);
    }
  };
  return (
    <div className="bodyWrapper compareBody">
      {/* sideBar */}
      <div className="sideBar dark">
        <i className="fa-solid fa-chevron-left" onclick="sideMenuToggle()" />
        <h1 className="sideHeader">The Prop Firm Journal</h1>
        <div className="sideDashboardSection">
          <div className="silentText">Dashboards</div>
          <a href="./index-dark.html" className>
            <i className="fa-solid fa-chevron-right" />
            <img src="./img/ChartPieSlice.svg" alt="" />
            Explore
          </a>
          <a href="#" className="active-link">
            <i className="fa-solid fa-chevron-right" />
            <img src="./img/ShoppingBagOpen.svg" alt="" />
            Compare
          </a>
        </div>
        <div className="sideRankingSection">
          <div className="silentText">Rankings</div>
          <a href="#" className="sideMenuLink">
            <i className="fa-solid fa-arrow-trend-up" /> Pricing
          </a>
          <a href="#" className="sideMenuLink active-link">
            <i className="fa-solid fa-arrow-trend-up" /> Account Size
          </a>
          <a href="#" className="sideMenuLink">
            <i className="fa-solid fa-arrow-trend-up" /> Max Scaling
          </a>
          <a href="#" className="sideMenuLink">
            <i className="fa-solid fa-arrow-trend-up" /> Max Profit Share
          </a>
          <a href="#" className="sideMenuLink">
            <i className="fa-solid fa-arrow-trend-up" /> Fastest Payout
          </a>
          <a href="#" className="sideMenuLink">
            <i className="fa-solid fa-arrow-trend-up" /> Most Voted
          </a>
        </div>
        <a href="#" className="sideBarLogo">
          <h1 className="text-center">The Prop Firm Journal</h1>
        </a>
      </div>
      {/* main body */}
      <div className="mainBody compare">
        <div className="row g-0">
          <div className="col-lg-10">
            {/* nav bar section */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary dark">
              <div className="container-fluid">
                <i
                  className="fa-solid fa-chevron-right"
                  onclick="sideMenuToggle()"
                />
                <div className="navLeft mx-auto mx-lg-0">
                  <a href="#">
                    <img src="./img/dashboard.svg" alt="" />
                  </a>
                  <a href="#" className="silentText">
                    Dashboards /
                  </a>
                  <a href="./index.html">Explore</a>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <div className="searchArea nav-link">
                        <img src="./img/Search.svg" alt="" />
                        <input type="search" placeholder="Search" />
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <img src="./img/sun.svg" alt="" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <img src="./img/bell.svg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* mainbody content */}
            <div className="mainBodyContent dark">
              {/* header */}
              <div className="bodyHeader"></div>

              {/* tables  */}

              <table className="naTable">
                <tbody>
                  <colgroup>
                    <col width={"50%"} />
                  </colgroup>
                  <tr>
                    <td className="mainText">Program Name</td>
                    <td className="mainText tableContents">
                      {/* <div className="dropdown">
                        <button
                          className="btn btn-secondary oddBtn"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          onClick={() => {
                            handleShowIt(1);
                          }}
                        >
                          Choose Company 1
               
                        </button>
                      </div> */}
                      <Select
                        className="multiInputs"
                        id="exampleForm.ControlInput1"
                        // className="currencySelect"
                        showSearch
                        dropdownStyle={{ zIndex: 2000 }}
                        // style={{ width: 100 }}
                        placeholder="Please Select the Company1"
                        optionFilterProp="children"
                        value={companySelected?._id}
                        onChange={handleChangeForCompany}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {theCompanies.length > 0
                          ? theCompanies.map((cr, index) => {
                            return (
                              <Select.Option key={index} value={cr._id} moode={1}>
                                {cr.companyName}
                              </Select.Option>
                            );
                          })
                          : null}
                      </Select>
                      <div className="dropdown program odd">
                        {/* <button
                          className="btn btn-secondary"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
             

                          {stepToCheck}
                          <i className="fa-solid fa-chevron-down" />
                        </button> */}


                        <Select
                          className="multiInputs"
                          id="exampleForm.ControlInput1"
                          // className="currencySelect"
                          showSearch
                          dropdownStyle={{ zIndex: 2000 }}
                          // style={{ width: 100 }}
                          placeholder="Please Select the Program "
                          optionFilterProp="children"
                          // value={companyPrograms?._id}
                          onChange={handleProgramChange}
                          filterOption={(input, option) =>
                            option.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          {companyPrograms?.length > 0
                            ? companyPrograms?.map((cr, index) => {
                              return (
                                <Select.Option key={index} value={cr} moode={1}>
                                  {cr}
                                </Select.Option>
                              );
                            })
                            : null}
                        </Select>



                        {/* <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              onClick={() => handleProgramChange("instant")}
                            >
                              Instant Program
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              onClick={() => handleProgramChange("onestep")}
                            >
                              One Step
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              onClick={() => handleProgramChange("twostep")}
                            >
                              Two Step
                            </a>
                          </li>

                          <li>
                            <a
                              className="dropdown-item"
                              onClick={() => handleProgramChange("threestep")}
                            >
                              Three Step
                            </a>
                          </li>
                        </ul> */}
                      </div>
                      <img
                        // src={company?.companyLogo || fSwordImage}
                        src="https:picsum.photos/100/100"
                        alt=""
                        className="sword tableImage"
                      />
                      {program?.programName !== undefined
                        ? program?.programName
                        : "N/A"}
                    </td>
                    <td className="mainText tableContents">
                      {/* <div className="dropdown">
                        <button
                          className="btn btn-secondary oddBtn"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          onClick={() => {
                            handleShowIt(1);
                          }}
                        >
                          Choose Company 2
        
                        </button>
                      </div> */}
                      <Select
                        className="multiInputs"
                        id="exampleForm.ControlInput1"
                        // className="currencySelect"
                        showSearch
                        dropdownStyle={{ zIndex: 2000 }}
                        // style={{ width: 100 }}
                        placeholder="Please Select the Company2"
                        optionFilterProp="children"
                        value={companySelected?._id}
                        onChange={handleChangeForCompany}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {theCompanies.length > 0
                          ? theCompanies.map((cr, index) => {
                            return (
                              <Select.Option key={index} value={cr._id} moode={2}>
                                {cr.companyName}
                              </Select.Option>
                            );
                          })
                          : null}
                      </Select>
                      <div className="dropdown program odd">
                        {/* <button
                          className="btn btn-secondary"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
           

                          {stepToCheck}
                          <i className="fa-solid fa-chevron-down" />
                        </button> */}
                        {/* <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              onClick={() => handleProgramChange("instant")}
                            >
                              Instant Program
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              onClick={() => handleProgramChange("onestep")}
                            >
                              One Step
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              onClick={() => handleProgramChange("twostep")}
                            >
                              Two Step
                            </a>
                          </li>

                          <li>
                            <a
                              className="dropdown-item"
                              onClick={() => handleProgramChange("threestep")}
                            >
                              Three Step
                            </a>
                          </li>
                        </ul> */}


                        <Select
                          className="multiInputs"
                          id="exampleForm.ControlInput1"
                          // className="currencySelect"
                          showSearch
                          dropdownStyle={{ zIndex: 2000 }}
                          // style={{ width: 100 }}
                          placeholder="Please Select the Program "
                          optionFilterProp="children"
                          // value={companyPrograms?._id}
                          onChange={handleProgramChange}
                          filterOption={(input, option) =>
                            option.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          {company2Programs?.length > 0
                            ? company2Programs?.map((cr, index) => {
                              return (
                                <Select.Option key={index} value={cr} moode={2}>
                                  {cr}
                                </Select.Option>
                              );
                            })
                            : null}
                        </Select>

                      </div>
                      <img
                        // src={company?.companyLogo || fSwordImage}
                        src="https:picsum.photos/100/100"
                        alt=""
                        className="sword tableImage"
                      />
                      {program2?.programName !== undefined
                        ? program2?.programName
                        : "N/A"}
                    </td>
                    <td className="mainText tableContents">
                      {/* <div className="dropdown">
                        <button
                          className="btn btn-secondary oddBtn"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          onClick={() => {
                            handleShowIt(1);
                          }}
                        >
                          Choose Company 3
                
                        </button>
                      </div> */}
                      <Select
                        className="multiInputs"
                        id="exampleForm.ControlInput1"
                        // className="currencySelect"
                        showSearch
                        dropdownStyle={{ zIndex: 2000 }}
                        // style={{ width: 100 }}
                        placeholder="Please Select the Company3"
                        optionFilterProp="children"
                        value={companySelected?._id}
                        onChange={handleChangeForCompany}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {theCompanies.length > 0
                          ? theCompanies.map((cr, index) => {
                            return (
                              <Select.Option key={index} value={cr._id} moode={3}>
                                {cr.companyName}
                              </Select.Option>
                            );
                          })
                          : null}
                      </Select>
                      <div className="dropdown program odd">
                        {/* <button
                          className="btn btn-secondary"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
           

                          {stepToCheck}
                          <i className="fa-solid fa-chevron-down" />
                        </button> */}
                        {/* <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              onClick={() => handleProgramChange("instant")}
                            >
                              Instant Program
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              onClick={() => handleProgramChange("onestep")}
                            >
                              One Step
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              onClick={() => handleProgramChange("twostep")}
                            >
                              Two Step
                            </a>
                          </li>

                          <li>
                            <a
                              className="dropdown-item"
                              onClick={() => handleProgramChange("threestep")}
                            >
                              Three Step
                            </a>
                          </li>
                        </ul> */}

                        <Select
                          className="multiInputs"
                          id="exampleForm.ControlInput1"
                          // className="currencySelect"
                          showSearch
                          dropdownStyle={{ zIndex: 2000 }}
                          // style={{ width: 100 }}
                          placeholder="Please Select the Program "
                          optionFilterProp="children"
                          // value={companyPrograms?._id}
                          onChange={handleProgramChange}
                          filterOption={(input, option) =>
                            option.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          {company3Programs?.length > 0
                            ? company3Programs?.map((cr, index) => {
                              return (
                                <Select.Option key={index} value={cr} moode={3}>
                                  {cr}
                                </Select.Option>
                              );
                            })
                            : null}
                        </Select>

                      </div>
                      <img
                        // src={company?.companyLogo || fSwordImage}
                        src="https:picsum.photos/100/100"
                        alt=""
                        className="sword tableImage"
                      />
                      {program3?.programName !== undefined
                        ? program3?.programName
                        : "N/A"}
                    </td>
                  </tr>
                  <tr>
                    <td className="mainText">Program Type</td>
                    <td className="mainText">
                      {program?.idProgramType !== undefined
                        ? program?.idProgramType
                        : "N/A"}
                    </td>
                    <td className="mainText">
                      {program2?.idProgramType !== undefined
                        ? program2?.idProgramType
                        : "N/A"}
                    </td>
                    <td className="mainText">
                      {program3?.idProgramType !== undefined
                        ? program3?.idProgramType
                        : "N/A"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="tableSection">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    General Information
                    <i className="fa-solid fa-chevron-down" />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <td className="mainText">Minimum Days</td>
                      <td className="mainText">
                        {" "}
                        {program?.minimumDays !== undefined
                          ? `${program?.minimumDays}`
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {" "}
                        {program2?.minimumDays !== undefined
                          ? `${program2?.minimumDays}`
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {" "}
                        {program3?.minimumDays !== undefined
                          ? `${program3?.minimumDays}`
                          : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">Max Drawdown Type</td>
                      <td className="mainText">
                        {" "}
                        {program?.maxLossType != undefined
                          ? program?.maxLossType
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {program2?.maxLossType != undefined
                          ? program2?.maxLossType
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {program3?.maxLossType != undefined
                          ? program3?.maxLossType
                          : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">
                        Max Drawdown Limit (not found)
                      </td>
                      <td className="mainText">
                        {program?.maxLossType != undefined
                          ? program?.maxLossType
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {program2?.maxLossType != undefined
                          ? program2?.maxLossType
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {program3?.maxLossType != undefined
                          ? program3?.maxLossType
                          : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">Daily Drawdown Type</td>
                      <td className="mainText">
                        {program?.dailyLossType != undefined
                          ? program?.dailyLossType
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {program2?.dailyLossType != undefined
                          ? program2?.dailyLossType
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {program3?.dailyLossType != undefined
                          ? program3?.dailyLossType
                          : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">
                        Daily Drawdown Limit = Daily Drawdown Percentage
                      </td>
                      <td className="mainText">
                        {program?.dailyLossType != undefined
                          ? program?.dailyLossType
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {program2?.dailyLossType != undefined
                          ? program2?.dailyLossType
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {program3?.dailyLossType != undefined
                          ? program3?.dailyLossType
                          : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">Phase 1 Days</td>
                      <td className="mainText green">
                        {" "}
                        {program?.phaseOneDays !== undefined
                          ? program?.phaseOneDays
                          : "N/A"}
                      </td>
                      <td className="mainText green">
                        {" "}
                        {program2?.phaseOneDays !== undefined
                          ? program2.phaseOneDays
                          : "N/A"}
                      </td>
                      <td className="mainText green">
                        {" "}
                        {program3?.phaseOneDays !== undefined
                          ? program3.phaseOneDays
                          : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">Phase 1 Target</td>
                      <td className="mainText">
                        {" "}
                        {program?.phaseOneTarget !== undefined
                          ? `${program.phaseOneTarget}%`
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {" "}
                        {program2?.phaseOneTarget !== undefined
                          ? `${program2.phaseOneTarget}%`
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {" "}
                        {program3?.phaseOneTarget !== undefined
                          ? `${program3.phaseOneTarget}%`
                          : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">Phase 2 Days</td>
                      <td className="mainText green">
                        {" "}
                        {program?.phaseTwoDays !== undefined
                          ? `${program.phaseTwoDays}`
                          : "N/A"}
                      </td>
                      <td className="mainText green">
                        {" "}
                        {program2?.phaseTwoDays !== undefined
                          ? `${program2.phaseTwoDays}`
                          : "N/A"}
                      </td>
                      <td className="mainText green">
                        {" "}
                        {program3?.phaseTwoDays !== undefined
                          ? `${program3.phaseTwoDays}`
                          : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">Phase 2 Target</td>
                      <td className="mainText">
                        {" "}
                        {program?.phaseTwoTarget !== undefined
                          ? `${program.phaseTwoTarget}%`
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {" "}
                        {program2?.phaseTwoTarget !== undefined
                          ? `${program2.phaseTwoTarget}%`
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {" "}
                        {program3?.phaseTwoTarget !== undefined
                          ? `${program3.phaseTwoTarget}%`
                          : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">Phase 3 Days</td>
                      <td className="mainText">
                        {" "}
                        {program?.phaseThreeDays !== undefined
                          ? `${program.phaseThreeDays}%`
                          : "N/A"}{" "}
                      </td>
                      <td className="mainText">
                        {" "}
                        {program2?.phaseThreeDays !== undefined
                          ? `${program2.phaseThreeDays}%`
                          : "N/A"}{" "}
                      </td>
                      <td className="mainText">
                        {" "}
                        {program3?.phaseThreeDays !== undefined
                          ? `${program3.phaseThreeDays}%`
                          : "N/A"}{" "}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">Phase 3 Target</td>
                      <td className="mainText">
                        {program?.phaseThreeTarget !== undefined
                          ? `${program.phaseThreeTarget}%`
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {program2?.phaseThreeTarget !== undefined
                          ? `${program2.phaseThreeTarget}%`
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {program3?.phaseThreeTarget !== undefined
                          ? `${program3.phaseThreeTarget}%`
                          : "N/A"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="tableSection">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Restrictions
                    <i className="fa-solid fa-chevron-down" />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <td className="mainText">SL Required</td>
                      <td className="mainText">
                        {program?.sLRequired === true ? (
                          <i className="fa-sharp fa-solid fa-check" />
                        ) : (
                          <span>X</span>
                        )}
                      </td>
                      <td className="mainText">
                        {program2?.sLRequired === true ? (
                          <i className="fa-sharp fa-solid fa-check" />
                        ) : (
                          <span>X</span>
                        )}
                      </td>
                      <td className="mainText">
                        {program3?.sLRequired === true ? (
                          <i className="fa-sharp fa-solid fa-check" />
                        ) : (
                          <span>X</span>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">EA’s</td>
                      <td className="mainText">
                        {program?.eAsAllowed === true ? (
                          <i className="fa-sharp fa-solid fa-check" />
                        ) : (
                          <span>X</span>
                        )}
                      </td>

                      <td className="mainText">
                        {program2?.eAsAllowed === true ? (
                          <i className="fa-sharp fa-solid fa-check" />
                        ) : (
                          <span>X</span>
                        )}
                      </td>
                      <td className="mainText">
                        {program3?.eAsAllowed === true ? (
                          <i className="fa-sharp fa-solid fa-check" />
                        ) : (
                          <span>X</span>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">Consistency Rule</td>
                      <td className="mainText">
                        {program?.consistencyRule === true ? (
                          <i className="fa-sharp fa-solid fa-check" />
                        ) : (
                          <span>X</span>
                        )}
                      </td>
                      <td className="mainText">
                        {program2?.consistencyRule === true ? (
                          <i className="fa-sharp fa-solid fa-check" />
                        ) : (
                          <span>X</span>
                        )}
                      </td>
                      <td className="mainText">
                        {program3?.consistencyRule === true ? (
                          <i className="fa-sharp fa-solid fa-check" />
                        ) : (
                          <span>X</span>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">Weekend Holding</td>
                      <td className="mainText green">
                        {program?.weekendHolding === true ? (
                          <i className="fa-sharp fa-solid fa-check" />
                        ) : (
                          <span>X</span>
                        )}
                      </td>
                      <td className="mainText green">
                        {program2?.weekendHolding === true ? (
                          <i className="fa-sharp fa-solid fa-check" />
                        ) : (
                          <span>X</span>
                        )}
                      </td>
                      <td className="mainText green">
                        {program3?.weekendHolding === true ? (
                          <i className="fa-sharp fa-solid fa-check" />
                        ) : (
                          <span>X</span>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">News Trading</td>
                      <td className="mainText">
                        {program?.newsTrading === true ? (
                          <i className="fa-sharp fa-solid fa-check" />
                        ) : (
                          <span>X</span>
                        )}
                      </td>
                      <td className="mainText">
                        {program2?.newsTrading === true ? (
                          <i className="fa-sharp fa-solid fa-check" />
                        ) : (
                          <span>X</span>
                        )}
                      </td>
                      <td className="mainText">
                        {program3?.newsTrading === true ? (
                          <i className="fa-sharp fa-solid fa-check" />
                        ) : (
                          <span>X</span>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">Crypto on Weekends</td>
                      <td className="mainText green">
                        {program?.cryptoTradingOnWeekends === true ? (
                          <i className="fa-sharp fa-solid fa-check" />
                        ) : (
                          <span>X</span>
                        )}
                      </td>
                      <td className="mainText green">
                        {program2?.cryptoTradingOnWeekends === true ? (
                          <i className="fa-sharp fa-solid fa-check" />
                        ) : (
                          <span>X</span>
                        )}
                      </td>
                      <td className="mainText green">
                        {program3?.cryptoTradingOnWeekends === true ? (
                          <i className="fa-sharp fa-solid fa-check" />
                        ) : (
                          <span>X</span>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">Others</td>
                      <td className="mainText">N/A</td>
                      <td className="mainText">N/A</td>
                      <td className="mainText" />
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="tableSection">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Price
                    <i className="fa-solid fa-chevron-down" />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <td className="mainText">Account Size</td>
                      <td className="mainText">
                        <span onclick="leftChange()" className="changeValBtn">
                          &lt;
                        </span>
                        | $<span id="value">50,000</span>|
                        <span onclick="rightChange()" className="changeValBtn">
                          &gt;
                        </span>
                      </td>
                      <td className="mainText">
                        <span onclick="leftChange2()" className="changeValBtn">
                          &lt;
                        </span>
                        | $<span id="value2">50,000</span>|
                        <span onclick="rightChange2()" className="changeValBtn">
                          &gt;
                        </span>
                      </td>
                      <td className="mainText" />
                    </tr>
                    <tr>
                      <td className="mainText">Price</td>
                      <td className="mainText">$</td>
                      <td className="mainText">$</td>
                      <td className="mainText" />
                    </tr>
                    <tr>
                      <td className="mainText">Price Per Drawdown</td>
                      <td className="mainText">$</td>
                      <td className="mainText">$</td>
                      <td className="mainText" />
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="tableSection">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Payouts
                    <i className="fa-solid fa-chevron-down" />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <td className="mainText">Refund</td>
                      <td className="mainText">
                        {program?.refundPercentage
                          ? `${program?.refundPercentage} %`
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {program2?.refundPercentage
                          ? `${program2?.refundPercentage} %`
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {program3?.refundPercentage
                          ? `${program3?.refundPercentage} %`
                          : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">First Profit Split</td>
                      <td className="mainText green">
                        {" "}
                        {program?.firstProfitSplit
                          ? `${program?.firstProfitSplit} %`
                          : "N/A"}
                      </td>
                      <td className="mainText green">
                        {" "}
                        {program2?.firstProfitSplit
                          ? `${program2?.firstProfitSplit} %`
                          : "N/A"}
                      </td>
                      <td className="mainText green">
                        {" "}
                        {program3?.firstProfitSplit
                          ? `${program3?.firstProfitSplit} %`
                          : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">First Withdrawal</td>
                      <td className="mainText">
                        {" "}
                        {program?.firstWithdrawal
                          ? `${program?.firstWithdrawal}`
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {" "}
                        {program2?.firstWithdrawal
                          ? `${program2?.firstWithdrawal}`
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {" "}
                        {program3?.firstWithdrawal
                          ? `${program3?.firstWithdrawal}`
                          : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">Profits from Demo Phase?</td>
                      <td className="mainText">
                        {" "}
                        {program?.profitsFromChallenge == true ? (
                          <i className="fa-sharp fa-solid fa-check" />
                        ) : (
                          "X"
                        )}
                      </td>
                      <td className="mainText">
                        {" "}
                        {program2?.profitsFromChallenge == true ? (
                          <i className="fa-sharp fa-solid fa-check" />
                        ) : (
                          "X"
                        )}
                      </td>
                      <td className="mainText">
                        {" "}
                        {program3?.profitsFromChallenge == true ? (
                          <i className="fa-sharp fa-solid fa-check" />
                        ) : (
                          "X"
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">Max Profit Split</td>
                      <td className="mainText green">
                        {" "}
                        {program?.maxProfitSplit
                          ? program?.maxProfitSplit
                          : "N/A"}
                      </td>
                      <td className="mainText green">
                        {" "}
                        {program2?.maxProfitSplit
                          ? program?.maxProfitSplit
                          : "N/A"}
                      </td>
                      <td className="mainText green">
                        {" "}
                        {program3?.maxProfitSplit
                          ? program?.maxProfitSplit
                          : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">Min. Days to Payout</td>
                      <td className="mainText">
                        {" "}
                        {program?.minimumTimeToPayout
                          ? program?.minimumTimeToPayout
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {" "}
                        {program2?.minimumTimeToPayout
                          ? program2?.minimumTimeToPayout
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {" "}
                        {program3?.minimumTimeToPayout
                          ? program3?.minimumTimeToPayout
                          : "N/A"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="tableSection">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Scaling
                    <i className="fa-solid fa-chevron-down" />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <td className="mainText">
                        Balance Increase requeriment = Scaling Plan Profit
                        Target
                      </td>
                      <td className="mainText">
                        {program?.scalingPlanFirstProfitTarget
                          ? program?.scalingPlanFirstProfitTarget
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {program2?.scalingPlanFirstProfitTarget
                          ? program2?.scalingPlanFirstProfitTarget
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {program3?.scalingPlanFirstProfitTarget
                          ? program3?.scalingPlanFirstProfitTarget
                          : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">
                        Scale Increase = Scaling Plan Benefits
                      </td>
                      <td className="mainText green">
                        {program?.scalingPlanBenefits
                          ? program?.scalingPlanBenefits
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {program2?.scalingPlanBenefits
                          ? program2?.scalingPlanBenefits
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {program3?.scalingPlanBenefits
                          ? program3?.scalingPlanBenefits
                          : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">Max. Funded Allocation</td>
                      <td className="mainText green">
                        {" "}
                        {program?.maxFundedAllocation
                          ? `${"$" + program?.maxFundedAllocation}`
                          : "N/A"}
                      </td>
                      <td className="mainText green">
                        {" "}
                        {program2?.maxFundedAllocation
                          ? `${"$" + program2?.maxFundedAllocation}`
                          : "N/A"}
                      </td>
                      <td className="mainText green">
                        {" "}
                        {program3?.maxFundedAllocation
                          ? `${"$" + program3?.maxFundedAllocation}`
                          : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">Max. Scaling Allocation</td>
                      <td className="mainText">
                        {" "}
                        {program?.maxAllocationWithScaling
                          ? `${"$" + program?.maxAllocationWithScaling}`
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {" "}
                        {program2?.maxAllocationWithScaling
                          ? `${"$" + program2?.maxAllocationWithScaling}`
                          : "N/A"}
                      </td>
                      <td className="mainText">
                        {" "}
                        {program3?.maxAllocationWithScaling
                          ? `${"$" + program3?.maxAllocationWithScaling}`
                          : "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">
                        Time to 1M from Max. Allocation
                      </td>
                      <td className="mainText green">
                        {" "}
                        {program?.minimumTimetoGet1MfromMaxAllocation
                          ? `${program?.minimumTimetoGet1MfromMaxAllocation}`
                          : "N/A"}
                      </td>
                      <td className="mainText green">
                        {" "}
                        {program2?.minimumTimetoGet1MfromMaxAllocation
                          ? `${program2?.minimumTimetoGet1MfromMaxAllocation}`
                          : "N/A"}
                      </td>
                      <td className="mainText green">
                        {" "}
                        {program3?.minimumTimetoGet1MfromMaxAllocation
                          ? `${program3?.minimumTimetoGet1MfromMaxAllocation}`
                          : "N/A"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="tableSection">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Support
                    <i className="fa-solid fa-chevron-down" />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <td className="mainText">Website Live Chat?</td>
                      <td className="mainText">
                        {company?.companyCustomerSupportLiveChat ? (
                          <i className="fa-sharp fa-solid fa-check" />
                        ) : (
                          <span>X</span>
                        )}
                      </td>
                      <td className="mainText">
                        {company2?.companyCustomerSupportLiveChat ? (
                          <i className="fa-sharp fa-solid fa-check" />
                        ) : (
                          <span>X</span>
                        )}
                      </td>
                      <td className="mainText">
                        {company3?.companyCustomerSupportLiveChat ? (
                          <i className="fa-sharp fa-solid fa-check" />
                        ) : (
                          <span>X</span>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">Live Chat days</td>
                      <td className="mainText green">
                        {company?.companyCustomerSupportDays || "N/A"}
                      </td>
                      <td className="mainText green">
                        {company2?.companyCustomerSupportDays || "N/A"}
                      </td>
                      <td className="mainText green">
                        {company3?.companyCustomerSupportDays || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">Live Chat Hours</td>
                      <td className="mainText">
                        {" "}
                        {company?.companyCustomerSupportHours || "N/A"}
                      </td>
                      <td className="mainText">
                        {" "}
                        {company2?.companyCustomerSupportHours || "N/A"}
                      </td>
                      <td className="mainText">
                        {" "}
                        {company3?.companyCustomerSupportHours || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td className="mainText">TrustPilot Rating</td>
                      <td className="mainText green">
                        {" "}
                        {company?.companyTrustPilotStars} Stars
                      </td>
                      <td className="mainText green">
                        {" "}
                        {company2?.companyTrustPilotStars} Stars
                      </td>
                      <td className="mainText green">
                        {" "}
                        {company3?.companyTrustPilotStars} Stars
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* footer */}
              <footer className="pageFooter deskTopView">
                <div className="row">
                  <div className="col-lg-4">
                    <span>© 2023 - Prop Firm Journal</span>
                  </div>
                  <div className="col-lg-8 text- text-lg-end mt-3 mt-lg-0">
                    <a href="#" className="footerLink">
                      About
                    </a>
                    <a href="#" className="footerLink">
                      Support
                    </a>
                    <a href="#" className="footerLink">
                      Contact Us
                    </a>
                  </div>
                </div>
              </footer>
            </div>
          </div>
          <div className="col-lg-2">
            {/* update */}
            <div className="updateBody dark">
              <h1 className="updateTitle">Updates</h1>
              <div className="updateDetail">
                <div className="update">
                  <div className="updateIcon sky">
                    {" "}
                    <img src="./img/Broadcast.svg" alt="" />
                  </div>
                  <div>
                    <p className="mainText">The Funded Trader Program...</p>
                    <p className="time">5m ago</p>
                  </div>
                </div>
                <div className="update">
                  <div className="updateIcon gray">
                    {" "}
                    <img src="./img/Broadcast.svg" alt="" />
                  </div>
                  <div>
                    <p className="mainText">True Forex Funds allowed...</p>
                    <p className="time">1:23 AM</p>
                  </div>
                </div>
                <div className="update">
                  <div className="updateIcon sky">
                    {" "}
                    <img src="./img/Broadcast.svg" alt="" />
                  </div>
                  <div>
                    <p className="mainText">My Funded Fx added...</p>
                    <p className="time">0:32 AM</p>
                  </div>
                </div>
                <div className="update">
                  <div className="updateIcon gray">
                    <img src="./img/Broadcast.svg" alt="" />
                  </div>
                  <div>
                    <p className="mainText">Surge Trader updated Daily...</p>
                    <p className="time">Yesterday 12:39 AM</p>
                  </div>
                </div>
              </div>

              {/* //Model */}

              <Modal show={show} onHide={handleClose}>
                <Modal.Header className="commonModalStyle" closeButton>
                  <Modal.Title>Select the company</Modal.Title>
                </Modal.Header>
                <Modal.Body className="commonModalStyle">
                  <Select
                    className="multiInputs"
                    id="exampleForm.ControlInput1"
                    // className="currencySelect"
                    showSearch
                    dropdownStyle={{ zIndex: 2000 }}
                    style={{ width: "100 %" }}
                    placeholder="Please Select the Company"
                    optionFilterProp="children"
                    value={companySelected?._id}
                    onChange={handleChangeForCompany}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {theCompanies.length > 0
                      ? theCompanies.map((cr, index) => {
                        return (
                          <Select.Option key={index} value={cr._id}>
                            {cr.companyName}
                          </Select.Option>
                        );
                      })
                      : null}
                  </Select>
                </Modal.Body>
                <Modal.Footer className="commonModalStyle">
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* Your Favourite */}
              <div className="yourFavourite">
                <h1 className="subTitle">Your Favourite Prop Firms</h1>
                <p className="mainText">The Funded Trader Program</p>
                <p className="mainText">My Forex Funds</p>
                <p className="mainText">Surge Trader</p>
              </div>
              <div className="yourFavourite">
                <h1 className="subTitle">Your Favourite Programs</h1>
                <p className="mainText">TFT Royal Challenge</p>
                <p className="mainText">My Forex Funds Accelerated</p>
                <p className="mainText">TFT Standard Challenge</p>
                <p className="mainText">Surge Trader Evaluation</p>
              </div>
              {/* footer */}
              <footer className="pageFooter mobileView">
                <div className="row">
                  <div className="col-lg-2">
                    <span>© 2023 - Prop Firm Journal</span>
                  </div>
                  <div className="col-lg-10 text-lg-end mt-3 mt-lg-0">
                    <a href="#" className="footerLink">
                      About
                    </a>
                    <a href="#" className="footerLink">
                      Support
                    </a>
                    <a href="#" className="footerLink">
                      Contact Us
                    </a>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
