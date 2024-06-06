"use client";
import React, { useEffect, useState } from 'react'
import { CardHoverEffectDemo } from '../cardhover';
import { Tabs, Tab, Card, CardBody, Chip } from "@nextui-org/react";
import { Englishrule, GkData, MathsData, ReasoningData } from "./data";
import { ResoningIcon } from "./ResoningIcon";
import { MathsIcon } from './MathsIcon';
import { GkIcon } from './GkIcon';
import { EnglishIcon } from './EnglishIcon'

function Rules() {


  const [English, setEnglish] = useState(0);
  const [Maths, setMaths] = useState(0);
  const [Reasoning, setReasoning] = useState(0);
  const [Gk, setGk] = useState(0);


  useEffect(() => {
    setEnglish(Englishrule.length)
    setMaths(MathsData.length);
    setReasoning(ReasoningData.length);
    setGk(GkData.length);
  }, [])



  return (
    <div className="max-w-4xl mx-auto pb-40 dark:bg-black ">
      <p className="text-2xl mt-20 md:text-4xl mb-5 lg:text-7xl text-blue-800  font-bold inter-var text-center">
        RULES
      </p>

      <div className="flex w-full flex-col">
        <Tabs aria-label="Options" color='primary' variant='underlined'>
          <Tab key="english"
            title={

              <div className="flex items-center space-x-2">
                <EnglishIcon />
                <span>English</span>
                <Chip size="sm" variant="faded">{English}</Chip>
              </div>
            }
          >
            <Card>
              <CardBody>
                <CardHoverEffectDemo items={Englishrule} />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="maths" title={

            <div className="flex items-center space-x-2">
              <MathsIcon />
              <span>Maths</span>
              <Chip size="sm" variant="faded">{Maths}</Chip>
            </div>
          }>
            <Card>
              <CardBody>
                <CardHoverEffectDemo items={MathsData} />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="res" title={
            <div className="flex items-center space-x-2">
              <ResoningIcon />
              <span>Reasoning</span>
              <Chip size="sm" variant="faded">{Reasoning}</Chip>
            </div>
          }>
            <Card>
              <CardBody>
                <CardHoverEffectDemo items={ReasoningData} />
              </CardBody>
            </Card>
          </Tab>

          <Tab key="gk" title={
            <div className="flex items-center space-x-2">
              <GkIcon />
              <span>GK_GS</span>
              <Chip size="sm" variant="faded">{Gk}</Chip>
            </div>
          }>
            <Card>
              <CardBody>
                <CardHoverEffectDemo items={GkData} />
              </CardBody>
            </Card>
          </Tab>

        </Tabs>
      </div>
    </div>
  )
}

export default Rules


