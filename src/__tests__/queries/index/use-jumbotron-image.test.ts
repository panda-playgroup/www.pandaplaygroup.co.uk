import { useJumbotronImage } from "@/queries/index/use-jumbotron-image";
import { createMockGatsbyImageData } from "@/test/fixtures";
import * as gatsby from "gatsby";

jest.mock("gatsby", () => ({
    useStaticQuery: jest.fn(),
    graphql: jest.fn(),
}));
const mockGatsby = jest.mocked(gatsby);

describe("useJumbotronImage", () => {
    it("returns jumbotron image", () => {
        const imageData = createMockGatsbyImageData();

        mockGatsby.useStaticQuery.mockReturnValueOnce({
            contentfulAsset: {
                gatsbyImageData: imageData,
            },
        });

        const jumbotronImage: Queries.ContentfulAsset = useJumbotronImage();

        expect(jumbotronImage.gatsbyImageData).toBe(imageData);
    });
});
