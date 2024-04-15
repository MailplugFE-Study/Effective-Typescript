// 1)
interface Bank {
  finacialCode: string;
  companyName: string;
  name: string;
  fullName: string;
}

interface Card {
  finacialCode: string;
  companyName: string;
  name: string;
  appCardType?: string;
}

type PayMethod<T> = T extends "card" ? Card : Bank;
type CardPayMethodType = PayMethod<"card">;
type BankPayMethodType = PayMethod<"bank">;
