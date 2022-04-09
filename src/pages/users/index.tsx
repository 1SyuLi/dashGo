import {
    Text,
    Box,
    Button,
    Checkbox,
    Flex,
    Heading,
    Icon,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useBreakpointValue
} from "@chakra-ui/react";

import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Box>
            <Header />

            <Flex w='100%' my='6' maxW={1280} mx='auto' px='6'  >
                <Sidebar />

                <Box flex={1} borderRadius="8" bg="gray.800" p="8">
                    <Flex mb={8} justify="space-between" align="center" >
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>

                        <Button cursor="pointer" as="a" size="sm" fontSize="small" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
                            Criar novo
                        </Button>
                    </Flex>

                    <Table colorScheme="whiteAlpha" >
                        <Thead>
                            <Tr>
                                <Th px={["4", "4", "6"]} color="gray.300" w="8" >
                                    <Checkbox colorScheme="pink" />
                                </Th>

                                <Th>Usuário</Th>
                                {isWideVersion && <Th>Data de cadastro</Th>}
                                <Th w={8}></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Ruan Pablo</Text>
                                        <Text fontSize="small" color="gray.300">
                                            ruangoio01@gmail.com
                                        </Text>
                                    </Box>
                                </Td>
                                {isWideVersion && <Td>17 de Março, 2022</Td>}
                                <Td>
                                    {!isWideVersion &&
                                        <Button cursor="pointer" as="a" size="sm" fontSize="small" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
                                            Editar
                                        </Button>
                                    }
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}