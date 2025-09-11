import api from './api';
import { CreateOrderData, Order, Payment } from '../types/order.ts';
import { ShippingCalculation } from '../types/cart.ts';

export const checkoutService = {
  // Calcular frete
  async calculateShipping(data: {
    zipCode: string;
    items: Array<{ productId: string; quantity: number }>;
  }): Promise<ShippingCalculation> {
    const response = await api.post('/shipping/calculate', data);
    return response.data;
  },

  // Rastrear encomenda
  async trackShipping(trackingCode: string) {
    const response = await api.get(`/shipping/track/${trackingCode}`);
    return response.data;
  },

  // Criar pedido
  async createOrder(orderData: CreateOrderData): Promise<Order> {
    const response = await api.post('/orders', orderData);
    return response.data;
  },

  // Obter pedidos do usuário
  async getUserOrders(userId: string): Promise<Order[]> {
    const response = await api.get(`/orders/user/${userId}`);
    return response.data;
  },

  // Obter pedido por ID
  async getOrderById(orderId: string): Promise<Order> {
    const response = await api.get(`/orders/${orderId}`);
    return response.data;
  },

  // Cancelar pedido
  async cancelOrder(orderId: string): Promise<Order> {
    const response = await api.put(`/orders/${orderId}/cancel`);
    return response.data;
  },

  // Criar pagamento
  async createPayment(data: {
    orderId: string;
    paymentMethod: string;
    amount: number;
    customerData?: any;
  }): Promise<Payment> {
    const response = await api.post('/payments/create-payment', data);
    return response.data;
  },

  // Verificar status do pagamento
  async getPaymentStatus(paymentId: string): Promise<Payment> {
    const response = await api.get(`/payments/${paymentId}`);
    return response.data;
  },

  // Webhook do pagamento (para uso interno)
  async handlePaymentWebhook(data: any) {
    const response = await api.post('/payments/webhook', data);
    return response.data;
  }
};
