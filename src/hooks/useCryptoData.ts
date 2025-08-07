import { useEffect, useState } from "react";
import axios from "axios";
import type { TCrypto } from "@/types/crypto.type";

export const useCryptoData = () => {
  const [data, setData] = useState<TCrypto[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCrypto = async () => {
    try {
      const res = await axios.get<TCrypto[]>(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 5,
            page: 1,
            sparkline: true,
          },
        }
      );
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCrypto();
    const interval = setInterval(fetchCrypto, 30000); // every 30s
    return () => clearInterval(interval);
  }, []);

  return { data, loading };
};
