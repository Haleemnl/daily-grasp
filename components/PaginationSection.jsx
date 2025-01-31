// import React from 'react';
// import {
//     Pagination,
//     PaginationContent,
//     PaginationEllipsis,
//     PaginationItem,
//     PaginationLink,
//     PaginationNext,
//     PaginationPrevious,
// } from "@/components/ui/pagination"

// const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
//     const pageNumbers = [];
//     for (let i = 1; i <= totalPages; i++) {
//         pageNumbers.push(i);
//     }

//     return (
//         <Pagination>
//             <PaginationContent>
//                 <PaginationItem>
//                     <PaginationPrevious
//                         href="#"
//                         onClick={(e) => {
//                             e.preventDefault();
//                             if (currentPage > 1) onPageChange(currentPage - 1);
//                         }}
//                     />
//                 </PaginationItem>

//                 {pageNumbers.map((number) => (
//                     <PaginationItem key={number}>
//                         <PaginationLink
//                             href="#"
//                             isActive={currentPage === number}
//                             onClick={(e) => {
//                                 e.preventDefault();
//                                 onPageChange(number);
//                             }}
//                         >
//                             {number}
//                         </PaginationLink>
//                     </PaginationItem>
//                 ))}

//                 <PaginationItem>
//                     <PaginationNext
//                         href="#"
//                         onClick={(e) => {
//                             e.preventDefault();
//                             if (currentPage < totalPages) onPageChange(currentPage + 1);
//                         }}
//                     />
//                 </PaginationItem>
//             </PaginationContent>
//         </Pagination>
//     );
// };

// export default PaginationComponent;




















































'use client';
import React, { useState } from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function PaginationSection({ maxPage }) {
    const pathname = usePathname();
    const { replace } = useRouter();
    const searchParams = useSearchParams();
    const [pageNum, setPageNum] = useState(0);

    const nextPage = () => {
        if (pageNum + 2 > maxPage) return;
        setPageNum((prev) => prev + 2);
        const params = new URLSearchParams(searchParams);
        params.set('page', (pageNum + 2).toString());
        replace(`${pathname}?${params}`);
    };

    const previousPage = () => {
        if (pageNum < 1) return;
        setPageNum((prev) => prev - 2);
        const params = new URLSearchParams(searchParams);
        params.set('page', (pageNum - 2).toString());
        replace(`${pathname}?${params}`);
    };

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        aria-disabled={pageNum === 0}
                        onClick={previousPage}
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink>{pageNum}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext onClick={nextPage} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}