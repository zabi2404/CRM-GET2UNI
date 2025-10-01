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
import { DatePicker } from '@/components/common/DatePicker2'
import { Link } from "react-router-dom"

const data: Payment[] = [

    {
        id: "bhqecj4p",
        DateTime: 'zohaib',
        StudentName: "pending",
        DateTimeAgentAmbassadorName: "direct",
        Type: "university 1",
        Amount: "Request Document Email",
        Status: ''
    },
    {
        id: "bhqecj4p",
        DateTime: 'zohaib',
        StudentName: "pending",
        DateTimeAgentAmbassadorName: "direct",
        Type: "university 1",
        Amount: "Request Document Email",
        Status: ''
    }, {
        id: "bhqecj4p",
        DateTime: 'zohaib',
        StudentName: "pending",
        DateTimeAgentAmbassadorName: "direct",
        Type: "university 1",
        Amount: "Request Document Email",
        Status: ''
    }, {
        id: "bhqecj4p",
        DateTime: 'zohaib',
        StudentName: "pending",
        DateTimeAgentAmbassadorName: "direct",
        Type: "university 1",
        Amount: "Request Document Email",
        Status: ''
    }, {
        id: "bhqecj4p",
        DateTime: 'zohaib',
        StudentName: "pending",
        DateTimeAgentAmbassadorName: "direct",
        Type: "university 1",
        Amount: "Request Document Email",
        Status: ''
    }, {
        id: "bhqecj4p",
        DateTime: 'zohaib',
        StudentName: "pending",
        DateTimeAgentAmbassadorName: "direct",
        Type: "university 1",
        Amount: "Request Document Email",
        Status: ''
    }, {
        id: "bhqecj4p",
        DateTime: 'zohaib',
        StudentName: "pending",
        DateTimeAgentAmbassadorName: "direct",
        Type: "university 1",
        Amount: "Request Document Email",
        Status: ''
    },
    {
        id: "bhqecj4p",
        DateTime: 'zohaib',
        StudentName: "pending",
        DateTimeAgentAmbassadorName: "direct",
        Type: "university 1",
        Amount: "Request Document Email",
        Status: ''
    },
    {
        id: "bhqecj4p",
        DateTime: 'zohaib',
        StudentName: "pending",
        DateTimeAgentAmbassadorName: "direct",
        Type: "university 1",
        Amount: "Request Document Email",
        Status: ''
    },
    {
        id: "bhqecj4p",
        DateTime: 'zohaib',
        StudentName: "pending",
        DateTimeAgentAmbassadorName: "direct",
        Type: "university 1",
        Amount: "Request Document Email",
        Status: ''
    },
    {
        id: "bhqecj4p",
        DateTime: 'zohaib',
        StudentName: "pending",
        DateTimeAgentAmbassadorName: "direct",
        Type: "university 1",
        Amount: "Request Document Email",
        Status: ''
    },
    {
        id: "bhqecj4p",
        DateTime: 'zohaib',
        StudentName: "pending",
        DateTimeAgentAmbassadorName: "direct",
        Type: "university 1",
        Amount: "Request Document Email",
        Status: ''
    },
    {
        id: "bhqecj4p",
        DateTime: 'janajna',
        StudentName: "success",
        DateTimeAgentAmbassadorName: "direct",
        Type: "university 1",
        Amount: "Request Document Email",
        Status: ''
    },
    {
        id: "bhqecj4p",
        DateTime: 'janajna',
        StudentName: "success",
        DateTimeAgentAmbassadorName: "direct",
        Type: "university 1",
        Amount: "Request Document Email",
        Status: ''
    },


]

export type Payment = {
    id: string
    DateTime: string
    StudentName: "pending" | "processing" | "success" | "failed"
    DateTimeAgentAmbassadorName: "direct" | 'agent' | 'ambassador'
    Type: string,
    Amount: string,
    Status: string
}

export const columns: ColumnDef<Payment>[] = [

    {
        accessorKey: "DateTime",
        header: "Date & Time",
        cell: ({ row }) => {
            const name = row.getValue("DateTime") as string
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
        accessorKey: "DateTimeAgentAmbassadorName",
        header: "Agent / Ambassador name",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("DateTimeAgentAmbassadorName")}</div>
        ),
    },
    {
        accessorKey: "StudentName",
        header: "Student Name",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("StudentName")}</div>
        ),
    },
    {
        accessorKey: "Amount",
        header: "Amount",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("Amount")}</div>
        ),
    },
    {
        accessorKey: "Type",
        header: "Type",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("Type")}</div>
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
        accessorKey: "Reason",
        header: "Reason (if Rejected)",
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

export function PayoutReqTable() {
    const [sorting, setSorting] = React.useState<SortingState>([])

    const [status, setStatus] = React.useState<string>("Status")

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
            <div className="flex items-center  py-4 gap-2 flex-wrap">

             <Input
                                placeholder="Search..."
                                value={(table.getColumn("Logo")?.getFilterValue() as string) ?? ""}
                                onChange={(event) =>
                                    table.getColumn("Logo")?.setFilterValue(event.target.value)
                                }
                                className="max-w-[286px]"
                            />

                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            className="hover:bg-transparent hover:text-foreground cursor-pointer hover:border-primary"
                        >
                            <div className="w-14 overflow-hidden">{status}</div>
                            <ChevronDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center">
                        {["pending", "processing", "success", "failed"].map((statusValue) => {
                            let colorClass = ""

                            switch (statusValue) {
                                case "pending":
                                    colorClass = "text-yellow-700"
                                    break
                                case "processing":
                                    colorClass = "text-blue-700"
                                    break
                                case "success":
                                    colorClass = "text-success"
                                    break
                                case "failed":
                                    colorClass = "text-failure"
                                    break
                            }

                            return (
                                <DropdownMenuItem
                                    key={statusValue}
                                    className={`capitalize cursor-pointer ${colorClass}`}
                                    onClick={() => {
                                        setStatus(statusValue)
                                        table.getColumn("ApplicationStatus")?.setFilterValue(statusValue)
                                    }}
                                >
                                    {statusValue}
                                </DropdownMenuItem>
                            )
                        })}
                    </DropdownMenuContent>
                </DropdownMenu>

                <DatePicker />


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
