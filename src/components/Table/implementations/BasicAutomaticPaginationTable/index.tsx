import { withAutomaticPaginationTable } from '../../..';

import { useTableViewModel } from './viewModel';

import type { Person } from '../../../../interfaces';

export const BasicAutomaticPaginationTable = (): JSX.Element => {
  const Table = withAutomaticPaginationTable<Person>();

  return (
    <Table
      // styles={{
      //   position: 'absolute',
      //   left: '50%',
      //   top: '40%',
      //   transform: 'translate(-50%, -40%)',
      // }}
      viewModel={useTableViewModel<Person>}
    />
  );
};
