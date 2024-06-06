"use client";
import React from 'react'
import { CardHoverEffectDemo } from '../cardhover';
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import  {CurrentAffairs, Parmarpyq,Gkbook}  from "./data";

function Parmar() {
  return (
    <div className="max-w-4xl mx-auto pb-40 bg-black">
      <p className="text-2xl mt-20 md:text-4xl mb-5 lg:text-7xl text-white font-bold inter-var text-center">
     GK_GS BOOKS
      </p>
      <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="GK" title="GK_SERIES">
          <Card>
            <CardBody>
             <CardHoverEffectDemo items={Gkbook}/>
            </CardBody>
          </Card>  
        </Tab>   
        <Tab key="current" title="Current Affairs">
          <Card>
            <CardBody>
             <CardHoverEffectDemo items={CurrentAffairs}/>
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
      </div>
  )
}

export default Parmar