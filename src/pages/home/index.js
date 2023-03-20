import React, { useState, useEffect } from "react";
import ChartPie from "./../../img/ChartPieSlice.svg";
import DashBoard from "./../../img/dashboard.svg";
import Compare from "./../../img/ShoppingBagOpen.svg";
import SearchImage from "./../../img/Search.svg";
import SunImage from "./../../img/sun.svg";
import BellImage from "./../../img/bell.svg";
import fSwordImage from "./../../img/fSword.png";
import BroadCast from "./../../img/Broadcast.svg";

import DiscordImage from "./../../img/Discord.png";
import InstagramImage from "./../../img/Instagram.png";
import FacebookImage from "./../../img/Facebook.png";
import TwitterImage from "./../../img/Twitter.png";
import YoutubeImage from "./../../img/Youtube.png";
import TiktokImage from "./../../img/TikTok.png";
import TelegramImage from "./../../img/Telegram.png";

import BigX from "./../../img/bigX.png";
import EyeImage from "./../../img/Eye.png";
import smallCheck from "./../../img/CheckSquare.svg";
import smallX from "./../../img/X.svg";

import CheckImage from "./../../img/check.png";
import CeoImage from "./../../img/ceo.png";

import SideBar from "../../components/SideBar";
import {
  getCompanyDetails,
  getInstantProgramDetails,
  getThreeStepProgramDetails,
  getTwoStepProgramDetails,
  getOneStepProgramDetails,
  getCompanies,
  getPriceByIdProgram,
} from "./../../api/index";

import "antd/dist/reset.css";
import { Select } from "antd";

