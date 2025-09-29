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
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination"

import { Link } from "react-router-dom"

const data: Payment[] = [

    {
        id: "bhqecj4p",
        AmbassadorName: 'zohaib',
        Amount: "pending",
        StudentReference: "direct",
        University: "university 1",
        LastActivity: "Request Document Email",
        Status: ''
    },
    {
        id: "bhqecj4p",
        AmbassadorName: 'zohaib',
        Amount: "pending",
        StudentReference: "direct",
        University: "university 1",
        LastActivity: "Request Document Email",
        Status: ''
    }, {
        id: "bhqecj4p",
        AmbassadorName: 'zohaib',
        Amount: "pending",
        StudentReference: "direct",
        University: "university 1",
        LastActivity: "Request Document Email",
        Status: ''
    }, {
        id: "bhqecj4p",
        AmbassadorName: 'zohaib',
        Amount: "pending",
        StudentReference: "direct",
        University: "university 1",
        LastActivity: "Request Document Email",
        Status: ''
    }, {
        id: "bhqecj4p",
        AmbassadorName: 'zohaib',
        Amount: "pending",
        StudentReference: "direct",
        University: "university 1",
        LastActivity: "Request Document Email",
        Status: ''
    }, {
        id: "bhqecj4p",
        AmbassadorName: 'zohaib',
        Amount: "pending",
        StudentReference: "direct",
        University: "university 1",
        LastActivity: "Request Document Email",
        Status: ''
    }, {
        id: "bhqecj4p",
        AmbassadorName: 'zohaib',
        Amount: "pending",
        StudentReference: "direct",
        University: "university 1",
        LastActivity: "Request Document Email",
        Status: ''
    },
    {
        id: "bhqecj4p",
        AmbassadorName: 'zohaib',
        Amount: "pending",
        StudentReference: "direct",
        University: "university 1",
        LastActivity: "Request Document Email",
        Status: ''
    },
    {
        id: "bhqecj4p",
        AmbassadorName: 'zohaib',
        Amount: "pending",
        StudentReference: "direct",
        University: "university 1",
        LastActivity: "Request Document Email",
        Status: ''
    },
    {
        id: "bhqecj4p",
        AmbassadorName: 'zohaib',
        Amount: "pending",
        StudentReference: "direct",
        University: "university 1",
        LastActivity: "Request Document Email",
        Status: ''
    },
    {
        id: "bhqecj4p",
        AmbassadorName: 'zohaib',
        Amount: "pending",
        StudentReference: "direct",
        University: "university 1",
        LastActivity: "Request Document Email",
        Status: ''
    },
    {
        id: "bhqecj4p",
        AmbassadorName: 'zohaib',
        Amount: "pending",
        StudentReference: "direct",
        University: "university 1",
        LastActivity: "Request Document Email",
        Status: ''
    },
    {
        id: "bhqecj4p",
        AmbassadorName: 'janajna',
        Amount: "success",
        StudentReference: "direct",
        University: "university 1",
        LastActivity: "Request Document Email",
        Status: ''
    },
    {
        id: "bhqecj4p",
        AmbassadorName: 'janajna',
        Amount: "success",
        StudentReference: "direct",
        University: "university 1",
        LastActivity: "Request Document Email",
        Status: ''
    },


]

export type Payment = {
    id: string
    AmbassadorName: string
    Amount: "pending" | "processing" | "success" | "failed"
    StudentReference: "direct" | 'agent' | 'ambassador'
    University: string,
    LastActivity: string,
    Status: string
}

export const columns: ColumnDef<Payment>[] = [

    {
        accessorKey: "AmbassadorName",
        header: "Ambassador Name",
        cell: ({ row }) => {
            const name = row.getValue("AmbassadorName") as string
            return (
                <Link
                    to={`/Ambassadors/${row.original.id}`}
                    className=" underline  capitalize"
                >
                    {name}
                </Link>
            )
        },
    },
    {
        accessorKey: "StudentReference",
        header: "Student Reference",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("StudentReference")}</div>
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
        accessorKey: "University",
        header: "University",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("University")}</div>
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

export function AmbasddorTable() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [selectedUniversity, setSelectedUniversity] = React.useState<string>("Select University")
  
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
            <div className="flex items-center justify-between py-4 gap-2 flex-wrap">

               <div className="flex items-center gap-2 flex-wrap">
               <Input
                    placeholder="Search..."
                    value={(table.getColumn("AmbassadorName")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("AmbassadorName")?.setFilterValue(event.target.value)
                    }
                    className="max-w-[200px]"
                />

       


                    <DropdownMenu>
                        <DropdownMenuTrigger asChild >
                            <Button variant="outline" className="hover:bg-transparent hover:text-black cursor-pointer hover:border-primary">
                                <div className="w-[200px] flex justify-between">
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
                                        table.getColumn("University")?.setFilterValue(uni) // apply filter
                                    }}
                                >
                                    {uni}
                                </DropdownMenuItem>
                            ))}

                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onClick={() => {
                                    setSelectedUniversity("University") // reset label
                                    table.getColumn("University")?.setFilterValue("") // reset filter
                                }}
                            >
                                All
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

               </div>
                    
        <Button 
          to="/add-ambassador"
        > 
        <Plus />
Add New Ambassaddor
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
                                    No Ambassador data found
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
