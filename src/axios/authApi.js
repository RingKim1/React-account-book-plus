import axios from "axios";

const auth = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr/",
});

auth.interceptors.request.use(
  function (config) {
    console.log("인터셉트 요청 성공!");
    return config;
  },
  function (error) {
    console.log("인터셉트 요청 오류!");
    return Promise.reject(error);
  }
);

auth.interceptors.response.use(
  function (response) {
    console.log("인터셉트 응답 받았어요!");
    return response;
  },
  function (error) {
    console.log("인터셉트 응답 못받았어요...ㅠㅠ");
    return Promise.reject(error);
  }
);

export default auth;
