import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import FAQData from "./FAQData"



export default function FAQAccordion() {
  return (
    <div className="flex flex-col items-center w-full lg:w[60%]">
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="max-w-lg"
      >
        {FAQData.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
