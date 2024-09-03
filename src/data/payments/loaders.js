const API_URL = import.meta.env.VITE_BASE_URL  || 'http://localhost:8080';

export const getAllPayments = async () => {
    const res = await fetch(`${API_URL}/payments`);
    if (res.status !== 200) throw Error("something went wrong");
    const data = await res.json();
    return data;
}