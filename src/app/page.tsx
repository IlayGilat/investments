import { Portfolio, Stock } from "~/lib/interface";
import Navbar from "./features/Navbar/Navbar";
import { ProfileSection } from "./features/Profile-Section/Profile-Section";
import { Protfolio } from "./features/Protfolio/Protfolio";
import { Stocks } from "./features/Stocks/Stocks";

export default function Home() {
  const mockStocks: Stock[] = [
    { id: 1, name: "Apple", symbol: "AAPL", price: 100 },
    { id: 2, name: "Tesla", symbol: "TSLA", price: 50 },
    { id: 3, name: "Google", symbol: "GOOGL", price: 200 },
  ];
  const mockProtfolio: Portfolio = {
    id: 1,
    userId: 1,
    stocks: new Map([
      [mockStocks[0] as Stock, 5],
      [mockStocks[1] as Stock, 10],
      [mockStocks[2] as Stock, 7],
    ]),
  };
  return (
    <div className="flex min-h-screen flex-col">
      <div className="text-primary-content bg-primary">
        <Navbar />
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <ProfileSection name="Ilay" email="ilaygilat@gmail.com" />
        </div>
        <div>
          <Protfolio protfolio={mockProtfolio} />
          <Stocks />
        </div>
      </div>
    </div>
  );
}
