import {
  Flex,
  Heading,
  Icon,
  Text,
  Popover,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  PopoverTrigger,
  Tooltip
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export default function InfosContinent() {
  const PopoverTriggerGb: React.FC<{ children: any }> = PopoverTrigger
  return (
    <Flex
      align="center" justify="space-between"
    >
      <Flex
        direction="column" justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          fontSize={["2xl", "5xl"]} color="yellow.400"
          fontWeight="500"
        >
          50
        </Heading>
        <Text
          fontWeight="500" fontSize={["md", "xl"]}
          color="gray.700"
        >
          países
        </Text>
      </Flex>

      <Flex
        direction="column" justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          fontSize={["2xl", "5xl"]} color="yellow.400"
          fontWeight="500"
        >
          60
        </Heading>
        <Text
          fontWeight="500" fontSize={["md", "xl"]}
          color="gray.700"
        >
          línguas
        </Text>
      </Flex>

      <Flex
        direction="column" justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          fontSize={["2xl", "5xl"]} color="yellow.400"
          fontWeight="500"
        >
          27
        </Heading>
        <Text
          fontWeight="500" fontSize={["md", "xl"]}
          color="gray.700"
        >
          cidades +100
          <Tooltip hasArrow label='Paris, Europa, Chile, Canada, China' bg='gray.300' color='black'>
            <span>
              <Icon cursor="pointer" as={RiInformationLine}
                ml="1" color="gray.400"
                w={["10px", "16px"]} h={["10px", "16px"]}
              />
            </span>
          </Tooltip>
        </Text>
      </Flex>
    </Flex>
  )
}