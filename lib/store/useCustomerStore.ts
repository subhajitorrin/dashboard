import axios from 'axios';
import { create } from 'zustand';

type CustomerData = {
    name: string;
    company: string;
    phone: string;
    email: string;
    country: string;
    status: string;
};

type CustomerInfo = {
    company: string;
    country: string;
    createdAt: string;
    email: string;
    id: number;
    name: string;
    phone: string;
    status: 'active' | 'inactive';
};

interface CustomerState {
    customerList: CustomerInfo[];
    addCustomer: (customer: CustomerData) => Promise<void>;
    getCustomer: () => Promise<void>;
}

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
    }
}));

export default useCustomerStore;
