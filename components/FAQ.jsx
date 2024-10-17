import { AccordionComponent } from "./ui/accordion"

const FaqOptions =[
  {
    title: "Is there a mobile app for PennyWise?",
    content: [
        "Yes, PennyWise offers a mobile app available for both iOS and Android devices. The app provides all the features of the web platform, allowing you to manage your finances on the go."
    ]
},
{
    title: "How does PennyWise handle budgeting?",
    content: [
        "PennyWise allows you to create and manage budgets for different categories such as groceries, entertainment, and utilities. You can set spending limits and track your expenses to ensure you stay within your budget."
    ]
},
{
    title: "Can I share my PennyWise account with family members?",
    content: [
        "Yes, PennyWise allows you to share your account with family members. You can create multiple user profiles and set permissions to control access to different features and financial information."
    ]
},
{
    title: "How does PennyWise help me save money?",
    content: [
        "PennyWise offers a variety of tools and features to help you save money, such as goal setting, automatic savings transfers, and spending analysis. You can set savings goals, track your progress, and receive personalized recommendations to help you achieve your financial goals."
    ]
},
{
    title: "Is PennyWise safe to use?",
    content: [
        "Yes, PennyWise takes the security and privacy of your financial information seriously. We use bank-level encryption to protect your data and never store your banking credentials on our servers. We also offer two-factor authentication and other security features to help keep your account secure."
    ]
},
{
    title: "How does PennyWise make money?",
    content: [
        "PennyWise makes money through a combination of subscription fees, advertising, and partnerships with financial institutions. We offer a free basic plan with limited features and a premium plan with additional tools and benefits for a monthly or annual fee."
    ]
},
{
    title: "Can I use PennyWise to track my investments?",
    content: [
        "Yes, PennyWise allows you to track your investments and monitor your portfolio performance. You can link your investment accounts to PennyWise and view your holdings, asset allocation, and investment returns in one place."
    ]
},
{
    title: "How does PennyWise help me pay off debt?",
    content: [
        "PennyWise offers tools and resources to help you pay off debt faster and save money on interest. You can create a debt payoff plan, track your progress, and receive personalized recommendations to help you become debt-free sooner."
    ]
},
{
    title: "Can I use PennyWise to create a financial plan?",
    content: [
        "Yes, PennyWise offers financial planning tools to help you create a personalized plan for achieving your financial goals. You can set short-term and long-term goals, track your progress, and receive recommendations to help you make informed financial decisions."
    ]
},
{
    title: "How does PennyWise help me track my spending?",
    content: [
        "PennyWise offers spending tracking tools to help you monitor your expenses and identify areas where you can save money. You can categorize your transactions, set spending limits, and receive alerts when you exceed your budget to help you stay on track."
    ]
},
]
export default function FAQ() {
  return (
    <div className="bg-gradient-to-b from-purple-200 to-purple-100 flex flex-col gap-8 p-6 md:p-12 lg:p-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">Frequently Asked Questions (FAQs)</h2>
      </div>
      {
        FaqOptions.map(({ title, content }, index) => (
          <AccordionComponent key={index} title={title} content={content} />
        ))
      }
    </div>
  )
}
