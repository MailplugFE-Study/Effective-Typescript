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

// 2)
interface PayMethodBaseFromrRes {
  finacialCode: string;
  name: string;
}

interface Bank extends PayMethodBaseFromrRes {
  fullName: string;
}

interface Card extends PayMethodBaseFromrRes {
  appCardType?: string;
}

type PayMethodInterface = {
  companyName: string;
};
type PayMethodInfo<T extends Bank | Card> = T & PayMethodInterface;
