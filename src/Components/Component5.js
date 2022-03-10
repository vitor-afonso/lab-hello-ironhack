//jshint esversion:8
import icon4 from "../images/icon4.png";
const iconFour = <img src={icon4} alt="icon jsx" />;

export const Component5 = () => {
    return (
        <div>
          {iconFour}
          <h2>JSX</h2>
          <p>
            Statically-typed, <br />
            designed to run on <br />
            modern browsers
          </p>
        </div>
    )
}