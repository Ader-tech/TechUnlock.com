import React from "react";
import DashboardLayout from "@/components/reusables/Layout/DashboardLayout";

const layout = ({ children }) => {
  return (
    <div className="">
      <DashboardLayout>{children}</DashboardLayout>
    </div>
  );
};

export default layout;
