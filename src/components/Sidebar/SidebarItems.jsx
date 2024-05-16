import React from "react";
import {
  ItemsList,
  ItemWrapper,  
} from "./SidebarStyles";
import {
  ProjectIcon,
  DashboardIcon,
  EarningIcon,
  EngineerIcon,
  TechnologyIcon,
  SkillsIcon,
  OverviewIcon,
} from "../Icons";
import ListItem from './ListItem';

function Sidebar() {
  return (
    <ItemsList>
          <ListItem to="/dashboard">
            <ItemWrapper>
              <DashboardIcon />
              <div className="span-gap">Dashboard</div>
            </ItemWrapper>
          </ListItem>
          <ListItem to="/project">
            <ItemWrapper>
              <ProjectIcon />
              <div className="span-gap">Project</div>
            </ItemWrapper>
          </ListItem>
          <ListItem to="/earning">
            <ItemWrapper>
              <EarningIcon />
              <div className="span-gap">Earning</div>
            </ItemWrapper>
          </ListItem>
          <ListItem to="/engineer">
            <ItemWrapper>
              <EngineerIcon />
              <div className="span-gap">Engineer</div>
            </ItemWrapper>
          </ListItem>
          <ListItem to="/technology">
            <ItemWrapper>
              <TechnologyIcon />
              <div className="span-gap">Technology</div>
            </ItemWrapper>
          </ListItem>
          <ListItem to="/skills">
            <ItemWrapper>
              <SkillsIcon />
              <div className="span-gap">Skills</div>
            </ItemWrapper>
          </ListItem>
          <ListItem to="/overview">
            <ItemWrapper>
              <OverviewIcon />
              <div className="span-gap">Overview</div>
            </ItemWrapper>
          </ListItem>
      </ItemsList>
  );
}

export default Sidebar;