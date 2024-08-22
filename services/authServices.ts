import axios, { AxiosResponse } from "axios";
import { ILogin, ISignup } from "../interface/auth";
import { handleError } from "@/constants/exception";

export async function signIn(data: ILogin): Promise<ILogin> {
  return axios
    .post<ILogin>(`/login`, data)
    .then((res: AxiosResponse<ILogin>) => res.data)
    .catch(handleError);
}

export async function register(data: ISignup): Promise<ISignup> {
  return axios
    .post<ISignup>("/register", data)
    .then((res: AxiosResponse<ISignup>) => res.data)
    .catch(handleError);
}

// const googleToken = (values) => {
//   return axios.post(`${BASE_URL}/google`, values);
// };

const authService = {
  signIn,
  register,
  // googleToken,
};

export { authService };
