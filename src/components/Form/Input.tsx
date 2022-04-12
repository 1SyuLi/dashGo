import React from "react";
import { FieldError } from 'react-hook-form';

import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input as ChakraInput,
    InputProps as ChakraInputProps
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
    label?: string,
    error?: FieldError,
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ error = null, label, ...props }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel htmlFor="password">{label}</FormLabel>}

            <ChakraInput
                {...props}
                id={props.name}
                ref={ref}
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{ bgColor: 'gray.900' }}
                size="lg"
            />

            {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
    );
});