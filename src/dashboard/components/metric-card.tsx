export const MetricCard = ({
  title,
  metric,
}: {
  title: string;
  metric: number | string;
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: 20,
        border: "1px solid #f9f9f9",
        padding: 20,
        minWidth: 100,
        minHeight: 100,
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3 style={{ fontSize: 14 }}>{title}</h3>
      <p style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>{metric}</p>
    </div>
  );
};
