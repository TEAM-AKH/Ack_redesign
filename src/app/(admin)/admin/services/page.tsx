
'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { MoreHorizontal, PlusCircle } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel } from '@/components/ui/dropdown-menu';

const services = [
    { title: "Cloud Solutions", description: "Scalable and secure cloud infrastructure.", status: "Active" },
    { title: "Cyber Security", description: "Advanced threat detection and prevention.", status: "Active" },
    { title: "AI & Machine Learning", description: "Unlock insights and automate processes.", status: "Inactive" },
    { title: "Data Analytics", description: "Turn data into actionable intelligence.", status: "Active" },
    { title: "Digital Marketing", description: "Expand your reach and engage your audience.", status: "Active" },
    { title: "UX/UI Design", description: "Create user-centric digital experiences.", status: "Inactive" },
]

export default function ServicesAdminPage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Services</CardTitle>
            <CardDescription>Manage your company's services.</CardDescription>
          </div>
          <Button asChild size="sm" className="gap-1">
            <Link href="/admin/services/new">
                <PlusCircle className="h-4 w-4" />
                Add Service
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead className='hidden md:table-cell'>Description</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead><span className="sr-only">Actions</span></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {services.map((service, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{service.title}</TableCell>
                        <TableCell className='hidden md:table-cell'>{service.description}</TableCell>
                        <TableCell>
                            <Badge variant={service.status === 'Active' ? 'default' : 'outline'}>
                                {service.status}
                            </Badge>
                        </TableCell>
                         <TableCell>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                <Button
                                    aria-haspopup="true"
                                    size="icon"
                                    variant="ghost"
                                >
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
