import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import Menu from "./Menu";
import UserMenu from "./UserMenu";

function Nav() {
  return (
    <div className="w-full z-10 shadow-sm bg-light-blue text-black">
      <div
        className="
          py-4
        "
      >
        <Container>
          <div
            className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
          >
            <Logo />
            <Menu />
            <div className="flex">
              <Search />
              <UserMenu />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Nav;
