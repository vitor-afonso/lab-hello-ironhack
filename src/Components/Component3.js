//jshint esversion:8
import icon2 from "../images/icon2.png";
const iconTwo = <img src={icon2} alt="icon components" />;

export const Component3 = () => {

    return (
        <div>
          {iconTwo}
          <h2>Components</h2>
          <p>
            Build encapsulated <br />
            components that <br />
            manage their state.
          </p>
        </div>
    )


}