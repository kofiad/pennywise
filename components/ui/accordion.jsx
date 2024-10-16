import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

export function AccordionComponent({ title, content }) {
  return (
    <Accordion>
      <AccordionPanel>
        <AccordionTitle>{title}</AccordionTitle>
        <AccordionContent>
          {content.map((paragraph, index) => (
            <p key={index} className="mb-2 text-slate-900 dark:text-slate-50">
              {paragraph}
            </p>
          ))}
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  );
}
