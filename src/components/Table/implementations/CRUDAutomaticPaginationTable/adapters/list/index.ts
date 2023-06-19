import type { ListAdapterProps } from '../../interfaces';

export const list = <T>(props: ListAdapterProps<T>): T[] => props.data;
