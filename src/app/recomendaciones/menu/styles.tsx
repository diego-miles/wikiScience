
import styled from 'styled-components';




export const MenuWrapper = styled.div`
  /* overflow-y: scroll; */
  background-color: ${(props) => props.theme.colors.menu};
`;

export const ContainerIcon = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: 2px solid #BF4F74;
  // Add styling for the close icon
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
`;

export const NavContainer = styled.nav`
  /* padding: 50px 5px; */
`;

export const BranchContainer = styled.div`
  padding: 10px 10px;
`;

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;  // 2 columns
  gap: 2px;
`;

export const NavList = styled.ul`
  list-style: none;
  padding-left: 3px;
  font-size: ${(props) => props.theme.fonts.fontSize.navItemMenuBranch};

`;

export const NavListItem = styled.li`
  font-weight: bold;
  padding-top: 0px;
  padding-bottom: 5px;
`;

export const TitleBranch = styled.div`
  color: ${(props) => props.theme.colors.background3};
  font-size: ${(props) => props.theme.fonts.fontSize.navItemMenuField};
  /* padding-bottom: 5px; */

`;



export const SubTopic = styled.li`
  font-weight: 500;
  font-size: ${(props) => props.theme.fonts.fontSize.navItemMenu};
  line-height: 110%;
  padding-top: 2px;
  padding-bottom: 4px;
  border-left: 3px solid #d5dbdb;
  padding-left: 3px;
`;
