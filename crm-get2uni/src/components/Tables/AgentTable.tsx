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
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination"

import { Link } from "react-router-dom"

const data: Payment[] = [

    {
        id: "bhqecj4p",
        AgentName: 'zohaib',
        CommissionEarned: "pending",
        TotalRecruited: "direct",
        PendingPayouts: "university 1",
        AgentType: "Request Document Email",
        Status: ''
    },
    {
        id: "bhqecj4p",
        AgentName: 'zohaib',
        CommissionEarned: "pending",
        TotalRecruited: "direct",
        PendingPayouts: "university 1",
        AgentType: "Request Document Email",
        Status: ''
    }, {
        id: "bhqecj4p",
        AgentName: 'zohaib',
        CommissionEarned: "pending",
        TotalRecruited: "direct",
        PendingPayouts: "university 1",
        AgentType: "Request Document Email",
        Status: ''
    }, {
        id: "bhqecj4p",
        AgentName: 'zohaib',
        CommissionEarned: "pending",
        TotalRecruited: "direct",
        PendingPayouts: "university 1",
        AgentType: "Request Document Email",
        Status: ''
    }, {
        id: "bhqecj4p",
        AgentName: 'zohaib',
        CommissionEarned: "pending",
        TotalRecruited: "direct",
        PendingPayouts: "university 1",
        AgentType: "Request Document Email",
        Status: ''
    }, {
        id: "bhqecj4p",
        AgentName: 'zohaib',
        CommissionEarned: "pending",
        TotalRecruited: "direct",
        PendingPayouts: "university 1",
        AgentType: "Request Document Email",
        Status: ''
    }, {
        id: "bhqecj4p",
        AgentName: 'zohaib',
        CommissionEarned: "pending",
        TotalRecruited: "direct",
        PendingPayouts: "university 1",
        AgentType: "Request Document Email",
        Status: ''
    },
    {
        id: "bhqecj4p",
        AgentName: 'zohaib',
        CommissionEarned: "pending",
        TotalRecruited: "direct",
        PendingPayouts: "university 1",
        AgentType: "Request Document Email",
        Status: ''
    },
    {
        id: "bhqecj4p",
        AgentName: 'zohaib',
        CommissionEarned: "pending",
        TotalRecruited: "direct",
        PendingPayouts: "university 1",
        AgentType: "Request Document Email",
        Status: ''
    },
    {
        id: "bhqecj4p",
        AgentName: 'zohaib',
        CommissionEarned: "pending",
        TotalRecruited: "direct",
        PendingPayouts: "university 1",
        AgentType: "Request Document Email",
        Status: ''
    },
    {
        id: "bhqecj4p",
        AgentName: 'zohaib',
        CommissionEarned: "pending",
        TotalRecruited: "direct",
        PendingPayouts: "university 1",
        AgentType: "Request Document Email",
        Status: ''
    },
    {
        id: "bhqecj4p",
        AgentName: 'zohaib',
        CommissionEarned: "pending",
        TotalRecruited: "direct",
        PendingPayouts: "university 1",
        AgentType: "Request Document Email",
        Status: ''
    },
    {
        id: "bhqecj4p",
        AgentName: 'janajna',
        CommissionEarned: "success",
        TotalRecruited: "direct",
        PendingPayouts: "university 1",
        AgentType: "Request Document Email",
        Status: ''
    },
    {
        id: "bhqecj4p",
        AgentName: 'janajna',
        CommissionEarned: "success",
        TotalRecruited: "direct",
        PendingPayouts: "university 1",
        AgentType: "Request Document Email",
        Status: ''
    },


]

export type Payment = {
    id: string
    AgentName: string
    CommissionEarned: "pending" | "processing" | "success" | "failed"
    TotalRecruited: "direct" | 'agent' | 'ambassador'
    PendingPayouts: string,
    AgentType: string,
    Status: string
}

export const columns: ColumnDef<Payment>[] = [

    {
        accessorKey: "AgentName",
        header: "Agent Name",
        cell: ({ row }) => {
            const name = row.getValue("AgentName") as string
            return (
                <Link
                    to={`/Agents/${row.original.id}`}
                    className=" underline  capitalize"
                >
                    {name}
                </Link>
            )
        },
    },
    {
        accessorKey: "TotalRecruited",
        header: "Total Recruited",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("TotalRecruited")}</div>
        ),
    },
    {
        accessorKey: "CommissionEarned",
        header: "Commission Earned",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("CommissionEarned")}</div>
        ),
    },
    {
        accessorKey: "AgentType",
        header: "Agent Type",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("AgentType")}</div>
        ),
    },
    {
        accessorKey: "PendingPayouts",
        header: "Pending Payouts",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("PendingPayouts")}</div>
        ),
    },
    {
        accessorKey: "Status",
        header: "Status",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("status")}</div>
        ),
    },

    {
        id: "actions",
        header: <Menu className="size-4" />,
        enableHiding: false,
        cell: ({ row }) => {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-transparent hover:text-black cursor-pointer">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="rotate-90" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem >View</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    }



]

export function AgentTable() {
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
            <div className="flex items-center justify-between py-4 gap-2">

                <Input
                    placeholder="Search..."
                    value={(table.getColumn("AgentName")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("AgentName")?.setFilterValue(event.target.value)
                    }
                    className="max-w-[200px]"
                />


                <Button
                    to="/add-agent"
                >
                    <Plus />
                    Add New Agent
                </Button>



            </div>

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
                                    No Agent data found
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
                                            href="#"
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
