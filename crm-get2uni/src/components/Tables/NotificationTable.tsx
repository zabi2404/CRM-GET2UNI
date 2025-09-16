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
import { ArrowUpDown, ChevronDown, Menu, MoreHorizontal, Search } from "lucide-react"

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
        StudentName: 'zohaib',
        ApplicationStatus: "pending",
        RecuritmentChannel: "direct",
        AssignedUniversity: "university 1",
        LastActivity: "Request Document Email",
        AssignedGet2UniStaff: ''
    },
    {
        id: "bhqecj4p",
        StudentName: 'zohaib',
        ApplicationStatus: "pending",
        RecuritmentChannel: "direct",
        AssignedUniversity: "university 1",
        LastActivity: "Request Document Email",
        AssignedGet2UniStaff: ''
    }, {
        id: "bhqecj4p",
        StudentName: 'zohaib',
        ApplicationStatus: "pending",
        RecuritmentChannel: "direct",
        AssignedUniversity: "university 1",
        LastActivity: "Request Document Email",
        AssignedGet2UniStaff: ''
    }, {
        id: "bhqecj4p",
        StudentName: 'zohaib',
        ApplicationStatus: "pending",
        RecuritmentChannel: "direct",
        AssignedUniversity: "university 1",
        LastActivity: "Request Document Email",
        AssignedGet2UniStaff: ''
    }, {
        id: "bhqecj4p",
        StudentName: 'zohaib',
        ApplicationStatus: "pending",
        RecuritmentChannel: "direct",
        AssignedUniversity: "university 1",
        LastActivity: "Request Document Email",
        AssignedGet2UniStaff: ''
    }, {
        id: "bhqecj4p",
        StudentName: 'zohaib',
        ApplicationStatus: "pending",
        RecuritmentChannel: "direct",
        AssignedUniversity: "university 1",
        LastActivity: "Request Document Email",
        AssignedGet2UniStaff: ''
    }, {
        id: "bhqecj4p",
        StudentName: 'zohaib',
        ApplicationStatus: "pending",
        RecuritmentChannel: "direct",
        AssignedUniversity: "university 1",
        LastActivity: "Request Document Email",
        AssignedGet2UniStaff: ''
    },
    {
        id: "bhqecj4p",
        StudentName: 'zohaib',
        ApplicationStatus: "pending",
        RecuritmentChannel: "direct",
        AssignedUniversity: "university 1",
        LastActivity: "Request Document Email",
        AssignedGet2UniStaff: ''
    },
    {
        id: "bhqecj4p",
        StudentName: 'zohaib',
        ApplicationStatus: "pending",
        RecuritmentChannel: "direct",
        AssignedUniversity: "university 1",
        LastActivity: "Request Document Email",
        AssignedGet2UniStaff: ''
    },
    {
        id: "bhqecj4p",
        StudentName: 'zohaib',
        ApplicationStatus: "pending",
        RecuritmentChannel: "direct",
        AssignedUniversity: "university 1",
        LastActivity: "Request Document Email",
        AssignedGet2UniStaff: ''
    },
    {
        id: "bhqecj4p",
        StudentName: 'zohaib',
        ApplicationStatus: "pending",
        RecuritmentChannel: "direct",
        AssignedUniversity: "university 1",
        LastActivity: "Request Document Email",
        AssignedGet2UniStaff: ''
    },
    {
        id: "bhqecj4p",
        StudentName: 'zohaib',
        ApplicationStatus: "pending",
        RecuritmentChannel: "direct",
        AssignedUniversity: "university 1",
        LastActivity: "Request Document Email",
        AssignedGet2UniStaff: ''
    },
    {
        id: "bhqecj4p",
        StudentName: 'janajna',
        ApplicationStatus: "success",
        RecuritmentChannel: "direct",
        AssignedUniversity: "university 1",
        LastActivity: "Request Document Email",
        AssignedGet2UniStaff: ''
    },
    {
        id: "bhqecj4p",
        StudentName: 'janajna',
        ApplicationStatus: "success",
        RecuritmentChannel: "direct",
        AssignedUniversity: "university 1",
        LastActivity: "Request Document Email",
        AssignedGet2UniStaff: ''
    },


]

export type Payment = {
    id: string
    StudentName: string
    ApplicationStatus: "pending" | "processing" | "success" | "failed"
    RecuritmentChannel: "direct" | 'agent' | 'ambassador'
    AssignedUniversity: string,
    LastActivity: string,
    AssignedGet2UniStaff: string
}

export const columns: ColumnDef<Payment>[] = [

    {
        accessorKey: "StudentName",
        header: "Student Name",
        cell: ({ row }) => {
            const name = row.getValue("StudentName") as string
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
        accessorKey: "RecuritmentChannel",
        header: "Recuritment Channel",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("RecuritmentChannel")}</div>
        ),
    },
    {
        accessorKey: "ApplicationStatus",
        header: "Application Status",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("ApplicationStatus")}</div>
        ),
    },
    {
        accessorKey: "LastActivity",
        header: "Last Activity",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("LastActivity")}</div>
        ),
    },
    {
        accessorKey: "AssignedUniversity",
        header: "Assigned University",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("AssignedUniversity")}</div>
        ),
    },
    {
        accessorKey: "AssignedGet2UniStaff",
        header: "Assigned Get2Uni Staff",
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

export function NotificationTable() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [selectedUniversity, setSelectedUniversity] = React.useState<string>("University")
    const [selectedChannel, setSelectedChannel] = React.useState<string>("Channel")
    const [status, setStatus] = React.useState<string>("Status")

    const [selectedType, setSelectedType] = React.useState<string>("Type")

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
            <div className="flex items-center py-4 gap-2">

                <Input
                    placeholder="Search..."
                    value={(table.getColumn("StudentName")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("StudentName")?.setFilterValue(event.target.value)
                    }
                    className="max-w-[200px]"
                />

              

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="">
                            <div className="w-[200px] flex justify-between overflow-hidden">

                                {selectedType}
                            </div>
                            <ChevronDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center">
                        {["international", "change of status", "transfer"].map((type) => (
                            <DropdownMenuItem
                                key={type}
                                className="capitalize"
                                onClick={() => {
                                    setSelectedType(type) // 🔹 change button label
                                    table.getColumn("Type")?.setFilterValue(type) // 🔹 apply filter
                                }}
                            >
                                {type}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>



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

            <div className="flex items-center justify-end space-x-2 py-4">
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
            </div>

        </div>
    )
}
