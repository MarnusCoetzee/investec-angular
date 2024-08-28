export interface Currency {
    code: string;
    name: string;
}

export interface ConvertCurrencyResult {
    conversionRate: number;
    conversionResult: number
}