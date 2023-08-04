import  { createContext, useContext ,  useState  } from 'react'
import Wrapper from '../assets/wrappers/Dashboard'
import { BigSidebar, Navbar, SmallSidebar } from '../components'
import { Outlet, redirect, useLoaderData , useNavigate } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
export const loader = async()=>{
  try {
    const {data} = await customFetch.get("/info/current-user")
    return data
  } catch (error) {
    return redirect("/")
    
  }
  
}
const DashboardContext = createContext();



const DashboardLayout = ({isDarkThemeEnabled}) => {

  const {user} = useLoaderData()
  const navigate = useNavigate();
  
  // temp
  
  const [showSidebar , setShowSidebar] = useState(false)
  const [isDarkTheme , setIsDarkTheme] = useState(isDarkThemeEnabled)

  const toggleDarkTheme = ()=>{
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme' , newDarkTheme);
    localStorage.setItem('darkTheme' , newDarkTheme);
  }
  const toggleSidebar = ()=>{
    
    setShowSidebar(!showSidebar);
  }
  const logoutUser = async ()=>{
    navigate("/")
    await customFetch.get("/users/logout")
    toast.success("Logout Succesfully...")
  }
  return (
    <DashboardContext.Provider value={{user , showSidebar , isDarkTheme , toggleDarkTheme , toggleSidebar , logoutUser}}>
       <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet context={{user}} />
          </div>
        </div>
      </main>
    </Wrapper>
    </DashboardContext.Provider>
   
  )
}

export const useDashboardContext = ()=> useContext(DashboardContext);


export default DashboardLayout