'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Which BMW Map Update Should I Select?",
    answer: `Choosing the right BMW map update is easy. Just follow these simple steps:

    1. Check Your Current Map Version: Sit in your BMW and press the 'Nav' button, then press the 'Option' button on your controller.

    2. Find the Navigation System Version: Scroll down to the menu's last item titled "Navigation System Version." This will show you the map version currently in your car. For example, it might say "Road Map Europe Premium 2014-1."

    3. Select the Correct Update: Based on your current version, choose the appropriate update. If your car has "Road Map Europe Premium 2014-1," then you need the PREMIUM map version. Other versions like MOTION, MOVE, or NEXT won't work for your car.

    Remember, selecting the correct map version is crucial for a successful update. If you're unsure about your selection, we encourage you to consult with us before placing an order.`
  },
  {
    question: "BMW Navigation Update Process: A Step-by-Step Guide",
    answer: `Updating your BMW's navigation system is a straightforward process. Just follow these steps:

    1. Keep the Engine Running: Start by keeping your car's engine running during the entire update process. Or you can do the update while driving.

    2. Connect the USB Stick: Insert the USB stick with the map files into the correct USB port in your car:
       - For Premium, Motion, and Move maps: Use the USB port in the passenger side glovebox
       - For Next, Route, Evo ID4, Evo ID5/ID6 and Way maps: Use the USB port in the center console

    3. Wait for the Pop-Up Screen: After connecting the USB, wait for about 20 seconds for the pop-up screen.

    4. Start the Update: Use the iDrive controller to select 'Start update'.

    5. Enter the FSC Activation Code: Enter the 20-character FSC code using the iDrive controller. Note: The code does not include the digits "0" and "1".

    6. Complete the Update: Leave the USB stick inserted until the update process completes. The system will reboot automatically once finished.`
  },
  {
    question: "Does a BMW Map Update Void My Vehicle's Warranty?",
    answer: `No, updating your BMW's map will not void your warranty. Here's why:

    1. Direct from BMW Database: We source our map update files and fsc codes directly from the BMW database.

    2. Dealership-Level Codes: The FSC codes (Freischaltcode) in our updates are identical to those you would receive from a dealership.

    3. Warranty Safe: Since our updates use official BMW fsc codes and map files, they comply with the standards set by BMW.

    You can confidently update your BMW's navigation maps with our products without worrying about any impact on your warranty.`
  },
  {
    question: "What's Included in a BMW Service History Check?",
    answer: `The BMW Service History Check offers comprehensive insights:

    1. Detailed PDF Report: You'll receive an extensive PDF document covering your car's maintenance journey.

    2. Complete Maintenance Overview: Track all services and repairs performed over time.

    3. Insights into Car's Equipment List: Understand your vehicle's features and specifications.

    4. Informed Maintenance Decisions: Make well-informed decisions about your car's maintenance needs.

    Note: This report will only include jobs completed by authorised BMW dealers.`
  },
  {
    question: "Can I Activate BMW Apple CarPlay Via USB?",
    answer: `Whether you can code BMW Apple CarPlay via USB depends on your BMW's head unit firmware version:

    1. Check Your BMW's Firmware Version: Access Navigation Maps > Options > Settings > Position & Version History > Version Information.

    2. For Cable Coding: Required if your software version begins with P, Q, R, S, U, V, W, X, or Y.

    3. For USB or Cable Coding: Available if the version starts with a letter before P (O, N, M).

    4. Requirements for Cable Coding: You'll need an ENET coding cable and a Windows laptop with at least Windows 10.`
  },
  {
    question: "Will Fullscreen CarPlay Add-On Work on My BMW Idrive?",
    answer: `To determine compatibility with your BMW unit:

    1. Check Software Version: Navigate to Maps > Options > Settings > Position & Version History > Version Information.

    2. Compatibility Check:
       - For P, Q, R, S, U, V, W, X, or Y Versions: Cable coding is necessary
       - For N or O Versions: Both USB and cable coding are viable options

    3. Cable Coding Requirements: You'll need an ENET coding cable and a Windows laptop with Windows 10 or newer.`
  }
];

export function FAQ() {
  return (
    <section className="py-20 bg-[#111111]" id="faq">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400">
            Find answers to common questions about our navigation updates and FSC codes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 px-6"
              >
                <AccordionTrigger className="text-white hover:text-red-400 w-full text-center">
                  <div className="w-full text-center">
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 whitespace-pre-line text-center">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}