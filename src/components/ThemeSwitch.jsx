import styles from "./ThemeSwitch.module.scss";

const StarIcon = ({ size = "24px", fillColor = "#FFF", ...restProps }) => (
  <svg
    fill={fillColor}
    height={size}
    width={size}
    version="1.1"
    viewBox="0 0 150 150"
    {...restProps}
  >
    <g>
      <path d="M55.093,110.761l6.544,17.743c0.246,0.668,0.882,1.111,1.593,1.111c0.711,0,1.347-0.443,1.593-1.111l6.544-17.743   c5.297-14.364,16.62-25.687,30.983-30.983l17.743-6.544c0.667-0.246,1.11-0.882,1.11-1.593c0-0.711-0.443-1.347-1.11-1.593   l-17.744-6.544c-14.363-5.297-25.686-16.619-30.982-30.982l-6.544-17.743c-0.246-0.667-0.882-1.11-1.593-1.11   c-0.711,0-1.347,0.443-1.593,1.11l-6.544,17.743C49.796,46.885,38.474,58.207,24.11,63.504L6.366,70.048   c-0.667,0.246-1.11,0.882-1.11,1.593c0,0.711,0.443,1.347,1.11,1.593l17.743,6.544C38.473,85.074,49.796,96.396,55.093,110.761z" />
    </g>
  </svg>
);

const MoonInnerCircles = () => (
  <div className={styles.moonCirclesContainer}>
    <Circle
      size="5px"
      style={{
        backgroundColor: "#979db1",
        position: "absolute",
        top: "3px",
        left: "9px",
        boxShadow: "-0.2px 0.6px 0.4px 0px #7e7c7c inset",
      }}
    />
    <Circle
      size="7px"
      style={{
        backgroundColor: "#979db1",
        position: "absolute",
        top: "10px",
        left: "4px",
        boxShadow: "-0.2px 0.6px 0.4px 0px #7e7c7c inset",
      }}
    />
    <Circle
      size="5px"
      style={{
        backgroundColor: "#979db1",
        position: "absolute",
        top: "12px",
        right: "4px",
        boxShadow: "-0.2px 0.6px 0.4px 0px #7e7c7c inset",
      }}
    />
  </div>
);

const SwitchCircle = ({ checked }) => (
  <div
    className={`${styles.switchCircle} ${
      checked ? styles.toggled : styles.notToggled
    }`}
  >
    {checked && <MoonInnerCircles />}
  </div>
);

const Circle = ({ size = "24px", style = {} }) => {
  return (
    <div
      style={{
        borderRadius: "50%",
        position: "absolute",
        width: size,
        height: size,
        ...style,
      }}
    ></div>
  );
};

const Cloud = ({ checked = false, style = {}, cloudColor = "#FFF" }) => (
  <div className={`${styles.cloud} ${checked && styles.toggled}`} style={style}>
    <Circle
      style={{
        backgroundColor: cloudColor,
        right: "-8px",
        bottom: "-2px",
      }}
      size="24px"
    />
    <Circle
      style={{ backgroundColor: cloudColor, right: "0px", bottom: "-8px" }}
      size="24px"
    />
    <Circle
      style={{ backgroundColor: cloudColor, right: "14px", bottom: "-2px" }}
      size="16px"
    />
    <Circle
      style={{ backgroundColor: cloudColor, right: "20px", bottom: "-8px" }}
      size="16px"
    />
    <Circle
      style={{ backgroundColor: cloudColor, right: "30px", bottom: "-6px" }}
      size="16px"
    />
    <Circle
      style={{ backgroundColor: cloudColor, left: "0px", bottom: "-34px" }}
      size="42px"
    />
  </div>
);

const Stars = ({ checked = false }) => {
  return (
    <div className={`${styles.stars} ${checked && styles.toggled}`}>
      <StarIcon
        size="5px"
        style={{ position: "absolute", top: "6px", left: "36px" }}
      />
      <StarIcon
        size="2px"
        style={{ position: "absolute", top: "16px", left: "35px" }}
      />
      <StarIcon
        size="3px"
        style={{ position: "absolute", top: "20px", left: "30px" }}
      />
      <StarIcon
        size="2px"
        style={{ position: "absolute", top: "5px", left: "28px" }}
      />
      <StarIcon
        size="2px"
        style={{ position: "absolute", top: "12px", left: "24px" }}
      />
      <StarIcon
        size="5px"
        style={{ position: "absolute", top: "3px", left: "12px" }}
      />
      <StarIcon
        size="3px"
        style={{ position: "absolute", top: "12px", left: "13px" }}
      />
      <StarIcon
        size="2px"
        style={{ position: "absolute", top: "20px", left: "14px" }}
      />
      <StarIcon
        size="3px"
        style={{ position: "absolute", top: "8px", left: "6px" }}
      />
      <StarIcon
        size="2px"
        style={{ position: "absolute", top: "17px", left: "8px" }}
      />
    </div>
  );
};

const Shade = ({ checked = false }) => (
  <div className={`${styles.shade} ${checked && styles.toggled}`}>
    <Circle style={{ top: "-16px", left: "-6px" }} size="60px" />
    <Circle style={{ top: "-10px", left: "-4px" }} size="48px" />
    <Circle style={{ top: "-4px", left: "-2px" }} size="36px" />
  </div>
);

/**
 * # ThemeSwitch
 * checked = dark mode
 * ## Example:
 *
 * ```js
   import { useState } from "react";

   const Example = ()=>{
    const [checked, setChecked] = useState(false);
    return (
        <ThemeSwitch
          checked={checked}
          onClick={() => {
            setChecked(!checked);
          }}
        />
      )
   }
 * ```
 * @param {{
 * checked:boolean;
 * } & import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>} param0
 */
const ThemeSwitch = ({ checked = false, ...restProps }) => {
  return (
    <button
      className={`${styles.root} ${checked && styles.toggled}`}
      role="switch"
      aria-checked={checked ? "true" : "false"}
      title="theme switch"
      type="button"
      aria-label={checked ? "dark mode" : "light mode"}
      {...restProps}
    >
      <Shade checked={checked} />
      <Cloud
        checked={checked}
        style={{
          top: "-4px",
          left: "1px",
          opacity: "0.7",
        }}
        cloudColor="#bed3e6"
      />
      <Cloud checked={checked} style={{ top: "4px", right: "-3px" }} />
      <Stars checked={checked} />
      <SwitchCircle checked={checked} />
    </button>
  );
};

export default ThemeSwitch;
