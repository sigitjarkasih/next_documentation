import axios from "axios";
import { url_service } from "../url";
// import Cookies from "universal-cookie";

const APIDompetMadrasahCreate = async (data) => {
//   const cookies = new Cookies();
//   const token = cookies.get("TOKEN");
  const result = await axios({
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      //   Authorization: "BASIC " + token,
    },
    url: `https://documentation.dgmall.id/api/v1/dompet-madrasah/create/`,
    // url: `${url_service}/dompet-madrasah/create/`,
    data: data,
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });

  return result;
};

export default APIDompetMadrasahCreate;
