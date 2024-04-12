import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500",
    credentials: "include"
  }),
  reducerPath: 'register',
  tagTypes: ["auth", 'otp'],
  endpoints: (builder) => ({
    register: builder.mutation({
      invalidatesTags: ['auth'],
      query: (request) => ({
        url: `/register`,
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          "Content-type": "application/json"
        }
      })
    }),
    login: builder.mutation({
      invalidatesTags: ['auth'],
      query: (request) => ({
        url: `/login`,
        method: "POST",
        body: request
      })
    }),
    sendOTP: builder.mutation({
      query: (request) => ({
        url: 'otp/sendotp',
        method: 'POST',
        body: request
      })
    }),
    checkCode: builder.mutation({
      query: (request) => ({
          url: `otp/verifyotp`,
          method: "POST",
          body: request,
      }),
    }),
    resentCode: builder.mutation({
        query: (request) => ({
            url: `otp/resentCode`,
            method: "POST",
            body: request,
        }),
    }),
    logout: builder.query({
      providesTags: ['auth'],
      query: () => ({
        url: `/logout`,
      })
    })
  })
})

export const {
  useRegisterMutation,
  useLoginMutation,
  useSendOTPMutation,
  useCheckCodeMutation,
  useResentCodeMutation,
  useLogoutQuery
} = authApi;