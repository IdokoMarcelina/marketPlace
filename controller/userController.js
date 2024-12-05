const express = require('express')
const mongoose = require('mongoose');
const userModel = require('../model/userModel');
const cloudinary = require('../config/cloudinary');
const bcrypt = require('bcryptjs')

const signupUser = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const cloudImage = await cloudinary.uploader.upload(req.file.path);
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const user = await userModel.create({
            username,
            email,
            password:hash,
            avater:cloudImage.secure_url,
            avatarID: cloudImage.public_id,
        });

        res.status(200).json({
            message: 'user created successfully',
            data: user,
        })
    } catch (error) {
        res.status(400).json({
            message: 'failed to sign up user',
            data: error.message
        })
        
    }
}

const getAllUser = async (req,res)=>{
    try {
        const getUser = await userModel.find();
        res.status(200).json({
            message: "user gotten successfully",
            data: getUser,
        })
    } catch (error) {
        res.status(400).json({
            message: "failed to get all users",
            data: error.message
            
        });
        
    }
}

const signinUser = async (req,res)=>{

    try {
        const {email, password} = req.body;

    const user = await userModel.findOne();

    if(user){
        const checkPassword = await bcrypt.compare(password,user.password);

        if(checkPassword){
            const token = await jwt.sign({_id:user._id}, "ilovetallguys",{expiresIn: "5d"});

            const { password, ...info} = user._doc;

            res.status(201).json({
                message: "User signed In",
                data: { token, ...info },
              });
        }else {
            res.status(400).json({
              message: "Incorrect password",
            });
          }
    }else {
        res.status(404).json({
          message: "User Not Found",
        });
      }
    } catch (error) {
        res.status(400).json({
            message: "Failed to sign in user",
            data: error.message,
          });
    }
}

const getOneUser = async (req,res)=>{
    try {
        const singleUser = await userModel.findById(req.params.id);
        res.status(200).json({
          message: "User gotten Sucessfully",
          data: singleUser,
        });
      } catch (error) {
        res.status(400).json({
          message: "failed to get user",
          data: error.message,
        });
      }    
}

module.exports = {signupUser, getAllUser, signinUser, getOneUser}

