import React from 'react';
import { Menu } from './';
import { IconName } from '../Icon';
import { Dropdown } from '../Dropdown';
import { DefaultButton } from '../Button';

export default {
    title: 'Menu',
    component: Menu,
};

const Overlay = (disruptive: boolean) => (
    <Menu
        onChange={(item) => {
            console.log(item);
        }}
        disruptive={disruptive}
        items={[
            {
                icon: IconName.mdiCalendar,
                text: 'Date',
                value: 'date 1',
            },
            {
                icon: IconName.mdiThumbUpOutline,
                text: 'Thumbs up',
                value: 'date 1',
            },
            {
                icon: IconName.mdiSchool,
                text: 'School',
                value: 'date 1',
            },
            {
                icon: IconName.mdiCalendar,
                text: 'Date',
                value: 'date 1',
            },
            {
                icon: IconName.mdiThumbUpOutline,
                text: 'Thumbs up',
                value: 'date 1',
            },
            {
                icon: IconName.mdiSchool,
                text: 'School',
                value: 'date 1',
            },
            {
                icon: IconName.mdiCalendar,
                text: 'Date',
                value: 'date 1',
            },
            {
                icon: IconName.mdiThumbUpOutline,
                text: 'Thumbs up',
                value: 'date 1',
            },
            {
                icon: IconName.mdiSchool,
                text: 'School',
                value: 'date 1',
            },
        ]}
    />
);

export const Menus = () => (
    <>
        <p>Menu</p>
        <Dropdown overlay={Overlay(false)}>
            <DefaultButton text={'Menu dropdown'} />
        </Dropdown>
        <br />
        <br />
        <br />
        <p>Menu (disruptive)</p>
        <Dropdown overlay={Overlay(true)}>
            <DefaultButton text={'Menu dropdown'} disruptive />
        </Dropdown>
    </>
);
