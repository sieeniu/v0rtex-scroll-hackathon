import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { ethers } from 'ethers';
import { Button } from '@/components';
import { Form, InputField } from '@/components/Form';
import ABI from '/Users/szymonlyzwinski/Documents/Ethereum /sienu/src/ABI/MarketplaceContract.json';

import {
  createCompanyDefaults,
  CreateCompanySchema,
  createCompanySchema,
} from '../../../companies/models';

const contractAddress = '0xfDa9377106C66d6C312FA31648F1267e26153470';

const FormWrapper = styled.div`
  width: 800px;
`;

const ButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};
  display: inline-flex;
`;

export const BuyToken = () => {
  const form = useForm<CreateCompanySchema>({
    resolver: zodResolver(createCompanySchema()),
    defaultValues: createCompanyDefaults,
    mode: 'all',
    criteriaMode: 'all',
  });

  const onSubmit = async (formData: CreateCompanySchema) => {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, ABI, signer);
    const tx = await contract.buyToken(formData.tokenID, {
      value: ethers.utils.parseEther(formData.etherAmount),
    });
    await tx.wait();
  };
  return (
    <FormWrapper>
      <Form form={form} name="createCompanyForm" onSubmit={onSubmit}>
        <ButtonContainer>
          <Button variant="primary" type="submit">
            Buy
          </Button>
        </ButtonContainer>
      </Form>
    </FormWrapper>
  );
};
