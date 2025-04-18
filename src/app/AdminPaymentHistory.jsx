import React, { useEffect } from "react";
import { usePayment } from "../assets/contextAPI/PaymentContext";

const AdminPaymentHistory = () => {
  const { adminPayments, fetchAdminPayments, loading, error } = usePayment();

  useEffect(() => {
    fetchAdminPayments();
  }, []);

  if (loading) return <div>Loading payment history...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Payment Histories</h2>
      {adminPayments?.length === 0 ? (
        <p>No payment history found.</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Student</th>
              <th className="border border-gray-300 px-4 py-2">Courses</th>
              <th className="border border-gray-300 px-4 py-2">Total Amount</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {adminPayments.map((payment) => (
              <tr key={payment._id}>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(payment.paymentDate).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {payment.user.firstName} {payment.user.lastName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {payment.courses.map((course) => course.title).join(", ")}
                </td>
                <td className="border border-gray-300 px-4 py-2">₦{payment.totalAmount.toLocaleString()}</td>
                <td className="border border-gray-300 px-4 py-2">{payment.paymentStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPaymentHistory;