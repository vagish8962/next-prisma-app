import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import Menu from "./Menu";
import UserMenu from "./UserMenu";

function Nav() {
  return (
    <div className="fixed w-full z-10 shadow-sm hap_light_blue">
      <div
        className="
          py-4 
          border-b-[1px]
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
