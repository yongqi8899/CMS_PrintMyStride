import { useLoaderData } from "react-router-dom";
// import { LineChart, PieChart } from 'react-chartkick'
// import 'chartkick/chart.js'

export default function Dashboard() {
  const {users, products, orders }= useLoaderData();

  return (
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
  );
}
