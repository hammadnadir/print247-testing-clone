import Link from 'next/link';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

const PaginationCom = () => {
    const router = useRouter();
    const { query } = router;
    const { blogData } = useSelector((state) => state.blog);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = parseInt(blogData?.data?.last_page);

    useEffect(() => {
        const pageFromQuery = Math.max(1, parseInt(query.page) || 1);
        setCurrentPage(pageFromQuery);
    }, [query.page]);

    const handlePageChange = (page) => {
        if (page < 1) return;
        setCurrentPage(page);

        const updatedQuery = { ...query };
        if (page === 1) {
            delete updatedQuery.page;
        } else {
            updatedQuery.page = page;
        }

        router.push(
            {
                pathname: router.pathname,
                query: updatedQuery,
            },
            undefined,
            { shallow: true }
        );
    };
    if (parseInt(totalPages) > 1) {
        return (
            <div className='pagination-blog'>
                {/* Previous Button */}
                <div className='button_pre'>
                    <Link
                        href={{
                            pathname: router.pathname,
                            query: { ...query, page: currentPage - 1 > 0 ? currentPage - 1 : undefined },
                        }}
                        passHref
                    >
                        <button
                            disabled={currentPage === 1}
                            style={{
                                background: "none", border: "none",
                                cursor: currentPage === 1 ? "not-allowed" : "pointer",
                                opacity: currentPage === 1 ? 0.5 : 1
                            }}
                            rel="prev"
                        >
                            <img src="/icons/pagination-prev.png" alt="Previous" width={30} />
                        </button>
                    </Link>
                </div>

                {/* Smart Pagination Numbers */}
                {(() => {
                    const pages = [];
                    const visiblePages = 1;

                    const addPage = (page) => {
                        pages.push(
                            <Link
                                key={page}
                                href={{
                                    pathname: router.pathname,
                                    query: { ...query, page },
                                }}
                                passHref
                            >
                                <button
                                    style={{
                                        backgroundColor: currentPage === page ? "#00A1ED" : "#f0f0f0",
                                        color: currentPage === page ? "#fff" : "#000",
                                        border: "1px solid #ddd",
                                        padding: "5px 12px",
                                        borderRadius: "50%",
                                        cursor: "pointer"
                                    }}
                                >
                                    {page}
                                </button>
                            </Link>
                        );
                    };

                    // Always show first page
                    addPage(1);

                    // Show dots if currentPage is far from first
                    if (currentPage > visiblePages + 2) {
                        pages.push(<span key="start-dots">...</span>);
                    }

                    // Middle Pages
                    for (
                        let i = Math.max(2, currentPage - visiblePages);
                        i <= Math.min(totalPages - 1, currentPage + visiblePages);
                        i++
                    ) {
                        addPage(i);
                    }

                    // Show dots before last page if needed
                    if (currentPage < totalPages - visiblePages - 1) {
                        pages.push(<span key="end-dots">...</span>);
                    }

                    // Always show last page
                    if (totalPages > 1) {
                        addPage(totalPages);
                    }

                    return pages;
                })()}

                {/* Next Button */}
                <div className='button_next'>
                    {currentPage < totalPages ? (
                        <Link
                            href={{
                                pathname: router.pathname,
                                query: { ...query, page: currentPage + 1 },
                            }}
                            passHref
                        >
                            <button className=''
                                style={{
                                    background: "none", border: "none",
                                    cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                                    opacity: currentPage === totalPages ? 0.5 : 1
                                }}
                                rel="next"
                            >
                                <img src="/icons/pagination-next.png" alt="Next" width={30} />
                            </button>
                        </Link>
                    ) : (
                        <button
                            style={{
                                background: "none", border: "none",
                                cursor: "not-allowed",
                                opacity: 0.5
                            }}
                            disabled
                        >
                            <img src="/icons/pagination-next.png" alt="Next" width={30} />
                        </button>
                    )}
                </div>
            </div>
        );
    }
};

export default PaginationCom;
