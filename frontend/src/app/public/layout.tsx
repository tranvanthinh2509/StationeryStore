const LayoutPublic = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <h1>Header</h1>
      <div>{children}</div>
      <h1>Footer</h1>
    </div>
  );
};

export default LayoutPublic;
