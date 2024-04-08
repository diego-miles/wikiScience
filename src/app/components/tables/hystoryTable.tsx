"use client"
// HistoryTable.js
import React from 'react';
import { useReactTable, ColumnDef, getCoreRowModel, flexRender } from '@tanstack/react-table';
import styles from './HistoryTable.module.css';

interface HistoryData {
  event: string;
  year: String;
  description: string;
}

const columns: ColumnDef<HistoryData>[] = [
  {
    accessorKey: 'event',
    header: 'Event',
  },
  {
    accessorKey: 'year',
    header: 'Year',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
];

const HistoryTable: React.FC<{ data: HistoryData[] }> = ({ data }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className={styles.table}>
      <thead className={styles.header}>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id} className={styles.headerCell}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id} className={styles.row}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id} className={styles.cell}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HistoryTable;
