import axios from 'axios';
import { create } from 'zustand';
import { CustomerData, CustomerState } from '@/types/index';

const useCustomerStore = create<CustomerState>((set, get) => ({
  customerList: [],
  addCustomer: async (customer: CustomerData) => {
    try {
      const { data } = await axios.post('/api/customer', customer);
      await get().getCustomer();
      console.log(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  getCustomer: async () => {
    try {
      const { data } = await axios.get('/api/customer');
      set({ customerList: data });
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
}));

export default useCustomerStore;
