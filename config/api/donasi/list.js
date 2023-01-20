import axios from "axios";
import { url_service } from "../../api/url";
// import Cookies from "universal-cookie";

const APIDonasiList = async (data) => {
//   const cookies = new Cookies();
//   const token = cookies.get("TOKEN");
  const result = await axios({
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    //   Authorization: "BASIC " + token,
    },
    url: `${url_service}/donasi/list/`,
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

export default APIDonasiList;