import { View, Text, FlatList } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
    <ExpensesSummary expenses={expenses} periodName={expensesPeriod}></ExpensesSummary>
    <ExpensesList></ExpensesList>
    </View>
  );
}

export default ExpensesOutput;
