import React, { useState } from "react";
import axios from "axios";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import { useNavigate } from "react-router-dom";


const signUp = ()=>{
    const Navigate = useNavigate();
    const [userAvatar, setUserAvatar]  = useStatee(null);
    const [userData, setUserData] = useState({
        username: '',
        email:'',
        password:'',
        avatar:'',
    });

    const handleUserSignup = async (e)=>{
        e.preventDefault();
    try{
    const formData = new FormData();

    formData.append("avatar", userAvatar);
    formData.append("username",userData.username );
    formData.append("email", userData.email)
    formData.append('password',userData.password);
    

    let signuserup = await axios.post("http://localhost:2024/api/v1/user/signup",
        formData
    );
    Navigate('/signin');
}catch(error){
    if(error?.response?.data.message){
        setErrorMessage(err?.response?.data?.message);
    }else{
        setErrorMessage(error.response)
    }
}
};

    return(
        <div>
        <form onSubmit="">
            <div>
                <label htmlFor="userName">Avatar</label>
                <Upload>
                    <Button icon={<UploadOutlined/>}>Click here to submit</Button>
                </Upload>
            </div>
            <div>
                <label htmlFor="userName">Username</label>
                <input 
                type="text"
                value={}
                onChange={}
                type="text"
                name="userName" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input 
                type="email"
                value={userData.email}
                onChange={}
                name="userName" />
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input 
                type="password"
                value={userData.password}
                onChange={}
                name="userName" />
            </div>
        </form>
        </div>
    )


}

exports.module = signUp;