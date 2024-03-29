import { FC, PropsWithChildren } from "react";

interface SectionProps {
    style: "standard" | "alt";
    heading: string;
    image?: React.ReactElement;
}

const Section: FC<PropsWithChildren<SectionProps>> = ({
    style,
    heading,
    image,
    children,
}: PropsWithChildren<SectionProps>) => {
    return (
        <section
            className={`py-24 2xl:px-64 lg:px-48 md:px-24 px-12 ${
                style === "alt" ? " bg-emerald-700 text-slate-100 text-right" : ""
            }`}
        >
            <div className="2xl:flex 2xl:gap-36">
                <div className={`self-center ${style === "alt" ? " pb-8 xl:pb-0 xl:order-last" : ""}`}>
                    <h2 className="font-dk-crayon-crumble mb-12 tracking-tight leading-none text-5xl lg:text-6xl">
                        {heading}
                    </h2>
                    {children}
                </div>
                {image && (
                    <div className="pt-8 shrink-0 flex justify-center self-center">
                        <div className="md:shrink-0">{image}</div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Section;
