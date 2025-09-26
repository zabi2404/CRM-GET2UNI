"use client"

import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, Menu, MoreHorizontal, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Link } from "react-router-dom"

const data: Payment[] = [

    {
        id: "bhqecj4p",
        EventDescription: 'zohaib',
        DateTime: "pending",
        UsersInvolved: "direct",
        Source: "university 1",
        LastActivity: "Request Document Email",
        AssignedGet2UniStaff: ''
    },
    {
        id: "bhqecj4p",
        EventDescription: 'zohaib',
        DateTime: "pending",
        UsersInvolved: "direct",
        Source: "university 1",
        LastActivity: "Request Document Email",
        AssignedGet2UniStaff: ''
    }, {
        id: "bhqecj4p",
        EventDescription: 'zohaib',
        DateTime: "pending",
        UsersInvolved: "direct",
        Source: "university 1",
        LastActivity: "Request Document Email",
        AssignedGet2UniStaff: ''
    }, {
        id: "bhqecj4p",
        EventDescription: 'zohaib',
        DateTime: "pending",
        UsersInvolved: "direct",
        Source: "university 1",
        LastActivity: "Request Document Email",
        AssignedGet2UniStaff: ''
    }, {
        id: "bhqecj4p",
        EventDescription: 'zohaib',
        DateTime: "pending",
        UsersInvolved: "direct",
        Source: "university 1",
        
    }, {
        id: "bhqecj4p",
        EventDescription: 'zohaib',
        DateTime: "pending",
        UsersInvolved: "direct",
        Source: "university 1",
        
    }, {
        id: "bhqecj4p",
        EventDescription: 'zohaib',
        DateTime: "pending",
        UsersInvolved: "direct",
        Source: "university 1",
        
    },
    {
        id: "bhqecj4p",
        EventDescription: 'zohaib',
        DateTime: "pending",
        UsersInvolved: "direct",
        Source: "university 1",
        
    },
    {
        id: "bhqecj4p",
        EventDescription: 'zohaib',
        DateTime: "pending",
        UsersInvolved: "direct",
        Source: "university 1",
        
    },
    {
        id: "bhqecj4p",
        EventDescription: 'zohaib',
        DateTime: "pending",
        UsersInvolved: "direct",
        Source: "university 1",
        
    },
    {
        id: "bhqecj4p",
        EventDescription: 'zohaib',
        DateTime: "pending",
        UsersInvolved: "direct",
        Source: "university 1",
        
    },
    {
        id: "bhqecj4p",
        EventDescription: 'zohaib',
        DateTime: "pending",
        UsersInvolved: "direct",
        Source: "university 1",
        
    },
    {
        id: "bhqecj4p",
        EventDescription: 'janajna',
        DateTime: "success",
        UsersInvolved: "direct",
        Source: "university 1",
        
    },
    {
        id: "bhqecj4p",
        EventDescription: 'janajna',
        DateTime: "success",
        UsersInvolved: "direct",
        Source: "university 1",
        
    },


]

export type Payment = {
    id: string
    EventDescription: string
    DateTime: string
    UsersInvolved: "direct" | 'agent' | 'ambassador'
    Source: string,
    
}

export const columns: ColumnDef<Payment>[] = [

    {
        accessorKey: "EventDescription",
        header: "Event Description",
        cell: ({ row }) => {
            const name = row.getValue("EventDescription") as string
            return (
                <Link
                    to={`/students/${row.original.id}`}
                    className=" underline  capitalize"
                >
                    {name}
                </Link>
            )
        },
    },
    {
        accessorKey: "DateTime",
        header: "Date/Time",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("DateTime")}</div>
        ),
    },
    {
        accessorKey: "UsersInvolved",
        header: "User(s) Involved",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("UsersInvolved")}</div>
        ),
    },
  
    {
        accessorKey: "Source",
        header: "Source",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("Source")}</div>
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
                                            className="h-[65px]"
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
                                        <TableCell className="h-[65px]" key={cell.id}>
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

            {/* <div className="flex items-center justify-end space-x-2 py-4">
                <div className="text-muted-foreground flex-1 text-sm">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div> */}

        </div>
    )
}
