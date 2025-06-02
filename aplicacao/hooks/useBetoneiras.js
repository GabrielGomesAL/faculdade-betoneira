import { useState, useEffect } from 'react';

export const useBetoneiras = () => {
  const [betoneiras, setBetoneiras] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call
    const fetchBetoneiras = async () => {
      try {
        // In a real app, you would fetch from API or Firebase
        const mockBetoneiras = [
          // Your betoneira data here...
        ];
        setBetoneiras(mockBetoneiras);
      } catch (error) {
        console.error("Error fetching betoneiras:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBetoneiras();
  }, []);

  return { betoneiras, loading };
};