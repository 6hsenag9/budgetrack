export interface Transaction {
    amount: number,
    createdAt: string,
    categoryName: {
        categoryName: string
    },
    financeName: string,
    id: string,
    isIncome: boolean
}

export interface MonthlyTransactions extends Transaction{
    description: string,
    categoryName:{
        categoryName: string,
        id: string
    }
}