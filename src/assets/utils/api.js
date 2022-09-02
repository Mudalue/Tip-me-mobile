import axios from "axios";
import { ReadFromStorage } from "./appStorage";
//base url
const baseUrl = "https://tipp-me.herokuapp.com/";

//post Request
export const postRequest = async (url, _obj) => {
    try {
      const accesstoken = ReadFromStorage("@token");
      const header = {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      };
      const data = await axios.post(baseUrl + url, _obj, header);
      return data;
    } catch (error) {
      return(error.response);
    }
  };