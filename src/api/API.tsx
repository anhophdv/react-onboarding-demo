import axios, { AxiosInstance } from "axios";
import { APIConstants } from "../constants/ApiConstants";

export class API {
  //   private static sharedInstance: API;
  private static axiosInstance: AxiosInstance;
  private constructor() {}

  public static getAxiosInstance(): AxiosInstance {
    if (!API.axiosInstance) {
      //   API.sharedInstance = new API();
      API.axiosInstance = axios.create({
        baseURL: APIConstants.baseURl,
      });
    }
    return API.axiosInstance;
  }

  // constructor(baseUrl: string) {
  //     const instance = axios.create({
  //         baseURL: baseUrl,
  //         timeout:60
  //     })
  // }
}
