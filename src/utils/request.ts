/**
 * 统一的接口请求工具函数
 */

// 定义返回体
interface HttpResponse<T> extends Response {
  parseBody?: T;
};

const CRequest = async <T> (request: RequestInfo): Promise<HttpResponse<T>> => {
  const response: HttpResponse<T> = await fetch(request);
  // 捕获异常
  try {
    response.parseBody = await response.json();    
  } catch (ex) {
    if(!response.ok) {
      throw new Error(response.statusText);
    }
  }

  return response;
};

// get 请求
export const get = async <T> (
  path: string,
  args: RequestInit = { method: 'get' }
): Promise<HttpResponse<T>>=> {
  return await CRequest<T>(new Request(path, args));
};

// post 请求
export const post = async <T> (
  path: string,
  body: T,
  args: RequestInit = { method: 'post', body: JSON.stringify(body) }
): Promise<HttpResponse<T>> => {
  return await CRequest<T>(new Request(path, args))
};

// put 请求
export const put = async <T> (
  path: string,
  body: T,
  args: RequestInit = { method: 'put', body: JSON.stringify(body) }
): Promise<HttpResponse<T>> => {
  return await CRequest<T>(new Request(path, args));
}