
'use client';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Briefcase, ShoppingBag, Calendar, ArrowUpRight } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const recentActivities = [
    { type: 'Product', name: 'Quantum Drone', status: 'Published', date: '2024-07-29' },
    { type: 'Event', name: 'Future of AI Summit', status: 'Scheduled', date: '2024-07-28' },
    { type: 'Service', name: 'Cloud Solutions', status: 'Updated', date: '2024-07-28' },
    { type: 'Product', name: 'HoloWatch', status: 'Draft', date: '2024-07-27' },
    { type: 'Event', name: 'Global Tech Networking Night', status: 'Cancelled', date: '2024-07-26' },
]

export default function AdminDashboard() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Services</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-muted-foreground">
              +2 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              +1 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">
              +1 scheduled for next month
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
            <div className='flex justify-between items-center'>
                 <CardTitle>Recent Activity</CardTitle>
                 <Button asChild variant="outline" size="sm">
                    <Link href="#">View All <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
                 </Button>
            </div>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Type</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {recentActivities.map((activity, index) => (
                        <TableRow key={index}>
                            <TableCell>{activity.type}</TableCell>
                            <TableCell className="font-medium">{activity.name}</TableCell>
                            <TableCell>
                                <Badge variant={
                                    activity.status === 'Published' || activity.status === 'Scheduled' ? 'default' 
                                    : activity.status === 'Updated' ? 'secondary'
                                    : activity.status === 'Draft' ? 'outline'
                                    : 'destructive'
                                }>{activity.status}</Badge>
                            </TableCell>
                            <TableCell>{activity.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>
    </div>
  );
}
