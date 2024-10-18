import React, { memo } from "react";
import { FormProvider } from "react-hook-form";
import { useSignupForm } from "./index.hooks";
import { Button, Stack } from "@mui/material";
import { FormTextField } from "@/components/_form/FormTextField";

type SignupFormProps = {};

export const SignupForm = memo(({}: SignupFormProps) => {
  const { formData, triggerSubmit, submitDisabled } = useSignupForm();

  return (
    <FormProvider {...formData}>
      <form onSubmit={triggerSubmit}>
        <Stack spacing={3}>
          <FormTextField name="name" label="Nome *"></FormTextField>
          <FormTextField name="emal" label="Email *"></FormTextField>
          <FormTextField name="password" label="Password *"></FormTextField>
          <Button variant="contained" type="submit" disabled={submitDisabled}>
            Salva
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
});
SignupForm.displayName = "SignupForm";
