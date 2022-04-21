import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { Outlet } from "react-router-dom";

export default function AdminNavbar({ showSidebar, setShowSidebar }) {
  return (
    <nav className="bg-white md:ml-64 py-6 px-3">
      <div className="container max-w-full mx-auto flex items-start justify-start md:pr-8 md:pl-10">
        <div className="md:hidden">
          <Button
            color="transparent"
            buttonType="link"
            size="lg"
            iconOnly
            rounded
            ripple="light"
            onClick={() => setShowSidebar("left-0")}
          >
            <Icon name="menu" size="2xl" color="black" />
          </Button>
          <div
            className={`absolute top-2 md:hidden ${
              showSidebar === "left-0" ? "left-64" : "-left-64"
            } z-50 transition-all duration-300`}
          >
            <Button
              color="transparent"
              buttonType="link"
              size="lg"
              iconOnly
              rounded
              ripple="light"
              onClick={() => setShowSidebar("-left-64")}
            >
              <Icon name="close" size="2xl" color="black" />
            </Button>
          </div>
        </div>

        <Outlet />
      </div>
    </nav>
  );
}
