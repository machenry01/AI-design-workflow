declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: string, params?: Record<string, unknown>): void {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', event, params);
  }
}

export function trackInitiateCheckout(): void {
  trackEvent('InitiateCheckout', {
    content_name: 'The AI Design Workflow',
    content_type: 'product',
    value: 7500,
    currency: 'NGN',
  });
}
