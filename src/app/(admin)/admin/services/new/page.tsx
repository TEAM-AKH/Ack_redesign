
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Upload } from 'lucide-react';
import Link from 'next/link';

export default function NewServicePage() {
    return (
        <form className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
                 <div className="flex items-center gap-4">
                     <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                        Add New Service
                    </h1>
                    <div className="hidden items-center gap-2 md:ml-auto md:flex">
                        <Button variant="outline" size="sm" asChild>
                           <Link href="/admin/services">Discard</Link>
                        </Button>
                        <Button size="sm">Save Service</Button>
                    </div>
                 </div>
                 <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                    <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Service Details</CardTitle>
                                <CardDescription>Provide the details for the new service.</CardDescription>
                            </CardHeader>
                            <CardContent className='grid gap-6'>
                                <div className="grid gap-3">
                                    <Label htmlFor="title">Title</Label>
                                    <Input id="title" type="text" className="w-full" placeholder="e.g. Cloud Solutions" />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea id="description" placeholder="A brief description of the service." />
                                </div>
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
                                <div className="flex items-center space-x-2">
                                    <Switch id="status" />
                                    <Label htmlFor="status">Active</Label>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                 </div>
                  <div className="flex items-center justify-center gap-2 md:hidden">
                    <Button variant="outline" size="sm">
                    Discard
                    </Button>
                    <Button size="sm">Save Product</Button>
                </div>
            </div>
        </form>
    )
}
