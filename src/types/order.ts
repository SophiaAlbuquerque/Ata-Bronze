import { CartItem } from './cart';
import { Address, User } from './auth';

export interface Order {
  id: string;
  userId: string;
  user: User;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  paymentMethod: PaymentMethod;
  paymentId?: string;
  shippingAddress: Address;
  trackingCode?: string;
  estimatedDelivery?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed' 
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled';

export type PaymentStatus = 
  | 'pending'
  | 'paid'
  | 'failed'
  | 'cancelled'
  | 'refunded';

export type PaymentMethod = 
  | 'credit_card'
  | 'debit_card'
  | 'pix'
  | 'boleto'
  | 'bank_transfer';

export interface CreateOrderData {
  items: CartItem[];
  shippingAddress: Address;
  paymentMethod: PaymentMethod;
  paymentData: any;
  notes?: string;
}

export interface Payment {
  id: string;
  orderId: string;
  amount: number;
  method: PaymentMethod;
  status: PaymentStatus;
  asaasPaymentId?: string;
  pixQrCode?: string;
  boletoUrl?: string;
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaymentData {
  method: PaymentMethod;
  creditCard?: {
    number: string;
    expiryMonth: string;
    expiryYear: string;
    ccv: string;
    holderName: string;
    holderEmail: string;
    holderCpfCnpj: string;
  };
  billingAddress?: Address;
}
