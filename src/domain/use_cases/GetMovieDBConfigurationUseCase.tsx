import axios, { AxiosInstance, AxiosResponse } from "axios";
import { API } from "../../api/API";
import { MovieConfiguration } from "../model/MovieDBConfiguration";
import { APIConstants, APIFieldName } from "../../constants/ApiConstants";

export class GetMovieDBConfigurationUseCase {
  // async function getConfiguration() {
  //     try {
  //         const response = await API.getAxiosInstance().get(APIConstants.movieConfigurationPath, {
  //         params: {
  //             'api_key': '0302596c4f4e8b4f243a1ec19031031b'
  //         }
  //     })
  //     return response;
  //     } catch (error) {
  //         console.log('GetMovieDBConfiguration have an error', error);
  //     }
  // }
}
