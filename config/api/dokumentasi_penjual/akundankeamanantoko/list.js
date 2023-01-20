import axios from "axios";
import { url_service } from "../../url";

const APIPenjualAkunList = async (data) => {
  const result = await axios({
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    url: `${url_service}/akunkeamanan-toko/list/`,
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

export default APIPenjualAkunList;
