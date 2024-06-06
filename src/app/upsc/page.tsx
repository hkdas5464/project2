"use client";
import React from 'react'
import { CardHoverEffectDemo } from '../cardhover';
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import  {CurrentAffairs, EconomicsData, Politydata, Geography, ArtandCulture}  from "./data";



function UPSC() {
  return (
    <div className="max-w-4xl mx-auto pb-40 dark:bg-black">
      <p className="text-2xl mt-20 md:text-4xl mb-5 lg:text-7xl text-white font-bold inter-var text-center">
        SSC CGL
      </p>
      
      <div className="flex w-full flex-col  dark:bg-white">
      <Tabs aria-label="Options" variant="underlined" color="primary">
        <Tab key="poli" title="Polity">
          <Card>
            <CardBody>
             <CardHoverEffectDemo items={Politydata}/>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="eco" title="Economics">
          <Card>
            <CardBody>
              <CardHoverEffectDemo items={EconomicsData}/>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="geo" title="Geography">
          <Card>
            <CardBody>
              <CardHoverEffectDemo items={Geography}/>
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
        <Tab key="art" title="Art & Culture">
          <Card>
            <CardBody>
             <CardHoverEffectDemo items={ArtandCulture}/>
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
      </div>
  )
}

export default UPSC


