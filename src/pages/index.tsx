import Head from 'next/head'
import { Flex, Button, Stack } from '@chakra-ui/react';

import { Input } from '../components/Form/Input';
import { SubmitHandler, useForm } from 'react-hook-form';

type SignInFormData = {
    email: string;
    password: string;
}

export default function SignIn() {
    const { register, handleSubmit, formState } = useForm();

    const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
        console.log(values);
    }

    return (
        <>
            <Head>
                <title>Home | dashGo</title>
            </Head>

            <Flex w="100vw" h="100vh" align="center" justify="center">
                <Flex
                    as="form"
                    w="100%"
                    maxW="360px"
                    bg="gray.800"
                    p="8"
                    borderRadius={9}
                    flexDir="column"
                    onSubmit={handleSubmit(handleSignIn)}
                >
                    <Stack mt={4}>
                        <Input
                            name="email"
                            type="email"
                            label='E-mail'
                            {...register('email')}
                        />

                        <Input
                            name="password"
                            type="password"
                            label='Senha'
                            {...register('password')}
                        />
                    </Stack>

                    <Button
                        type='submit'
                        mt={6}
                        colorScheme='pink'
                        size="lg"
                        isLoading={formState.isSubmitting}
                    >
                        Entrar
                    </Button>
                </Flex>
            </Flex>

        </>
    )
}
