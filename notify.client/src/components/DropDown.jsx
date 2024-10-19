"use client";
import { Button,DropdownMenu } from '@radix-ui/themes';
import Link from 'next/link'; // Import Link from next/link

// DropdownMenuItem component to handle individual items
const DropdownMenuItem = ({ item }) => {
  if (item.type === 'separator') {
    return <DropdownMenu.Separator />;
  }

  if (item.subItems) {
    return (
      <DropdownMenu.Sub>
        <DropdownMenu.SubTrigger>{item.label}</DropdownMenu.SubTrigger>
        <DropdownMenu.SubContent>
          {item.subItems.map((subItem, index) => (
            <DropdownMenuItem key={index} item={subItem} />
          ))}
        </DropdownMenu.SubContent>
      </DropdownMenu.Sub>
    );
  }

  return (
    <DropdownMenu.Item shortcut={item.shortcut} color={item.color || 'default'}>
      <Link href={item.url || '#'}>{item.label}</Link> 
    </DropdownMenu.Item>
  );
};

export default function CustomDropDown({ menuItems,btnClass }) {
  return (
    <DropdownMenu.Root >
      <DropdownMenu.Trigger>
        <Button variant="soft" className={btnClass || ''}>
          Options
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {menuItems.map((item, index) => (
          <DropdownMenuItem key={index} item={item} />
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
