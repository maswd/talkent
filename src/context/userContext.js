import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { errorMessage, successMessage } from '../utils/message';
import { checkPhone, DeleteProfilePicture, getProfile, getProfilePicture, loginUser, profilePicture, registerUser, sendCode, updateUserProfile, verifyCode } from '../services/userService'
import SimpleReactValidator from 'simple-react-validator';
import { addUser, updateUser } from '../actions/user'
import { context } from './context';
import { showLoading, hideLoading } from 'react-redux-loading-bar'


const UserContext = ({ children }) => {
    const history = useNavigate()
    const [phone, setPhone] = useState("")
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [token, setToken] = useState([]);
    const [state, setState] = useState({
        signIn: true,
        signUp: false,
        code: false,
        forgetPassword: false,
        changePassword: false,
        passwordConfirm: false
    })
    const [otp, setOtp] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [, forceUpdate] = useState()
    const [policy, setPolicy] = useState();
    const [register, setRegister] = useState("");
    const dispatch = useDispatch()
    const validator = useRef(new SimpleReactValidator({
        messages: {
            required: "• پر کردن این فیلد الزامی میباشد",
            min: "• کمتر از :min کارکتر نباید باشد ",
            numeric: "• شماره همراه صحیح نمی باشد",
            email: "• ایمیل وارد شده صحیح نمی باشد",
            phone: "• شماره وارد شده صحیح نمی باشد",
            regex: "• فرمت ورودی صحیح نمی باشد",
            max: "• حداکثر یازده کارکتر باید باشد",
            in: "• تکرار رمز مطابقت ندارد"
        },
        element: messages => <p style={{ color: 'red', fontSize: "13px", width: "100%" }}>{messages}</p>
    }))

    useEffect(() => {
        return () => {
            setEmail()
            setPhone()
            setPassword()
            setConfirmPassword()
            setPolicy()

        }
    }, [])

    const handleCheck = async e => {
        e.preventDefault();
        try {
            const { status } = await checkPhone({ phone: phone })
            if (status === 200) {
                setState({ passwordConfirm: true })
            }
        }
        catch (error) {
            if (error.response.status === 404) {
                setState({ code: true })
                 await sendCode({ phone: phone })
            }
        }

    }
    const handleDelete = async (e) => {
        try {
            dispatch(showLoading())
            const { data, status } = await DeleteProfilePicture()
            const { data: token, message } = data.details
            if (status === 200) {
                localStorage.setItem("token", token)
                successMessage(message)
                // dispatch(updateUser())
                dispatch(hideLoading())
            }

        } catch (err) {
            errorMessage(err.response.data.details.message)
            err.response.data.details.data.map((er) => errorMessage(er))
            dispatch(hideLoading())
        }
    }

    const handleCode = async e => {
        e.preventDefault();
        try {
            const { status } = await verifyCode({ code: otp, phone: phone })
            if (status === 200) {
                setState({ signUp: true })
            }

        } catch (error) {
            if (error.response.status === 403) {
                errorMessage(error.response.data.details.message)
            }
        }
    }

    const handleLogin = async e => {
        e.preventDefault();
        const user = {
            phone, password
        }
        try {
            if (validator.current.allValid()) {
                const { data, status } = await loginUser(user)
                const tokens = data.details.data.tokens
                const accessToken = tokens.accessToken
                const refreshToken = tokens.refreshToken
                localStorage.setItem("accessToken", accessToken)
                localStorage.setItem("refreshToken", refreshToken)
                if (status === 200) {
                    const { data } = await getProfile(accessToken)
                    const role = data.details.data.user.role
                    const { data: profile } = await getProfilePicture(data.details.data.user.profile.pictureId)
                    dispatch(addUser(data.details.data, profile.details.data.file.path))
                    if (role === "admin") {
                        history("/dashboard", { replace: true })
                    }
                    else history("/new-posts/createpost", { replace: true })
                    successMessage("ورود با موفیقت انجام شد")
                    dispatch(hideLoading())
                }
            } else {
                validator.current.showMessages()
                forceUpdate(1)
            }

        } catch (error) {
        }
    }
    const handleRegister = async e => {
        e.preventDefault()
        const user = {
            firstName: firstName,
            lastName: lastName,
            password: password,
            phone: phone
        }
        try {
            const { data } = await registerUser(user)
            const accessToken = data.details.data.tokens.accessToken
            const refreshToken = data.details.data.tokens.refreshToken
            localStorage.setItem("accessToken", accessToken)
            localStorage.setItem("refreshToken", refreshToken)
            history("/new-posts", { replace: true })


        } catch (error) {
        }

    }
    const handleUpdate = async e => {
        e.preventDefault()
        const user = {
            email: email, phone: phone, password: password === "" ? undefined : password
        }
        try {
            if (validator.current.allValid()) {
                dispatch(showLoading())
                const { status, data } = await updateUserProfile(user)
                const {  data: token } = data.details
                if (status === 200) {
                    localStorage.setItem("token", token)
                    // let user = [token, decodeToken(token)]
                    dispatch(updateUser(user))
                    dispatch(hideLoading())
                }
            } else {
                validator.current.showMessages()
                forceUpdate(1)
            }
        } catch (error) {
            error.response.data.details.forEach((err) => {
                errorMessage(err.message)
            })
            dispatch(hideLoading())
        }
    }
    const handleChange = async (e) => {
        console.log(e);
        const formData = new FormData();
        const file = e.target.files[0];
        formData.append("userPicture", file);
        try {
            dispatch(showLoading())
            const { data, status } = await profilePicture(formData)
            console.log(data);
            const { message } = data.details
            if (status === 200) {
                successMessage(message)
                // dispatch(updateUser(user))
                dispatch(hideLoading())
            }

        } catch (err) {
            errorMessage(err.response.data.details.message)
            dispatch(hideLoading())
        }
    }
    return (
        <context.Provider value={{
            token,
            setToken,
            firstName,
            setFirstName,
            lastName,
            setLastName,
            email,
            phone,
            setPhone,
            setEmail,
            password,
            setPassword,
            confirmPassword,
            setConfirmPassword,
            policy,
            setPolicy,
            validator,
            handleLogin,
            handleRegister,
            handleUpdate,
            state,
            setState, handleCheck,
            register, setRegister,
            otp, setOtp, handleCode,
            handleChange,
            handleDelete
        }}>
            {children}
        </context.Provider>
    );
}

export default UserContext;
