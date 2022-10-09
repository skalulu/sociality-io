import React, { useState } from 'react';
import {ReactComponent as ReactLogo} from '../../src/logo.svg';
import data from "../data.json";
import AccordionItem from './AccordionItem';
import {TbDeviceAnalytics, TbSumOff} from 'react-icons/tb'
import {GiTalk} from 'react-icons/gi'
import {MdOutlineNotificationsNone} from 'react-icons/md'
import {FaAssistiveListeningSystems} from 'react-icons/fa'
import {DiGoogleAnalytics} from 'react-icons/di'





const [propData1, propData2] = Object.values(data.posts_by_date);
const propData = propData1.concat(propData2);
const sideValues = [...new Set(propData.map(x => x.account.username))];

const SideMenu = () => {
  
  return (
    <div className='menu-container'>
        <div className='header'>
            <ReactLogo />
        </div>
        <div className='menu-accounts'>
            {sideValues.map((sideValue, i) => (
                <img key={i} className='account-logos' src='https://picsum.photos/50/50' alt={sideValue} />
            ))}            
        </div>
        <div className='items-menu'>
            <AccordionItem logo={<MdOutlineNotificationsNone className='text-orange small-logo' />} text='NOTIFICATIONS' />
            <AccordionItem logo={<TbSumOff className='text-orange small-logo' />} text='SUMMARY' />
            <AccordionItem logo={<TbDeviceAnalytics className='text-orange small-logo' />} text='PUBLISH' />
            <AccordionItem logo={<GiTalk className='text-orange small-logo' />} text='ENGAGE' />
            <AccordionItem logo={<FaAssistiveListeningSystems className='text-orange small-logo' />} text='LISTEN' />
            <AccordionItem logo={<DiGoogleAnalytics className='text-orange small-logo' />} text='REPORT' />
        </div>
    </div>
  );
};

export default SideMenu;