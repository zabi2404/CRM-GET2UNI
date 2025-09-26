

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
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination"

import { Link } from "react-router-dom"

const data: Payment[] = [

    {
        id: "bhqecj4p",
        Logo: 'zohaib',
        ApplicationStatus: "pending",
        UniversityName: "direct",
        StudentsPipeline: "university 1",
        StudentsBoarded: "Request Document Email",
        AmbassadorLink: ''
    },
    {
        id: "bhqecj4p",
        Logo: 'zohaib',
        ApplicationStatus: "pending",
        UniversityName: "direct",
        StudentsPipeline: "university 1",
        StudentsBoarded: "Request Document Email",
        AmbassadorLink: ''
    }, {
        id: "bhqecj4p",
        Logo: 'zohaib',
        ApplicationStatus: "pending",
        UniversityName: "direct",
        StudentsPipeline: "university 1",
        StudentsBoarded: "Request Document Email",
        AmbassadorLink: ''
    }, {
        id: "bhqecj4p",
        Logo: 'zohaib',
        ApplicationStatus: "pending",
        UniversityName: "direct",
        StudentsPipeline: "university 1",
        StudentsBoarded: "Request Document Email",
        AmbassadorLink: ''
    }, {
        id: "bhqecj4p",
        Logo: 'zohaib',
        ApplicationStatus: "pending",
        UniversityName: "direct",
        StudentsPipeline: "university 1",
        StudentsBoarded: "Request Document Email",
        AmbassadorLink: ''
    }, {
        id: "bhqecj4p",
        Logo: 'zohaib',
        ApplicationStatus: "pending",
        UniversityName: "direct",
        StudentsPipeline: "university 1",
        StudentsBoarded: "Request Document Email",
        AmbassadorLink: ''
    }, {
        id: "bhqecj4p",
        Logo: 'zohaib',
        ApplicationStatus: "pending",
        UniversityName: "direct",
        StudentsPipeline: "university 1",
        StudentsBoarded: "Request Document Email",
        AmbassadorLink: ''
    },
    {
        id: "bhqecj4p",
        Logo: 'zohaib',
        ApplicationStatus: "pending",
        UniversityName: "direct",
        StudentsPipeline: "university 1",
        StudentsBoarded: "Request Document Email",
        AmbassadorLink: ''
    },
    {
        id: "bhqecj4p",
        Logo: 'zohaib',
        ApplicationStatus: "pending",
        UniversityName: "direct",
        StudentsPipeline: "university 1",
        StudentsBoarded: "Request Document Email",
        AmbassadorLink: ''
    },
    {
        id: "bhqecj4p",
        Logo: 'zohaib',
        ApplicationStatus: "pending",
        UniversityName: "direct",
        StudentsPipeline: "university 1",
        StudentsBoarded: "Request Document Email",
        AmbassadorLink: ''
    },
    {
        id: "bhqecj4p",
        Logo: 'zohaib',
        ApplicationStatus: "pending",
        UniversityName: "direct",
        StudentsPipeline: "university 1",
        StudentsBoarded: "Request Document Email",
        AmbassadorLink: ''
    },
    {
        id: "bhqecj4p",
        Logo: 'zohaib',
        ApplicationStatus: "pending",
        UniversityName: "direct",
        StudentsPipeline: "university 1",
        StudentsBoarded: "Request Document Email",
        AmbassadorLink: ''
    },
    {
        id: "bhqecj4p",
        Logo: 'janajna',
        ApplicationStatus: "success",
        UniversityName: "direct",
        StudentsPipeline: "university 1",
        StudentsBoarded: "Request Document Email",
        AmbassadorLink: ''
    },
    {
        id: "bhqecj4p",
        Logo: 'janajna',
        ApplicationStatus: "success",
        UniversityName: "direct",
        StudentsPipeline: "university 1",
        StudentsBoarded: "Request Document Email",
        AmbassadorLink: ''
    },


]

export type Payment = {
    id: string
    Logo: string
    ApplicationStatus: "pending" | "processing" | "success" | "failed"
    UniversityName: "direct" | 'agent' | 'ambassador'
    StudentsPipeline: string,
    StudentsBoarded: string,
    AmbassadorLink: string
}

export const columns: ColumnDef<Payment>[] = [

    {
        accessorKey: "Logo",
        header: "logo",
        cell: ({ row }) => {
            const name = row.getValue("Logo") as string
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
        accessorKey: "UniversityName",
        header: "University Name",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("UniversityName")}</div>
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
        accessorKey: "StudentsBoarded",
        header: "Students on-Boarded",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("StudentsBoarded")}</div>
        ),
    },
    {
        accessorKey: "StudentsPipeline",
        header: "Students in Pipeline",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("StudentsPipeline")}</div>
        ),
    },
    {
        accessorKey: "AmbassadorLink",
        header: "Ambassador Link",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("status")}</div>
        ),
    },
   {
        accessorKey: "StudentReference",
        header: "Student Sign-up Iframe",
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

export function UniversityTable() {
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
            <div className="flex items-center py-4 gap-2">

                <Input
                    placeholder="Search..."
                    value={(table.getColumn("Logo")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("Logo")?.setFilterValue(event.target.value)
                    }
                    className="max-w-[200px]"
                />

            


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
