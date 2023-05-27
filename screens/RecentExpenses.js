import { Text } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { useContext } from 'react'
import { ExpensesContext } from '../store/expenses-context'
import { getDateMinusDays } from '../util/date';

function RecentExpenses() {

    const expensesCtx = useContext(ExpensesContext);
    console.log('what is expenses ctx? ', expensesCtx)

    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);
        console.log('what is the value of date 7 days ago? ', date7DaysAgo)
        console.log(expense.date)

        return (expense.date >= date7DaysAgo) && (expense.date <= today);
    })

    return  <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" fallbackText="No expenses registered for the last 7 days"></ExpensesOutput>
}

export default RecentExpenses