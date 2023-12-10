import Sidebar, { SidebarItem } from "./Sidebar";
import { Statistics, ID, message, folder, checklist } from "../../imports";

export default function SidebarApp() {
  return (
    <Sidebar>
      <SidebarItem
        icon={
          <img
            src={Statistics}
            alt="Statistics"
            className="w-6 h-5 rounded-md"
          />
        }
        text="Option 1"
        active
      />
      <SidebarItem
        icon={<img src={ID} alt="Id" className="w-6 h-5 rounded-md" />}
        text="Option 2"
      />
      <SidebarItem
        icon={<img src={ID} alt="Id" className="w-100% h-5 rounded-md" />}
        text="Option 3"
      />
      <SidebarItem
        icon={<img src={ID} alt="Id" className="w-100% h-5 rounded-md" />}
        text="Option 4"
      />
      <SidebarItem
        icon={<img src={ID} alt="Id" className="w-100% h-5 rounded-md" />}
        text="Option 5"
      />
      <SidebarItem
        icon={
          <img src={message} alt="message" className="w-100% h-5 rounded-md" />
        }
        text="Option 7"
      />
      <SidebarItem
        icon={
          <img
            src={folder}
            alt="message"
            className="w-100% h-5 rounded-md opacity-40"
          />
        }
        text="Option 8"
      />
      <SidebarItem
        className="h-auto"
        icon={
          <img
            src={folder}
            alt="message"
            className="w-100%  opacity-40 h-5 rounded-md"
          />
        }
        text="Option 9"
      />
      <SidebarItem
        className="h-auto"
        icon={
          <img
            src={checklist}
            alt="message"
            className="w-100% h-5 rounded-md opacity-40"
          />
        }
        text="Option 10"
      />

      <hr />
    </Sidebar>
  );
}
