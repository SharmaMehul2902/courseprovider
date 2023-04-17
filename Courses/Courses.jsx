import { Container, Heading, Input } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

const Courses = () => {
    const [keyword, setKeyword]= useState("");

    return <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>

        <Heading children="All Courses" m={'8'} />

    </Container>
    
};

export default Courses;
