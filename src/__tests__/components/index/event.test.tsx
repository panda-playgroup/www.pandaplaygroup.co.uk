import { render, screen } from "@testing-library/react";
import Event from "@/components/index/event";
import * as datesService from "@/services/dates";

jest.mock("@/services/dates");
const mockDatesService = jest.mocked(datesService);

beforeEach(() => {
    jest.clearAllMocks();
});

describe("event", () => {
    it("renders the name", () => {
        render(<Event name={"Event one"} date={"2020-01-01"} />);

        const name = screen.queryByText("Event one");

        expect(name).toBeInTheDocument();
    });

    it("renders the link", () => {
        render(<Event name={"Event one"} date={"2020-01-01"} href="http://localhost:8000/event" />);

        const url = screen.queryByRole("link", { name: "Event one" });

        expect(url).toBeInTheDocument();
    });

    it("renders text when the date is in the past", () => {
        mockDatesService.dateIsInThePast.mockReturnValueOnce(true);

        render(<Event name={"Event one"} date={"2020-01-01"} href="http://localhost:8000/event" />);

        const url = screen.queryByRole("link");

        expect(url).not.toBeInTheDocument();
    });
});
