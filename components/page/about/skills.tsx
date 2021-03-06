import Icon from "@chakra-ui/icon";
import {
  Box,
  Flex,
  GridItem,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { Progress } from "@chakra-ui/progress";
import { IconType } from "react-icons";
import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoLaravel,
  IoLogoReact,
  IoLogoVue,
  IoLogoWordpress,
} from "react-icons/io5";
import { SiBootstrap, SiPhp, SiSvelte, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <Box>
      <SimpleGrid
        columns={[1, , 2, 3]}
        spacingX="8"
        spacingY="10"
        mb={8}
        mt={12}
        layerStyle="net"
        px={4}
        py={12}
      >
        <Skill name="HTML" level={95} icon={IoLogoHtml5} />
        <Skill name="CSS" level={87} icon={IoLogoCss3} />
        <Skill name="Javascript" level={80} icon={IoLogoJavascript} />

        <Skill name="ReactJs" level={87} icon={IoLogoReact} />
        <Skill name="VueJs" level={75} icon={IoLogoVue} />
        <Skill name="Svelte" level={60} icon={SiSvelte} />

        <Skill name="PHP" level={85} icon={SiPhp} />
        <Skill name="Laravel" level={85} icon={IoLogoLaravel} />
        <Skill name="Wordpress" level={80} icon={IoLogoWordpress} />

        <Skill name="Chakra UI" level={87} icon={ChakraLogo} />
        <Skill name="Bootstrap" level={85} icon={SiBootstrap} />
        <Skill name="Tailwind" level={82} icon={SiTailwindcss} />
      </SimpleGrid>
    </Box>
  );
};

export default Skills;

const Skill = (props: { name: string; level: number; icon: IconType }) => {
  return (
    <GridItem>
      <Stack spacing={5}>
        <Flex>
          <Icon as={props.icon} fontSize="xl" mr={2} my="auto" />
          <Text fontWeight="600" textTransform="uppercase">
            {props.name}
          </Text>
          <Spacer />
          <Text fontWeight="thin">{props.level}%</Text>
        </Flex>
        <Progress value={props.level} colorScheme="brand" size="xs" hasStripe />
      </Stack>
    </GridItem>
  );
};

const ChakraLogo = () => (
  <Icon
    h={5}
    my="auto"
    mr={2}
    w="auto"
    viewBox="0 0 260 257"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="257" height="257" rx="128.5" fill="url(#logo)"></rect>

    <path
      d="M69.558 133.985l87.592-86.9891c1.636-1.6251 4.27.3525 3.165 2.377l-32.601 59.7521c-.728 1.332.237 2.958 1.755 2.958h56.34c1.815 0 2.691 2.223 1.364 3.462l-98.7278 92.142c-1.7702 1.652-4.4051-.676-2.9839-2.636l46.7357-64.473c.958-1.322.014-3.174-1.619-3.174H70.9673c-1.7851 0-2.6759-2.161-1.4093-3.419z"
      fill="#fff"
    ></path>

    <defs>
      <linearGradient
        id="logo"
        x1="128.5"
        x2="128.5"
        y2="257"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#7BCBD4"></stop>
        <stop offset="1" stop-color="#29C6B7"></stop>
      </linearGradient>
    </defs>
  </Icon>
);
