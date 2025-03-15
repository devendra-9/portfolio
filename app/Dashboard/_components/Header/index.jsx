import ButtonV1 from "@/app/Components/Button";
import Flex from "@/app/Components/Flex";
import Text from "@/app/Components/Text";
import { ThemeContext } from "@/app/context/darklight_theme.jsx";
import React, { useContext } from "react";

const Header = () => {
  //   const [theme, settheme] = useContext(ThemeContext);

  //   const handle_mode = () => {
  //     settheme(!theme);
  //   };
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
          <ButtonV1
            width={"4"}
            height={"4"}
            color={"white"}
            fontFamily={"arial"}
            fontSize={"20px"}
            display={"flex"}
            justify={"center"}
            alignItem={"center"}
            border={"1px solid white"}
            cursor={"pointer"}
            radius={"3"}
            // onClick={handle_mode}
          >
            {/* {theme ? "Dark" : "Light"} */}
          </ButtonV1>
          <Text
            width={"4"}
            height={"4"}
            color={"white"}
            fontFamily={"arial"}
            fontSize={"20px"}
            display={"flex"}
            justify={"center"}
            alignItem={"center"}
            cursor={"pointer"}
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
            cursor={"pointer"}
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
            cursor={"pointer"}
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
            cursor={"pointer"}
          >
            Contact
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
