type GetValueType<P> = P extends Promise<infer Value> ? Value : never;


type GetValueResult = GetValueType<Promise<'guang'>>;

type arr = [1,2,3]

type GetFirst<Arr extends unknown[]> = Arr extends [infer First,...unknown[]]?First:never;

type GetFirstResult = GetFirst<[]>
