export const validate = values => {
    const errors= {};

    if(!values.firstName) {
        errors.firstName = "First Name is required";
    }

    if(!values.lastName) {
        errors.lastName = "Last Name is required";
    }

    if(!values.userName) {
        errors.userName = "User Name is required";
    } else if (values.userName.length < 4){
        errors.userName = "User Name is too short";
    } else if(values.userName.length > 10) {
        errors.userName = "User Name is too long";
    }

    return errors;
};