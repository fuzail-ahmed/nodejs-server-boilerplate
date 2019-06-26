"use strict";

module.exports = Object.freeze({
    SUCCESS: "SUCCESS",
    USER_EXIST : "User already exist.",
    USER_NOT_EXIST : "User not exist.",
    AUTH_FAILED: "Failed to authenticate.",
    NOT_ALLOW: "Operation not allowed",
    SOCIAL_ID_REQUIRED:"Social id required.",
    DOB_REQUIRED:"Date of birth required.",
    DOB_FORMAT_INCORRECT : "Date of birth format is incorrect. it must be YYYY-MM-DD",
    SERVER_ERROR: "Server Error, Please contact your developer",
    BAD_REQUEST: "Server Error, Please contact your developer",
    REQUIRED_KEYS_NOT_AS_PER_SPECIFICATION: "Required key not present",
    RECORD_CREATED: "Record added successfully",
    GET_RECORD_SUCCESS: "Record fetched successfully",
    GET_ALL_RECORDS: "Records fetched successfully",
    RECORD_UPDATED: "Record updated successfully.",
    RECORD_NOT_FOUND: "Record not found.",
    RECORD_DELETED_SUCCESS: "Record deleted successfully.",
    RECORD_DELETED_FAILURE: "Fail to delete record",
    IMAGE_UPLOAD_SUCCESS: "Image uploaded successfully",
    IMAGE_UPLOAD_FAILURE: "Choose Image to upload",
    VALIDATE_IMAGE: "Incorrect file type to upload",
    LOGIN_SUCCESS: "Login successfully.",
    INCORRECT_EMAIL: "Incorrect username.",
    INCORRECT_PASSWORD: "Incorrect password.",
    EMAIL_AVAILABLE: "Email available.",
    STUDENT_EXIST: "Student already exist.",
    STUDENT_NOT_EXIST: "Student not exist.",
    EMIAL_NOT_AVAILABLE: "Email not available.",
    EMAIL_SEND_SUCCESS: "Email sent successfully.",
    UPDATE_PASSWORD: "Password updated successfully.",
    OTP_SEND_SUCCESS: "Otp sent successfully.",
    INCORRECT_OTP: "Incorrect otp",
    CORRECT_OTP:"Otp matched.",
    BLACKOUTDATE:"Cannot add lesson to blackout date.",
    TIME_NOT_AVAIL:"Another lesson has already scheduled for this time.",
    FAILED_TO_UPDATE:"Failed to update record.",
    FAILED_TO_CREATE:"Failed to create record.",
    ACCOUNT_ID_ABSENT:"No account id for user",
    OTP_SEND_SUCCESS:"Please check mobile for OTP",
    OTP_SEND_FAIL:"Error occured while send OTP",
    INVOICE_SEND_SUCCESS: "Invoice sent successfully.",
    BLACKOUTDATE_CREATED:"Dates added as Blackout dates",
    BLACKOUTDATE_FAILED_TO_CREATE:"Lessons are scheduled for all dates.",    
    EMIAL_ALREADY_EXIST:"Email already exist!",
    NO_SUCH_EMAIL:"No such type of email exist",
    PAYMENT_TRANSFER_SUCCESS:"Payment transfer successfully",
    PAYMENT_TRANSFER_FAIL:"Payment transfer fail",
    INVOICE_PAY_FAILED:"Invoice pay failed",
    FAILED_TO_SEND_INVOICE: "Failed to send invoice.",
    ADD_EXTERNAL_ACCOUNT:'Please add account!',
    EXIST_EXTERNAL_ACCOUNT:'Your account is exist! If you want,update it!',
    NO_STRIPE_CONNECT_ACCOUNT:"No any stripe account for this user",
    OTP_NOT_MATCHED : "Otp not matched."
});