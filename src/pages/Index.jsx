import { Box, Container, Heading, Text, VStack, Image, Button, Link, Icon, HStack, Divider } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8} as="section" textAlign="center">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MDg5OTYzMzB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="HS_Pro Portrait" mb={4} />
        <Heading as="h1" size="xl">
          HS_Pro
        </Heading>
        <Text fontSize="lg">Developer | Designer | Creator</Text>
        <HStack spacing={4} justify="center">
          <Link href="https://github.com/hs_pro" isExternal>
            <Button leftIcon={<FaGithub />} colorScheme="gray">
              GitHub
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/hs_pro" isExternal>
            <Button leftIcon={<FaLinkedin />} colorScheme="blue">
              LinkedIn
            </Button>
          </Link>
          <Link href="mailto:hs_pro@example.com">
            <Button leftIcon={<FaEnvelope />} colorScheme="red">
              Email
            </Button>
          </Link>
          <Link href="/resume.pdf" isExternal>
            <Button leftIcon={<FaFileAlt />} colorScheme="green">
              Resume
            </Button>
          </Link>
        </HStack>
      </VStack>

      <Divider my={10} />

      <VStack spacing={8} as="section">
        <Heading as="h2" size="lg">
          About Me
        </Heading>
        <Text fontSize="md">Hello! I'm HS_Pro, a passionate developer with a love for building beautiful and functional web applications. I specialize in React and have a keen eye for design. When I'm not coding, you can find me exploring the latest tech trends or out in nature capturing stunning landscapes with my camera.</Text>
      </VStack>

      <Divider my={10} />

      <VStack spacing={8} as="section">
        <Heading as="h2" size="lg">
          Projects
        </Heading>
        <VStack spacing={4} align="start">
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Project One</Heading>
            <Text mt={4}>An innovative project that solves complex problems using modern technology.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Project Two</Heading>
            <Text mt={4}>A creative design project that showcases my skills in UI/UX and interaction design.</Text>
          </Box>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
