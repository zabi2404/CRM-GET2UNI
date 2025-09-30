"use client"

import * as React from "react"
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination"

import { Row } from '@tanstack/react-table';

const data: Payment[] = [
    {
        id: "1",
        EventDescription: "Request Document Email",
        DateTime: "09/26/2025, 11:32 PM",
        UsersInvolved: "mijik excederm",
        Source: "admin1 requested CV from mijik",


    },
    {
        id: "2",
        EventDescription: "Student Document Updated",
        DateTime: "09/26/2025, 11:31 PM",
        UsersInvolved: "mijik excederm",
        Source: "For mijik excederm",


    },
    {
        id: "3",
        EventDescription: "Student Document Updated",
        DateTime: "09/26/2025, 11:31 PM",
        UsersInvolved: "mijik excederm",
        Source: "For mijik excederm",


    },
    {
        id: "4",
        EventDescription: "Student Document Updated",
        DateTime: "09/26/2025, 11:31 PM",
        UsersInvolved: "mijik excederm",
        Source: "For mijik excederm",


    },
    {
        id: "5",
        EventDescription: "Ambassador Profile Created",
        DateTime: "09/26/2025, 11:30 PM",
        UsersInvolved: "mijik excederm",
        Source: "mijik excederm",


    },
    {
        id: "6",
        EventDescription: "Ambassador Profile Created",
        DateTime: "09/17/2025, 01:02 AM",
        UsersInvolved: "xihew barodis",
        Source: "xihew barodis",


    },
    {
        id: "7",
        EventDescription: "Payout Request Status Updated",
        DateTime: "09/12/2025, 05:30 PM",
        UsersInvolved: "Ambassador User",
        Source: "for Ambassador User Payout Request status updated",


    },
    {
        id: "8",
        EventDescription: "Payout Request Status Updated",
        DateTime: "09/12/2025, 05:30 PM",
        UsersInvolved: "Ambassador User",
        Source: "for Ambassador User Payout Request status updated",


    },
    {
        id: "9",
        EventDescription: "Document Rejected by AI",
        DateTime: "08/08/2025, 01:40 AM",
        UsersInvolved: "John Doe",
        Source: "AI could not identify document for John Doe",


    },
    {
        id: "10",
        EventDescription: "AI Verification Failed",
        DateTime: "08/08/2025, 01:40 AM",
        UsersInvolved: "John Doe",
        Source: "An error occurred during AI verification An error occurred during AI verificationAn error occurred during AI verificationAn error occurred during AI verification ",


    },
    {
        id: "11",
        EventDescription: "AI Verification Failed",
        DateTime: "08/08/2025, 01:40 AM",
        UsersInvolved: "John Doe",
        Source: "An error occurred during AI verification An error occurred during AI verificationAn error occurred during AI verificationAn error occurred during AI verification ",


    }
]




export type Payment = {
    id: string
    EventDescription: string
    DateTime: string
    UsersInvolved: string
    Source: string,

}

export const columns: ColumnDef<Payment>[] = [

    {
        accessorKey: "EventDescription",
        header: "Event Description",
        cell: ({ row }:{ row: Row<Payment> }) => (
            <div className="capitalize">{row.getValue("EventDescription")}</div>
        ),
    },
    {
        accessorKey: "DateTime",
        header: "Date/Time",
        cell: ({ row }:{ row: Row<Payment> }) => (
            <div className="capitalize ">{row.getValue("DateTime")}</div>
        ),
    },
    {
        accessorKey: "UsersInvolved",
        header: "User(s) Involved",
        cell: ({ row }:{ row: Row<Payment> }) => (
            <div className="capitalize">{row.getValue("UsersInvolved")}</div>
        ),
    },

    {
        accessorKey: "Source",
        header: "Source",
        cell: ({ row }: { row: Row<Payment> }) => (
            <div className="capitalize truncate  ">{row.getValue("Source")}</div>
        ),
    },



]

export function RecentActivityTable() {
    const [sorting, setSorting] = React.useState<SortingState>([])


    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <div className="w-full">


            <div className="w-full h-[620px] overflow-x-auto rounded-md border">
                <Table className="min-w-[1040px] w-full">
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead
                                            className="h-[65px] w-1/4"
                                            key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell className="h-[65px] w-1/4 max-w-[300px]  overflow-hidden" key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No Student data found
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <div>
                <div className="flex items-center w-full justify-end space-x-2 py-4">

                    <div className="flex ">

                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            if (table.getCanPreviousPage()) {
                                                table.previousPage()
                                            }
                                        }}
                                        className={!table.getCanPreviousPage() ? "pointer-events-none opacity-50" : ""}
                                    />

                                </PaginationItem>


                                {Array.from(
                                    { length: table.getPageCount() },
                                    (_, i) => i + 1
                                ).map((page) => (
                                    <PaginationItem key={page}>
                                        <PaginationLink
                                            to="#"
                                           className="cusror-pointer"
                                            isActive={table.getState().pagination.pageIndex + 1 === page}
                                            onClick={() => table.setPageIndex(page - 1)}
                                        >
                                            {page}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))}


                                {table.getPageCount() > 5 && (
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                )}

                                <PaginationItem>
                                    <PaginationNext
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            if (table.getCanNextPage()) {
                                                table.nextPage()
                                            }
                                        }}
                                        className={!table.getCanNextPage() ? "pointer-events-none opacity-50" : ""}
                                    />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            </div>

        </div>
    )
}
