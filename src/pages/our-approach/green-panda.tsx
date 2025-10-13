import { FC } from "react";
import Layout from "@/components/layout/layout";
import PageHead from "@/components/layout/page-head/page-head";
import Article from "@/components/common/article";
import { Link } from "gatsby";

const heading = "Green Panda";

const GreenPandaPage: FC = () => {
    return (
        <Layout showHomeLink activeSection="Our approach" pageHeading={heading}>
            <Article heading={heading}>
                <p>
                    At Panda Preschool Playgroup we believe we have a responsibility to protect this planet for our
                    children. We encourage our children to learn about recycling. We are also doing our best to reduce
                    our plastic use and are a glitter-free setting. See our{" "}
                    <Link to="/new-pandas/policies">Climate Action Policy</Link> for details.
                </p>
                <h3 className="font-dk-crayon-crumble mt-12 mb-6 tracking-tight leading-none text-3xl lg:text-4xl">
                    Sprouts
                </h3>
                <p>
                    At Howell Hall we have access to the Copmanthorpe Community Garden which is maintained mostly by{" "}
                    <strong>Sprouts</strong>, a group of local, green fingered, grow-your-own enthusiasts. We say
                    &ldquo;mostly&rdquo; because the Panda children have a bed of their own to grow fruit and veg all
                    year round, giving them the chance to learn about how food grows, whilst getting covered in mud
                    (we&apos;re not sorry).
                </p>
                <h3 className="font-dk-crayon-crumble mt-12 mb-6 tracking-tight leading-none text-3xl lg:text-4xl">
                    Our website
                </h3>
                <p>
                    Our website is hosted by <a href="https://www.kualo.co.uk/">Kualo</a> who offer a free package for
                    charities, powered by 100% renewable energy through their ethical web hosting commitment.
                </p>
            </Article>
        </Layout>
    );
};

export default GreenPandaPage;

export const Head = () => <PageHead pageTitle={heading} />;
