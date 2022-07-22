import { Text, Box, Button, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
    totalCountOfRegisters: number;
    registersPerPage?: number;
    currentPage?: number;
    onChangePage: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
	return [...new Array(siblingsCount)]
		.map((_, index) => {
			return from + index + 1;
		})
		.filter(page => page > 0);
}

export function Pagination({
	totalCountOfRegisters,
	registersPerPage = 10,
	currentPage = 1,
	onChangePage,
}: PaginationProps) {

	const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

	const previousPage = currentPage > 1 ?
		generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
		: [];

	const nextPages = currentPage < lastPage ?
		generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
		: [];


	return (
		<Stack
			direction={["column", "row"]}
			mt={8}
			justify="space-between"
			align="center"
			spacing={6}
		>

			<Box>
				<strong>0</strong> - <strong>10</strong> de <strong>100</strong>
			</Box>

			<Stack direction="row" spacing="2">
				{currentPage > (1 + siblingsCount) && (
					<>
						<PaginationItem onChangePage={onChangePage} pageNumber={1} />
						{currentPage > (2 + siblingsCount) && (
							<Text color="gray.300" width="8" textAlign="center">
                                ...
							</Text>
						)}
					</>
				)}

				{previousPage.length > 0 && previousPage.map(page => {
					return <PaginationItem onChangePage={onChangePage} key={page} pageNumber={page} />;
				})}

				<PaginationItem onChangePage={onChangePage} pageNumber={currentPage} isCurrent />

				{nextPages.length > 0 && nextPages.map(page => {
					return <PaginationItem onChangePage={onChangePage} key={page} pageNumber={page} />;
				})}

				{currentPage + siblingsCount < lastPage && (
					<>
						{(currentPage + 1 + siblingsCount) < lastPage && (
							<Text color="gray.300" width="8" textAlign="center">
                                ...
							</Text>
						)}
						<PaginationItem onChangePage={onChangePage} pageNumber={lastPage} />
					</>
				)}
			</Stack>
		</Stack>
	);
}