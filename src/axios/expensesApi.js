import axios from "axios";

const expensesApi = axios.create({
  baseURL: "http://localhost:5000/expenses",
});

expensesApi.interceptors.request.use(
  function (config) {
    console.log("인터셉트 요청 성공!");
    return config;
  },
  function (error) {
    console.log("인터셉트 요청 오류!");
    return Promise.reject(error);
  }
);

expensesApi.interceptors.response.use(
  function (response) {
    console.log("인터셉트 응답 받았어요!");
    // 회원정보 확인 api 요청
    return response;
  },
  function (error) {
    console.log("인터셉트 응답 못받았어요...ㅠㅠ");
    return Promise.reject(error);
  }
);

export default expensesApi;
