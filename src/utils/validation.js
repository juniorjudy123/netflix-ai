
export const checkValidData = (email, password, name) => {
    email = email.trim();//trim() method to remove any leading or trailing whitespace.
    name = name.trim();
    const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

    if (!isEmailValid) return "Email is not valid !";
    if (!isPasswordValid) return "Password is not valid !";
    if (!isNameValid) return "Name is not valid !";

    return null;

}