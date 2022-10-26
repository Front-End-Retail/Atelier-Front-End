const baseURL = process.env.NODE_ENV === "production"
    ? "https://3000"
    : "http://localhost:3000";
export default baseURL;