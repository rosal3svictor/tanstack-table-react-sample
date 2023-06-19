import { withCRUDTable } from '../../..';
import { UpdateButton, DeleteButton } from '../../components/Actions';

import { useTableViewModel } from './viewModel';

import type { Person } from '../../../../interfaces';

export const CRUDAutomaticPaginationTable = (): JSX.Element => {
  const Table = withCRUDTable<Person>();

  return (
    <Table
      // styles={{
      //   position: 'absolute',
      //   left: '50%',
      //   top: '40%',
      //   transform: 'translate(-50%, -40%)',
      // }}
      viewModel={useTableViewModel<Person>}
      actions={{ update: UpdateButton, delete: DeleteButton }}
      withControlledPagination={false}
    />
  );
};
