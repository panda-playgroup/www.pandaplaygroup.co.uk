import { FC } from "react";
import { Link } from "gatsby";
import Layout from "@/components/layout/layout";
import PageHead from "@/components/layout/page-head/page-head";
import Article from "@/components/common/article";

const heading = "Our fees";

const FeesPage: FC = () => {
    return (
        <Layout showHomeLink activeSection="New Pandas" pageHeading={heading}>
            <Article heading={heading}>
                <p>
                    The charge for Pandas is currently <strong>£6.00 per hour</strong> plus a “Pandas Voluntary
                    Contribution”.
                </p>

                <p>
                    We are happy to accept Private Funding, Government Funding, or a mixture of Private and Government
                    Funding for the hours that your child attends Panda Preschool Playgroup. In addition to the hourly
                    charge (covered by Private/Government Funding), we also have a “Pandas Voluntary Contribution”,
                    please see below for details.
                </p>

                <p>
                    We advertise our fee as a flat hourly rate so that you can calculate your own fees based on the
                    hours you choose. So if you opt for an early start, or if you choose to pick your child up a little
                    earlier, you can calculate the fees you&apos;ll pay based on the hourly rate. Our policy is{" "}
                    <strong>you only pay for the hours you need</strong>.
                </p>

                <h3 className="font-dk-crayon-crumble my-12 tracking-tight leading-none text-3xl lg:text-4xl">
                    Pandas Voluntary Contribution
                </h3>
                <p>
                    In order to provide a daily snack, arrange extracurricular activities and pay for consumables
                    (tissues/wipes etc.) we ask parents for a contribution of £1 per day. This breaks down as 35p for a
                    snack, 25p for consumables and 40p towards activities and visitors.
                </p>
                <p>
                    Please don&apos;t hesitate to <Link to="/contact">get in touch with us</Link> for any other
                    questions you have about fees and funding.
                </p>

                <h3 className="font-dk-crayon-crumble mt-12 mb-6 tracking-tight leading-none text-3xl lg:text-4xl">
                    Help towards childcare costs
                </h3>
                <p>
                    Many families are eligible for help towards their childcare costs. For more information, visit{" "}
                    <a href="https://www.gov.uk/help-with-childcare-costs">Help paying for childcare</a>. Please also
                    see the summary below.
                </p>
                <ul>
                    <li>Tax-free childcare.</li>
                    <li>All 3 and 4-year-olds are entitled to 15 hours funding per week over 38 weeks of the year.</li>
                    <li>
                        Some 3 and 4-year-olds are entitled to an additional 15 hours funding per week (30 Hours
                        Extended Funding Entitlement) over 38 weeks of the year.
                    </li>
                    <li>Some 2-year-olds are entitled to 15 hours funding per week over 38 weeks of the year.</li>
                    <li>
                        Some 9 to 23-month-olds will be eligible for up to 15 hours funding per week from September
                        2024.
                    </li>
                </ul>
            </Article>
        </Layout>
    );
};

export default FeesPage;

export const Head = () => <PageHead pageTitle={heading} />;
