import { createSlice } from "@reduxjs/toolkit";

// 회원가입
const signupSlice = createSlice({
  name: "signup",
  initialState: {
    data: { email: "", password: "", passwordConfirm: "", nickname: "" },
    terms: {
      age: false,
      terms: false,
      privacy: false,
      subscribe: false,
    },
  },
  reducers: {
    saveData: (state, action) => {
      state.data.email = action.payload.email;
      state.data.password = action.payload.password;
      state.data.passwordConfirm = action.payload.passwordConfirm;
      state.data.nickname = action.payload.nickname;
    },
    saveTerms: (state, action) => {
      state.terms.age = action.payload.age;
      state.terms.terms = action.payload.terms;
      state.terms.privacy = action.payload.privacy;
      state.terms.subscribe = action.payload.subscribe;
    },
  },
});

// export const { } = signupSlice.actions;
export default signupSlice.reducer;

export const { saveData, saveTerms } = signupSlice.actions;
