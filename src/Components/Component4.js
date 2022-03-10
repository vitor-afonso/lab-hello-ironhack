//jshint esversion:8
import icon3 from "../images/icon3.png";
const iconThree = <img src={icon3} alt="icon single-way" />;

export const Component4 = () => {
    return (
        <div>
          {iconThree}
          <h2>Single-Way</h2>
          <p>
            A set of immutable <br />
            values are passed to <br />
            the component's.
          </p>
        </div>
    )
}