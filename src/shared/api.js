import axios from "axios";

// axios 기본 주소 & header 타입 세팅
export const api = axios.create({
  baseURL: "http://54.177.177.138",
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use(function (config) {
// 	const accessToken = localStorage.token;
// 	const refrechToken = localStorage.refreshtoken
// 	config.headers.common['authorization'] = `${accessToken}`;
// 	config.headers.common['refresh-token'] = `${refrechToken}`;
// 	return config;
// });

// 매 실행 시 토큰값 넣기, 없으면 null값이 들어간다
api.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem("access-token");
  config.headers.common["authorization"] = `${accessToken}`;
  return config;
});
