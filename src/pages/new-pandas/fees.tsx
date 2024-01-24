import { FC } from "react";
import { Link } from "gatsby";
import Layout from "@/components/layout/layout";
import PageHead from "@/components/layout/page-head/page-head";
import Article from "@/components/common/article";

const heading = "Fees";

const FeesPage: FC = () => {
    return (
        <Layout showHomeLink activeSection="New Pandas" pageHeading={heading}>
            <Article heading={heading}>
                <p>
                    We are happy to accept Private Funding, Government Funding, or a mixture of Private and Government
                    Funding for the hours that your child attends Panda Playgroup. Please note that in addition to the
                    hourly charge (covered by Private /Government Funding), a “Pandas Consumable Charge” is also
                    payable.
                </p>
                <p>
                    The charge for Pandas is currently <strong>£5.50 per hour</strong> plus a “Pandas Consumables
                    Charge”.
                </p>

                <p>
                    We advertise this as a flat hourly rate so that you can calculate your own fees based on the hours
                    you choose. So if you opt for an early start, or if you choose to pick your child up a little
                    earlier, you can calculate the fees you&apos;ll pay based on the hourly rate. Our policy is{" "}
                    <strong>you only pay for the hours you need</strong>.
                </p>

                <p>
                    <div className="p-8 mb-4 rounded-lg bg-slate-300">
                        Please note that in light of the 9.79% increase in the National Living Wage, the pre-school must
                        raise its fees from April 2024 to <strong>£6.00 per hour</strong>. Thank you for your
                        understanding.
                    </div>
                </p>

                <h3 className="font-dk-crayon-crumble mt-12 mb-6 tracking-tight leading-none text-3xl lg:text-4xl">
                    Payment
                </h3>
                <p>Government Funding replaces the hourly charge. The “Pandas Consumables Charge” is still payable.</p>
                <ul>
                    <li>All 3 and 4-year-olds are entitled to 15 hours funding per week over 38 weeks of the year.</li>
                    <li>
                        Some 3 and 4-year-olds are entitled to an additional 15 hours funding per week (30 Hours
                        Extended Funding Entitlement) over 38 weeks of the year.
                    </li>
                    <li>Some 2-year-olds are entitled to 15 hours funding per week over 38 weeks of the year.</li>
                </ul>
                <p>
                    To check eligibility and how to apply for 30 hours extended funding for 3- and 4-year-olds and 15
                    hours funding for 2-year-olds please refer to{" "}
                    <a href="https://www.childcarechoices.gov.uk">Childcare Choices</a>.
                </p>

                <h3 className="font-dk-crayon-crumble my-12 tracking-tight leading-none text-3xl lg:text-4xl">
                    Pandas Consumable Charge
                </h3>
                <p>
                    There is an additional charge of <strong>£6.00 per day of the week per half term</strong> to cover
                    the cost of snacks and consumables that Panda Playgroup provides. (For example, if you child attends
                    three days a week, then an additional £6.00 x 3 = <strong>£18.00 per half term</strong> is payable
                    directly to Panda Playgroup).
                </p>
                <p>
                    Please don&apos;t hesitate to <Link to="/contact">get in touch with us</Link> for any other
                    questions you have about fees and funding.
                </p>
            </Article>
        </Layout>
    );
};

export default FeesPage;

export const Head = () => <PageHead pageTitle={heading} />;
