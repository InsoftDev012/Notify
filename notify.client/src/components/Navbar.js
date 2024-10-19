"use client";
import { TabNav } from '@radix-ui/themes';
import CustomDropDown from "@/components/DropDown";
import dropdownItems from "@/data/UrlDropDown";
export default function Navbar() {
    return (
        <TabNav.Root>
            <TabNav.Link href="#" active>
                Account
            </TabNav.Link>
            <TabNav.Link ><CustomDropDown menuItems={dropdownItems} btnClass={'btnDropdown'}></CustomDropDown></TabNav.Link>
            <TabNav.Link href="#">Settings</TabNav.Link>
        </TabNav.Root>

    );
}