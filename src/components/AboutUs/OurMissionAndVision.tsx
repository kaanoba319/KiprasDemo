"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const OurMissionAndVision: React.FC = () => {
  return (
    <>
      <Accordion
        preExpanded={["a"]}
        className="our-mission-and-vision-accordion"
      >
        <AccordionItem uuid="a">
          <AccordionItemHeading>
            <AccordionItemButton>Misyonumuz</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
            KİPRAS GROUP olarak misyonumuz, estetik, işlevsellik ve sürdürülebilirliği bir araya getirerek, kullanıcıların ihtiyaçlarına ve hayallerine cevap veren, zamana meydan okuyan mimari eserler yaratmaktır.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem uuid="b">
          <AccordionItemHeading>
            <AccordionItemButton>Vizyonumuz</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
            Vizyonumuz, yenilikçi ve sürdürülebilir mimari çözümlerle, Türkiye'de ve dünyada örnek gösterilen, öncü bir mimarlık firması olmaktır.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default OurMissionAndVision;
