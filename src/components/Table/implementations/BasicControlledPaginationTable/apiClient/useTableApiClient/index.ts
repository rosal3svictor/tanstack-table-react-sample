import { fetchData } from '../../fetchData';

import type {
  ApiClientReturn,
  ListtMethodReturn,
  PaginationOptions,
} from '../../interfaces';

export const useTableApiClient = <T>(): ApiClientReturn<T> => {
  const list = async (options: PaginationOptions): ListtMethodReturn<T> =>
    // @ts-expect-error: Type 'Person[]' is not assignable to type 'T[]'.
    await fetchData(options);

  return { list };
};
