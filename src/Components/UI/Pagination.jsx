import React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import "./Pagination.css";

export function Pagination({ className = "", ...props }) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={`pagination ${className}`}
      {...props}
    >
      <ul className="pagination-content">
        <PaginationItem>
          <PaginationPrevious />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext />
        </PaginationItem>
      </ul>
    </nav>
  );
}

export function PaginationItem({ children }) {
  return <li className="pagination-item">{children}</li>;
}

export function PaginationLink({ href, isActive, children }) {
  return (
    <a href={href} className={`pagination-link ${isActive ? "active" : ""}`}>
      {children}
    </a>
  );
}

export function PaginationPrevious() {
  return (
    <a href="#" className="pagination-nav">
      <ChevronLeft size={16} />
      <span>Previous</span>
    </a>
  );
}

export function PaginationNext() {
  return (
    <a href="#" className="pagination-nav">
      <span>Next</span>
      <ChevronRight size={16} />
    </a>
  );
}

export function PaginationEllipsis() {
  return (
    <span className="pagination-ellipsis">
      <MoreHorizontal size={16} />
      <span className="sr-only">More pages</span>
    </span>
  );
}
