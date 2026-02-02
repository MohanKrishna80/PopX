
import {useNavigate} from "react-router-dom";
export default function Login(){
  const nav=useNavigate();
  return(
    <div className="min-h-screen flex justify-center bg-slate-900">
      <div className="w-[360px] bg-white p-6">
        <h2 className="text-xl font-bold mb-4">Signin to your PopX account</h2>
        <input placeholder="email" className="border w-full p-2 mb-3"/>
        <input placeholder="password" className="border w-full p-2 mb-3"/>
        <button onClick={()=>nav('/account')} className="bg-gray-300 w-full py-3 rounded">Login</button>
      </div>
    </div>
  )
}
