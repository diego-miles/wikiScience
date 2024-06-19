// lib/posthog.ts
import posthog from 'posthog-js';

posthog.init('TU_API_KEY_DE_POSTHOG', {
  api_host: 'https://app.posthog.com', // Cambia esto si usas tu propio servidor de PostHog
  loaded: (posthogInstance) => {
    if (process.env.NODE_ENV === 'development') posthogInstance.opt_out_capturing();
  },
});

export default posthog;
