"use client"
// HistoryTable.jsx
import React from 'react';
import { useReactTable, ColumnDef, getCoreRowModel, flexRender } from '@tanstack/react-table';

interface HistoryData {
  event: string;
  year: String;
  description: string;
}

const columns: ColumnDef<HistoryData>[] = [
  { accessorKey: 'event', header: 'Event' },
  { accessorKey: 'year', header: 'Year' },
  { accessorKey: 'description', header: 'Description' },
];

const HistoryTable: React.FC<{ data: HistoryData[] }> = ({ data }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="my-12 w-full border rounded-lg overflow-hidden max-w-[55rem] ">
      {/* Header */}
      {/* [#4d433d] */}
      <thead className="bg-gray-200 dark:bg-[#123b5f] text-sm font-medium ">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="px-4 py-4 border-b  text-[#ebe8e4] ">
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      {/* Body */}
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="bg-gray-100 dark:bg-background1dark text-sm">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="px-4 py-10 border-b  dark:text-blue-100">
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