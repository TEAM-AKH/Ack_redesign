
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

const products = [
    { name: "Quantum Drone", category: "Tech", price: "$1,200.00", status: "Active", image: "https://picsum.photos/seed/3001/40/40" },
    { name: "HoloWatch", category: "Wearables", price: "$899.99", status: "Active", image: "https://picsum.photos/seed/3002/40/40" },
    { name: "NeuroLink VR", category: "VR", price: "$1,500.00", status: "Draft", image: "https://picsum.photos/seed/3003/40/40" },
    { name: "Aura Home Hub", category: "Smart Home", price: "$299.00", status: "Active", image: "https://picsum.photos/seed/3004/40/40" },
    { name: "Atlas Companion Bot", category: "Robotics", price: "$2,500.00", status: "Archived", image: "https://picsum.photos/seed/3005/40/40" },
]

export default function ProductsAdminPage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Products</CardTitle>
            <CardDescription>Manage your company's products.</CardDescription>
          </div>
          <Button asChild size="sm" className="gap-1">
            <Link href="/admin/products/new">
                <PlusCircle className="h-4 w-4" />
                Add Product
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className='hidden w-[100px] sm:table-cell'>Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className='hidden md:table-cell'>Price</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead><span className="sr-only">Actions</span></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.map((product, index) => (
                    <TableRow key={index}>
                        <TableCell className='hidden sm:table-cell'>
                            <Image
                                alt={product.name}
                                className="aspect-square rounded-md object-cover"
                                height="40"
                                src={product.image}
                                width="40"
                            />
                        </TableCell>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell className='hidden md:table-cell'>{product.price}</TableCell>
                        <TableCell>
                            <Badge variant={product.status === 'Active' ? 'default' : product.status === 'Draft' ? 'outline' : 'secondary'}>
                                {product.status}
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
