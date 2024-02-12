import InputBox from "../../components/input-box/InputBox";
import React,{useState} from "react";


const SignIn = () => {

    const [account ,setAccount] = useState({email:'', password:''})

    return (
        <dialog className="flex flex-col place-items-center bg-primary rounded-2xl mt-20 w-4/12">
            <h1 className="text text-3xl font-bold mt-10 text-white">ยินดีต้อนรับเข้าสู่ระบบ!</h1>
            <div className="form-control w-full max-w-md ">
                <InputBox label='email'type="text" placeholder="Email" />
                <InputBox label='password' type="password" placeholder="Password" eye={true} />
            </div>
            <div className="flex flex-row w-10/12 justify-between mt-2">
                <p className="text-success"><a href="#">สมัครสมาชิก</a></p>
                <p className="text-error"><a href="#">ลืมรหัสผ่าน ? </a></p>
            </div>

            <div className="flex flex-col h-40 justify-evenly">
                <button className="btn btn-success px-10">Log In</button>
                <button className="btn btn-error">Back</button>
            </div>

        </dialog>
    )
}

export default SignIn;