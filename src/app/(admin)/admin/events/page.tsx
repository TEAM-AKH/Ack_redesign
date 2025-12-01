
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
import Image from 'next/image';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel } from '@/components/ui/dropdown-menu';

const events = [
    { name: "Future of AI Summit", location: "Virtual Event", date: "2024-10-26", status: "Scheduled", image: "https://picsum.photos/seed/4001/40/40" },
    { name: "Innovate & Create Hackathon", location: "Tech Hub, Silicon Valley", date: "2024-11-15", status: "Scheduled", image: "https://picsum.photos/seed/4003/40/40" },
    { name: "Product Launch: The Next Generation", location: "Live Streamed Globally", date: "2024-12-05", status: "Draft", image: "https://picsum.photos/seed/4004/40/40" },
    { name: "Global Tech Networking Night", location: "Metropolis Convention Center", date: "2025-01-20", status: "Scheduled", image: "https://picsum.photos/seed/4002/40/40" },
    { name: "Web 3.0 Conference 2023", location: "Austin, TX", date: "2023-08-12", status: "Archived", image: "https://picsum.photos/seed/2001/40/40" },
]

export default function EventsAdminPage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Events</CardTitle>
            <CardDescription>Manage your company's events.</CardDescription>
          </div>
          <Button asChild size="sm" className="gap-1">
            <Link href="/admin/events/new">
                <PlusCircle className="h-4 w-4" />
                Add Event
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className='hidden w-[100px] sm:table-cell'>Banner</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead className='hidden md:table-cell'>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead><span className="sr-only">Actions</span></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {events.map((event, index) => (
                    <TableRow key={index}>
                        <TableCell className='hidden sm:table-cell'>
                            <Image
                                alt={event.name}
                                className="aspect-square rounded-md object-cover"
                                height="40"
                                src={event.image}
                                width="40"
                            />
                        </TableCell>
                        <TableCell className="font-medium">{event.name}</TableCell>
                        <TableCell>{event.location}</TableCell>
                        <TableCell className='hidden md:table-cell'>{event.date}</TableCell>
                        <TableCell>
                            <Badge variant={event.status === 'Scheduled' ? 'default' : event.status === 'Draft' ? 'outline' : 'secondary'}>
                                {event.status}
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
