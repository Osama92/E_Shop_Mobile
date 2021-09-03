import "./styles.css";
import "boxicons";

export default function MobileLayout() {
  return (
    <div className="MobileLayout">
      <div className="safeArea"></div>
      <div className="Header">
        <div className="title_section">
          <div className="search">
            <box-icon name="search" size="sm"></box-icon>
          </div>
          <div className="shop_name">
            <p>Make Shopping</p>
            <p className="bold">SIMPLE</p>
          </div>
          <div className="cart">
            <box-icon name="cart-alt" size="sm"></box-icon>
          </div>
        </div>
      </div>
    </div>
  );
}
