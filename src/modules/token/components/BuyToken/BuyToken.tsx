import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Button } from '@/components';
import { Form, InputField } from '@/components/Form';

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

export const BuyToken = () => {
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
        <InputField name="tokenName" label="Token name" />
        <InputField name="tokenSymbol" label="Token Symbol" />
        <ButtonContainer>
          <Button variant="primary" type="submit">
            Buy
          </Button>
        </ButtonContainer>
      </Form>
    </FormWrapper>
  );
};
