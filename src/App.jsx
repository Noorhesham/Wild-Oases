import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Dashboard from "./pages/Dashboard"
import Bookings from "./pages/Bookings"
import Cabins from "./pages/Cabins"
import Account from "./pages/Account"
import Login from "./pages/Login"
import Settings from "./pages/Settings"
import Users from "./pages/Users"
import PageNotFound from "./pages/PageNotFound"
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";

const queryClient=new QueryClient({defaultOptions:{queries:{staleTime:0,}}})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <BrowserRouter>
    <Routes>
      <Route element={<AppLayout/>}>
      <Route index  element={<Navigate replace to="dashboard"/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="bookings" element={<Bookings/>}/>
      <Route path="cabins" element={<Cabins/>}/>
      <Route path="account" element={<Account/>}/>
      <Route path="settings" element={<Settings/>}/>
      <Route path="users" element={<Users/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      </Route>
      <Route path="login" element={<Login/>}/>
    </Routes>
  </BrowserRouter>  
  <Toaster position="top-center" gutter={12} containerStyle={{margin:'8px'}} 
  toastOptions={{success:{duration:3000},error:{duration:5000} 
  ,style:{fontSize:'18px',maxWidth:'500px',padding:'16px',backgroundColor:'var(--color-grey-0)',color:'var(--color-grey-700)'}}} />
    </QueryClientProvider>);
}

export default App;