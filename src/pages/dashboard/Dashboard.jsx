import { useLoaderData, Await } from "react-router-dom";
import { Suspense} from "react";
import { LineChart, ColumnChart, PieChart } from "react-chartkick";
import "chartkick/chart.js";
export default function Dashboard() {
  const data = useLoaderData();
  
  if (!data) {
    return <div>Loading...</div>;
  }

  const { users, products, orders } = data;

  if (!users || !products || !orders) {
    return <div>Error: Some data is missing</div>;
  }
  return (
   <Suspense fallback={<div>Loading dashboard data...</div>}>
      <Await resolve={{ users, products, orders }}>
        {(resolvedData) => <DashboardContent {...resolvedData} />}
      </Await>
    </Suspense>
  );
}
 function DashboardContent({ users, products, orders }) {
  console.log(orders);
  const transformData = (data, dateField) => {
    const dailyCount = {};

    data.forEach((item) => {
      const dateStr = item[dateField].split("T")[0];
      if (dailyCount[dateStr]) {
        dailyCount[dateStr] += 1;
      } else {
        dailyCount[dateStr] = 1;
      }
    });

    return dailyCount;
  };
  const transformDataTotalProductSales = (data) => {
    const productSalesCount = {};
  
    data.forEach((order) => {
      order.products.forEach((product) => {
        const productName = product.productId.title;
        const productQuantity = product.quantity;
  
        if (productSalesCount[productName]) {
          productSalesCount[productName] += productQuantity;
        } else {
          productSalesCount[productName] = productQuantity;
        }
      });
    });
  
    return productSalesCount;
  };

  const usersData = transformData(users, "createdAt");
  const orderData = transformData(orders, "orderDate");
  const productSalesData = transformDataTotalProductSales(orders);

  return (
    <div className="flex flex-col gap-10 mx-20">
      <div className="shadow stats flex items-center">
        <div className="stat place-items-center">
          <div className="stat-title">Total User</div>
          <div className="stat-value">{users.length}</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Total Orders</div>
          <div className="stat-value text-secondary">{orders.length}</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Total Products</div>
          <div className="stat-value">{products.length}</div>
        </div>
      </div>
      <div>
        <p className="text-xl my-4">User Registration:</p>
        <ColumnChart data={usersData} />
      </div>
      <div>
      <p className="text-xl my-4">Order Count:</p>
        <LineChart data={orderData} />
      </div>
      <div>
      <p className="text-xl my-4">Product Sales:</p>
        <PieChart data={productSalesData} />
      </div>
    </div>
  );
}
