import { useState } from 'react';

import { useTableApiClient } from '../../apiClient';
import { USE_CASE } from '../../useCases';

import type { ControlledPaginationModel } from '../../../../interfaces';
import type { ListtMethodReturn, PaginationOptions } from '../../interfaces';

export const useTableViewModel = <T>(): ControlledPaginationModel<T> => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const tableApiClient = useTableApiClient<T>();

  const list = async (options: PaginationOptions): ListtMethodReturn<T> => {
    setLoading(true);

    try {
      const response = await USE_CASE.LIST<T>({
        apiClient: tableApiClient,
        options,
      });

      return response;
    } catch (error) {
      setError('There was an error fetching data');

      return {
        rows: [],
        pageCount: -1,
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    list,
    loading,
    error,
  };
};
