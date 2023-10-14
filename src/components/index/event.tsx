import { FC } from "react";
import { GatsbyImage } from "gatsby-plugin-image";

interface EventProps {
    name: string;
    date: string;
    url?: Queries.Maybe<string>;
    image?: Queries.Maybe<Queries.ContentfulAsset>;
}

const Event: FC<EventProps> = ({ name, date, url, image }: EventProps) => {
    return (
        <a
            href={url ?? ""}
            className="no-underline cursor-pointer flex flex-col bg-white hover:bg-slate-200 rounded-lg md:flex-row items-center my-4"
        >
            {image?.gatsbyImageData && (
                <GatsbyImage
                    image={image.gatsbyImageData}
                    alt={""}
                    aria-hidden
                    className="object-cover w-full h-24 md:w-24 max-w-xl rounded-t-lg md:rounded-none md:rounded-l-lg"
                />
            )}
            <div className="px-8 pt-4 md:py-0 grow">{name}</div>
            <div className="px-8 pb-4 md:py-0 text-sm">{formatDate(date)}</div>
        </a>
    );
};

const formatDate = (date: string): string => {
    return new Date(date)
        .toLocaleDateString("en-gb", { weekday: "short", year: "numeric", month: "short", day: "numeric" })
        .replace(",", "");
};

export default Event;
