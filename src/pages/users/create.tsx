import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";


import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

interface CreateUserFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().email('Informe um email válido').required('Email é obrigatório'),
    password: yup.string().required('Senha é obrigatória').min(6, 'Senha deve ter no mínimo 6 caracteres'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas não conferem'),
});

export default function CreateUser() {

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createUserFormSchema),
    });

    const { errors } = formState;

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        console.log(values);
    }

    return (
        <Box>
            <Header />

            <Flex w='100%' my='6' maxW={1280} mx='auto' px='6'  >
                <Sidebar />

                <Box
                    as="form"
                    flex={1}
                    borderRadius="8"
                    bg="gray.800"
                    p={["6", "8"]}
                    onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size="large" fontWeight="normal">Criar usuário</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing={8} >
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%" >
                            <Input
                                name="name"
                                label="Nome completo"
                                {...register('name')}
                                error={errors.name}
                            />

                            <Input
                                name="email"
                                type="email"
                                label="E-mail"
                                {...register('email')}
                                error={errors.email}
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%" >
                            <Input
                                name="password"
                                type="password"
                                label="Senha"
                                {...register('password')}
                                error={errors.password}
                            />

                            <Input
                                name="password_confirmation"
                                type="password"
                                label="Confirmação da senha"
                                {...register('confirmPassword')}
                                error={errors.confirmPassword}
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end"  >
                        <HStack spacing="4" >
                            <Link href="/users" passHref>
                                <Button
                                    as="a"
                                    colorScheme="whiteAlpha"
                                >
                                    Cancelar
                                </Button>
                            </Link>

                            <Button
                                colorScheme="pink"
                                type="submit"
                                isLoading={formState.isSubmitting}
                            >
                                Salvar
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}