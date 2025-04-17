import PageTitle from "@/components/PageTitle";
import { CalendarClockIcon } from "lucide-react";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
const purchaseHistory = [
  {
    id: "1a2b3c4d-0001",
    rationId: "R123456789",
    shopNumber: 101,
    item: "Rice",
    quantity: 5.0,
    unit: "kg",
    purchaseDate: "2025-03-01",
  },
  {
    id: "1a2b3c4d-0002",
    rationId: "R123456789",
    shopNumber: 101,
    item: "Wheat",
    quantity: 10.0,
    unit: "kg",
    purchaseDate: "2025-03-01",
  },
  {
    id: "1a2b3c4d-0003",
    rationId: "R123456789",
    shopNumber: 101,
    item: "Sugar",
    quantity: 2.0,
    unit: "kg",
    purchaseDate: "2025-03-01",
  },
  {
    id: "1a2b3c4d-0004",
    rationId: "R123456789",
    shopNumber: 101,
    item: "Daal",
    quantity: 1.5,
    unit: "kg",
    purchaseDate: "2025-02-01",
  },
  {
    id: "1a2b3c4d-0005",
    rationId: "R123456789",
    shopNumber: 101,
    item: "Oil",
    quantity: 1.0,
    unit: "liters",
    purchaseDate: "2025-02-01",
  },
  {
    id: "1a2b3c4d-0006",
    rationId: "R123456789",
    shopNumber: 101,
    item: "Salt",
    quantity: 1.0,
    unit: "kg",
    purchaseDate: "2025-01-01",
  },
  {
    id: "1a2b3c4d-0007",
    rationId: "R123456789",
    shopNumber: 101,
    item: "Tea",
    quantity: 0.5,
    unit: "kg",
    purchaseDate: "2025-01-01",
  },
  {
    id: "1a2b3c4d-0008",
    rationId: "R123456789",
    shopNumber: 101,
    item: "Milk Powder",
    quantity: 1.0,
    unit: "kg",
    purchaseDate: "2025-01-01",
  },
  {
    id: "1a2b3c4d-0009",
    rationId: "R123456789",
    shopNumber: 101,
    item: "Kerosene",
    quantity: 2.0,
    unit: "liters",
    purchaseDate: "2024-12-01",
  },
  {
    id: "1a2b3c4d-0010",
    rationId: "R123456789",
    shopNumber: 101,
    item: "Atta (Flour)",
    quantity: 5.0,
    unit: "kg",
    purchaseDate: "2024-12-01",
  },
];

const History = () => {
  return (
    <>
      <PageTitle title={"History"} />

      <div className="md:m-10 my-10 mx-2">
        <div className="flex gap-4 text-primary items-center">
          <CalendarClockIcon size={30} />
          <h1 className=" md:text-3xl text-2xl font-semibold font-winky ">
            History
          </h1>
        </div>
      </div>
      <Card className="md:m-10 m-3 overflow-x-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-nunito font-bold">
            Consumption History
          </CardTitle>
          <CardDescription>
            Your family consumption history according to purchase date
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="font-winky text-white text-lg font-bold tracking-wide ">
                <TableHead>Date</TableHead>
                <TableHead>Item</TableHead>
                <TableHead className="text-center">Quantity</TableHead>
                <TableHead className="text-center hidden  sm:block">
                  Fair Price Shop
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.entries(
                purchaseHistory.reduce((acc, item) => {
                  acc[item.purchaseDate] = acc[item.purchaseDate] || [];
                  acc[item.purchaseDate].push(item);
                  return acc;
                }, {})
              ).map(([date, items]) =>
                items.map((item, index) => (
                  <TableRow
                    key={item.id}
                    className="text-base font-winky font-light tracking-wide"
                  >
                    {index === 0 && (
                      <TableCell
                        rowSpan={items.length}
                        className="align-middle"
                      >
                        {date}
                      </TableCell>
                    )}
                    <TableCell>{item.item}</TableCell>
                    <TableCell className="text-center">
                      {item.quantity} {item.unit}
                    </TableCell>
                    <TableCell className="text-center  hidden  sm:block">
                      {item.shopNumber}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default History;
