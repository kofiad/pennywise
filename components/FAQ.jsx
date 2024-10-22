import { AccordionComponent } from "./ui/accordion"

const FaqOptions =[
{
    title: "How does PennyWise handle budgeting?",
    content: [
        "PennyWise allows you to create and manage budgets for different categories such as groceries, entertainment, and utilities. You can set spending limits and track your expenses to ensure you stay within your budget."
    ]
},
{
    title: "How does PennyWise help me save money?",
    content: [
        "PennyWise offers a variety of tools and features to help you save money, such as goal setting, automatic savings transfers, and spending analysis. You can set savings goals, track your progress, and receive personalized recommendations to help you achieve your financial goals."
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
