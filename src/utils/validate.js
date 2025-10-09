export const checkValidateData = (email, password) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    
    if (!isValidEmail) return "Invalid email format";
    if (!isValidPassword) return "Password must be 8+ characters with uppercase, lowercase, and number";
    
    return null;
} 