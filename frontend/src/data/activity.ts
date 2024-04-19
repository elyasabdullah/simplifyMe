import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
import { decodeAccessToken, refreshAccessToken } from './utiles';

const apiURL = import.meta.env.VITE_APP_API_URL;

export const activityApi = createApi({
  reducerPath: 'activities',
  tagTypes: ['activities', 'groupActivities'],
  baseQuery: fetchBaseQuery({ 
  baseUrl: `${apiURL}`,
    prepareHeaders: async (headers) => {
      const accessToken = Cookies.get("accessToken");
      
      if (!accessToken) {
        return headers;
      }

      headers.set('Authorization', `Bearer ${accessToken}`);

      const decodedToken = decodeAccessToken(accessToken);
      if (decodedToken.exp * 1000 > Date.now()) {
        return headers;
      }

      try {
        const refreshedToken = await refreshAccessToken(apiURL);
        headers.set('Authorization', `Bearer ${refreshedToken}`);
        Cookies.set('accessToken', refreshedToken);
      } catch (error) {
        console.log(error)
        throw error
      }
      
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getActivities: builder.query({
      providesTags:  ['activities'],
      query: (params) => ({ 
        url: `/activities?userId=${params.userId}&activityType=${params.activityType}&generalType=${params.generalType}`,
        method: 'GET',
      })
    }),
    getActivity: builder.query({
      providesTags: ['activities'],
      query: (params) => ({
        url: `/activities/activity?userId=${params.userId}&activityId=${params.activityId}&activityType=${params.activityType}&generalType=${params.generalType}`,
        method: 'GET',
      }),
    }),
    createActivity: builder.mutation({
      invalidatesTags:  ['activities'],
      query: (request) => ({
        url: '/activities',
        body: request,
        method: 'POST'
      })
    }),
    updateActivity: builder.mutation({
      invalidatesTags: ['activities'],
      query: (request) => ({
        url: '/activities',
        body: request,
        method: 'PUT'
      })
    }),
    markCompleted: builder.mutation({
      invalidatesTags: ['activities'],
      query: (request) => ({
        url: '/activities/activity',
        body: request,
        method: 'PUT'
      })
    }),
    deleteActivity: builder.mutation({
      invalidatesTags: ['activities'],
      query: (request) => ({
        url: '/activities',
        body: request,
        method: 'DELETE'
      })
    }),
    getGroupWithItsActivities: builder.query({
      query: (params) => ({
        url: `/activities/groupedActivities/?userId=${params.userId}&groupName=${params.groupName}`,
        method: 'GET',
        providesTags:  ['activities', 'groupActivities']
      })
    }),
    getGroupNames: builder.query({
      query: (params) => ({
        url: `/activities/groupedActivities/getgroups?userId=${params.userId}`,
        method: 'GET',
        providesTags:  ['activities', 'groupActivities']
      })
    }),
    addNewgroup: builder.mutation({
      invalidatesTags: ['activities', 'groupActivities'],
      query: (request) => ({
        url: '/activities/groupedActivities',
        body: request,
        method: 'POST'
      })
    }),
    modifyGroupName: builder.mutation({
      invalidatesTags: ['activities', 'groupActivities'],
      query: (request) => ({
        url: '/activities/groupedActivities',
        body: request,
        method: 'PUT'
      })
    }),
    deleteGroupWithItsActivities: builder.mutation({
      invalidatesTags: ['activities', 'groupActivities'],
      query: (request) => ({
        url: '/activities/groupedActivities',
        body: request,
        method: 'DELETE'
      })
    })
  })
})

export const {
  useGetActivitiesQuery,
  useGetActivityQuery,
  useCreateActivityMutation,
  useUpdateActivityMutation,
  useMarkCompletedMutation,
  useDeleteActivityMutation,
  useGetGroupWithItsActivitiesQuery,
  useAddNewgroupMutation,
  useModifyGroupNameMutation,
  useDeleteGroupWithItsActivitiesMutation,
  useGetGroupNamesQuery
} = activityApi;