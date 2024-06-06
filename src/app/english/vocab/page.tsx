"use client";
import React from 'react'
import { CardHoverEffectDemo } from '../../cardhover';
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import  {Antonyms, Synonyms, OWS, Idioms, Spelling}  from "./data";



function SSCCGL() {
  return (
    <div className="max-w-4xl mx-auto pb-40 bg-black">
      <p className="text-2xl mt-20 md:text-4xl mb-5 lg:text-7xl text-white font-bold inter-var text-center">
        SSC CGL
      </p>
      
      <div className="flex w-full flex-col">
      <Tabs aria-label="Options" variant="underlined" color="primary">
        <Tab key="synonyms" title="Synonyms" >
          <Card>
            <CardBody>
             <CardHoverEffectDemo items={Synonyms}/>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="anto" title="Antonyms">
          <Card>
            <CardBody>
              <CardHoverEffectDemo items={Antonyms}/>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="ows" title="OWS">
          <Card>
            <CardBody>
              <CardHoverEffectDemo items={OWS}/>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="idioms" title="Idioms">
          <Card>
            <CardBody>
              <CardHoverEffectDemo items={Idioms}/>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="spelling" title="Spelling">
          <Card>
            <CardBody>
             <CardHoverEffectDemo items={Spelling}/>
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
      </div>
  )
}

export default SSCCGL


