import axios from "axios";
import { url_service } from "../../url";

const APIPenjualPengirimanList = async (data) => {
  const result = await axios({
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    url: `${url_service}/pengiriman-produk/list/`,
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

export default APIPenjualPengirimanList;
