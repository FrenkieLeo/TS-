type GetValueType<P> = P extends Promise<infer Value> ? Value : never;

type GetValueResult = GetValueType<Promise<'guang'>>;

type arr = [1, 2, 3];

// 提取第一个元素
type GetFirst<Arr extends unknown[]> = Arr extends [infer First, ...unknown[]]
  ? First
  : never;

type GetFirstResult = GetFirst<arr>;

// 提取最后一个元素
type GetLast<Arr extends unknown[]> = Arr extends [...unknown[], infer Last]
  ? Last
  : never;
// GetLast这个类型有一个Arr的参数，计算公式为Arr 继承 获取最后一个元素的方法，如果有最后一个元素则显示最后，如果没有则显示never，为空。

type GetLastResult = GetLast<arr>;

// 取剩余数组

type GetRest<Arr extends unknown[]> = Arr extends [...infer Rest, unknown]
  ? Rest
  : never;

type GetRestResult = GetRest<arr>;

// 字符串类型

type StartsWith<
  Str extends string,
  Prefix extends string
> = Str extends `${Prefix}${string}` ? true : false;

// 泛型需要传入两个参数，一个Str，一个前缀Prefix，然后Str的格式是继承先Prefix开头然后后面string格式的内容自由发挥，判断是否为正确

type StartsWithTest = StartsWith<'guang and dong', 'guang'>;
