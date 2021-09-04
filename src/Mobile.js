import "./styles.css";

export default function MobileLayout() {
  return (
    <div className="MobileLayout">
      <div className="safeArea"></div>
      <div className="Header">
        <div className="title_section">
          <div className="search">
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
              className="i8_size1"
            />
          </div>
          <div className="shop_name">
            <p>Make home</p>
            <p className="bold">BEAUTIFUL</p>
          </div>
          <div className="cart">
            <img
              src="https://img.icons8.com/material-outlined/48/000000/shopping-cart--v1.png"
              className="i8_size1"
            />
          </div>
        </div>
        <div className="head_menu">
          <div className="menu_logo">
            <div className="logo_holder">
              <img
                src="https://img.icons8.com/ios/50/000000/star.png"
                className="i8_size"
              />
            </div>

            <p className="logo_text">Popular</p>
          </div>
          <div className="menu_logo">
            <div className="logo_holder">
              <img
                src="https://img.icons8.com/ios/50/000000/chair.png"
                className="i8_size"
              />
            </div>
            <p className="logo_text">Chairs</p>
          </div>
          <div className="menu_logo">
            <div className="logo_holder">
              <img
                src="https://img.icons8.com/ios/50/000000/three-seater-sofa.png"
                className="i8_size"
              />
            </div>
            <p className="logo_text">Sofa</p>
          </div>
          <div className="menu_logo">
            <div className="logo_holder">
              <img
                src="https://img.icons8.com/ios/50/000000/table.png"
                className="i8_size"
              />
            </div>
            <p className="logo_text">Table</p>
          </div>
          <div className="menu_logo">
            <div className="logo_holder">
              <img
                src="https://img.icons8.com/ios/50/000000/bureau.png"
                className="i8_size"
              />
            </div>

            <p className="logo_text">Cupboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}
