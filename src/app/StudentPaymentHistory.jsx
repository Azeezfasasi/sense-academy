import React, { useEffect, useState } from "react";
import { usePayment } from "../assets/contextAPI/PaymentContext";
import AccountHeader from "@/assets/components/account-components/AccountHeader";
import AccountMenu from "@/assets/components/account-components/AccountMenu";

const StudentPaymentHistory = () => {
  const { studentPayments, fetchStudentPayments, loading, error } = usePayment();

  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [itemsPerPage] = useState(10); // Items per page

  useEffect(() => {
    fetchStudentPayments();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPayments = studentPayments.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(studentPayments.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  if (loading) return <div>Loading payment history...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <>
      <AccountHeader />
      <main className="flex flex-row justify-around w-full p-0 m-0 mx-auto pt-[30px]">
        <aside className="w-fit border ml-0 p-0 relative -top-8">
          <AccountMenu />
        </aside>
        <section className="w-full px-4">
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">My Payment History</h2>
            <p className="mb-4">
              Showing {currentPayments.length} of {studentPayments.length} payments
            </p>
            {studentPayments.length === 0 ? (
              <p>No payment history found.</p>
            ) : (
              <>
                <table className="table-auto w-full border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 font-bold">Transaction ID</th>
                      <th className="border border-gray-300 px-4 py-2 font-bold">Date</th>
                      <th className="border border-gray-300 px-4 py-2 font-bold">Courses</th>
                      <th className="border border-gray-300 px-4 py-2 font-bold">Total Amount</th>
                      <th className="border border-gray-300 px-4 py-2 font-bold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentPayments.map((payment) => (
                      <tr key={payment._id}>
                        <td className="border border-gray-300 px-4 py-2">{payment._id}</td>
                        <td className="border border-gray-300 px-4 py-2">
                          {new Date(payment.paymentDate).toLocaleDateString()}
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
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 border rounded ${
                      currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
                    }`}
                  >
                    Previous
                  </button>
                  <span>
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 border rounded ${
                      currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
                    }`}
                  >
                    Next
                  </button>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default StudentPaymentHistory;