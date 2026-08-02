import "./ProfileCard.css";
import { Image, HStack, Button, Text, VStack } from "@chakra-ui/react";
const ProfileCard = () => {
  return (
    <VStack
      background={"grey"}
      mt={3}
      ml={3}
      align={"stretch"}
      padding={2}
      borderRadius={4}
    >
      <Image
        src="src/assets/userImage.png"
        alt="User profile"
        w="100%"
        borderRadius="md"
      />
      <HStack>
        <Text>Hours Played:</Text>
        <Text fontWeight="bold">1500</Text>
      </HStack>
      <HStack>
        <Text>Games Owned:</Text>
        <Text fontWeight="bold">43</Text>
      </HStack>
      <HStack>
        <Text>Most Played Game:</Text>
        <Text fontWeight="bold">COD</Text>
      </HStack>
      <HStack>
        <Text>Most Played Genre:</Text>
        <Text fontWeight="bold">Action</Text>
      </HStack>

      <Button variant="surface" colorPalette="blue" rounded="3xl">
        More Stats
      </Button>
    </VStack>
  );
};

export default ProfileCard;
