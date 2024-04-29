import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import ABI from '/Users/szymonlyzwinski/Documents/Ethereum /sienu/src/ABI/MarketplaceContract.json';
import { Button } from '@/components';
import { Form, InputField } from '@/components/Form';
import { ethers } from 'ethers';
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

export const ListToken = () => {
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

    const tx = await contract.approve(contractAddress, formData.amount);
    await tx.wait();
    const tx2 = await contract.depositToken(formData.amount);
    await tx2.wait();
    const tx3 = await contract.listToken(formData.amount, formData.price);
    await tx3.wait();
  };
  return (
    <FormWrapper>
      <Form form={form} name="createCompanyForm" onSubmit={onSubmit}>
        <InputField name="tokenAmount" label="Amount" />
        <InputField name="tokenPrice" label="Price" />
        <ButtonContainer>
          <Button variant="primary" type="submit">
            List
          </Button>
        </ButtonContainer>
      </Form>
    </FormWrapper>
  );
};
