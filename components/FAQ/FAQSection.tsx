import FAQAccordion from "./FAQAccordion";


export default function FAQSection () {

  return (
    <div className="mt-26 flex flex-col lg:flex-row">
      <h3 className="text-3xl font-semibold mb-5 lg:w-full lg:text-5xl text-center lg:text-left"> Frequently Asked Questions</h3>

      <FAQAccordion />
    </div>
  )
}