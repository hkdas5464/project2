"use client";
import React from 'react'
import { CardHoverEffectDemo } from '../cardhover';
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import  {CurrentAffairs, EnglishData, Mathsdata, Reasoning}  from "./data";



function SSCMTS() {
  return (
    <div className="max-w-4xl mx-auto pb-40 bg-black">
      <p className="text-2xl mt-20 md:text-4xl mb-5 lg:text-7xl text-white font-bold inter-var text-center">
        SSC MTS
      </p>
      
      <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="math" title="Maths">
          <Card>
            <CardBody>
             <CardHoverEffectDemo items={Mathsdata}/>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="eng" title="English">
          <Card>
            <CardBody>
              <CardHoverEffectDemo items={EnglishData}/>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="res" title="Resoning">
          <Card>
            <CardBody>
              <CardHoverEffectDemo items={Reasoning}/>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="gk" title="GK">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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

export default SSCMTS


