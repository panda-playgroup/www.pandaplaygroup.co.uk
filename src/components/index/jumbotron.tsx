import { FC } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import LinkButton from "@/components/common/link-button";
import { useJumbotronImage } from "@/queries/index/use-jumbotron-image";

const Jumbotron: FC = () => {
    const jumbotronImage: Queries.ContentfulAsset = useJumbotronImage();

    return (
        <section className="grid">
            {jumbotronImage.gatsbyImageData && (
                <GatsbyImage
                    image={jumbotronImage.gatsbyImageData}
                    alt=""
                    aria-hidden
                    className="grid-area-1-1 opacity-80 brightness-80"
                />
            )}
            <div className="grid-area-1-1 text-center relative place-items-center mx-auto px-4 py-24 lg:py-40">
                <p className="font-dk-crayon-crumble mb-4 py-4 md:py-8 tracking-tight leading-none text-slate-100 text-6xl md:text-7xl lg:text-8xl text-shadow">
                    A safe, welcoming and fun environment
                </p>
                <p className="font-black text-slate-100 text-xl text-shadow md:text-xl lg:text-2xl mb-8 py-4 md:py-8 sm:px-16 lg:px-64">
                    Situated in the heart of Copmanthorpe village in York, we aim to provide children with an exciting
                    journey of learning through play
                </p>
                <div className="flex justify-center flex-col sm:flex-row gap-6 sm:gap-24">
                    <LinkButton text="Watch our virtual tour" href="#" />
                    <LinkButton text="View the Panda gallery" href="#" />
                </div>
            </div>
        </section>
    );
};

export default Jumbotron;
