import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://randomuser.me/api',
    
  }),
  tagTypes: ['users'],
  endpoints: builder => ({
    getUsers: builder.mutation({
      query: () => ({
        url: `/`,
        method: 'GET',
      }),
    }),
    
  }),
});
export const{
    useGetUsersMutation,
}=userApi;