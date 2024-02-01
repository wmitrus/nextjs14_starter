import { ChartBarIcon, TableCellsIcon } from "@heroicons/react/24/outline";

import Sidebar from "@/components/Sidebar/Sidebar";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import NavbarComponent from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen md:flex-row">
      <div className=" flex h-screen">
        <Sidebar>
          <SidebarItem icon={<TableCellsIcon />} active>
            Dashboard
          </SidebarItem>
          <SidebarItem icon={<ChartBarIcon />} alert>
            Statistics
          </SidebarItem>
        </Sidebar>
        <div className="flex-1 overflow-y-auto">
          <header className="z-999 drop-shadow-1 dark:bg-boxdark sticky top-0 flex w-full bg-white dark:drop-shadow-none">
            <NavbarComponent />
          </header>
          {/* <div className="flex flex-1"> */}
          <main className="flex flex-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fuga voluptate neque fugit autem assumenda veniam modi nihil illo
            fugiat. In, a neque at quam tenetur officiis. Quam, impedit ipsam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fuga voluptate neque fugit autem assumenda veniam modi nihil illo
            fugiat. In, a neque at quam tenetur officiis. Quam, impedit ipsam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fuga voluptate neque fugit autem assumenda veniam modi nihil illo
            fugiat. In, a neque at quam tenetur officiis. Quam, impedit ipsam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fuga voluptate neque fugit autem assumenda veniam modi nihil illo
            fugiat. In, a neque at quam tenetur officiis. Quam, impedit ipsam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fuga voluptate neque fugit autem assumenda veniam modi nihil illo
            fugiat. In, a neque at quam tenetur officiis. Quam, impedit ipsam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fuga voluptate neque fugit autem assumenda veniam modi nihil illo
            fugiat. In, a neque at quam tenetur officiis. Quam, impedit ipsam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fuga voluptate neque fugit autem assumenda veniam modi nihil illo
            fugiat. In, a neque at quam tenetur officiis. Quam, impedit ipsam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fuga voluptate neque fugit autem assumenda veniam modi nihil illo
            fugiat. In, a neque at quam tenetur officiis. Quam, impedit ipsam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fuga voluptate neque fugit autem assumenda veniam modi nihil illo
            fugiat. In, a neque at quam tenetur officiis. Quam, impedit ipsam.
          </main>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
