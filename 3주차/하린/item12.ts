/**
 * item12. 함수 표현식에 타입 적용하기
 * 함수 선언식보다 함수 표현식을 사용하면 매개변수와 반환값 전체를 함수 타입으로 선언할 수 있다.
 */

// 함수 선언식
function add(a: number, b: number): number {
  return a + b;
}

// 함수 표현식
type NumberToNumberFunc = (a: number, b: number) => number; // 호출 시그니처
const add2: NumberToNumberFunc = (a, b) => {
  return a + b;
};

// 제네릭 함수 표현식
// 생성시점에 타입을 매개변수처럼 넘겨주어 함수 타입 재사용 가능
interface ICommonResponse<T> {
  success: boolean;
  error: any;
  data: T;
}

class ApiService {
  private api;

  public async commonRequest<T>(
    method: "get" | "post" | "put" | "patch" | "delete",
    url: string,
    data?: any,
    config?: InternalAxiosRequestConfig
  ): Promise<ICommonResponse<T>> {
    const response = await this.api[method](url, data, config);
    return response.data;
  }

  public Get = async <T>(url: string, config?: InternalAxiosRequestConfig) =>
    this.commonRequest<T>("get", url, undefined, config);
}

export const fetchKanbanList = async () => {
  const data = await ApiService.Get<IKabanData[]>("/v1/applications/kanban");
  return data;
};
