"use client";
import React, { useState } from "react";
import IconMenu from "./icons/MenueIcon.jsx";
import { animals } from "./data.js";
import { ItemCounter } from "./icons/ItemCounter.jsx";
import { IconWrapper } from "./icons/IconWrapper.jsx";
import { BugIcon } from "./icons/BugIcon.jsx";
import { PlayCircleIcon } from "./icons/PlayCircleIcon.jsx";
import { PullRequestIcon } from "./icons/PullRequestIcon.jsx";
import { LayoutIcon } from "./icons/LayoutIcon";
import { UsersIcon } from "./icons/UsersIcon";
import { TagIcon } from "./icons/TagIcon";
import { WatchersIcon } from "./icons/WatchersIcon.jsx";
import { ChatIcon } from "./icons/ChatIcon.jsx";
import { BookIcon } from "./icons/BookIcon.jsx";
import { LinkIcon, ListboxSection, ScrollShadow, cn } from "@nextui-org/react";

import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react"
import { ListboxWrapper } from "./ListboxWrapper.jsx";
import { DrawerFileIcon } from "./icons/DrawerFileIcon.jsx";
import { IconNotificationsOutline } from "./icons/IconNotificationsOutline.jsx";
import Icon093Drawer from "./icons/DrawerIcon.jsx";
// import SvgComponent from './drawer-svgrepo-com.jsx'

