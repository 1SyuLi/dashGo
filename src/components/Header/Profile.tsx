import { Avatar, Box, Flex, Text } from "@chakra-ui/react";


export function Profile() {


    return (
        <Flex align="center">
            <Box mr="4" textAlign="right" >
                <Text>Ruan Pablo</Text>
                <Text color="gray.300" fontSize="small" >
                    ruangoio01@gmail.com
                </Text>
            </Box>

            <Avatar size="md" name="Ruan Pablo" src="https://i.pinimg.com/originals/9f/16/d9/9f16d926f95e7ccc80b3771c50edaec3.gif" />
        </Flex>
    )
}