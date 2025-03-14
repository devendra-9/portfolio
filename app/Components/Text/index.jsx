export default function Text({
  children,
  width,
  height,
  fontSize,
  color,
  fontFamily = "cursive",
  fontWeight = "600",
  display,
  justify,
  alignItem,
}) {
  const generate_height = (value) => {
    switch (value) {
      case "3":
        return "30px";
      case "3.5":
        return "35px";
      case "4":
        return "40px";
      case "10":
        return "100px";
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
    <h1
      style={{
        height: generate_height(height),
        width: generate_width(width),
        fontSize: fontSize,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        color: color,
        display: display,
        justifyContent: justify,
        alignItems: alignItem,
      }}
    >
      {children}
    </h1>
  );
}
