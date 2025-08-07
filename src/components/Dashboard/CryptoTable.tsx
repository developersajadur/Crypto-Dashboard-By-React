import type { TCrypto } from "@/types/crypto.type";


type Props = {
  data: TCrypto[];
};

export function CryptoTable({ data }: Props) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
      <table className="w-full border-collapse text-sm text-left text-gray-700 dark:text-gray-300">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="px-4 py-3 font-semibold">Name</th>
            <th className="px-4 py-3 font-semibold">Price</th>
            <th className="px-4 py-3 font-semibold">24h % Change</th>
            <th className="px-4 py-3 font-semibold">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin) => {
            const priceChange = coin.price_change_percentage_24h;
            const priceChangeClass =
              priceChange > 0
                ? "text-green-600 dark:text-green-400"
                : priceChange < 0
                ? "text-red-600 dark:text-red-400"
                : "text-gray-500";

            return (
              <tr
                key={coin.id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                <td className="flex items-center gap-3 px-4 py-3">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="h-8 w-8 rounded-full"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-medium">{coin.name}</p>
                    <p className="text-xs text-gray-500 uppercase">
                      {coin.symbol}
                    </p>
                  </div>
                </td>
                <td className="px-4 py-3">${coin.current_price.toLocaleString()}</td>
                <td className={`px-4 py-3 font-semibold ${priceChangeClass}`}>
                  {priceChange?.toFixed(2)}%
                </td>
                <td className="px-4 py-3">${coin.market_cap.toLocaleString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
