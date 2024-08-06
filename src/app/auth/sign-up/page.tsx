import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const SignUp = async ({ children }: Props) => {
  const user = await currentUser();
  if (user) {
    redirect('/');
    return null; // Add a return null after redirect to avoid rendering the component
  }
};

export default SignUp;
