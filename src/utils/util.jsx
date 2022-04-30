import axios from "axios";

const getData = async (apiUrl, requestType, postParameter) => {
  try {
    if (requestType === "get") {
      const response = await axios.get(apiUrl);
      // console.log(response.data.data);
      return response;
    } else if (requestType === "post") {
      const response = await axios.post(apiUrl, postParameter);
      // console.log(response.data.data);
      return response;
    }
  } catch (err) {
    throw "Error! Server not responding ";
  }
};

export default getData;
