export type CustomerData = {
  name: string;
  company: string;
  phone: string;
  email: string;
  country: string;
  status: string;
};

export type CustomerInfo = {
  company: string;
  country: string;
  createdAt: string;
  email: string;
  id: number;
  name: string;
  phone: string;
  status: 'active' | 'inactive';
};

export interface CustomerState {
  customerList: CustomerInfo[];
  addCustomer: (customer: CustomerData) => Promise<void>;
  getCustomer: () => Promise<void>;
}
