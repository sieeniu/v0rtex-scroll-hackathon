import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Button } from '@/components';
import { Form, InputField } from '@/components/Form';

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
  const form = useForm<CreateCompanySchema>({
    resolver: zodResolver(createCompanySchema()),
    defaultValues: createCompanyDefaults,
    mode: 'all',
    criteriaMode: 'all',
  });

  const onSubmit = (formData: CreateCompanySchema) => {
    console.log(formData);
  };
  return (
    <FormWrapper>
      <Form form={form} name="createCompanyForm" onSubmit={onSubmit}>
        <InputField name="registrationDocuments" label="Company name" />
        <InputField name="taxIDNumber" label="Tax ID number" />
        <InputField name="proofOfAddress" label="Address" />
        <InputField name="bankAccountNumber" label="IBAN" />
        <InputField name="anualReports" label="Annual report" />
        <InputField name="businessWebsite" label="Website" />
        <ButtonContainer>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </ButtonContainer>
      </Form>
    </FormWrapper>
  );
};
