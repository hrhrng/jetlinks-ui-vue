import { devices, products, networks, protocols } from './mockData';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchData = async (apiEndpoint, searchText = '') => {
  await delay(1000); // Simulate network delay

  let data;
  switch (apiEndpoint) {
    case '/api/devices':
      data = devices;
      break;
    case '/api/products':
      data = products;
      break;
    case '/api/networks':
      data = networks;
      break;
    case '/api/protocols':
      data = protocols;
      break;
    default:
      throw new Error(`Unknown API endpoint: ${apiEndpoint}`);
  }

  return data.filter((item) => item.name.includes(searchText));
};
