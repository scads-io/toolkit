import throttle from "lodash/throttle";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BottomNav from "../../components/BottomNav";
import { Box } from "../../components/Box";
import Flex from "../../components/Box/Flex";
import MenuItems from "../../components/MenuItems/MenuItems";
import { SubMenuItems } from "../../components/SubMenuItems";
import { useMatchBreakpoints } from "../../hooks";
import ScadsPrice from "../../components/ScadsPrice/ScadsPrice";
import { MENU_HEIGHT, MOBILE_MENU_HEIGHT, TOP_BANNER_HEIGHT, TOP_BANNER_HEIGHT_MOBILE } from "./config";
import { NavProps } from "./types";
import { darkColors, ThemeSwitcher } from "../..";
import LangSelector from "../../components/LangSelector/LangSelector";
import DesktopLogo from "./components/DesktopLogo";
import MobileLogo from "./components/MobileLogo";
import { color } from "styled-system";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  border-image-slice: 1;
  transform: translate3d(0, 0, 0);

  padding-left: 16px;
  padding-right: 16px;
`;

const FixedContainer = styled.div<{ showMenu: boolean; height: number }>`
  position: fixed;
  top: ${({ showMenu, height }) => (showMenu ? 0 : `-${height}px`)};
  left: 0;
  transition: top 0.2s;
  height: ${({ height }) => `${height}px`};
  width: 100%;
  z-index: 20;
`;

const BodyWrapper = styled(Box)`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;
`;

const Menu: React.FC<NavProps> = ({
  userMenu,
  isDark,
  toggleTheme,
  currentLang,
  setLang,
  links,
  subLinks,
  activeItem,
  activeSubItem,
  langs,
  children,
}) => {
  const { isMobile } = useMatchBreakpoints();
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);

  const totalTopMenuHeight = MENU_HEIGHT;

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current || currentOffset <= totalTopMenuHeight) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [totalTopMenuHeight]);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  const subLinksWithoutMobile = subLinks?.filter((subLink) => !subLink.isMobileOnly);
  const subLinksMobileOnly = subLinks?.filter((subLink) => subLink.isMobileOnly);

  return (
    <Wrapper>
      <FixedContainer showMenu={showMenu} height={totalTopMenuHeight}>
        <StyledNav style={isMobile ? {background: darkColors.backgroundAlt} : {}}>
          <Flex>
            {!isMobile && <DesktopLogo href={homeLink?.href ?? "/"} />}
            {isMobile && <MobileLogo href={homeLink?.href ?? "/"} />}
          </Flex>
          <Flex alignItems="center" height="100%">
            {!isMobile && <MenuItems mr="4px" items={links} activeItem={activeItem} activeSubItem={activeSubItem} />}
            <Box mt="4px">
              <LangSelector
                currentLang={currentLang}
                langs={langs}
                setLang={setLang}
                buttonScale="xs"
                color="overlay"
                hideLanguage
              />
            </Box> 
             {/*
            <Box mt="4px">
              <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} buttonScale="xs" color="textSubtle" />
            </Box> */}
            {userMenu}
          </Flex>
        </StyledNav>
      </FixedContainer>
      {subLinks && (
        <Flex justifyContent="space-around">
          <SubMenuItems items={subLinksWithoutMobile} mt={`${totalTopMenuHeight + 1}px`} activeItem={activeSubItem} />

          {subLinksMobileOnly?.length > 0 && (
            <SubMenuItems
              items={subLinksMobileOnly}
              mt={`${totalTopMenuHeight + 1}px`}
              activeItem={activeSubItem}
              isMobileOnly
            />
          )}
        </Flex>
      )}
      <BodyWrapper mt={!subLinks ? `${totalTopMenuHeight + 1}px` : "0"}>
        <Inner isPushed={false} showMenu={showMenu}>
          {children}
        </Inner>
      </BodyWrapper>
      {isMobile && <BottomNav items={links} activeItem={activeItem} activeSubItem={activeSubItem} />}
    </Wrapper>
  );
};

export default Menu;
