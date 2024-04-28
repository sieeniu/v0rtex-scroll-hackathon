import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { EmptyResults } from '../EmptyResults';
import { Spinner } from '../Spinner';
import {
  PrimitiveTable,
  PrimitiveTableData,
  PrimitiveTableHeader,
  PrimitiveTableRow,
} from './atoms';

export type ColumnData = {
  label: string;
};

export type TableProps<T> = {
  data: T[];
  columns: Record<keyof T, ColumnData>;
  isLoading: boolean;
};

export const Table = <T extends object>({
  data,
  columns,
  isLoading,
}: TableProps<T>) => {
  const columnHelper = createColumnHelper<T>();

  const columnsData = Object.entries<ColumnData>(columns).map(([key, column]) =>
    columnHelper.accessor(key as keyof T, {
      cell: row => row.getValue(),
      header: () => <span>{column.label}</span>,
    }),
  );

  const table = useReactTable({
    columns: columnsData,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (!data.length && !isLoading) {
    return <EmptyResults />;
  }

  return (
    <PrimitiveTable>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <PrimitiveTableHeader key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </PrimitiveTableHeader>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <PrimitiveTableRow key={row.id}>
            {row.getVisibleCells().map(cell => (
              <PrimitiveTableData key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </PrimitiveTableData>
            ))}
          </PrimitiveTableRow>
        ))}
      </tbody>
    </PrimitiveTable>
  );
};
