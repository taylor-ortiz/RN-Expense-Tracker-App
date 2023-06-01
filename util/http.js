import axios from "axios";

const BACKEND_URL = 'https://your-firebase-domain'

export async function storeExpense(expenseData) {
  const response = await axios.post(
    BACKEND_URL + "/expenses.json",
    expenseData
  );
  const id = response.data.name;
  return id;
}

export async function fetchExpenses(){
    const response = await axios.get(BACKEND_URL + "/expenses.json")

    const expenses = []
    for (const key in response.data){
        const expenseObject = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        };
        expenses.push(expenseObject)
    }
    console.log('what is the response of firebase expenses data? ', expenses)
    return expenses
}

export function updateExpense(id, expenseData){
    return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id){
    return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}