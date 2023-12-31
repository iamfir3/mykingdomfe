import axiosClients from '../AxiosClient';
const BillApi = {
  getAllBill: () => {
    const url = `/product/getAllBill`;
    return axiosClients.get(url);
  },
  createBill: (data) => {
    const url = '/bill';
    return axiosClients.post(url, data);
  },
  changeStatusBill: (data) => {
    const url = '/product/changeStatusBill';
    return axiosClients.put(url, data);
  },
};

export default BillApi;
