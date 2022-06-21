import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import ServiceService from "../services/service.service";

export const fetchServices = createAsyncThunk(
  "service/fetchServices",
  async () => {
    const data = await ServiceService.getAllServices();
    console.log(data);
    return data;
  }
);
export const fetchServiceDetail = createAsyncThunk(
  "service/fetchServiceDetail",
  async (serviceId) => {
    console.log(serviceId);
    const data = await ServiceService.getServiceById(serviceId);
    console.log(data);
    return data;
  }
);
export const addService = createAsyncThunk(
  "service/addService",
  async (service) => {
    console.log(service);
    const data = await ServiceService.addService(service);
    console.log(data);
    return data;
  }
);

const serviceSlice = createSlice({
  name: "service",
  initialState: {
    listServices: [],
    serviceDetail: null,
    status: "idle",
  },
  extraReducers: {
    [fetchServices.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchServices.fulfilled]: (state, { payload }) => {
      state.listServices = payload;
      state.status = "success";
    },
    [fetchServices.rejected]: (state, action) => {
      state.status = "failed";
    },
    [fetchServiceDetail.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchServiceDetail.fulfilled]: (state, { payload }) => {
      state.serviceDetail = payload;
      state.status = "success";
    },
    [fetchServiceDetail.rejected]: (state, action) => {
      state.status = "failed";
    },
    [addService.pending]: (state, action) => {
      state.status = "loading";
    },
    [addService.fulfilled]: (state, { payload }) => {
      state.serviceDetail = payload;
      state.status = "success";
    },
    [addService.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

const { reducer } = serviceSlice;
export default reducer;

export const selectAllServices = (state) => state.service.listServices;
export const selectServiceDetail = (state) => state.service.serviceDetail;
export const selectServiceId = (state) => state.service.serviceDetail.id;
export const selectServiceStatus = (state) => state.service.status;
