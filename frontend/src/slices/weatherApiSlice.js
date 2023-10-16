import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://community-open-weather-map.p.rapidapi.com';

const headers = {
  'x-rapidapi-host': '',
  'x-rapidapi-key': '',
};

const request = (url) => ({
  url,
  headers: headers,
});

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCurrentWeatherData: builder.query({
      query: (q) => request(`/weather?q=${q}`),
    }),
  }),
});

// export const { useGetCurrentWeatherDataQuery } = weatherApi;
