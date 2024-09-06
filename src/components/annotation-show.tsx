import { AnnotationPreview } from "@/components/annotation-preview";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function AnnotationShow() {
  return (
    <div className="bg-slate-500 p-4 rounded-2xl w-full h-auto min-h-[50vh] flex flex-col justify-between">
      <div className="space-y-2 pb-4">
        <AnnotationPreview />
        <AnnotationPreview />
        <AnnotationPreview />
        <AnnotationPreview />
        <AnnotationPreview />
      </div>
      <AnnotationPagination />
    </div>
  );
}

function AnnotationPagination() {
  return (
    <Pagination className="text-white text-lg">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
