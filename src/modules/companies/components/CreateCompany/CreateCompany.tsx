import { zodResolver } from '@hookform/resolvers/zod';
import { ethers } from 'ethers';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Button } from '@/components';
import { Form, InputField } from '@/components/Form';
import { businessContractAbi } from '@/contracts';

import {
  createCompanyDefaults,
  CreateCompanySchema,
  createCompanySchema,
} from '../../models';

const FormWrapper = styled.div`
  width: 800px;
`;

const ButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};
  display: inline-flex;
`;

export const CreateCompany = () => {
  const contractAddress = process.env
    .NEXT_PUBLIC_BUSINESS_MANAGEMENT_ADDRESS as string;

  const form = useForm<CreateCompanySchema>({
    resolver: zodResolver(createCompanySchema()),
    defaultValues: createCompanyDefaults,
    mode: 'all',
    criteriaMode: 'all',
  });

  const onSubmit = async (formData: CreateCompanySchema) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      contractAddress,
      businessContractAbi,
      signer,
    );
    const tx = await contract.createBusiness(
      formData.registrationDocuments,
      formData.taxIDNumber,
      formData.proofOfAddress,
      formData.bankAccountNumber,
      formData.financialDocuments,
      formData.anualReports,
      formData.businessWebsite,
    );

    await tx.wait();
  };
  return (
    <FormWrapper>
      <Form form={form} name="createCompanyForm" onSubmit={onSubmit}>
        <InputField
          name="registrationDocuments"
          label="Company name"
          placeholder="Full name of the company"
        />
        <InputField
          name="taxIDNumber"
          label="Tax ID number"
          placeholder="Taxpayer identification number"
        />
        <InputField
          name="proofOfAddress"
          label="Address"
          placeholder="Street, City - Post Code"
        />
        <InputField
          name="bankAccountNumber"
          label="IBAN"
          type="number"
          placeholder="Bank account number"
          min="0"
        />
        <InputField name="financialDocuments" label="Documents" />
        <InputField
          name="anualReports"
          label="Annual report"
          placeholder="In thousands of dollars"
        />
        <InputField
          name="businessWebsite"
          label="Website"
          placeholder="Full URL address of the company"
        />
        <ButtonContainer>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </ButtonContainer>
      </Form>
    </FormWrapper>
  );
};
