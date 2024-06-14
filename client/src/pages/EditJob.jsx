import { FormRow, FormRowSelect } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useLoaderData } from 'react-router-dom';
import { JOB_TYPE } from '../../../utils/constant.js';
import { Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const loader = async ({params})=>{
    try {
      const {data} = await customFetch.get(`/jobs/${params.id}`)
      return data
    } catch (error) {
      toast.error(error?.response?.data?.msg)
     return redirect("/dashboard/all-jobs")
    }
    
}
export const action = async ({request , params})=>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  data.jobStatus = "Pending"

  try {
    await customFetch.patch(`/jobs/${params.id}` , data);
    toast.success("Updated Job Successfully")
    return redirect("/dashboard/all-jobs");
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }


}

const EditJob = () => {
  const {job} = useLoaderData();
  console.log("Job" , job);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting"
  
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4 className='form-title'>Edit Job</h4>
        <div className="form-center">
          <FormRow type='text' name='position' defaultValue={job.position} />
          <FormRow type='text' name='company' defaultValue={job.company} />
          <FormRow type='text' name='jobLocation' labelText='Job Location' defaultValue={job.jobLocation} />
          {/* <FormRowSelect name='jobStatus' labelText='Job Status' list={Object.values(JOB_STATUS)} defaultValue={job.JOB_STATUS} /> */}
          <FormRow type='text' name='jobStatus' defaultValue={job.jobStatus} labelText="Job Satus" />
          <FormRowSelect name='jobType' labelText='Job Type' list={Object.values(JOB_TYPE)} defaultValue={job.JOB_TYPE} />
        </div>
        <button type='submit' className='btn btn-block form-btn' disabled={isSubmitting}>{isSubmitting ? 'submitting...' : "Submit"}</button>

      </Form>
    </Wrapper>
  )
}

export default EditJob