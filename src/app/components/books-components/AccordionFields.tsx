import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger, 
} from "@/components/ui/accordion";
import Link from "next/link";

// Assuming you have your data in a file named 'data.js'
import data from '@/components/data';

export default function AccordionDemo() {
  return (
    <div className="container mx-auto"> 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {data.map((field, idx) => (
          <Accordion key={idx} type="single" collapsible className="">
            {/* <Link href={`/top-science-books/${toSlug(field.title)}`}> */}
              <h3 className="mt-0 mb-2">{field.title}</h3>
            {/* </Link> */}
            {field.subFields.map((subField, sIdx) => (
              <AccordionItem  key={sIdx} value={`item-${idx}-${sIdx}`}>
                <AccordionTrigger>
                  <h4 className="text-sm border-0 font-medium text-slate-950 py-0 my-0 " >
                  {subField.title}
                  </h4>
                </AccordionTrigger>
                <AccordionContent>
                  <ul>
                    <li className="py-1 "> 
                      <Link className="font-bold" href={`/top-science-books/${toSlug(subField.title)}`}>
                        {subField.title} 
                      </Link> 
                    </li>
                    {subField.topics.map((topic, tIdx) => (
                      <li key={tIdx}>
                        <Link className=" py-3.5 " href={`/top-science-books/${toSlug(subField.title)}/${toSlug(topic)}`}>
                          {/* <p> */}
                            {topic}
                            {/* </p> */}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ))}
      </div>
    </div>
  );
}


// Assuming you have a 'toSlug' function to convert strings to slugs
const toSlug = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, '_');
};




