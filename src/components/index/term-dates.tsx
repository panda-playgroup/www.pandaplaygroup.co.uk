import { FC } from "react";
import { Table, TableBody, TableRow, TableCell } from "flowbite-react";
import { useTermDates } from "@/queries/index/use-term-dates";
import { formatDate } from "@/services/dates";

const TermDates: FC = () => {
    const termDates: Queries.ContentfulTermDates = useTermDates();

    return (
        <>
            <h2 className="font-dk-crayon-crumble mb-12 tracking-tight leading-none text-4xl">Term dates</h2>
            <Table className="text-center">
                <TableBody className="text-lg text-slate-800 divide-y">
                    {termDates.terms?.map((term: Queries.Maybe<Queries.ContentfulTerm>) => (
                        <Term key={term?.id} term={term} />
                    ))}
                </TableBody>
            </Table>
        </>
    );
};

interface TermProps {
    term: Queries.Maybe<Queries.ContentfulTerm>;
}

const Term: FC<TermProps> = ({ term }: TermProps) => {
    return (
        <>
            <TableRow>
                <TableCell colSpan={2} theme={{ base: "px-6 py-4 bg-slate-200" }}>
                    <strong>{term?.name}</strong>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    {formatDate(term?.start)} - {formatDate(term?.lastDayBeforeHalfTerm)}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    {formatDate(term?.firstDayAfterHalfTerm)} - {formatDate(term?.end)}
                </TableCell>
            </TableRow>
        </>
    );
};

export default TermDates;
