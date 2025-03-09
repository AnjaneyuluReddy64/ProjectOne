import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const hostApiServices = createApi({
  reducerPath: 'hostApiServices',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6773d3bb77a26d4701c674b0.mockapi.io',
  }),
  endpoints: builder => ({
    // Users Get Call
    getUsers: builder.query({
      query: () => ({
        url: '/students',
        method: 'GET',
      }),
    }),

    // Users POST Call
    postRequestToUpdateInfo: builder.mutation({
      query: data => ({
        url: '/students',
        method: 'POST',
        body: data,
      }),
    }),

    // Users POST Call
    putRequestToUpdateInfo: builder.mutation({
      query: data => ({
        url: `/students/${data?.id}`,
        method: 'PUT',
        body: data,
      }),
    }),

    // users Delete call
    deleteUser: builder.mutation({
      query: ({data}) => {
        // console.log('payload==>', data)
        return {
          url: `/students/${data?.id}`,
          method: 'DELETE',
        };
      },
    }),

    // Auth get
    authUsers: builder.query({
      query: () => ({
        url: '/Auth',
        method: 'GET',
      }),
    }),
    // New Registration
    newUsersRegister: builder.mutation({
      query: data => ({
        url: '/Auth',
        method: 'POST',
        body: data,
      }),
    }),

    // profile API
    profileData: builder.query({
      query: data => {
        // console.log('paylod---->', data?.id);

        return {
          url: `/Auth/${data?.id}`,
          method: 'GET',
        };
      },
    }),
    // Profile Update
    profileUpdate: builder.mutation({
      query: ({data, params}) => {
        // console.log('paylod', data, params);

        return {
          url: `/Auth/${data?.id}`,
          method: 'PUT',
          body: params,
        };
      },
    }),
  }),
});

export const {
  useLazyGetUsersQuery,
  usePostRequestToUpdateInfoMutation,
  usePutRequestToUpdateInfoMutation,
  useDeleteUserMutation,
  useLazyAuthUsersQuery,
  useNewUsersRegisterMutation,
  useLazyProfileDataQuery,
  useProfileUpdateMutation,
} = hostApiServices;