export default function () {
  const [company, setCompany] = useState({});
  const [program, setProgram] = useState({});
  const [price, setPrice] = useState({});
  const [selectedProgram, setSelectedProgram] = useState("selectedProgram");
  useEffect(() => {
    getCompaniesFromBackend();
    getPricesByIDByBackend();
    // getTwoProgramByBackend();
    // getOneProgramByBackend();
    // getInstantProgramByBackend();
    // getThreeProgramByBackend();

    // return () => {
    //   second
    // }
  }, []);

  const getPricesByIDByBackend = async () => {
    try {
      //ToDo:- make it dynamic by idprogram
      let response = await getPriceByIdProgram("5ER01");
      console.log("myresponse", response);

      if (response.status === 200) {
        console.log("response.data", response.data[0]);
        setPrice(response.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log("program", program?.minimumTimetoPayout)
  const [theCompanies, setTheCompanies] = useState({});

  const [companySelected, setCompanySelected] = useState("");

  const [companyId, setCompanyId] = useState("");

  const getCompaniesFromBackend = async () => {
    try {
      let response = await getCompanies();
      // console.log("RESPONSE",response)
      if (response.status === 200) {
        console.log("response.data", response.data[0]._id);
        setTheCompanies(response.data);

        setCompanySelected(response.data[response.data.length - 1]._id);
        setCompanyId(response.data[response.data.length - 1]._id);
        getCompanyDetailsByBackend(response.data[response.data.length - 1]._id);
        getInstantProgramByBackend(response.data[response.data.length - 1]._id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeForCompany = (value) => {
    // console.log("value", value);
    setCompanySelected(value);
    let index = theCompanies.findIndex((x) => x._id === value);
    setCompanyId(theCompanies[index]._id);
    getCompanyDetailsByBackend(value);
    getInstantProgramByBackend(value);
  };

  const getCompanyDetailsByBackend = async (companyId) => {
    try {
      let response = await getCompanyDetails(companyId);
      let data = response.data;
      setCompany(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getInstantProgramByBackend = async (companyName) => {
    try {
      let response = await getInstantProgramDetails(companyName);
      let data = response.data;
      setProgram(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getThreeProgramByBackend = async (companyName) => {
    try {
      let response = await getThreeStepProgramDetails(companyName);
      let data = response.data;

      // console.log("RESPONSE", data[0].maxLossPercentage);
      setProgram(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getOneProgramByBackend = async (companyName) => {
    try {
      let response = await getOneStepProgramDetails(companyName);
      let data = response.data;

      // console.log("RESPONSE", data[0].maxLossPercentage);
      setProgram(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getTwoProgramByBackend = async (companyName) => {
    try {
      let response = await getTwoStepProgramDetails(companyName);
      let data = response.data;
      setProgram(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const [stepToCheck, setStepToCheck] = React.useState("Select Program");

  // console.log("program", program);
  const handleProgramChange = async (step) => {
    setStepToCheck(step);
    // console.log(step);

    if (step == "instant") {
      await getInstantProgramByBackend(companyId);
    } else if (step == "onestep") {
      await getOneProgramByBackend(companyId);
    } else if (step == "twostep") {
      await getTwoProgramByBackend(companyId);
    } else {
      await getThreeProgramByBackend(companyId);
    }
  };

  console.log("PROGRAM", program);
  // console.log("company", company);
  return (
    <div>
      <div className="bodyWrapper">
        {/* sideBar */}
        <SideBar />
        {/* main body */}
        <div className="mainBody">
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
                      <img src={DashBoard} alt="" />
                    </a>
                    <a href="#" className="silentText">
                      Dashboards /
                    </a>
                    <a href="#">Explore</a>
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
                          <img src={SearchImage} alt="" />
                          <input type="search" placeholder="Search" />
                        </div>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <img src={SunImage} alt="" />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <img src={BellImage} alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              {/* mainbody content */}
              <div className="mainBodyContent dark">
                {/* header */}
                <div className="bodyHeader">
                  <div className="row w-100">
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-5">
                          {/* <div className="dropdown company"> */}
                          <Select
                            className="multiInputs"
                            id="exampleForm.ControlInput1"
                            // className="currencySelect"
                            showSearch
                            dropdownStyle={{ zIndex: 2000 }}
                            // style={{ width: 100 }}
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

                          {/* <button
                              className="btn btn-secondary"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Select Company
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
                            </ul> */}
                          {/* </div> */}
                        </div>
                        <br />
                        <div className="col-6">
                          <div className="dropdown program">
                            <button
                              className="btn btn-secondary"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              {/* Select Program */}

                              {stepToCheck}
                              <i className="fa-solid fa-chevron-down" />
                            </button>
                            <ul className="dropdown-menu">
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
                                  onClick={() =>
                                    handleProgramChange("threestep")
                                  }
                                >
                                  Three Step
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* company section */}
                <div className="companySection">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="programSection">
                        <div className="row">
                          <div className="col">
                            <h1 className="mainTitle homeTitle">
                              {company?.companyName || ""}
                            </h1>
                            <img
                              src={company?.companyLogo || fSwordImage}
                              alt=""
                              className="sword homeImge"
                            />
                          </div>
                          <div className="col">
                            <h1 className="mainTitle homeTitle">
                              {program?.programName !== undefined
                                ? program?.programName
                                : "N/A"}
                            </h1>
                            <div className="programCard">
                              <p className="smText">Program Type</p>
                              <h1 className="mainTitle">
                                {program?.idProgramType !== undefined
                                  ? program?.idProgramType
                                  : "N/A"}
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mt-3 mt-lg-0 ps-lg-5 pe-lg-5">
                      <div className="capCard">
                        <h1 className="mainTitle">
                          {company?.companyBrokerName || ""}
                        </h1>
                        <p className="smText dark">Broker</p>
                      </div>
                      <div className="capCard dark">
                        <span className="smText">Platforms</span>
                        {company?.companyMT4 && (
                          <h1 className="mainTitle">MT4</h1>
                        )}
                        {company?.companyMT5 && (
                          <h1 className="mainTitle">MT5</h1>
                        )}

                        {!company?.companyMT4 && !company?.companyMT5 && "N/A"}
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="capCard">
                            <h1 className="mainTitle">
                              {company?.companyComissions != undefined
                                ? `${company?.companyComissions}`
                                : "N/A"}
                            </h1>
                            <p className="smText">Commissions</p>
                          </div>
                        </div>
                        <div className="col">
                          <div className="capCard">
                            <h1 className="mainTitle">
                              {program?.leverage != undefined
                                ? program?.leverage
                                : "N/A"}
                            </h1>
                            <p className="smText">Leverage</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Challenge information */}
                <div className="challenge">
                  <div className="subTitle mt-3 mb-3 text-white">
                    General Challenge Information
                  </div>
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="row">
                        <div className="col">
                          <div className="challengeCardSky">
                            <h1 className="subTitle">Minimum Days</h1>
                            <h1 className="mainTitle centerElement">
                              {program?.minimumDays !== undefined
                                ? `${program?.minimumDays}`
                                : "N/A"}
                            </h1>
                          </div>
                        </div>
                        <div className="col">
                          <div className="challengeCardSky">
                            <h1 className="subTitle">Daily Drawdown</h1>
                            <div className="row">
                              <div className="col">
                                <h1 className="mainTitle">
                                  {program?.dailyLossType != undefined
                                    ? program?.dailyLossType
                                    : "N/A"}
                                </h1>
                                <p className="smText">Type</p>
                              </div>
                              <div className="col">
                                <h1 className="mainTitle">
                                  {" "}
                                  {program?.dailyLossPercentage != undefined
                                    ? program?.dailyLossPercentage
                                    : "N/A"}
                                </h1>
                                <p className="smText">Amount</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="challengeCardSky">
                            <h1 className="subTitle">Max Drawdown</h1>
                            <div className="row">
                              <div className="col">
                                <h1 className="mainTitle">
                                  {program?.maxLossType != undefined
                                    ? program?.maxLossType
                                    : "N/A"}
                                </h1>
                                <p className="smText">Type</p>
                              </div>
                              <div className="col">
                                <h1 className="mainTitle">
                                  {program?.maxLossPercentage != undefined
                                    ? `${program?.maxLossPercentage}%`
                                    : "N/A"}
                                </h1>
                                <p className="smText">Amount</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col">
                          <div className="challengeCardGray">
                            <h1 className="subTitle">Phase 1</h1>
                            <div className="row">
                              <div className="col">
                                <h1 className="mainTitle">
                                  {program?.phaseOneDays !== undefined
                                    ? program.phaseOneDays
                                    : "N/A"}
                                </h1>
                                <p className="smText">Max Days</p>
                              </div>
                              <div className="col">
                                <h1 className="mainTitle">
                                  {" "}
                                  {program?.phaseOneTarget !== undefined
                                    ? `${program.phaseOneTarget}%`
                                    : "N/A"}
                                </h1>
                                <p className="smText">Profit Target</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="challengeCardGray">
                            <h1 className="subTitle">Phase 2</h1>
                            <div className="row">
                              <div className="col">
                                <h1 className="mainTitle">
                                  {" "}
                                  {program?.phaseTwoDays !== undefined
                                    ? `${program.phaseTwoDays}`
                                    : "N/A"}
                                </h1>
                                <p className="smText">Max Days</p>
                              </div>
                              <div className="col">
                                <h1 className="mainTitle">
                                  {" "}
                                  {program?.phaseTwoTarget !== undefined
                                    ? `${program.phaseTwoTarget}%`
                                    : "N/A"}
                                </h1>
                                <p className="smText">Profit Target</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="challengeCardGray">
                            <h1 className="subTitle">Phase 3</h1>
                            <div className="row">
                              <div className="col">
                                <h1 className="mainTitle">
                                  {program?.phaseThreeDays !== undefined
                                    ? `${program.phaseThreeDays}%`
                                    : "N/A"}
                                </h1>
                                <p className="smText">Max Days</p>
                              </div>
                              <div className="col">
                                <h1 className="mainTitle">
                                  {program?.phaseThreeTarget !== undefined
                                    ? `${program.phaseThreeTarget}%`
                                    : "N/A"}
                                </h1>
                                <p className="smText">Profit Target</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="restrictionContainer">
                        <h1 className="subTitle text-center">Restrictions</h1>
                        {program !== undefined ? (
                          <div className="restrictions">
                            <div className="restriction">
                              {program?.sLRequired === true ? (
                                <img src={smallCheck} alt="" />
                              ) : (
                                <img src={smallX} alt="" />
                              )}
                              SL Required
                            </div>
                            <div
                              className="restriction"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-custom-class="custom-tooltip"
                              title="Lot Size Restriction Explained"
                            >
                              {program?.lotSizeRestriction === true ? (
                                <img src={smallCheck} alt="" />
                              ) : (
                                <img src={smallX} alt="" />
                              )}
                              Lot Size Restriction
                            </div>
                            <div className="restriction">
                              {program?.newsTrading === true ? (
                                <img src={smallCheck} alt="" />
                              ) : (
                                <img src={smallX} alt="" />
                              )}
                              News Trading
                            </div>
                            <div className="restriction">
                              {program?.eAsAllowed === true ? (
                                <img src={smallCheck} alt="" />
                              ) : (
                                <img src={smallX} alt="" />
                              )}
                              EA’s Allowed Holding
                            </div>
                            <div className="restriction">
                              {program?.weekendHolding === true ? (
                                <img src={smallCheck} alt="" />
                              ) : (
                                <img src={smallX} alt="" />
                              )}
                              Weekend Holding
                            </div>
                            <div
                              className="restriction"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-custom-class="custom-tooltip"
                              title="Crypto Trading on Weekends Explained"
                            >
                              {program?.cryptoTradingOnWeekends === true ? (
                                <img src={smallCheck} alt="" />
                              ) : (
                                <img src={smallX} alt="" />
                              )}
                              Crypto Trading on Weekends
                            </div>
                            <div className="restriction">
                              {program?.consistencyRule === true ? (
                                <img src={smallCheck} alt="" />
                              ) : (
                                <img src={smallX} alt="" />
                              )}
                              Consistency Rule
                            </div>
                            <div
                              className="restriction"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-custom-class="custom-tooltip"
                              title="Other Restrictions"
                            >
                              {/* {program?.otherRestrictions === true ? (
                            <img src={smallCheck} alt="" />
                          ) : (
                            <img src={smallX} alt="" />
                          )} */}
                              Other
                            </div>
                          </div>
                        ) : (
                          "N/A"
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* price section */}
                <div className="price">
                  <h1 className="subTitle text-center my-4 text-white">
                    Price
                  </h1>
                  <div className="priceCard">
                    <h1 className="subTitle">Account Sizes Offered</h1>
                    <div className="row">
                      <div className="col">
                        {/* Gian and I worked here together, all would be same, we will apply for loop and will sort by asending order by taking account size in an account */}
                        <h1 className="mainTitle">
                          $
                          {price?.accountSize !== undefined
                            ? price?.accountSize
                            : "N/A"}
                        </h1>
                        <h6 className="subTitle">
                          $
                          {price?.accountPrice !== undefined
                            ? price?.accountPrice
                            : "N/A"}
                        </h6>
                      </div>
                      <div className="col">
                        <h1 className="mainTitle">$50,000</h1>
                        <h6 className="subTitle">$300</h6>
                      </div>
                      <div className="col">
                        <h1 className="mainTitle">$100,000</h1>
                        <h6 className="subTitle">$500</h6>
                      </div>
                      <div className="col">
                        <h1 className="mainTitle">$200,000</h1>
                        <h6 className="subTitle">$900</h6>
                      </div>
                      <div className="col">
                        <h1 className="mainTitle">$400,000</h1>
                        <h6 className="subTitle">$1,500</h6>
                      </div>

                      {/* //for loop will end here */}
                    </div>

                    {/* I and Gian worked here and we have to it same as of above */}
                    <h1 className="subTitle mt-3">Price per DrawDown</h1>
                    <div className="row">
                      <div className="col">
                        <h1 className="mainTitle">
                          $
                          {price?.accountPrice /
                            (price?.accountSize * program?.maxLossPercentage)}
                        </h1>
                      </div>
                      <div className="col">
                        <h1 className="mainTitle">$0.062</h1>
                      </div>
                      <div className="col">
                        <h1 className="mainTitle">$0.056</h1>
                      </div>
                      <div className="col">
                        <h1 className="mainTitle">$0.045</h1>
                      </div>
                      <div className="col">
                        <h1 className="mainTitle">$0.037</h1>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Payouts section */}
                <h1 className="subTitle my-4 text-center text-white">
                  Payouts
                </h1>
                <div className="payouts">
                  <div className="row">
                    <div className="col">
                      <h6 className="subTitle">Refund</h6>
                      <h1 className="mainTitle">
                        {program?.refundPercentage
                          ? `${program?.refundPercentage} %`
                          : "N/A"}
                      </h1>
                    </div>
                    <div className="col">
                      <h6 className="subTitle">First Profit Split %</h6>
                      <h1 className="mainTitle">
                        {program?.firstProfitSplit
                          ? `${program?.firstProfitSplit} %`
                          : "N/A"}
                      </h1>
                    </div>
                    <div className="col">
                      <h6 className="subTitle">First Withdrawal</h6>
                      <h1 className="mainTitle">
                        {program?.firstWithdrawal
                          ? `${program?.firstWithdrawal}`
                          : "N/A"}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="payouts">
                  <div className="row">
                    <div className="col">
                      <h6 className="subTitle">Profits from Demo Phase?</h6>
                      <h1 className="mainTitle">
                        {program?.profitsFromChallenge == true ? (
                          <img src={CheckImage} />
                        ) : (
                          "X"
                        )}
                      </h1>
                    </div>
                    <div className="col">
                      <h6 className="subTitle">Max Profit Split %</h6>
                      <h1 className="mainTitle">
                        {program?.maxProfitSplit
                          ? program?.maxProfitSplit
                          : "N/A"}
                      </h1>
                    </div>
                    <div className="col">
                      <h6 className="subTitle">Min. Days to Payout</h6>
                      <h1 className="mainTitle">
                        {program?.minimumTimeToPayout
                          ? program?.minimumTimeToPayout
                          : "N/A"}
                      </h1>
                    </div>
                  </div>
                </div>
                {/* Scaling Program */}
                <h1 className="subTitle my-4 text-center text-white">
                  Scaling Program
                </h1>
                <div className="scaling">
                  <h6 className="subTitle">Requirements for Scale</h6>
                  <h1 className="mainTitle">
                    {selectedProgram == "instant"
                      ? program?.scalingPlanFirstProfitTarget
                        ? program?.scalingPlanFirstProfitTarget
                        : "N/A"
                      : program?.scalingPlanProfitTarget
                      ? program.scalingPlanProfitTarget
                      : "N/A"}
                    {/* Make 10% in 4 months. Have 2 of those months positive. */}
                  </h1>
                  <h6 className="subTitle mt-4">Benefits</h6>
                  <h1 className="mainTitle">
                    {program?.scalingPlanBenefits
                      ? program?.scalingPlanBenefits
                      : "N/A"}
                  </h1>
                </div>
                <div className="scalingCards">
                  <div className="row">
                    <div className="col">
                      <div className="scaleCard">
                        <h6 className="subTitle">Max Funded Allocation</h6>
                        <h1 className="mainTitle">
                          {program?.maxFundedAllocation
                            ? `${"$" + program?.maxFundedAllocation}`
                            : "N/A"}
                        </h1>
                      </div>
                    </div>
                    <div className="col">
                      <div className="scaleCard">
                        <h6 className="subTitle">Max Scaling Allocation</h6>
                        <h1 className="mainTitle">
                          {program?.maxAllocationWithScaling
                            ? `${"$" + program?.maxAllocationWithScaling}`
                            : "N/A"}
                        </h1>
                      </div>
                    </div>
                    <div className="col">
                      <div className="scaleCard">
                        <h6 className="subTitle">
                          Time to 1M from Max Allocation
                        </h6>
                        <h1 className="mainTitle">
                          {program?.minimumTimetoGet1MfromMaxAllocation
                            ? `${program?.minimumTimetoGet1MfromMaxAllocation}`
                            : "N/A"}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Support Information */}
                <h1 className="subTitle my-4 text-center text-white">
                  Support Information
                </h1>
                <div className="supportInfo">
                  <div className="row">
                    <div className="col">
                      <h6 className="subTitle">Website Live Chat Days</h6>
                      <h1 className="mainTitle">
                        {/* Monday to
                        <br />
                        Sunday */}

                        {company?.companyCustomerSupportDays || "N/A"}
                      </h1>
                    </div>
                    <div className="col">
                      <h6 className="subTitle">Website Live Chat Hours</h6>
                      <h1 className="mainTitle">
                        {/* 00:00 -<br />
                        23:59 */}
                        {company?.companyCustomerSupportHours || "N/A"}
                      </h1>
                    </div>
                    <div className="col">
                      <h6 className="subTitle">Average Response Time</h6>
                      <h1 className="mainTitle">
                        {company?.companyAvgCustomerSupportResponseTime ||
                          "N/A"}{" "}
                      </h1>
                    </div>
                    <div className="col">
                      <h6 className="subTitle">TrustPilot Rating</h6>
                      <h1 onclick={() => {}} className="mainTitle">
                        <a
                          style={{ color: "black" }}
                          href={`${company?.companyTrustPilotLink}`}
                          target="_blank"
                        >
                          {company?.companyTrustPilotStars} Stars
                        </a>
                      </h1>
                    </div>
                  </div>
                </div>
                {/* Company Social Media */}
                <h1 className="subTitle my-4 text-center text-white">
                  Company Social Media
                </h1>
                <div className="media">
                  {company?.companyDiscordServer && (
                    <a
                      className="mediaIcon"
                      href={company?.companyDiscordServerLink}
                      target="_blank"
                    >
                      <img src={DiscordImage} alt="" />
                    </a>
                  )}
                  {company?.companyInstagram && (
                    <a
                      className="mediaIcon"
                      href={company?.companyInstagramLink}
                      target="_blank"
                    >
                      <img src={InstagramImage} alt="" />
                    </a>
                  )}
                  {company?.companyFacebook && (
                    <a
                      className="mediaIcon"
                      href={company?.companyFacebookLink}
                      target="_blank"
                    >
                      <img src={FacebookImage} alt="" />
                    </a>
                  )}
                  {company?.companyTwitter && (
                    <a
                      className="mediaIcon"
                      href={company?.companyTwitterLink}
                      target="_blank"
                    >
                      <img src={TwitterImage} alt="" />
                    </a>
                  )}
                  {company?.companyYoutube && (
                    <a
                      className="mediaIcon"
                      href={company?.companyYoutubeLink}
                      target="_blank"
                    >
                      <img src={YoutubeImage} alt="" />
                    </a>
                  )}

                  {company?.companyTiktok && (
                    <a
                      className="mediaIcon"
                      href={company?.companyTiktokLink}
                      target="_blank"
                    >
                      <img src={TiktokImage} alt="" />
                    </a>
                  )}

                  {company?.companyTelegramChannel && (
                    <a
                      className="mediaIcon"
                      href={company?.companyTelegramChannelLink}
                      target="_blank"
                    >
                      <img src={TelegramImage} alt="" />
                    </a>
                  )}
                </div>
                {/* Website */}
                <h1 className="subTitle my-4 text-center text-white">
                  Website
                </h1>
                <div className="website">
                  <div className="row">
                    <div className="col">
                      <h6 className="subTitle">Own App ?</h6>

                      {company?.companyOwnMobileApp == true ? (
                        <img src={CheckImage} alt="" />
                      ) : (
                        <img src={BigX} alt="" />
                      )}
                    </div>
                    <div className="col">
                      <h6 className="subTitle">Dashboard</h6>

                      <a href={company?.companyDashboardImage} target="_blank">
                        <img src={EyeImage} alt="" />
                      </a>
                    </div>
                    <div className="col">
                      <h6 className="subTitle">Website in other lenguages?</h6>
                      {company?.companyWebsiteinOtherlanguages === true ? (
                        <img src={CheckImage} alt="" />
                      ) : (
                        <img src={BigX} alt="" />
                      )}
                    </div>
                  </div>
                </div>
                {/* CEO Information */}
                <h1 className="mainTitle my-4 text-center text-white">
                  CEO Information
                </h1>
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <div className="ceo">
                      <div className="row">
                        <div className="col-5">
                          <img src={company?.companyCEOImage} alt="" />
                        </div>
                        <div className="col-7">
                          <div>
                            <h6 className="subTitle">Name</h6>
                            <h1 className="mainTitle">
                              {company?.companyCEOName}
                            </h1>
                            <h6 className="subTitle">Country</h6>
                            <h1 className="mainTitle">
                              {company?.companyCEOCountry}
                            </h1>
                            {company?.companyCeoInstagram && (
                              <>
                                {" "}
                                {/* <h6 className="subTitle">Public Instagram</h6> */}
                                <h6 className="subTitle">
                                  <a
                                    href={company?.companyCEOInstagramLink}
                                    target="_blank"
                                  >
                                    Public Instagram
                                    {/* {company?.companyCEOInstagramLink} */}
                                  </a>
                                </h6>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                      <img src={BroadCast} alt="" />
                    </div>
                    <div>
                      <p className="mainText">The Funded Trader Program...</p>
                      <p className="time">5m ago</p>
                    </div>
                  </div>
                  <div className="update">
                    <div className="updateIcon gray">
                      <img src={BroadCast} alt="" />
                    </div>
                    <div>
                      <p className="mainText">True Forex Funds allowed...</p>
                      <p className="time">1:23 AM</p>
                    </div>
                  </div>
                  <div className="update">
                    <div className="updateIcon sky">
                      <img src={BroadCast} alt="" />
                    </div>
                    <div>
                      <p className="mainText">My Funded Fx added...</p>
                      <p className="time">0:32 AM</p>
                    </div>
                  </div>
                  <div className="update">
                    <div className="updateIcon gray">
                      <img src={BroadCast} alt="" />
                    </div>
                    <div>
                      <p className="mainText">Surge Trader updated Daily...</p>
                      <p className="time">Yesterday 12:39 AM</p>
                    </div>
                  </div>
                </div>
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
    </div>
  );
}
