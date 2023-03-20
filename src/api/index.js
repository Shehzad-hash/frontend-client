import axios from "axios";
const serverURL = process.env.REACT_APP_SERVER_URL;

export const getCompanyDetails = async (companyId) => {
  let res = null;
  try {
    res = await axios.get(`${serverURL}/company/${companyId}`);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};



export const getPriceByIdProgram = async (idProgram) => {


  let res = null;
  try {
    res = await axios.get(`${serverURL}/prices/${idProgram}`);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export const getInstantProgramDetails = async (companyName) => {
  let res = null;
  try {
    res = await axios.get(`${serverURL}/instantProgram/${companyName}`);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getOneStepProgramDetails = async (companyName) => {
  let res = null;
  try {
    res = await axios.get(`${serverURL}/getOneStep/get/${companyName}`);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getTwoStepProgramDetails = async (companyName) => {
  let res = null;
  try {
    res = await axios.get(`${serverURL}/getTwoSteps/get/${companyName}`);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getThreeStepProgramDetails = async (companyName) => {
  let res = null;
  try {
    res = await axios.get(`${serverURL}/getThreeStep/get/${companyName}`);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getCompanies = async () => {
  let res = null;
  try {
    res = await axios.get(`${serverURL}/companyForDropDown`);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};
