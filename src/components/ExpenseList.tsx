import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import ExpenseDetail from "./ExpenseDetail";

export default function ExpenseList() {
  const { state } = useBudget();

  const filteredExpense = state.currentCategory
    ? state.expenses.filter(
        (expense) => expense.category === state.currentCategory
      )
    : state.expenses;

  const isEmpty = useMemo(
    () => filteredExpense.length === 0,
    [filteredExpense]
  );

  return (
    <div className="mt-10">
      {isEmpty ? (
        <p className="text-2xl font-bold text-gray-600">No hay gastos</p>
      ) : (
        <>
          <p className="my-5 text-2xl font-bold text-gray-600">
            Listado de gastos
          </p>

          {filteredExpense.map((expense) => (
            <ExpenseDetail key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  );
}
