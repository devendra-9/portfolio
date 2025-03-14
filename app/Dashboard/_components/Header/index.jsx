import Flex from "@/app/Components/Flex";
import Text from "@/app/Components/Text";
import React from "react";

const Header = () => {
  return (
    <>
      <Flex
        height={"10"}
        width={"4"}
        display={"flex"}
        justify={"space-between"}
        alignItem={"center"}
        borderBottom={"1px solid white"}
      >
        <Flex width={"5"} display={"flex"} padding={"0px 15px"}>
          <Text height={"4"} fontSize={"30px"} color={"#FEE715"}>
            Devendra Kandpal
          </Text>
        </Flex>
        <Flex
          width={"5"}
          display={"flex"}
          justify={"flex-end"}
          alignItem={"center"}
          padding={"0px 15px"}
          gap={"5px"}
        >
          <Text
            width={"4"}
            height={"4"}
            color={"white"}
            fontFamily={"arial"}
            fontSize={"20px"}
            display={"flex"}
            justify={"center"}
            alignItem={"center"}
          >
            About
          </Text>
          <Text
            width={"4"}
            height={"4"}
            color={"white"}
            fontFamily={"arial"}
            fontSize={"20px"}
            display={"flex"}
            justify={"center"}
            alignItem={"center"}
          >
            Projects
          </Text>
          <Text
            width={"4"}
            height={"4"}
            color={"white"}
            fontFamily={"arial"}
            fontSize={"20px"}
            display={"flex"}
            justify={"center"}
            alignItem={"center"}
          >
            Education
          </Text>
          <Text
            width={"4"}
            height={"4"}
            color={"white"}
            fontFamily={"arial"}
            fontSize={"20px"}
            display={"flex"}
            justify={"center"}
            alignItem={"center"}
          >
            Contact
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
