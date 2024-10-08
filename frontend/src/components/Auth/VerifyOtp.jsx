import React, {useEffect, useRef, useState} from 'react';
import maillogo from '../../Assets/images/email (2).png'
import {useLocation,useNavigate} from "react-router-dom";

//Redux
import {useDispatch,useSelector} from "react-redux";
import {verifyOtp} from "../../redux/slice/authSlice";

const VerifyOtp = () => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""])
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {email} = location.state;
    console.log(email)
    const user = useSelector((state) => state.auth.user)
    const inputRefs = useRef([])

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus()
        }
    }, [])

    const handleChange = (element, index) => {
        if (isNaN(Number(element.value))) return false

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))])

        // Focus next input
        if (element.value !== "") {
            const nextElement = inputRefs.current[index + 1]
            if (nextElement) {
                nextElement.focus()
            }
        }
    }

    const handleBackspace = (e, index) => {
        if (e.key === "Backspace") {
            if (otp[index] === "") {
                const prevElement = inputRefs.current[index - 1]
                if (prevElement) {
                    prevElement.focus()
                }
            } else {
                setOtp(otp.map((d, idx) => (idx === index ? "" : d)))
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const otpString = otp.join("")
        dispatch(verifyOtp({email, otp: otpString}))
        if(!user.loading){
            navigate('/')
            window.location.reload()
        }

        // Here you would typically send the OTP to your backend for verification
        console.log("Submitted OTP:", otpString)
    }

    return (
        <div className="flex flex-col items-center justify-center bg-custom-image w-full h-[89vh] bg-cover bg-center p-4">
            <div className="w-full max-w-md space-y-8 bg-white p-6 rounded-lg shadow-md">
                <div className="text-center flex justify-center items-center flex-col">
                    <img src={maillogo} className='w-24 h-24' alt="" />
                    <h1 className="text-3xl font-bold text-black">OTP Verification</h1>
                    <p className="mt-2 text-gray-600 text-font">
                        Enter the 6-digit code sent to your Email
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="otp-1" className="block text-center pb-3 text-sm font-medium text-gray-700">
                            Enter OTP
                        </label>
                        <div className="flex justify-between gap-2">
                            {otp.map((data, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    inputMode="numeric"
                                    id={`otp-${index + 1}`}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    maxLength={1}
                                    className="w-12 h-12 text-center text-2xl border-2 border-gray-300 rounded-md focus:border-orange-500 focus:ring-orange-600-500 focus:outline-none"
                                    value={data}
                                    onChange={(e) => handleChange(e.target, index)}
                                    onKeyDown={(e) => handleBackspace(e, index)}
                                    aria-label={`Digit ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full backgroundgrad text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={otp.some((digit) => digit === "")}
                    >
                        Verify OTP
                    </button>
                </form>
            </div>
        </div>
    )
}

export default VerifyOtp;