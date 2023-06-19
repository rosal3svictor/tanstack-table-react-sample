import { useState } from 'react';

import { useTableApiClient } from '../../apiClient';
import { USE_CASE } from '../../useCases';

import type { AutomaticPaginationModel } from '../../../../interfaces';

export const useTableViewModel = <T>(): AutomaticPaginationModel<T> => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const tableApiClient = useTableApiClient<T>();

  const list = async (): Promise<T[]> => {
    setLoading(true);

    try {
      return await USE_CASE.LIST({
        apiClient: tableApiClient,
      });
    } catch (error) {
      setError('There was an error fetching data');

      return [];
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
