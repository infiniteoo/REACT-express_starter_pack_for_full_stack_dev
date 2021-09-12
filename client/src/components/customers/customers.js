import "./customers.css";
import { useState, useEffect } from "react";

function Customers() {
  useEffect(() => {
    fetch("/api/customers")
      .then((res) => res.json())
      .then(
        (customers) => setCustomers(customers),
        () => console.log("customers fetched..", customers)
      );
  }, []);

  const [customers, setCustomers] = useState([]);

  return (
    <div>
      <h2>Customers</h2>
    </div>
  );
}

export default Customers;
