import { AccessorColumnDef, AccessorKeyColumnDef } from '@tanstack/react-table';
import { DisplayColumnDef, GroupColumnDef } from '@tanstack/table-core';

export function createColumnHelper<T>() {
  return {
    accessor<Key extends keyof T>(
      accessorKey: Key,
      props: Omit<AccessorColumnDef<T>, 'accessorKey'>,
    ): AccessorKeyColumnDef<T> {
      return {
        accessorKey,
        ...props,
      };
    },
    display(
      id: string,
      props: Omit<DisplayColumnDef<T>, 'id'>,
    ): DisplayColumnDef<T> {
      return { id, ...props };
    },
    group(id: string, props: Omit<GroupColumnDef<T>, 'id'>): GroupColumnDef<T> {
      return { id, ...props };
    },
  };
}
