import { useEffect } from "react";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";

export const action = async ({ params }) => {
  try {
    // Display confirmation dialog
    const confirmed = window.confirm("Are you sure you want to delete this job?");
    if (!confirmed) {
      return redirect("/dashboard/all-jobs");
    }

    // If confirmed, proceed with deletion
    await customFetch.delete(`/jobs/${params.id}`);
    toast.success("Job Deleted Successfully");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return redirect("/dashboard/all-jobs");
};

const DeleteJob = () => {
  // This component doesn't render anything directly, it handles deletion through action
  return null;
};

export default DeleteJob;
