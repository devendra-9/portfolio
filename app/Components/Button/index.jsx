export default function ButtonV1({
  color = "#FEE715",
  backgroundcolor = "black",
  radius,
  width,
  height,
  padding,
  fontSize,
  fontFamily = "cursive",
  fontWeight = "600",
  display,
  justify,
  alignItem,
  border,
  cursor = "default",
  children,
}) {
  const generate_radius = (value) => {
    switch (value) {
      case "3":
        return "10px";
      case "3.5":
        return "15px";
      case "4":
        return "20px";
      default:
        return null;
    }
  };
  const generate_height = (value) => {
    switch (value) {
      case "3":
        return "30px";
      case "3.5":
        return "35px";
      case "4":
        return "40px";
      default:
        return null;
    }
  };
  const generate_width = (value) => {
    switch (value) {
      case "3":
        return "80px";
      case "3.5":
        return "90px";
      case "4":
        return "100px";
      default:
        return null;
    }
  };
  return (
    <button
      style={{
        color: color,
        backgroundColor: backgroundcolor,
        height: generate_height(height),
        width: generate_width(width),
        borderRadius: generate_radius(radius),
        padding: padding,
        fontSize: fontSize,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        display: display,
        justifyContent: justify,
        alignItems: alignItem,
        border: border,
        cursor: cursor,
      }}
    >
      {children}
    </button>
  );
}
