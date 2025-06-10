

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const individualFaqs = [
  {
    question: "Do I need special hardware to use SEDDI Textura?",
    answer: "No. All you need to create a digital version of your physical fabric is a desktop scanner. SEDDI recommends the Epson V850 and V600 photo scanners, but any scanner with a good photographic quality should give you a positive final result."
  },
  {
    question: "Where can I use the materials that I generate with SEDDI Textura?",
    answer: "A digital material is formed by the combination of optical and mechanical properties. Optical properties are represented in texture maps which are interoperable across all 3D software and can be used in any 3D CAD. Physics data of fabrics however are unique to each software application and its physics engine. SEDDI Textura generates maps compatible with all 3D CAD, and physics compatible with CLO, Browzwear, and SEDDI Author."
  },
  {
    question: "How long does it take to create a material?",
    answer: "Once an image has been uploaded by the user and tiled using SEDDI Textura tiling tools, generating the digital textile usually takes anywhere between 5 to 15 minutes, depending on the size of the image and how many materials SEDDI Textura is generating simultaneously. You don't need to wait for one material to be generated to upload another one; SEDDI Textura can generate multiple materials at the same time."
  },
  {
    question: "What images can SEDDI Textura Support?",
    answer: "SEDDI Textura supports popular image formats and can deliver maps from any image between 300 and 1200 DPI. For the best results, we recommend configuring your scanner at 600 DPI or above and scanning in a PNG format."
  },
  {
    question: "What output will I receive when I digitize my textiles?",
    answer: "Once the maps are generated, you will be able to download a SBSAR, a U3MA, or a ZIP file with the maps in PNG format, as well as a text file with size information for the repeat. These 3D texture files are sufficient for use with the popular 3D tools in the industry."
  },
  {
    question: "Do my suppliers need a paid plan of SEDDI Textura?",
    answer: "No, if you want to connect your suppliers to your Textura library, you just need them to create a free account. Then, the support team will do the rest. This has no cost for any of your suppliers."
  },
  {
    question: "How many materials can I create in SEDDI Textura?",
    answer: "Paid SEDDI Textura subscriptions have no limitations on the number of digital textiles you can create. There are limitations on how many materials you can store in your SEDDI Textura library concurrently, but additional space is always available if you need to expand. If you subscribe to the free plan, your organization can digitize and download up to 15 textiles each month, and store up to 15 concurrently in your library. SEDDI Textura's infrastructure also allows batch upload, enabling you to digitize thousands of textiles each day."
  },
  {
    question: "Is there a trial plan in SEDDI Textura?",
    answer: "The free plan gives you access to all the common features in SEDDI Textura with limited storage capabilities. If you are interested in testing some of the Enterprise features such as linking suppliers or batch uploads, please contact support and apply for an Enterprise trial."
  },
  {
    question: "For how long can I use a free account?",
    answer: "Free account has no limitation in time. You can use it for as long as you want."
  },
  {
    question: "What happens if I cancel a paid subscription?",
    answer: "When you cancel your paid subscription, your account will automatically be downgraded to a free plan. You can downgrade to a lower tier at any time. Any downgrades or cancellations will occur at the end of your current billing period. You will have access to your current plan until that time. When a plan is downgraded to a lower tier or free plan, you will be asked to adjust your library size to match the new plan limitations. If after two months you still haven't done so, we will automatically limit the access to the Texturas in your library. If you still need access to those digital textiles after two months, contact the support team."
  }
];

const groupedFaqs = [
  {
    question: "Account & Billing",
    answer: `Do you charge per user?
    
No, every company can have as many users as needed at no extra cost.

Will I get help in deploying SEDDI Textura in my company?

Our Knowledge Base contains many documents, videos, webinars, and tutorials that answer user questions and help in the onboarding process. If you own a Standard or an Enterprise plan, our Customer Success team will help train your entire team, as well as suppliers.

Can I share my materials with everyone?

Yes, standard sharing features in SEDDI Textura allow you to create a "Sample Room". This Sample Room can be accessed by any person with an Internet connection and the link. When creating a Sample Room you can decide if you want to password protect it, set an expiration date, or allow visitors to download the digital textiles.

When will I receive an invoice?

An invoice will be sent to you automatically after every purchase and plan renewal.

Are my digital textiles public in the free plan?

All textiles created by users of a free plan may be copied into the SEDDI Textura public library and appear in public searches. If you subscribe to a free plan, this also means that any user can see your textiles by typing in the access URL. When a user subscribes to a paid plan, the textiles in your library become private and inaccessible to other users.

What are the benefits of Enterprise subscription?

The Enterprise plan is designed for organizations that need to create a consistent digital textile library and manage the relationships and complex workflow among multiple mills or suppliers. If you want to make sure that all of the textiles uploaded by all your suppliers meet the same standards and are processed consistently, this is the plan you need.

Can I manage and validate the quality of all 3D fabrics from all of my suppliers?

Yes, the Enterprise plan allows you to manage incoming scans from multiple suppliers. All those scans then enter a validation process where your team can tile, validate and approve or reject fabrics with full traceability and control.

Can I connect all of my suppliers to my library?

Digital textiles can be securely shared with anyone via a simple link. For users requiring a higher degree of integration or want suppliers to upload textiles directly to their library, we recommend the Enterprise plan. The Enterprise plan provides workflow, quality assurance control, review and approval over the digitization process. To learn more about this, contact us through interactive chat in Textura or contact your account representative.

How does SEDDI Textura generate the maps of a textile from a single scan?

SEDDI Textura's neural network has been trained using the data of thousands of fabrics generated on special equipment developed by SEDDI scientists. This data has taught SEDDI Textura's AI to predict how different fabrics behave. With the information from the 2D scan that you upload, SEDDI Textura predicts how light will bounce off the textile and generates the maps.

How does SEDDI Textura generate the physics of a textile from a single scan?

In a similar process to the generation of maps, SEDDI Textura's neural network has been trained on the mechanical data of thousands of fabrics generated on special equipment developed by SEDDI scientists. With the information acquired from the image, plus a few additional data points such as composition or weight, SEDDI Textura can predict how the fabric will behave in the real world and provide the simulation parameters for CLO, Browzwear, and SEDDI Author.`
  }
];

const FAQSection = () => {
  return (
    <section className="w-full py-8">
      <div className="max-w-5xl mx-auto">
        <Card className="border-gray-200 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl font-bold text-[#1A1F2C]">More FAQs</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <Accordion type="single" collapsible className="space-y-2">
              {individualFaqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border border-gray-100 rounded-lg px-4 bg-gray-50/50"
                >
                  <AccordionTrigger className="text-left text-sm font-medium text-[#1A1F2C] hover:text-[#01ccc7] transition-colors py-3 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-700 leading-relaxed pb-3">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
              {groupedFaqs.map((faq, index) => (
                <AccordionItem 
                  key={`grouped-${index}`} 
                  value={`grouped-item-${index}`} 
                  className="border border-gray-100 rounded-lg px-4 bg-gray-50/50"
                >
                  <AccordionTrigger className="text-left text-sm font-medium text-[#1A1F2C] hover:text-[#01ccc7] transition-colors py-3 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-700 leading-relaxed pb-3 whitespace-pre-line">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FAQSection;