import {
  Navbar,
  NavbarMenuToggle,
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
  Input,
  SelectItem,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import Image from "next/image.js";

// import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<React.Key>("login");

  const [darkMode, setDarkMode] = React.useState(false);

  const [darkModeName, setDarkModeName] = useState("");

  React.useEffect(() => {
    // Check the initial dark mode preference from localStorage or system preference
    const darkModePreference =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(darkModePreference);
    if (darkModePreference) {
      document.documentElement.classList.add("dark");
    }

    if (!darkMode) {
      setDarkModeName("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setDarkModeName("light");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      setDarkModeName("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkModeName("light");
    }
  };

  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

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
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown backdrop="blur">
          <DropdownTrigger>
            <Button variant="light">
              <IconMenu />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Multiple selection example"
            variant="flat"
            closeOnSelect={false}
            disallowEmptySelection
          >
            <DropdownItem key="new">
              <Card className="max-w-full w-[340px] h-[400px]">
                <CardBody className="overflow-hidden">
                  <Tabs
                    key="data"
                    fullWidth
                    size="md"
                    aria-label="Tabs form"
                    onSelectionChange={setSelected}
                  >
                    <Tab key="login" title="App">
                      <ScrollShadow
                        hideScrollBar
                        offset={100}
                        orientation="horizontal"
                        className="max-w-[400px] max-h-[300px]"
                      >
                        <Listbox
                          aria-label="User Menu"
                          className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1  overflow-visible shadow-small rounded-medium"
                          itemClasses={{
                            base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
                          }}
                        >
                          <ListboxItem
                            key="issues"
                            href="job-hub"
                            endContent={<ItemCounter number={13} />}
                            startContent={
                              <IconWrapper className="bg-success/10 text-success">
                                <BugIcon className="text-lg " />
                              </IconWrapper>
                            }
                          >
                            Jobs Hub
                          </ListboxItem>
                          <ListboxItem
                            key="pull_requests"
                            endContent={<ItemCounter number={6} />}
                            startContent={
                              <IconWrapper className="bg-primary/10 text-primary">
                                <PullRequestIcon className="text-lg " />
                              </IconWrapper>
                            }
                          >
                            Request Refrence Letter
                          </ListboxItem>
                          <ListboxItem
                            key="discussions"
                            endContent={<ItemCounter number={293} />}
                            startContent={
                              <IconWrapper className="bg-secondary/10 text-secondary">
                                <ChatIcon className="text-lg " />
                              </IconWrapper>
                            }
                          >
                            Personal Informations
                          </ListboxItem>
                          <ListboxItem
                            key="actions"
                            endContent={<ItemCounter number={2} />}
                            startContent={
                              <IconWrapper className="bg-warning/10 text-warning">
                                <PlayCircleIcon className="text-lg " />
                              </IconWrapper>
                            }
                          >
                            Pay
                          </ListboxItem>
                          <ListboxItem
                            key="projects"
                            endContent={<ItemCounter number={4} />}
                            startContent={
                              <IconWrapper className="bg-default/50 text-foreground">
                                <LayoutIcon className="text-lg " />
                              </IconWrapper>
                            }
                          >
                            Learning
                          </ListboxItem>
                          <ListboxItem
                            key="releases"
                            className="group h-auto py-3"
                            endContent={<ItemCounter number={399} />}
                            startContent={
                              <IconWrapper className="bg-primary/10 text-primary">
                                <TagIcon className="text-lg" />
                              </IconWrapper>
                            }
                            textValue="Releases"
                          >
                            Favorites
                          </ListboxItem>
                          <ListboxItem
                            key="contributors"
                            endContent={<ItemCounter number={79} />}
                            startContent={
                              <IconWrapper className="bg-warning/10 text-warning">
                                <UsersIcon />
                              </IconWrapper>
                            }
                          >
                            My Account
                          </ListboxItem>
                          <ListboxItem
                            key="watchers"
                            endContent={<ItemCounter number={82} />}
                            startContent={
                              <IconWrapper className="bg-default/50 text-foreground">
                                <WatchersIcon />
                              </IconWrapper>
                            }
                          >
                            Favorites
                          </ListboxItem>
                          <ListboxItem
                            key="license"
                            endContent={
                              <span className="text-small text-default-400">
                                MIT
                              </span>
                            }
                            startContent={
                              <IconWrapper className="bg-danger/10 text-danger dark:text-danger-500">
                                <BookIcon />
                              </IconWrapper>
                            }
                          >
                            Absence
                          </ListboxItem>
                        </Listbox>
                      </ScrollShadow>
                    </Tab>
                    <Tab key="sign-up" title="Shortcut">
                     
                      <Listbox
                        aria-label="User Menu"
                        className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-small rounded-medium"
                        itemClasses={{
                          base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
                        }}
                      >
                         <ListboxItem
                          key="issues"
                          href="/job-hub"
                          endContent={<ItemCounter number={13} />}
                          startContent={
                            <IconWrapper className="bg-success/10 text-success">
                              <BugIcon className="text-lg " />
                            </IconWrapper>
                          }
                         >
                        
                        </ListboxItem>
                        <ListboxItem
                          key="pull_requests"
                          endContent={<ItemCounter number={6} />}
                          startContent={
                            <IconWrapper className="bg-primary/10 text-primary">
                              <PullRequestIcon className="text-lg " />
                            </IconWrapper>
                          }
                        >
                          Pull Requests
                        </ListboxItem>
                        <ListboxItem
                          key="discussions"
                          endContent={<ItemCounter number={293} />}
                          startContent={
                            <IconWrapper className="bg-secondary/10 text-secondary">
                              <ChatIcon className="text-lg " />
                            </IconWrapper>
                          }
                        >
                          Discussions
                        </ListboxItem>
                        <ListboxItem
                          key="actions"
                          endContent={<ItemCounter number={2} />}
                          startContent={
                            <IconWrapper className="bg-warning/10 text-warning">
                              <PlayCircleIcon className="text-lg " />
                            </IconWrapper>
                          }
                        >
                          Actions
                        </ListboxItem>
                        <ListboxItem
                          key="projects"
                          endContent={<ItemCounter number={4} />}
                          startContent={
                            <IconWrapper className="bg-default/50 text-foreground">
                              <LayoutIcon className="text-lg " />
                            </IconWrapper>
                          }
                        >
                          Projects
                        </ListboxItem>
                        <ListboxItem
                          key="releases"
                          className="group h-auto py-3"
                          endContent={<ItemCounter number={399} />}
                          startContent={
                            <IconWrapper className="bg-primary/10 text-primary">
                              <TagIcon className="text-lg" />
                            </IconWrapper>
                          }
                          textValue="Releases"
                        >
                          <div className="flex flex-col gap-1">
                            <span>Releases</span>
                            <div className="px-2 py-1 rounded-small bg-default-100 group-data-[hover=true]:bg-default-200">
                              <span className="text-tiny text-default-600">
                                @nextui-org/react@2.0.10
                              </span>
                              <div className="flex gap-2 text-tiny">
                                <span className="text-default-500">
                                  49 minutes ago
                                </span>
                                <span className="text-success">Latest</span>
                              </div>
                            </div>
                          </div>
                        </ListboxItem>
                        <ListboxItem
                          key="contributors"
                          endContent={<ItemCounter number={79} />}
                          startContent={
                            <IconWrapper className="bg-warning/10 text-warning">
                              <UsersIcon />
                            </IconWrapper>
                          }
                        >
                          Contributors
                        </ListboxItem>
                        <ListboxItem
                          key="watchers"
                          endContent={<ItemCounter number={82} />}
                          startContent={
                            <IconWrapper className="bg-default/50 text-foreground">
                              <WatchersIcon />
                            </IconWrapper>
                          }
                        >
                          Watchers
                        </ListboxItem>
                        <ListboxItem
                          key="license"
                          endContent={
                            <span className="text-small text-default-400">
                              MIT
                            </span>
                          }
                          startContent={
                            <IconWrapper className="bg-danger/10 text-danger dark:text-danger-500">
                              <BookIcon />
                            </IconWrapper>
                          }
                        >
                          License
                        </ListboxItem>
                      </Listbox>
                    </Tab>
                  </Tabs>
                </CardBody>
              </Card>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive></NavbarItem>
        <NavbarItem></NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex"></NavbarItem>
        <NavbarItem>
          <Button isIconOnly  onClick={toggleDarkMode}>{darkModeName}</Button>
        </NavbarItem>
        <div className="hidden lg:flex">
          <Popover
      showArrow
      offset={10}
      placement="bottom"
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
           
            transition: {
              opacity: {
                duration: 0.15,
              },
            },
          },
          exit: {
            y: "10%",
            opacity: 0,
          
            transition: {
              opacity: {
                duration: 0.1,
              },
            },
          },
        },
      }}
    >
      <PopoverTrigger>
      <Button isIconOnly variant="light">
                <IconNotificationsOutline />
              </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">Notification</div>
          <div className="text-tiny">This is the popover content</div>
        </div>
      </PopoverContent>
    </Popover>

          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <Button isIconOnly  variant="light">
                <Icon093Drawer />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Multiple selection example"
              variant="flat"
              closeOnSelect={false}
              disallowEmptySelection
            >
              <DropdownItem key="new">
                <Card className=" w-auto h-auto">
                  <div className="w-80 p-4 bg-white dark:bg-black shadow-lg rounded-lg">
                    <div className="flex flex-col items-center">
                      <div className="rounded-full overflow-hidden w-24 h-24">
                        <Image
                          src="https://i.pinimg.com/736x/bf/eb/a8/bfeba832a872fef7b0426e3c314041d9.jpg" // Replace with your profile image path
                          alt="Profile Picture"
                          width={96}
                          height={96}
                        />
                      </div>
                      <h2 className="mt-4 text-xl font-semibold">
                        ANIMESH KUMAR
                      </h2>
                      <Button className="mt-2 px-4 py-2 text-black bg-gray-200 rounded-full">
                        View Profile
                      </Button>
                    </div>
                    <ScrollShadow
                      hideScrollBar
                      offset={100}
                      orientation="horizontal"
                      className="max-w-[400px] max-h-[300px]"
                    >
                      <Listbox
                        aria-label="User Menu"
                      
                        className=" mt-5 p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1  overflow-visible shadow-small rounded-medium"
                        itemClasses={{
                          base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
                        }}
                      >
                        <ListboxItem
                          key="discussions"
                          endContent={<ItemCounter number={293} />}
                          startContent={
                            <IconWrapper className="bg-secondary/10 text-secondary">
                              <ChatIcon className="text-lg " />
                            </IconWrapper>
                          }
                        >
                          Home
                        </ListboxItem>
                        <ListboxItem
                          key="contributors"
                          endContent={<ItemCounter number={79} />}
                          startContent={
                            <IconWrapper className="bg-warning/10 text-warning">
                              <UsersIcon />
                            </IconWrapper>
                          }
                        >
                          My Account
                        </ListboxItem>
                        <ListboxItem
                          key="releases"
                          className="group h-auto py-3"
                          endContent={<ItemCounter number={399} />}
                          startContent={
                            <IconWrapper className="bg-primary/10 text-primary">
                              <TagIcon className="text-lg" />
                            </IconWrapper>
                          }
                          textValue="Releases"
                        >
                          Favorites
                        </ListboxItem>
                        <ListboxItem
                          key="actions"
                          endContent={<ItemCounter number={2} />}
                          startContent={
                            <IconWrapper className="bg-warning/10 text-warning">
                              <PlayCircleIcon className="text-lg " />
                            </IconWrapper>
                          }
                        >
                          My Report
                        </ListboxItem>

                        <ListboxItem
                          key="watchers"
                          endContent={<ItemCounter number={82} />}
                          startContent={
                            <IconWrapper className="bg-default/50 text-foreground">
                              <WatchersIcon />
                            </IconWrapper>
                          }
                        >
                          Help
                        </ListboxItem>
                      </Listbox>
                    </ScrollShadow>
                  </div>
                </Card>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
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

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
