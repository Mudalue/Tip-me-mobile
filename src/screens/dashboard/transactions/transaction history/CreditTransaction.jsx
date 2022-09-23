import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import TransactionUnit from "../../../../components/ui/molecules/TransactionUnit";

const CreditTransaction = () => {
  const transactionContents = [
    {
      id: 1,
      value: "credit",
      day: "24",
      month: "May",
      name: "John doe",
      amount: "3000",
    },
    {
      id: 1,
      value: "credit",
      day: "14",
      month: "Sept",
      name: "Alapelode tobiloba",
      amount: "200",
    },
    {
      id: 1,
      value: "credit",
      day: "10",
      month: "Jan",
      name: "Alapelode tomi",
      amount: "100",
    },
    {
      id: 1,
      value: "credit",
      day: "14",
      month: "Sept",
      name: "Mudalue tracy",
      amount: "200",
    },
    {
      id: 1,
      value: "credit",
      day: "14",
      month: "Sept",
      name: "Amadi Chukwu",
      amount: "2000",
    },
  ];
  return (
    <ScrollView style={{ display: "flex", height: "100%", marginTop: 10 }}>
      {transactionContents.map((creditTransactionContent) => (
        <TransactionUnit
          value={creditTransactionContent.value}
          day={creditTransactionContent.day}
          month={creditTransactionContent.month}
          name={creditTransactionContent.name}
          amount={creditTransactionContent.amount}
          key={creditTransactionContent.name}
        />
      ))}
    </ScrollView>
  );
};

export default CreditTransaction;

const styles = StyleSheet.create({});
