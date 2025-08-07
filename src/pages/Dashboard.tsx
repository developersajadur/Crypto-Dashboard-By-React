import { CryptoMiniChart } from "@/components/Dashboard/CryptoMiniChart";
import { useCryptoData } from "@/hooks/useCryptoData";
import Loader from "@/components/Loaders/Loader";
import { useState } from "react";
import { CryptoTable } from "@/components/Dashboard/CryptoTable";

export default function DashboardPage() {
  const { data: cryptoData, loading } = useCryptoData();
  const [selectedCoinIndex, setSelectedCoinIndex] = useState(0);

  if (loading) return <Loader />;

  const handleCoinChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCoinIndex(Number(e.target.value));
  };

  const selectedCoin = cryptoData[selectedCoinIndex];
  const prices = selectedCoin?.sparkline_in_7d?.price ?? [];

  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        {/* <SectionCards /> */}

        <div className="px-4 lg:px-6 space-y-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Cryptocurrency Overviews
          </h1>

          {/* Subtitle or description */}
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl">
            Select a top 5 cryptocurrency to view its 7-day price trend and key market
            data.
          </p>

          {/* Dropdown to select coin */}
          <div className="flex items-center gap-2">
            <label htmlFor="coin" className="text-sm font-medium">
              Select Coin:
            </label>
            <select
              id="coin"
              className="border px-3 py-1 rounded-md text-sm bg-blue-500 text-white"
              value={selectedCoinIndex}
              onChange={handleCoinChange}
            >
              {cryptoData.map((coin, index) => (
                <option key={coin.id} value={index}>
                  {coin.name} ({coin.symbol.toUpperCase()})
                </option>
              ))}
            </select>
          </div>

          {/* Mini Chart */}
          <CryptoMiniChart prices={prices} />

          {/* Crypto Table */}
          <CryptoTable data={cryptoData} />
        </div>
      </div>
    </div>
  );
}
