import { STORE_NAV_LINKS_HOVER, STORE_NAV_LINKS } from "./utils";

const StoreNavBar = () => {
  return (
    <div className="relative w-[940px] mx-auto">
      <div id="store-nav-bar" className="block">
        <div
          id="store-header"
          className="bg-transparent px-0 h-[66px] mb-[16px] min-w-[940px]"
        >
          <div id="header-content" className="relative w-[940px] mx-auto z-40">
            <div id="store-nav-area" className="h-[35px] my-8">
              <div
                id="store-nav-bg"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(62, 103, 150, 0.919) 11.38%, rgba(58, 120, 177, 0.8) 25.23%, rgb(15, 33, 110) 100%)",
                }}
                className="h-[35px] my-8"
              >
                {/* <div                  WISHLIST BTN MADE BUT MESSES UP NAV BAR, CSS GODS PLS HELP
                  id="wishlist-button"
                  className="store_header_btn_gray store_header_btn"
                >
                  <div className="store_header_btn_caps store_header_btn_leftcap"></div>
                  <div className="store_header_btn_caps store_header_btn_rightcap"></div>
                  <a
                    id="wishlist_link"
                    className="store_header_btn_content"
                    href="https://store.steampowered.com/wishlist/?snr=1_4_4__12"
                  >
                    Wishlist (<span id="wishlist_item_count_value">32</span>)
                  </a>
                </div> */}
                <div id="store-nav" className="flex h-[35px]">
                  {STORE_NAV_LINKS_HOVER.map((link, index) => (
                    <div
                      key={index}
                      className="p-[1px] inline-block cursor-pointer whitespace-nowrap text-[#e5e5e5] text-[13px] leading-8 font-bold pr-[10px] pl-[15px]"
                      style={{ textShadow: "0px 2px 3px rgba(0, 0, 0, 0.3)" }}
                    >
                      {link}
                    </div>
                  ))}
                  {STORE_NAV_LINKS.map((link, index) => (
                    <a
                      href="/"
                      key={index}
                      className="p-[1px] inline-block cur whitespace-nowrap text-[#e5e5e5] text-[13px] leading-8 font-bold pr-[10px] pl-[15px]"
                      style={{ textShadow: "0px 2px 3px rgba(0, 0, 0, 0.3)" }}
                    >
                      {link}
                    </a>
                  ))}
                  <div
                    id="search-flex-spacer"
                    className="flex-1 w-[20px]"
                  ></div>
                  <div
                    id="search-area"
                    className="flex-grow flex-shrink-0 max-w-[210px]"
                  >
                    <div
                      id="store-search"
                      className="float-none px-1 pt=[3px] pb-[2px] h-[30px]"
                    >
                      <form action="/" id="search-form" className="block">
                        <input
                          type="text"
                          placeholder="search"
                          maxLength={64}
                          name="term"
                          style={{
                            textShadow: "1px 1px 0px rgba( 255, 255, 255, 0.1)",
                          }}
                          onMouseOver={(e) => {
                            e.target.style.border = "1px solid teal";
                          }}
                          onMouseOut={(e) => {
                            e.target.style.border = "none";
                          }}
                          className="mt-[5px] inline-block bg-[#305d8a] text-white px-2 focus:outline-none rounded-sm placeholder:text-black placeholder:text-opacity-70 italic py-[1px] font-light"
                        />
                        <a href="#" className="absolute right-[2px] text-white">
                          <img
                            src="https://store.cloudflare.steamstatic.com/public/images/v6/search_icon_btn.png"
                            className="w-[25px] h-[25px] relative top-[5px] right-[1px]"
                          />
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreNavBar;
