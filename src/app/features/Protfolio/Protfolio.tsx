import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Portfolio, Stock } from "~/lib/interface";

export const Protfolio = (props: { protfolio: Portfolio }) => {
  const { protfolio } = props;
  const stocks = Array.from(protfolio?.stocks).map(([key, value], index) => (
    <Card key={index}>
      <CardHeader>
        <span className="text-muted-foreground">{key.name}</span>
        <span className="text-muted-foreground">{key.symbol}</span>
      </CardHeader>
      <CardContent>
        <span className="font-medium">{key.price}</span>
        <span className="font-medium">{value}</span>
      </CardContent>
    </Card>
  ));
  return (
    <div className="flex flex-col items-center space-y-4">
      <h1>Protfolio</h1>
      {...stocks}
    </div>
  );
};
