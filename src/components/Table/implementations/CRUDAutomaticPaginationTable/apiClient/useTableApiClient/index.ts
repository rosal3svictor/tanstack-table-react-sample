import { makeData } from '../../makeData';

import type { TableApiClientReturn } from '../../interfaces';

export const useTableApiClient = <T>(): TableApiClientReturn<T> => {
  const list = async (): Promise<{ data: T[] }> => ({
    data: makeData<T>(30),
  });

  return { list };
};
