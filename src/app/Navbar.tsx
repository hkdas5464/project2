'use client'
import React from "react";
import IconMenu from './icons/MenueIcon.jsx'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownMenu,
  Avatar,
  Dropdown,
  DropdownTrigger,
  NavbarMenu,
  NavbarMenuItem,
  Tabs,
  Tab,
  Card,
  CardBody,
} from "@nextui-org/react";
// import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
// import {AcmeLogo} from "./AcmeLogo.jsx";





export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    // Check the initial dark mode preference from localStorage or system preference
    const darkModePreference = localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(darkModePreference);
    if (darkModePreference) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];


  return (
    <Navbar  
    isBordered
    isMenuOpen={isMenuOpen}
    className="fixed"
    onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <Dropdown backdrop="blur">
            <DropdownTrigger>
              <Button
                variant="light"
              >
                <IconMenu />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Multiple selection example"
              variant="flat"
              closeOnSelect={false}
              disallowEmptySelection
              selectionMode="multiple">

              <DropdownItem key="new"  >
                <Tabs aria-label="Options" variant="underlined" color="primary" disableAnimation={false} >
                  <Tab key="photos" title="App">
                    <Card>
                      <CardBody className="dark:text-red-700 w-80" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </CardBody>
                    </Card>
                  </Tab>
                  <Tab key="music" title="Shortcut" >
                    <Card>
                      <CardBody className=" w-80">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </CardBody>
                    </Card>
                  </Tab>
                </Tabs>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        <NavbarItem isActive>

        </NavbarItem>
        <NavbarItem>

        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">

        </NavbarItem>
        <NavbarItem>
          <Button onClick={toggleDarkMode}>OK</Button>
        </NavbarItem>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>

        <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="primary"
                name="nobita"
                size="sm"
                src="https://i.pinimg.com/736x/bf/eb/a8/bfeba832a872fef7b0426e3c314041d9.jpg"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

      </NavbarContent>
    </Navbar>
  );
}
