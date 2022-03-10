//jshint esversion:8
import icon1 from "../images/icon1.png";
const iconOne = <img src={icon1} alt="icon declarative" />;

export const Component2 = () => {

    return (
        <div>
            {iconOne}
            <h2>Declarative</h2>
            <p>
            React makes it <br />
            painless to create <br />
            interactive Uls.
            </p>
        </div>
    )


}


