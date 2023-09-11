export interface Transaction {
    amount: number|undefined,
    createdAt: Date,
    category: string|"",
    financeName: string|"",
    id?: string|"",
    isIncome: boolean|undefined,
    description: string|"",
}

export interface MonthlyTransactions extends Transaction{
    description: string,
    categoryName:{
        categoryName: string,
        id: string
    }
}