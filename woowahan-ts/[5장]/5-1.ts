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

type PayMethodType = PayMethodInfo<Bank> | PayMethodInfo<Card>;
export const useGetRegisteredList = (
  type: "card" | "appCard" | "bank"
): UseQueryResult<PayMethodType[]> => {
  const url = `/api/${type === "appCard" ? "card" : type}`;

  const fetcher = fetcherFactory<PayMethodType[]>({
    onSuccess: (res) => {
      const usablePocketList =
        res?.filter(
          (pocket: PocketInfo<Card> | PocketInfo<Bank>) =>
            pocket?.useType === "USE"
        ) ?? [];
      return usablePocketList;
    },
  });

  const result = useCommonQuery<PayMethodType[]>(url, undefined, fetcher);

  return result;
};

const { data } = useGetRegisteredList("card");

// 3)
type PayMethodType2<T extends "card" | "appCard" | "bank"> = T extends
  | "card"
  | "appCard"
  ? Card
  : Bank;

export const useGetRegisteredList2 = <T extends "card" | "appCard" | "bank">(
  type: T
): UseQueryResult<PayMethodType<T>[]> => {
  const url = `/api/${type === "appCard" ? "card" : type}`;

  const fetcher = fetcherFactory<PayMethodType<T>[]>({
    onSuccess: (res) => {
      const usablePocketList =
        res?.filter(
          (pocket: PocketInfo<Card> | PocketInfo<Bank>) =>
            pocket?.useType === "USE"
        ) ?? [];
      return usablePocketList;
    },
  });

  const result = useCommonQuery<PayMethodType<T>[]>(url, undefined, fetcher);

  return result;
};

// 4)

interface ComponentType {
  (): Element;
}
interface RouteBase {
  name: string;
  path: string;
  component: ComponentType;
}

export interface RouteItem {
  name: string;
  path: string;
  component?: ComponentType;
  pages?: RouteBase[];
}

export const routes: RouteItem[] = [
  {
    name: "기기 내역 관리",
    path: "/device-history",
    component: DeviceHistoryPage,
  },
  {
    name: "헬멧 인증 관리",
    path: "/helmet-certification",
    component: HelmetCertificationPage,
  },
];

export interface SubMenu {
  name: string;
  path: string;
}

export interface MainMenu {
  name: string;
  path?: string;
  subMenus: SubMenu[];
}

export type MenuItem = MainMenu | SubMenu;
export const menuList: MenuItem[] = [
  {
    name: "계정 관리",
    subMenus: [
      { name: "기기 내역 관리", path: "/device-history" },
      { name: "헬멧 인증 관리", path: "/helmet-certification" },
    ],
  },
];

type PermissionNames = "기기 정보 관리" | "안전모 인증 관리";

export interface MainMenu2 {
  //...
  subMenus?: ReadonlyArray<SubMenu>;
}
