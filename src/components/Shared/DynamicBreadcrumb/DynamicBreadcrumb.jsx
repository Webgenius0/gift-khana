"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { breadcrumbMappings } from '@/lib/breadcrumbMappings';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const DynamicBreadcrumb = ({ customMappings = {}, currentName = "" }) => {
    const pathname = usePathname();
    const pathnames = pathname.split('/').filter((x) => x);

    // Merge global mappings with custom mappings
    const allMappings = { ...breadcrumbMappings, ...customMappings };

    if (currentName && pathnames.length > 0) {
        allMappings[pathnames[pathnames.length - 1]] = currentName;
    }

    // Helper to format breadcrumb text
    const formatSegment = (segment) => {
        if (allMappings[segment]) return allMappings[segment];
        return segment
            .replace(/-/g, ' ')
            .replace(/_/g, ' ')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <Breadcrumb className="text-sm font-montserrat text-secondary/60 mb-6 uppercase tracking-wider">
            <BreadcrumbList className="gap-0 text-inherit">
                {/* Always show HOME first */}
                <BreadcrumbItem className="text-inherit">
                    <BreadcrumbLink asChild>
                        <Link href="/" className="hover:text-secondary transition-colors">
                            HOME
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {pathnames.length > 0 && (
                    <BreadcrumbSeparator className="text-inherit flex items-center">
                        &gt;
                    </BreadcrumbSeparator>
                )}

                {pathnames.map((value, index) => {
                    const last = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                    return (
                        <React.Fragment key={to}>
                            <BreadcrumbItem className="text-inherit">
                                {last ? (
                                    <BreadcrumbPage className="text-secondary font-bold uppercase p-0">
                                        {formatSegment(value)}
                                    </BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink asChild>
                                        <Link
                                            href={to}
                                            className="hover:text-secondary transition-colors"
                                        >
                                            {formatSegment(value)}
                                        </Link>
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                            {!last && (
                                <BreadcrumbSeparator className="mx-2 text-inherit flex items-center">
                                    &gt;
                                </BreadcrumbSeparator>
                            )}
                        </React.Fragment>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default DynamicBreadcrumb;
