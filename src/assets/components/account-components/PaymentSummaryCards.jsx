import React, { useEffect, useContext } from "react";
import { usePayment } from "@/assets/contextAPI/PaymentContext";
import { ProfileContext } from "@/assets/contextAPI/ProfileContext"; // Assuming ProfileContext provides user role
import { Card, Grid, Typography } from "@mui/material";
import DashboardProgress from "./DashboardProgress";

const PaymentSummaryCards = () => {
  const { studentPayments, adminPayments, fetchStudentPayments, fetchAdminPayments, loading, error } = usePayment();
  const { user } = useContext(ProfileContext);

  useEffect(() => {
    if (user?.role === "Admin") {
      fetchAdminPayments(); // Fetch admin payment data
    } else if (user?.role === "Student") {
      fetchStudentPayments(); // Fetch student payment data
    }
  }, [user]);

  if (loading) return <div>Loading payment summary...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  // Determine which data to use based on the user's role
  const payments = user?.role === "Admin" ? adminPayments : studentPayments;

  // Calculate summary data
  const totalTransactions = payments.length;
  const totalAmountSpent = payments.reduce((sum, payment) => sum + payment.totalAmount, 0);
  const totalCoursesOrdered = payments.reduce((sum, payment) => sum + payment.courses.length, 0);

  return (
    <>
    {user?.role === "Student" && (
    <div className="pb-6 px-2">
      <div className="font-bold text-[26px] text-blue-600">Welcome, {user.firstName}!</div>
      <p className="mb-6">It is time to continue learning. Take a step closer to Mastery!</p>
      <DashboardProgress />
      <Typography variant="h5" style={{marginBottom: "14px", textAlign: "center", fontWeight: "bold"}}>
        My Payment Summary
      </Typography>
      <Grid container spacing={4}>
        {/* Total Transactions Card */}
        <Grid item xs={12} md={4}>
          <Card className="p-6 shadow-lg border border-gray-200 rounded-lg">
            <Typography variant="h5" className="text-blue-600 font-bold mb-4">
              Total Transactions
            </Typography>
            <Typography variant="h3" className="text-gray-800 font-bold">
              {totalTransactions}
            </Typography>
          </Card>
        </Grid>

        {/* Total Amount Spent Card */}
        <Grid item xs={12} md={4}>
          <Card className="p-6 shadow-lg border border-gray-200 rounded-lg">
            <Typography variant="h5" className="text-green-600 font-bold mb-4">
              Total Amount Spent
            </Typography>
            <Typography variant="h3" className="text-gray-800 font-bold">
              ₦{totalAmountSpent.toLocaleString()}
            </Typography>
          </Card>
        </Grid>

        {/* Total Courses Ordered Card */}
        <Grid item xs={12} md={4}>
          <Card className="p-6 shadow-lg border border-gray-200 rounded-lg">
            <Typography variant="h5" className="text-purple-600 font-bold mb-4">
              Total Courses Ordered
            </Typography>
            <Typography variant="h3" className="text-gray-800 font-bold">
              {totalCoursesOrdered}
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
    )}

    {user?.role === "Admin" && (
    <div className="pb-6 px-2">
      <div className="font-bold text-[23px] md:text-[26px] text-blue-600">Welcome, {user.firstName}!</div>
      <p className="mb-6">It is time to continue learning. Take a step closer to Mastery!</p>
      <DashboardProgress />
      <Typography variant="h6" style={{marginBottom: "14px", textAlign: "center", fontWeight: "bold"}}>
        Admin Payment Summary
      </Typography>
      <Grid container spacing={4}>
        {/* Total Transactions Card */}
        <Grid item xs={12} md={4}>
          <Card className="p-6 flex flex-col items-center shadow-lg border border-gray-200 rounded-lg">
            <Typography variant="h6" style={{fontWeight: "bold"}} className="text-blue-600 mb-4">
              Total Transactions
            </Typography>
            <Typography variant="p" style={{fontSize: "38px"}} className="text-gray-800">
              {totalTransactions}
            </Typography>
          </Card>
        </Grid>

        {/* Total Amount Spent Card */}
        <Grid item xs={12} md={4}>
          <Card className="p-6 flex flex-col items-center shadow-lg border border-gray-200 rounded-lg">
            <Typography variant="h6" style={{fontWeight: "bold"}} className="text-green-600 mb-4">
              Total Amount Received
            </Typography>
            <Typography variant="p" style={{fontSize: "38px"}} className="text-gray-800">
              ₦{totalAmountSpent.toLocaleString()}
            </Typography>
          </Card>
        </Grid>

        {/* Total Courses Ordered Card */}
        <Grid item xs={12} md={4}>
          <Card className="p-6 flex flex-col items-center shadow-lg border border-gray-200 rounded-lg">
            <Typography variant="h6" style={{fontWeight: "bold"}} className="text-blue-600 mb-4">
              Total Courses Ordered
            </Typography>
            <Typography variant="p" style={{fontSize: "38px"}} className="text-gray-800">
              {totalCoursesOrdered}
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
    )}
    </>
  );
};

export default PaymentSummaryCards;