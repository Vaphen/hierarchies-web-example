'use client';
import { IotaClient, getFullnodeUrl } from '@iota/iota-sdk/client';
import { HierarchiesClientReadOnly } from '@iota/hierarchies/web';
import { useEffect } from 'react';

export const Test = () => {

    const createHierarchiesClientReadOnly = async () => {
        const iotaClient = new IotaClient({ url: getFullnodeUrl('testnet') });
        const hierarchiesClientReadOnly = await HierarchiesClientReadOnly.create(
            iotaClient,
        );
        console.log('hierarchiesClientReadOnly', hierarchiesClientReadOnly);
    }

    const createHierarchiesClientReadOnlyWithPkgId = async () => {
        const iotaClient = new IotaClient({ url: getFullnodeUrl('testnet') });
        const hierarchiesClientReadOnly = await HierarchiesClientReadOnly.createWithPkgId(
            iotaClient,
            '0xbaa47178b92a43d08f79c029a385d5aff75e4e1010e12ea5105fe68f4e9ce8ef',
        );
        console.log('hierarchiesClientReadOnlyWithPkgId', hierarchiesClientReadOnly);
    }


    useEffect(() => {
        createHierarchiesClientReadOnly();
        createHierarchiesClientReadOnlyWithPkgId();
    }, [])


    return <div>Test Hierarchy Client Instantiation</div>;
}