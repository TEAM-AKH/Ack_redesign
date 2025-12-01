
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Upload } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useRouter, useParams } from 'next/navigation';
import type { Service } from '../page';
import { useEffect, useState } from 'react';

const serviceSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    description: z.string().min(1, { message: "Description is required" }),
    status: z.boolean().default(false),
});

export default function EditServicePage() {
    const router = useRouter();
    const params = useParams();
    const { id } = params;
    const serviceId = Number(id);
    const [isMounted, setIsMounted] = useState(false);

    const form = useForm<z.infer<typeof serviceSchema>>({
        resolver: zodResolver(serviceSchema),
        defaultValues: {
            title: '',
            description: '',
            status: false,
        }
    });

     useEffect(() => {
        setIsMounted(true);
        const storedServices: Service[] = JSON.parse(localStorage.getItem('services') || '[]');
        if (storedServices[serviceId]) {
            const service = storedServices[serviceId];
            form.reset({
                title: service.title,
                description: service.description,
                status: service.status === 'Active',
            });
        }
    }, [serviceId, form]);

    const onSubmit = (values: z.infer<typeof serviceSchema>) => {
        const updatedService: Service = {
            ...values,
            status: values.status ? 'Active' : 'Inactive',
        }
        const existingServices: Service[] = JSON.parse(localStorage.getItem('services') || '[]');
        existingServices[serviceId] = updatedService;
        localStorage.setItem('services', JSON.stringify(existingServices));
        router.push('/admin/services');
    };

    if (!isMounted) {
        return null; // or a loading spinner
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
                     <div className="flex items-center gap-4">
                         <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                            Edit Service
                        </h1>
                        <div className="hidden items-center gap-2 md:ml-auto md:flex">
                            <Button variant="outline" size="sm" type="button" onClick={() => router.push('/admin/services')}>
                               Discard
                            </Button>
                            <Button size="sm" type="submit">Update Service</Button>
                        </div>
                     </div>
                     <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Service Details</CardTitle>
                                    <CardDescription>Update the details for the service.</CardDescription>
                                </CardHeader>
                                <CardContent className='grid gap-6'>
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Title</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="e.g. Cloud Solutions" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Description</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="A brief description of the service." {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </CardContent>
                            </Card>
                            <Card>
                                 <CardHeader>
                                    <CardTitle>Service Image</CardTitle>
                                    <CardDescription>Upload an image for the service.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                     <div className="flex justify-center w-full">
                                        <Label
                                        htmlFor="dropzone-file"
                                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                        >
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <Upload className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                            <span className="font-semibold">Click to upload</span> or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                        </div>
                                        <Input id="dropzone-file" type="file" className="hidden" />
                                        </Label>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Status</CardTitle>
                                    <CardDescription>Set the service status.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                     <FormField
                                        control={form.control}
                                        name="status"
                                        render={({ field }) => (
                                            <FormItem className="flex items-center space-x-2">
                                                <FormControl>
                                                    <Switch
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <FormLabel>{field.value ? 'Active' : 'Inactive'}</FormLabel>
                                            </FormItem>
                                        )}
                                    />
                                </CardContent>
                            </Card>
                        </div>
                     </div>
                      <div className="flex items-center justify-center gap-2 md:hidden">
                        <Button variant="outline" size="sm" type="button" onClick={() => router.push('/admin/services')}>
                            Discard
                        </Button>
                        <Button size="sm" type="submit">Update Service</Button>
                    </div>
                </div>
            </form>
        </Form>
    )
}
