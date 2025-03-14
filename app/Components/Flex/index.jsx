export default function Flex({
  children,
  width,
  display,
  backgroundColor,
  height,
  fontsize,
  justify,
  alignItem,
  borderBottom,
  padding,
  margin,
  gap,
}) {
  const handle_width = (value) => {
    switch (value) {
      case "8":
        return "80%";
      case "9":
        return "90%";
      case "10":
        return "100%";
      default:
        return "100%";
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
      case "10":
        return "100px";
      default:
        return null;
    }
  };
  return (
    <div
      style={{
        fontSize: fontsize,
        display: display,
        width: handle_width(width),
        backgroundColor: backgroundColor,
        height: generate_height(height),
        borderBottom: borderBottom,
        justifyContent: justify,
        alignItems: alignItem,
        padding: padding,
        margin: margin,
        gap: gap,
      }}
    >
      {children}
    </div>
  );
}
