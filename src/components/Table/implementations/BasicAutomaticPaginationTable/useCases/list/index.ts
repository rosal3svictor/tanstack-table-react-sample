import { ADAPTER } from '../../adapters';

import type { ListUseCaseProps } from '../../interfaces';

export async function list<T>(props: ListUseCaseProps<T>): Promise<T[]> {
  const result = await props.apiClient.list();

  const adaptedResult = ADAPTER.LIST<T>(result);

  return adaptedResult;
}
