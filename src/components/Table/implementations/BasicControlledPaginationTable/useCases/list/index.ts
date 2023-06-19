import type { ListtMethodReturn, ListUseCaseProps } from '../../interfaces';

export async function list<T>({
  apiClient,
  options,
}: ListUseCaseProps<T>): ListtMethodReturn<T> {
  return await apiClient.list(options);
}
