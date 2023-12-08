import Sidebar, { SidebarItem } from "./Sidebar";
import { Statistics, ID, message } from "../../imports";

export default function SidebarApp() {
  return (
    <main className="App">
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
          icon={<img src={ID} alt="Id" className="w-6 h-5 rounded-md" />}
          text="Option 3"
        />
        <SidebarItem
          icon={<img src={ID} alt="Id" className="w-6 h-5 rounded-md" />}
          text="Option 4"
        />
        <SidebarItem
          icon={<img src={ID} alt="Id" className="w-6 h-5 rounded-md" />}
          text="Option 5"
        />
        <SidebarItem
          icon={<img src={ID} alt="Id" className="w-6 h-5 rounded-md" />}
          text="Option 6"
        />
        <SidebarItem
          icon={
            <img src={message} alt="message" className="w-6 h-5 rounded-md" />
          }
          text="Option 7"
        />

        <hr />
      </Sidebar>
    </main>
  );
}
