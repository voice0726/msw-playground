import { seed } from '@/mocks/seed';

const initMocks = async () => {
  if (typeof window === 'undefined') {
    const { server } = await import('./server');
    server.listen({ onUnhandledRequest: 'bypass' });
  } else {
    const { worker } = await import('./browser');
    await worker.start({ onUnhandledRequest: 'bypass' });
  }
  seed();
};

void (async () => {
  await initMocks();
})();
