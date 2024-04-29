import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Button } from '@/components';
import { Form, InputField } from '@/components/Form';
import ABI from '/Users/szymonlyzwinski/Documents/Ethereum /sienu/src/ABI/FactoryContract.json';
const ethers = require('ethers');

const contractAddress = '0xdd796D528145000f1Df16995cDAaCe5eA6Cf39A6';

import {
  createCompanyDefaults,
  CreateCompanySchema,
  createCompanySchema,
} from '../../../companies/models';

const FormWrapper = styled.div`
  width: 800px;
`;

const ButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};
  display: inline-flex;
`;

export const MintToken = () => {
  const form = useForm<CreateCompanySchema>({
    resolver: zodResolver(createCompanySchema()),
    defaultValues: createCompanyDefaults,
    mode: 'all',
    criteriaMode: 'all',
  });

  const onSubmit = async (formData: CreateCompanySchema) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(contractAddress, ABI, signer);
    const tx = await contract.createToken(formData.name, formData.symbol);
    await tx.wait();
  };
  return (
    <FormWrapper>
      <Form form={form} name="createCompanyForm" onSubmit={onSubmit}>
        <InputField name="tokenName" label="Token name" />
        <InputField name="tokenSymbol" label="Token Symbol" />
        <ButtonContainer>
          <Button variant="primary" type="submit">
            Mint
          </Button>
        </ButtonContainer>
      </Form>
    </FormWrapper>
  );
};
