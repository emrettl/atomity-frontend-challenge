import { useQuery } from '@tanstack/react-query';


export const useCloudData = () => {
  return useQuery({
    queryKey: ['cloud-costs'],
    queryFn: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4');
      if (!response.ok) throw new Error('Network error');
      const data = await response.json();

      
      return data.map((item: any, index: number) => ({
        id: item.id,
        name: `Cluster ${String.fromCharCode(65 + index)}`, // Cluster A, B, C, D
        cpu: (Math.random() * 5000 + 1000).toFixed(0),
        ram: (Math.random() * 2000 + 500).toFixed(0),
        cost: (Math.random() * 10000 + 2000).toFixed(2),
        efficiency: Math.floor(Math.random() * 40 + 60),
      }));
    },
  });
};