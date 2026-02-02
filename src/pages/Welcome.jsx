
import {useNavigate} from "react-router-dom";
export default function Welcome(){
  const nav=useNavigate();
  return(
    <div className="min-h-screen flex justify-center bg-slate-900">
      <div className="w-[360px] bg-white p-6 flex flex-col justify-end">
        <h1 className="text-2xl font-bold">Welcome to PopX</h1>
        <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet</p>
        <button onClick={()=>nav('/signup')} className="bg-violet-600 text-white py-3 rounded mb-3">Create Account</button>
        <button onClick={()=>nav('/login')} className="bg-violet-200 py-3 rounded">Already Registered? Login</button>
      </div>
    </div>
  )
}
