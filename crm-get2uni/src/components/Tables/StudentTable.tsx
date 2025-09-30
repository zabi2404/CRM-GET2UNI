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
import { ChevronDown, Menu, MoreHorizontal, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
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
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination"
import { Dialouge } from "../common/Dialouge"

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
                    to={`/student/144`}
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

export function DataTableDemo() {
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
            <div className="flex items-start  py-4 gap-2 flex-wrap justify-between
        

            ">

                <div className="flex items-center gap-2 
                xsm:flex-wrap
                xl:flex-nowrap
                ">
                    <Input
                        placeholder="Search..."
                        value={(table.getColumn("StudentName")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("StudentName")?.setFilterValue(event.target.value)
                        }
                        className="min-w-[200px] 
                        max-w-[250px]
                        "
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



                    <DropdownMenu modal={false}>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="hover:bg-transparent hover:text-foreground cursor-pointer hover:border-primary ">
                                <div className="w-18 overflow-hidden">
                                    {selectedUniversity}
                                </div>
                                <ChevronDown />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center">
                            {["Harvard University", "Oxford University", "Stanford University", "Cambridge University"].map((uni) => (
                                <DropdownMenuItem
                                    key={uni}
                                    className="capitalize cursor-pointer"
                                    onClick={() => {
                                        setSelectedUniversity(uni) // update button label
                                        table.getColumn("AssignedUniversity")?.setFilterValue(uni) // apply filter
                                    }}
                                >
                                    {uni}
                                </DropdownMenuItem>
                            ))}

                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onClick={() => {
                                    setSelectedUniversity("University") // reset label
                                    table.getColumn("AssignedUniversity")?.setFilterValue("") // reset filter
                                }}
                            >
                                All
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>


                    <DropdownMenu modal={false}>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="hover:bg-transparent hover:text-foreground cursor-pointer hover:border-primary">
                                <div className="w-14 overflow-hidden">
                                    {selectedChannel}
                                </div>
                                <ChevronDown />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center">
                            {["agent", "ambassador", "direct"].map((channel) => (
                                <DropdownMenuItem
                                    key={channel}
                                    className="capitalize cursor-pointer"
                                    onClick={() => {
                                        setSelectedChannel(channel)
                                        table.getColumn("RecuritmentChannel")?.setFilterValue(channel)
                                    }}
                                >
                                    {channel}
                                </DropdownMenuItem>
                            ))}


                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu modal={false}>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="hover:bg-transparent hover:text-foreground cursor-pointer hover:border-primary">
                                <div className="w-14 overflow-hidden cursor-pointer">

                                    {selectedType}
                                </div>
                                <ChevronDown />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center">
                            {["international", "change of status", "transfer"].map((type) => (
                                <DropdownMenuItem
                                    key={type}
                                    className="capitalize cursor-pointer"
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

                <div className="flex gap-4">
                    <Dialouge />
                    <Button
                        to="/add-student"
                    >
                        <Plus />
                        Add New Student
                    </Button>

                </div>

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
                                            to="#"
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
