import { ethers } from 'ethers';
import Link from 'next/link';
import { ChangeEvent, useMemo, useState } from 'react';
import styled from 'styled-components';

import { Button, type ColumnData, Dialog, Search, Table } from '@/components';
import { marketplaceContractAbi } from '@/contracts';
import { UnauthorizedMessage } from '@/modules/auth';
import { routes } from '@/routes';

import { useGetMarketplace } from '../../hooks';
import { ButtonContainer, Wrapper } from './MarketplaceList.styles';

const ActionButtonsWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export const MarketplaceList = () => {
  const contractAddress = process.env.NEXT_PUBLIC_BUY_TOKEN_ADDRESS as string;

  const { data, isLoading } = useGetMarketplace({
    first: 10,
  });

  const columns: Record<string, ColumnData> = useMemo(
    () => ({
      amount: {
        label: 'Amount',
      },
      price: {
        label: 'Price',
      },
      actionButtons: {
        label: '',
      },
    }),
    [],
  );

  const onBuyButtonClick = async (e: any) => {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      contractAddress,
      marketplaceContractAbi,
      signer,
    );
    const tx = await contract.buyToken(e.Marketplace_id, {
      value: ethers.utils.parseEther(e.price),
    });
    await tx.wait();
  };

  const tableData = useMemo(() => {
    if (!data) return [];

    return data.listingCreateds.map(token => ({
      amount: <span>{token.amount}</span>,
      price: <span>{token.price} ETH</span>,
      actionButtons: (
        <ActionButtonsWrapper>
          <Button onClick={() => onBuyButtonClick(token)} variant="primary">
            Buy
          </Button>
        </ActionButtonsWrapper>
      ),
    }));
  }, [data]);

  return (
    <>
      <Wrapper>
        <Table data={tableData} columns={columns} isLoading={isLoading} />
      </Wrapper>
    </>
  );
};
