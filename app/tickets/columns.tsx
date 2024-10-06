"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ViewTicket from "./view-ticket"

export interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    position: string;
    phone: string;
    email: string;
}

export type Ticket = {
    id: number;
    issueDescription: string;
    createdDate: string;
    employees: Employee[];
}

export const columns: ColumnDef<Ticket>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "issueDescription",
        header: "Description",
    },
    {
        accessorKey: "createdDate",
        header: "Created Date",
    },
    {
        accessorKey: "employees",
        header: "Assigned Employees",
        cell: ({ row }) => (
            row.original.employees.map(emp => `${emp.firstName} ${emp.lastName}`).join(', ')
        ),
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const ticket = row.original
            
            return (
                <div className="flex justify-end">
                    <ViewTicket />
                </div>
            )
        },
    },
]
